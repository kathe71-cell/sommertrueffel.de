import React from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Scale } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface ImpressumProps {
  onBack: () => void;
}

export const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
  useDocumentMeta({
    title: 'Impressum | sommertrueffel.de',
    description: 'Impressum und Anbieterkennzeichnung nach § 5 DDG und § 18 MStV für sommertrueffel.de (Jens Kathe, Kassel).',
    canonicalPath: '/impressum',
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
          name: 'Impressum',
          item: 'https://www.sommertrueffel.de/impressum'
        }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-[#faf9f6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm transition-all mb-8 hover:border-amber-400 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Zurück zur Startseite</span>
        </button>

        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100 mb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 border border-amber-200">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Rechtliche Pflichtangaben
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Impressum (§ 5 DDG & § 18 MStV)
              </h1>
            </div>
          </div>

          <div className="space-y-8 text-slate-700 text-sm leading-relaxed">
            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
              </h2>
              <p className="font-semibold text-slate-900">Jens Kathe</p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel</p>
              <p>Deutschland</p>
            </section>

            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" />
                Kontakt & schnelle elektronische Kommunikation
              </h2>
              <p className="flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>E-Mail:</span>
                <a href="mailto:jens@kathe.org" className="text-amber-800 font-semibold underline hover:text-amber-900">
                  jens@kathe.org
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Telefon:</span>
                <a href="tel:+491786652623" className="text-amber-800 font-semibold hover:text-amber-900">
                  +49 178 6652623
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">Umsatzsteuer-Hinweis</h2>
              <p className="font-medium text-slate-800">
                Kleinunternehmer nach § 19 UStG. Es wird keine Umsatzsteuer berechnet.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-slate-900 mb-2">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 Medienstaatsvertrag (MStV)
              </h2>
              <p>Jens Kathe</p>
              <p>Hansastraße 6, 34119 Kassel, Deutschland</p>
            </section>

            <section className="border-t border-slate-100 pt-6">
              <h2 className="text-base font-bold text-slate-900 mb-2">Verbraucherstreitbeilegung (Art. 14 Abs. 1 ODR-VO & § 36 VSBG)</h2>
              <p className="mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 font-semibold underline hover:text-amber-900 break-all"
                >
                  https://ec.europa.eu/consumers/odr
                </a>.
              </p>
              <p>
                Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="bg-amber-50 p-6 rounded-xl border border-amber-200 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-base font-bold text-amber-950 mb-1">
                    Transparenz & Kennzeichnung von Partnerlinks (* Werbelinks)
                  </h2>
                  <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
                    Dieses Portal ist ein unabhängiges redaktionelles Angebot und steht in keinem gesellschaftsrechtlichen Verhältnis zu den genannten Delikatessen-Anbietern oder Zubehör-Herstellern.
                    Mit einem Sternchen (*) gekennzeichnete Verweise sind Partnerlinks. Wenn Sie über diese Links ein Produkt erwerben, erhalten wir möglicherweise eine kleine Provision. Für Sie entstehen dadurch selbstverständlich keinerlei Mehrkosten oder Nachteile.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-200/80 text-xs text-amber-950 leading-relaxed">
                <strong className="font-bold block mb-1">
                  Teilnahme am Amazon-Partnerprogramm (Amazon EU):
                </strong>
                Jens Kathe ist Teilnehmer des Partnerprogramms von Amazon EU (Store-ID: esstri-21 / Tracking-ID: sommertrueffel.de-21), das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann. Als Amazon-Partner verdienen wir an qualifizierten Verkäufen.
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
