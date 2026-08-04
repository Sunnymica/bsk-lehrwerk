(() => {
  'use strict';

  const STORAGE_KEY = 'bsk-lehrkraft-hausaufgaben-editor-v1';
  const publishedItems = normaliseItems(window.BSK_HOMEWORK);
  const state = {
    items: loadLocalItems() ?? structuredCopy(publishedItems),
    modules: []
  };

  const form = document.querySelector('#hausaufgaben-formular');
  const titleInput = document.querySelector('#titel');
  const dueInput = document.querySelector('#faellig');
  const descriptionInput = document.querySelector('#beschreibung');
  const editIdInput = document.querySelector('#bearbeitungs-id');
  const tasksList = document.querySelector('#aufgaben-liste');
  const linksList = document.querySelector('#links-liste');
  const preview = document.querySelector('#vorschau');
  const itemList = document.querySelector('#hausaufgaben-liste');
  const count = document.querySelector('#hausaufgaben-zaehler');
  const status = document.querySelector('#speicherstatus');
  const formHeading = document.querySelector('#formular-titel');
  const submitButton = document.querySelector('#speichern');

  initialise();

  async function initialise() {
    bindEvents();
    await loadModules();
    ensureStarterRows();
    renderAll();
    setStatus(loadLocalItems() ? 'Lokaler Arbeitsstand geladen' : 'Veröffentlichte Fassung geladen', 'good');
  }

  function bindEvents() {
    document.querySelector('#aufgabe-hinzufuegen').addEventListener('click', () => {
      addTaskRow('');
      renderPreview();
    });
    document.querySelector('#link-hinzufuegen').addEventListener('click', () => {
      addLinkRow({ label: 'Zum Modul', href: '' });
      renderPreview();
    });
    document.querySelector('#formular-leeren').addEventListener('click', () => resetForm(true));
    document.querySelector('#datei-herunterladen').addEventListener('click', downloadFile);
    document.querySelector('#veroeffentlicht-laden').addEventListener('click', reloadPublished);
    form.addEventListener('submit', saveForm);
    form.addEventListener('input', renderPreview);
    form.addEventListener('change', event => {
      if (event.target.matches('.modul-auswahl')) applyModuleChoice(event.target);
      renderPreview();
    });
  }

  async function loadModules() {
    try {
      const response = await fetch('../inhalt.json', { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      state.modules = flattenAvailableModules(data);
      refreshModuleSelects();
    } catch (error) {
      state.modules = [];
      setStatus('Modulliste nicht geladen, eigene Links funktionieren trotzdem', 'error');
      console.warn('Modulliste konnte nicht geladen werden:', error);
    }
  }

  function flattenAvailableModules(data) {
    const result = [];
    for (const area of data?.bereiche || []) {
      for (const group of area?.gruppen || []) {
        for (const module of group?.module || []) {
          if (module?.status !== 'fertig' || !module?.pfad) continue;
          result.push({
            title: module.titel || module.pfad,
            href: `${area.id}/${module.pfad}`,
            group: `${area.label || area.id} · ${group.titel || ''}`.replace(/ · $/, '')
          });
        }
      }
    }
    return result;
  }

  function ensureStarterRows() {
    if (!tasksList.children.length) addTaskRow('');
  }

  function addTaskRow(value = '') {
    const fragment = document.querySelector('#aufgabe-vorlage').content.cloneNode(true);
    const row = fragment.querySelector('.listen-zeile');
    const input = row.querySelector('input');
    input.value = value;
    bindRowButtons(row, tasksList);
    tasksList.append(row);
    updateRowButtons(tasksList);
    input.focus({ preventScroll: true });
  }

  function addLinkRow(link = { label: '', href: '' }) {
    const fragment = document.querySelector('#link-vorlage').content.cloneNode(true);
    const row = fragment.querySelector('.listen-zeile');
    row.querySelector('.link-label').value = link.label || '';
    row.querySelector('.link-href').value = link.href || '';
    populateModuleSelect(row.querySelector('.modul-auswahl'), link.href || '');
    bindRowButtons(row, linksList);
    linksList.append(row);
    updateRowButtons(linksList);
    row.querySelector('.link-label').focus({ preventScroll: true });
  }

  function bindRowButtons(row, container) {
    row.querySelector('.hoch').addEventListener('click', () => {
      const previous = row.previousElementSibling;
      if (previous) container.insertBefore(row, previous);
      updateRowButtons(container);
      renderPreview();
    });
    row.querySelector('.runter').addEventListener('click', () => {
      const next = row.nextElementSibling;
      if (next) container.insertBefore(next, row);
      updateRowButtons(container);
      renderPreview();
    });
    row.querySelector('.loeschen').addEventListener('click', () => {
      row.remove();
      updateRowButtons(container);
      if (container === tasksList && !tasksList.children.length) addTaskRow('');
      renderPreview();
    });
  }

  function updateRowButtons(container) {
    [...container.children].forEach((row, index, rows) => {
      row.querySelector('.hoch').disabled = index === 0;
      row.querySelector('.runter').disabled = index === rows.length - 1;
    });
  }

  function refreshModuleSelects() {
    document.querySelectorAll('.modul-auswahl').forEach(select => {
      const href = select.closest('.link-zeile')?.querySelector('.link-href')?.value || '';
      populateModuleSelect(select, href);
    });
  }

  function populateModuleSelect(select, selectedHref = '') {
    const byGroup = new Map();
    for (const module of state.modules) {
      if (!byGroup.has(module.group)) byGroup.set(module.group, []);
      byGroup.get(module.group).push(module);
    }
    select.innerHTML = '<option value="">Kein Modul ausgewählt</option>';
    for (const [group, modules] of byGroup) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = group;
      for (const module of modules) {
        const option = document.createElement('option');
        option.value = module.href;
        option.textContent = module.title;
        option.dataset.title = module.title;
        optgroup.append(option);
      }
      select.append(optgroup);
    }
    if (state.modules.some(module => module.href === selectedHref)) select.value = selectedHref;
  }

  function applyModuleChoice(select) {
    if (!select.value) return;
    const row = select.closest('.link-zeile');
    const option = select.selectedOptions[0];
    const label = row.querySelector('.link-label');
    const href = row.querySelector('.link-href');
    href.value = select.value;
    if (!label.value.trim() || label.value.trim() === 'Zum Modul') {
      label.value = `Zu „${option.dataset.title || option.textContent}“`;
    }
  }

  function readForm() {
    const tasks = [...tasksList.querySelectorAll('input')]
      .map(input => input.value.trim())
      .filter(Boolean);
    const links = [...linksList.querySelectorAll('.link-zeile')]
      .map(row => ({
        label: row.querySelector('.link-label').value.trim(),
        href: row.querySelector('.link-href').value.trim()
      }))
      .filter(link => link.label || link.href)
      .map(link => ({
        label: link.label || 'Öffnen',
        href: link.href
      }));
    return {
      id: editIdInput.value || '',
      titel: titleInput.value.trim(),
      beschreibung: descriptionInput.value.trim(),
      faellig: dueInput.value,
      aufgaben: tasks,
      links
    };
  }

  function saveForm(event) {
    event.preventDefault();
    titleInput.removeAttribute('aria-invalid');
    const item = readForm();
    if (!item.titel) {
      titleInput.setAttribute('aria-invalid', 'true');
      titleInput.focus();
      setStatus('Bitte einen Titel eintragen', 'error');
      return;
    }
    if (!item.aufgaben.length) {
      tasksList.querySelector('input')?.focus();
      setStatus('Bitte mindestens einen Arbeitsschritt eintragen', 'error');
      return;
    }
    if (item.links.some(link => !link.href)) {
      const emptyLink = [...linksList.querySelectorAll('.link-zeile')].find(row => !row.querySelector('.link-href').value.trim());
      emptyLink?.querySelector('.link-href').focus();
      setStatus('Bitte bei jedem Link eine Adresse eintragen oder die Zeile löschen', 'error');
      return;
    }

    const existingIndex = state.items.findIndex(entry => entry.id === item.id);
    if (!item.id) item.id = uniqueId(item.titel, item.faellig);
    if (existingIndex >= 0) state.items[existingIndex] = item;
    else state.items.unshift(item);
    persist();
    renderAll();
    resetForm(false);
    setStatus(existingIndex >= 0 ? 'Änderungen gespeichert' : 'Hausaufgabe hinzugefügt', 'good');
  }

  function renderAll() {
    renderPreview();
    renderItemList();
  }

  function renderPreview() {
    const item = readForm();
    if (!item.titel && !item.beschreibung && !item.aufgaben.length && !item.links.length) {
      preview.innerHTML = '<p class="vorschau-leer">Sobald Sie links etwas eintragen, erscheint hier die Vorschau.</p>';
      return;
    }
    preview.innerHTML = `
      <article class="vorschau-card">
        <div class="vorschau-head">
          <div>
            <span class="vorschau-kicker">${item.faellig ? `Fällig am ${escapeHtml(formatDate(item.faellig))}` : 'Aktuelle Hausaufgabe'}</span>
            <h3>${escapeHtml(item.titel || 'Titel der Hausaufgabe')}</h3>
          </div>
          <span class="vorschau-stand">0/${item.aufgaben.length}</span>
        </div>
        ${item.beschreibung ? `<p class="vorschau-beschreibung">${escapeHtml(item.beschreibung)}</p>` : ''}
        <div class="vorschau-aufgaben">
          ${item.aufgaben.map(task => `<div class="vorschau-aufgabe"><span class="vorschau-box"></span><span>${escapeHtml(task)}</span></div>`).join('')}
        </div>
        ${item.links.length ? `<div class="vorschau-links">${item.links.map(link => `<span class="vorschau-link">${escapeHtml(link.label || 'Öffnen')}</span>`).join('')}</div>` : ''}
      </article>`;
  }

  function renderItemList() {
    count.textContent = String(state.items.length);
    if (!state.items.length) {
      itemList.innerHTML = '<p class="verwaltung-leer">Noch keine Hausaufgabe in der Arbeitsfassung.</p>';
      return;
    }
    itemList.innerHTML = state.items.map((item, index) => `
      <article class="verwaltung-eintrag">
        <h3>${escapeHtml(item.titel)}</h3>
        <p class="verwaltung-meta">${item.faellig ? `Fällig ${escapeHtml(formatDate(item.faellig))} · ` : ''}${item.aufgaben.length} ${item.aufgaben.length === 1 ? 'Schritt' : 'Schritte'}</p>
        <div class="verwaltung-aktionen">
          <button class="text-knopf" type="button" data-action="edit" data-index="${index}">Bearbeiten</button>
          <button class="text-knopf" type="button" data-action="duplicate" data-index="${index}">Duplizieren</button>
          <button class="text-knopf" type="button" data-action="up" data-index="${index}" ${index === 0 ? 'disabled' : ''}>Nach oben</button>
          <button class="text-knopf" type="button" data-action="down" data-index="${index}" ${index === state.items.length - 1 ? 'disabled' : ''}>Nach unten</button>
          <button class="text-knopf gefahr" type="button" data-action="delete" data-index="${index}">Löschen</button>
        </div>
      </article>`).join('');

    itemList.querySelectorAll('[data-action]').forEach(button => {
      button.addEventListener('click', () => handleItemAction(button.dataset.action, Number(button.dataset.index)));
    });
  }

  function handleItemAction(action, index) {
    const item = state.items[index];
    if (!item) return;
    if (action === 'edit') {
      fillForm(item);
      document.querySelector('.formular-karte').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    if (action === 'duplicate') {
      const copy = structuredCopy(item);
      copy.id = uniqueId(`${item.titel}-kopie`, item.faellig);
      copy.titel = `${item.titel} (Kopie)`;
      state.items.splice(index + 1, 0, copy);
      persist();
      renderAll();
      setStatus('Hausaufgabe dupliziert', 'good');
      return;
    }
    if (action === 'delete') {
      if (!window.confirm(`„${item.titel}“ wirklich löschen?`)) return;
      state.items.splice(index, 1);
      persist();
      renderAll();
      if (editIdInput.value === item.id) resetForm(false);
      setStatus('Hausaufgabe gelöscht', 'good');
      return;
    }
    if (action === 'up' && index > 0) {
      [state.items[index - 1], state.items[index]] = [state.items[index], state.items[index - 1]];
    }
    if (action === 'down' && index < state.items.length - 1) {
      [state.items[index + 1], state.items[index]] = [state.items[index], state.items[index + 1]];
    }
    persist();
    renderAll();
  }

  function fillForm(item) {
    editIdInput.value = item.id;
    titleInput.value = item.titel || '';
    dueInput.value = item.faellig || '';
    descriptionInput.value = item.beschreibung || '';
    tasksList.innerHTML = '';
    linksList.innerHTML = '';
    (item.aufgaben || []).forEach(addTaskRow);
    (item.links || []).forEach(addLinkRow);
    ensureStarterRows();
    formHeading.textContent = 'Hausaufgabe bearbeiten';
    submitButton.textContent = 'Änderungen speichern';
    renderPreview();
    titleInput.focus({ preventScroll: true });
  }

  function resetForm(announce = true) {
    form.reset();
    editIdInput.value = '';
    titleInput.removeAttribute('aria-invalid');
    tasksList.innerHTML = '';
    linksList.innerHTML = '';
    addTaskRow('');
    formHeading.textContent = 'Hausaufgabe anlegen';
    submitButton.textContent = 'Hausaufgabe übernehmen';
    renderPreview();
    if (announce) setStatus('Formular geleert', 'good');
  }

  function reloadPublished() {
    if (!window.confirm('Die lokale Arbeitsfassung verwerfen und die aktuell veröffentlichte Datei neu laden?')) return;
    state.items = structuredCopy(publishedItems);
    localStorage.removeItem(STORAGE_KEY);
    persist();
    resetForm(false);
    renderAll();
    setStatus('Veröffentlichte Fassung neu geladen', 'good');
  }

  function downloadFile() {
    const cleanItems = normaliseItems(state.items);
    const content = `/* Mit dem Hausaufgaben-Editor erzeugt. */\nwindow.BSK_HOMEWORK = ${JSON.stringify(cleanItems, null, 2)};\n`;
    const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'homework.js';
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setStatus('homework.js heruntergeladen', 'good');
  }

  function persist() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }

  function loadLocalItems() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return normaliseItems(parsed);
    } catch (error) {
      console.warn('Lokaler Arbeitsstand konnte nicht geladen werden:', error);
      return null;
    }
  }

  function normaliseItems(items) {
    if (!Array.isArray(items)) return [];
    return items.map((item, index) => ({
      id: String(item?.id || `hausaufgabe-${index + 1}`),
      titel: String(item?.titel || 'Hausaufgabe'),
      beschreibung: String(item?.beschreibung || ''),
      faellig: String(item?.faellig || ''),
      aufgaben: Array.isArray(item?.aufgaben) ? item.aufgaben.map(String).filter(Boolean) : [],
      links: Array.isArray(item?.links)
        ? item.links.map(link => ({ label: String(link?.label || 'Öffnen'), href: String(link?.href || '') })).filter(link => link.href)
        : []
    }));
  }

  function uniqueId(title, due) {
    const base = slugify(`${title}-${due || new Date().toISOString().slice(0, 10)}`) || 'hausaufgabe';
    let candidate = base;
    let suffix = 2;
    while (state.items.some(item => item.id === candidate)) candidate = `${base}-${suffix++}`;
    return candidate;
  }

  function slugify(value) {
    return String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ß/g, 'ss')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function formatDate(value) {
    const date = new Date(`${value}T12:00:00`);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
  }

  function setStatus(message, type = '') {
    status.textContent = message;
    status.classList.toggle('ist-fehler', type === 'error');
    status.classList.toggle('ist-gut', type === 'good');
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function structuredCopy(value) {
    return JSON.parse(JSON.stringify(value));
  }
})();
