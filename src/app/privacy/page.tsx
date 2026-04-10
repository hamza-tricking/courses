'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 ${isRTL ? 'rtl' : ''}`}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Allgemeine Hinweise</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Diese Datenschutzerklärung enthält ausführliche Informationen darüber, was mit Ihren persönlichen Daten passiert, wenn Sie unsere Website https://www.lisanakademie.de/ besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie sich persönlich identifizieren können. Wir halten uns bei der Verarbeitung Ihrer Daten streng an die gesetzlichen Bestimmungen, insbesondere die Datenschutzgrundverordnung ("DSGVO"), und legen großen Wert darauf, dass Ihr Besuch auf unserer Website absolut sicher ist.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Verantwortliche Stelle</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Datenschutzrechtlich verantwortlich für die Erhebung und Verarbeitung von personenbezogenen Daten auf dieser Website ist:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Name:</strong> Lisan Al Arabi Akademie</p>
              <p className="text-gray-700 mb-2"><strong>Vertreten durch:</strong> Fayssal, Louri, ____________________________</p>
              <p className="text-gray-700 mb-2"><strong>Straße, Hausnummer:</strong> Leintelstr, 86</p>
              <p className="text-gray-700 mb-2"><strong>Postleitzahl, Ort:</strong> 73061</p>
              <p className="text-gray-700 mb-2"><strong>Land:</strong> Deutschland</p>
              <p className="text-gray-700 mb-2"><strong>E-Mail:</strong> info@lisanakademie.de</p>
              <p className="text-gray-700"><strong>Tel.:</strong> +49 1520 8532660</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Zugriffsdaten (Server-Logfiles)</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Beim Aufruf unserer Website erheben wir und speichern automatisch in sogenannten Server-Logfiles Zugriffsdaten, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Browsertyp und Browserversion Ihres PC</li>
              <li>von Ihrem PC verwendetes Betriebssystem</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
              <li>die aktuell von Ihrem PC verwendete IP-Adresse (ggf. in anonymisierter Form)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ein Personenbezug ist uns im Regelfall nicht möglich und auch nicht beabsichtigt. Die Verarbeitung solcher Daten erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir sogenannte Cookies. Hierbei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Cookies können keine Programme ausführen oder Viren auf Ihr Computersystem übertragen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Webanalyse Tools und Werbung</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Google Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unsere Website benutzt den Webanalysedienst Google Analytics in der Version Google Analytics 4. Anbieter ist die Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Ireland ("Google").
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Google Analytics verwendet sogenannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung unserer Website durch Sie ermöglichen. In Google Analytics werden alle Daten von Geräten, die sich in der EU befinden (basierend auf dem geografischen Standort laut IP-Adresse), über Domains und Server in der EU erhoben, bevor der Traffic zur Verarbeitung an Analytics-Server weitergeleitet wird.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Rechtsgrundlage für die Verarbeitung Ihrer Daten ist die von Ihnen über das Cookie-Consent-Tool erteilte Einwilligung gemäß Art. 6 Abs. 1 Satz 1 lit. a) DSGVO.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">IP-Anonymisierung</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bei Google Analytics ist die Funktion IP-Anonymisierung auf der Website automatisch aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der EU oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung unserer Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Gemäß Google werden in Google Analytics keine IP-Adressen protokoliert und gespeichert, sondern lediglich kurzzeitig für die Geo-Lokalisierung verarbeitet und sofort danach gelöscht. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Demografische Merkmale bei Google Analytics</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unsere Website benutzt die Funktion "demografische Merkmale" von Google Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics - wie im Gliederungspunkt "Widerspruch gegen Datenerfassung" dargestellt - generell untersagen.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Google Signals</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Im Zusammenhang mit dieser Website wird als Erweiterung von Google Analytics auch der Dienst Google Signals eingesetzt. Mit Google Signals können wir geräteübergreifende Berichte (Reports) durch Google erstellen lassen (sog. "Cross Device Tracking"). Sofern Sie in Ihren Einstellungen in Ihrem Google-Konto die "personalisierten Anzeigen" aktiviert und Ihre internetfähigen Endgeräte mit Ihrem Google-Konto verknüpft haben, kann Google das Nutzungsverhalten bei Erteilung Ihrer Einwilligung in den Einsatz von Google Analytics gemäß Art. 6 Abs. 1 lit. a DSGVO geräteübergreifend analysieren und hierauf basierende Datenbankmodelle erstellen. Berücksichtigt werden dabei die Anmeldungen und Gerätetypen aller Website-Nutzer, die in einem Google-Konto angemeldet waren und eine Conversion ausgeführt haben. Die Daten zeigen unter anderem, auf welchem Endgerät Sie das erste Mal auf eine Anzeige geklickt haben und auf welchem Endgerät die diesbezügliche Conversion erfolgt ist. Wir erhalten hierbei keine personenbezogenen Daten von Google, sondern lediglich auf Basis von Google Signals erstellte Statistiken. Sie haben die Möglichkeit, die Funktion "personalisierte Anzeigen" in den Einstellungen Ihres Google-Kontos zu deaktivieren und damit die geräteübergreifende Analyse im Zusammenhang mit Google Signals abzustellen. Folgen Sie hierzu den Hinweisen auf dieser Seite: https://support.google.com/ads/answer/2662922?hl=de. Weitergehende Informationen zu Google Signals finden Sie unter folgendem Link: https://support.google.com/analytics/answer/7532985?hl=de.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Auftragsverarbeitung</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Speicherdauer</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z.B. User ID) oder Werbe-IDs (z.B. DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14 Monaten gelöscht. Details hierzu ersehen Sie unter folgendem Link: https://support.google.com/analytics/answer/7667196?hl=de.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Widerrufsrecht</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sofern die Verarbeitung Ihrer Daten auf Ihrer Einwilligung beruht, haben Sie das Recht, eine einmal erteilte Einwilligung in die Verarbeitung von Daten gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft zu widerrufen, indem Sie die Cookie-Einstellungen aufrufen und dort Ihre Auswahl ändern. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt. Speicherung der Daten für Abrechnungs- und buchhalterische Zwecke bleibt von einem Widerruf nicht berührt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Weitere Informationen zum Datenschutz können Sie der Datenschutzerklärung von Google entnehmen: https://policies.google.com/privacy?hl=de&gl=de
            </p>
          </div>
        </div>
      </main>

    </div>
  );
}
