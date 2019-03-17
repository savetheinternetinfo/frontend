import React from "react";
import blackout from "../assets/blackout.gif";
import logo from "../assets/blackout-logo.png";
import { Link } from "react-router-dom";
function Blackout() {
  return (
    <div className="w-full bg-black text-white pt-16 min-h-screen">
      <img
        src={blackout}
        className="w-1/2 block mx-auto"
        alt="blackout-banner"
      />

      <p className="w-1/2 mx-auto leading-normal">
        <span className="flex">
          <span className="w-2/3 pr-8">
            <h2>Blackouts gegen die Zensur!</h2>
            Aus Protest gegen Teile der aktuell viel diskutierten
            Urheberrechtsreform und insbesondere der darin enthaltenen Artikel
            11 und 13 (auch unter "Linksteuer" und "Uploadfilter" bekannt), sind
            für den 21. März, somit 2 Tage vor den europaweit stattfindenden
            Großdemonstrationen, sogenannte "Blackouts" geplant:
            <br />
            <br />
            Die Unterstützer dieser Aktion sind der Meinung, dass die geplante
            Reform die Meinungsfreiheit, den Zugriff auf freies Wissen und die
            Informationsvielfalt im Internet massiv beschneiden wird - und das
            ohne wirkliche Verbesserungen für all die Kreativen (Künstler,
            Journalisten, Autoren, ...), die eine ordentliche
            Urheberrechtsreform mit realen Verbesserungen verdient hätten!
          </span>
          <span className="w-1/3">
            <img src={logo} alt="logo" />
          </span>
        </span>
        <br />
        <br />
        Daher soll zum Zeichen des Protests schon am 21. gezeigt werden, wie ein
        Internet, in dem viele der kostenlos verfügbaren Inhalte fehlen,
        aussehen würde!
        <br />
        <br />
        Neben vielen kleineren Websites und Foren ist die deutsche Wikipedia
        wohl einer der Namhaftesten Unterstützer: Nach einer Abstimmung unter
        mehreren Hundert Wikipedia-Autoren wurde beschlossen, auch die gesamte
        deutsche Wikipedia als Zeichen des Protests für einen Tag abzuschalten!
        <br />
        <br />
        Unser Appell an die Europaabgeordneten die bereits in wenigen Tagen über
        die Reform und damit die Zukunft des Internets wie wir es kennen und
        lieben abstimmen werden:
        <br />
        <br />
        Bitte hört auf die Millionen Stimmen der Petition, die Demonstrationen,
        die offenen Briefe! Das sind Eure Wähler! Die, die mit Euren
        Entscheidungen leben und arbeiten müssen. Ignoriert sie bitte nicht!
        <br />
        <br />
        Falls auch du eine eigene Website besitzt, bist du herzlich dazu
        eingeladen, dich an der Aktion zu beteiligen!
        <br />
        <br />
        Weitere Informationen zum Thema findest du unter{" "}
        <Link className="text-white underline" to="/">
          https://savetheinternet.info/
        </Link>
      </p>
      <div className="w-1/2 flex pb-4 pt-12 mx-auto">
        <Link className="text-white underline" to="/imprint">
          Impressum
        </Link>
        <Link className="text-white underline ml-4" to="/privacy">
          Datenschutz
        </Link>
      </div>
    </div>
  );
}

export default Blackout;
