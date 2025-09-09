// src/Components/Terms.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/terms.css"; // We'll add custom styles here

export default function Terms() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 terms-title">Allgemeine Geschäftsbedingungen (AGB) – Mehroo Produkte</h1>

      <div className="row g-4">
        {/* Section Card */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="card-title">1. Geltungsbereich</h5>
            <p className="card-text">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Bestellungen
              und Lieferungen von Produkten der Mehroo GmbH (nachfolgend „Mehroo“ genannt)
              über unsere Website und andere Vertriebskanäle innerhalb Deutschlands. Mit
              der Bestellung akzeptiert der Kunde diese Bedingungen.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="card-title">2. Vertragsschluss</h5>
            <p className="card-text">
              Der Kaufvertrag kommt zustande, sobald der Kunde die Bestellung aufgibt
              und Mehroo die Bestätigung per E-Mail sendet.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="card-title">3. Preise und Zahlungsbedingungen</h5>
            <p className="card-text">
              Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer
              (derzeit 19%) und exklusive Versandkosten, sofern nicht anders angegeben.
              Zahlungen können per Kreditkarte, PayPal, Lastschrift oder Vorkasse erfolgen.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="card-title">4. Lieferung und Versand</h5>
            <p className="card-text">
              Mehroo liefert nur innerhalb Deutschlands, soweit nicht anders vereinbart.
              Die Lieferzeit beträgt in der Regel 3–7 Werktage. Bei Verzögerungen wird
              der Kunde umgehend informiert.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="card-title">5. Widerrufsrecht</h5>
            <p className="card-text">
              Kunden haben das Recht, binnen 14 Tagen ohne Angabe von Gründen den
              Kaufvertrag zu widerrufen. Rücksendungen erfolgen auf Kosten des Kunden,
              sofern nicht anders vereinbart.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm border-0 p-4 h-100">
            <h5 className="card-title">6. Gewährleistung und Haftung</h5>
            <p className="card-text">
              Mehroo haftet für Sachmängel nach den gesetzlichen Vorschriften. Die
              Gewährleistung beträgt 24 Monate ab Lieferung. Mehroo haftet nicht für
              Schäden, die durch unsachgemäße Nutzung der Produkte entstehen.
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm border-0 p-4 mt-4">
            <h5 className="card-title">7. Datenschutz</h5>
            <p className="card-text">
              Mehroo erhebt, verarbeitet und nutzt personenbezogene Daten ausschließlich
              gemäß den geltenden Datenschutzgesetzen (DSGVO). Daten werden nur zur
              Abwicklung von Bestellungen und zur Verbesserung unseres Services verwendet.
              Lesen Sie auch unsere <Link className="text-primary" to="/privacy">Datenschutzerklärung</Link>.
            </p>
          </div>

          <div className="card shadow-sm border-0 p-4 mt-4">
            <h5 className="card-title">8. Produktsicherheit und Gebrauchshinweise</h5>
            <p className="card-text">
              Alle Mehroo-Produkte sind nach EU-Sicherheitsstandards geprüft. Der Kunde
              verpflichtet sich, Produkte nur für den vorgesehenen Gebrauch zu verwenden.
            </p>
          </div>

          <div className="card shadow-sm border-0 p-4 mt-4">
            <h5 className="card-title">9. Änderungen der AGB</h5>
            <p className="card-text">
              Mehroo behält sich das Recht vor, die AGB jederzeit zu ändern. Änderungen
              werden auf unserer Website veröffentlicht und gelten ab dem Zeitpunkt der Veröffentlichung.
            </p>
          </div>

          <div className="card shadow-sm border-0 p-4 mt-4">
            <h5 className="card-title">10. Anwendbares Recht und Gerichtsstand</h5>
            <p className="card-text">
              Es gilt deutsches Recht. Ausschließlicher Gerichtsstand für alle Streitigkeiten
              aus diesem Vertrag ist der Sitz von Mehroo in Deutschland.
            </p>
          </div>
        </div>

        <div className="col-12 text-center mt-5">
          <h5>Mehroo GmbH</h5>
          <p>[Adresse] | [Telefon] | <Link className="text-primary" to="/contact-page">Kontakt</Link> | <Link className="text-primary" to="/">Website</Link></p>
        </div>
      </div>
    </div>
  );
}
