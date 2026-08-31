// Browser-Bundle für den Live-Klasse-Prototyp.
// Teams JS bleibt absichtlich außerhalb dieses Bundles und wird auf der HTML-Seite
// über die offizielle Microsoft-CDN-Datei geladen. So existiert nur eine
// Teams-SDK-Instanz im Tab.
export { LiveShareClient, LivePresence } from '@microsoft/live-share';
export { SharedMap } from 'fluid-framework';
