import React from 'react';
import { ArrowLeft, Shield, Lock, EyeOff, Server, FileText } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#faf9f6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition-all mb-8 hover:border-amber-400"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </button>

        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100 mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 border border-emerald-200">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                DSGVO-Konformität (EU-Datenschutz)
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Datenschutzerklärung
              </h1>
            </div>
          </div>

          <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
            <section className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-base mb-1">
                <EyeOff className="w-5 h-5 text-emerald-700" />
                Zero-Tracking & Privatsphäre an erster Stelle
              </div>
              <p className="text-emerald-900 text-xs sm:text-sm">
                Auf <strong>sommertrueffel.de</strong> werden weder Tracking-Cookies, Analysedienste Dritter noch externe Google-Fonts-Server verwendet. Sämtliche Typografie wird rein clientseitig über Ihren Systemschriftarten-Stack dargestellt.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">1. Verantwortliche Stelle</h2>
              <p className="font-medium text-slate-900">Jens Kathe</p>
              <p>Hansastraße 6, 34119 Kassel, Deutschland</p>
              <p>E-Mail: jens@kathe.org</p>
              <p>Telefon: +49 178 6652623</p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-slate-600" />
                2. Hosting & Bereitstellung der Webseite
              </h2>
              <p className="mb-2">
                Diese Website wird auf Servern moderner Cloud-Infrastruktur gehostet. Beim Aufruf unserer Webseiten erfasst der Webserver temporär technische Verbindungsinformationen in sogenannten Server-Logfiles:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners / anonymisierte IP-Adresse</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und fehlerfreien Bereitstellung des Webangebots).
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-slate-600" />
                3. SSL-/TLS-Verschlüsselung
              </h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine durchgehende SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-600" />
                4. Affiliate- & Partnerprogramme (Amazon EU Partnerprogramm)
              </h2>
              <p className="mb-2">
                Auf unseren Seiten befinden sich Verlinkungen zu Partnershops und Gourmet-Händlern, insbesondere zu Angeboten der Amazon EU S.à r.l. (38 avenue John F. Kennedy, L-1855 Luxemburg; „Amazon“). Diese Links sind mit einem Sternchen (*) gekennzeichnet.
              </p>
              <p className="mb-2">
                Jens Kathe ist Teilnehmer des Partnerprogramms von Amazon EU (Store-ID: esstri-21 / Tracking-ID: sommertrueffel.de-21), das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann (sog. Affiliate-System).
              </p>
              <p className="mb-2">
                Wenn Sie einen solchen Partnerlink anklicken und anschließend ein Produkt bei Amazon erwerben, kann Amazon nachvollziehen, dass Sie über unsere Website vermittelt wurden. Zu diesem Zweck setzt Amazon Tracking-Technologien bzw. Cookies ein, um die Herkunft der Bestellungen nachzuverfolgen und die Vergütung zuzuordnen.
              </p>
              <p className="text-xs text-slate-500">
                Rechtsgrundlage für die Einbindung der Partnerlinks ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes wirtschaftliches Interesse am Betrieb und der Refinanzierung dieses redaktionellen Informationsportals). Weitere Informationen zur Datenverarbeitung durch Amazon finden Sie in der Datenschutzerklärung von Amazon unter:{' '}
                <a
                  href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 underline hover:text-amber-900"
                >
                  Amazon.de Datenschutzerklärung
                </a>.
              </p>
            </section>

            <section className="border-t border-slate-100 pt-6">
              <h2 className="text-base font-bold text-slate-900 mb-2">5. Ihre Rechte als betroffene Person</h2>
              <p className="mb-2">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
              <p className="mt-4">
                Wenden Sie sich zur Ausübung Ihrer Rechte jederzeit gerne direkt an <strong>jens@kathe.org</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
