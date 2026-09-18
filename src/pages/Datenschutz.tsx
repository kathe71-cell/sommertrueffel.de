import React from 'react';
import { ArrowLeft, Shield, Lock, Server, FileText, BarChart3, Megaphone } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface DatenschutzProps {
  onBack: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
  useDocumentMeta({
    title: 'Datenschutzerklärung | sommertrueffel.de',
    description: 'Datenschutzerklärung für sommertrueffel.de: Informationen zu Datenerhebung, Hosting bei Vercel, Vercel Analytics, Werbepartnern und dem Amazon Partnerprogramm.',
    canonicalPath: '/datenschutz',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startseite',
          item: 'https://www.sommertrueffel.de/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Datenschutzerklärung',
          item: 'https://www.sommertrueffel.de/datenschutz'
        }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-[#faf9f6] py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs transition-all mb-8 hover:border-amber-400 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </button>

        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100 mb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 border border-amber-200">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Transparenz &amp; Informationspflichten (DSGVO)
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Datenschutzerklärung
              </h1>
            </div>
          </div>

          <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
            
            {/* 1. Verantwortliche Stelle */}
            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. Verantwortliche Stelle</h2>
              <p className="text-slate-700">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mt-2 text-xs space-y-1">
                <p className="font-bold text-slate-900">Jens Kathe</p>
                <p>Hansastraße 6</p>
                <p>34119 Kassel, Deutschland</p>
                <p>Telefon: +49 178 6652623</p>
                <p>E-Mail: <a href="mailto:jens@kathe.org" className="text-amber-800 underline">jens@kathe.org</a></p>
              </div>
            </section>

            {/* 2. Hosting durch Vercel */}
            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-slate-600" />
                2. Hosting über Vercel Inc.
              </h2>
              <p className="mb-2">
                Diese Website wird über die Cloud-Plattform des Anbieters <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA (im Folgenden „Vercel“) gehostet.
              </p>
              <p className="mb-2">
                Beim Aufruf unserer Seiten erfasst Vercel automatisiert Server-Logdaten, um die sichere Bereitstellung, Lastverteilung und den Schutz vor DDoS-Angriffen zu gewährleisten. Hierzu zählen:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600 text-xs">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem und Gerätetyp</li>
                <li>Referrer URL (die zuvor besuchte Webseite)</li>
                <li>IP-Adresse des zugreifenden Geräts (anonymisiert/gekürzt)</li>
                <li>Datum und Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der schnellen, stabilen und sicheren Auslieferung unseres Online-Angebots). Die Datenübertragung in die USA wird durch Standardvertragsklauseln (SCCs) der EU-Kommission sowie die Zertifizierung von Vercel unter dem EU-U.S. Data Privacy Framework abgesichert.
              </p>
            </section>

            {/* 3. Analyse & Performance (Vercel Web Analytics & Speed Insights) */}
            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-slate-600" />
                3. Vercel Web Analytics &amp; Speed Insights
              </h2>
              <p className="mb-2">
                Wir nutzen zur technischen Optimierung und Messung der Ladezeiten die Dienste <strong>Vercel Web Analytics</strong> und <strong>Vercel Speed Insights</strong> von Vercel Inc.
              </p>
              <p className="mb-2">
                Diese Werkzeuge erfassen aggregierte Nutzungs- und Performance-Metriken (wie Ladezeiten von Skripten, First Contentful Paint, Interaktionsverzögerungen). Die Dienste arbeiten <strong>ohne das Setzen von Tracking-Cookies</strong> auf Ihrem Endgerät und ohne Erstellung dauerhafter individueller Nutzerprofile. Aus der IP-Adresse, dem User-Agent und dem Domainnamen wird serverseitig ein kurzlebiger Hash generiert, der nach kurzer Zeit verfällt.
              </p>
              <p className="text-xs text-slate-500">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Fehlerüberwachung, Barrierefreiheit und kontinuierlichen Leistungsoptimierung unserer Website).
              </p>
            </section>

            {/* 4. Werbepartner & Google AdSense */}
            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-slate-600" />
                4. Werbepartner &amp; Google AdSense
              </h2>
              <p className="mb-2">
                Auf sommertrueffel.de können über den Dienst <strong>Google AdSense</strong> der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Werbeanzeigen eingebunden werden.
              </p>
              <p className="mb-2">
                Google AdSense verwendet Technologien wie Cookies oder Web Beacons (unsichtbare Grafiken), um die Ausspielung, Relevanz und Vergütung von Werbeanzeigen zu steuern. Sofern Werbeanzeigen ausgespielt werden, können Daten über die Nutzung dieser Website (einschließlich Ihrer IP-Adresse) an Server von Google übertragen und dort verarbeitet werden.
              </p>
              <p className="text-xs text-slate-500">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen zur Datennutzung durch Google finden Sie unter:{' '}
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 underline hover:text-amber-900"
                >
                  https://policies.google.com/technologies/ads
                </a>.
              </p>
            </section>

            {/* 5. Amazon Partnerprogramm */}
            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-600" />
                5. Affiliate-Verlinkungen (Amazon EU Partnerprogramm)
              </h2>
              <p className="mb-2">
                Jens Kathe ist Teilnehmer des Partnerprogramms von Amazon EU (Store-ID: <code>esstri-21</code> / Tracking-ID: <code>sommertrueffel.de-21</code>), das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Partnerlinks zu Amazon.de Werbekostenerstattung verdient werden kann.
              </p>
              <p className="mb-2">
                Alle Werbelinks sind mit einem Sternchen (*) gekennzeichnet. Wenn Sie auf einen solchen Partnerlink klicken und anschließend auf Amazon.de einen qualifizierten Kauf tätigen, kann Amazon nachvollziehen, dass die Weiterleitung über unsere Website erfolgte. Zu diesem Zweck setzt Amazon Cookies oder vergleichbare Tracking-Identifier ein.
              </p>
              <p className="text-xs text-slate-500">
                Rechtsgrundlage für die Einbindung der Partnerlinks ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes wirtschaftliches Interesse am Betrieb und der Refinanzierung dieses redaktionellen Informationsportals). Weitere Hinweise entnehmen Sie der{' '}
                <a
                  href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 underline hover:text-amber-900"
                >
                  Datenschutzerklärung von Amazon.de
                </a>.
              </p>
            </section>

            {/* 6. SSL-/TLS-Verschlüsselung */}
            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-slate-600" />
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine durchgehende SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem geschlossenen Schloss-Symbol im Browser.
              </p>
            </section>

            {/* 7. Rechte der betroffenen Person */}
            <section className="border-t border-slate-100 pt-6">
              <h2 className="text-base font-bold text-slate-900 mb-2">7. Ihre Rechte als betroffene Person</h2>
              <p className="mb-2">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600 text-xs">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an die unter Ziffer 1 angegebene Adresse wenden. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};
