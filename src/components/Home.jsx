import React from "react";
import config from "../config.json";
import { useStateValue } from "../contexts/StateContext";
import Button from "./common/Button";
import SocialButton from "./common/SocialButton";

function Home() {
  const [{ translation }] = useStateValue();
  const { links } = config;

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="my-16">
          <h1>Warum ist das Internet in Gefahr?</h1>
          <p>
            Das Internet wie wir es kennen, ist ein Ort, an dem Du, ich und alle
            anderen ihre Meinung kundtun, kreative Inhalte teilen und sich
            unabhängig über Geschehnisse informieren können; all das, ohne dass
            wir dafür mit Geld bezahlen müssen. Doch das soll nicht so bleiben:
            Im Versuch, Urheber, für ihr Schaffen gerecht zu entlohnen, besteht
            die reelle Gefahr, dass wir all das nicht mehr ohne Weiteres einfach
            so tun können. Diese Gefahr stellt die neue EU-Urheberrechtsreform
            dar, die einige problematische europaweite Regelungen mit sich
            bringt. Die beiden weitaus bedrohlichsten Artikel sind die
            Folgenden:
          </p>
        </div>
      </div>
      <div className="bg-white text-blue-dark md:text-center">
        <div className="container mx-auto md:flex my-16">
          <div className="md:pr-12 md:border-r border-blue-dark flex-1">
            <h2>Artikel 11</h2>
            <p>
              Das sogenannte Leistungsschutzrecht soll Veröffentlichungen von
              Presseverlagen so behandeln wie das Urheberrecht z.B. Musik oder
              Filme behandelt. Dies bedeutet, dass Online-Dienste wie z.B.
              Suchmaschinen oder Newsaggregatoren den Presseverlagen
              Lizenzgebühren bezahlen müssen, wenn sie mehr als nur Hyperlinks,
              einzelne Wörter oder "sehr kurze Auszüge" einblenden. Diese
              Gebühren fallen abhängig vom Datum der Erstveröffentlichung 2-3
              Jahre lang an. Verstößt ein Dienst gegen diese Bestimmungen, so
              müssen die Sanktionen "wirksam, verhältnismäßig und abschreckend"
              sein. Diese Bestimmungen gelten nicht für den privaten oder
              nicht-komerziellen Gebrauch, wenn die Handlungen von einzelnen
              Personen durchgeführt werden.
            </p>
            <p>
              <a className="text-blue-dark" href="#">
                mehr...
              </a>
            </p>
          </div>
          <div className="md:pl-12 flex-1">
            <h2>Artikel 13</h2>
            <p>
              Inhalte auf Platformen, die ihren Nutzern das Hochladen von
              nutzererstellten Inhalten ermöglichen, werden so behandelt als
              hätten die Platformen selbst diese veröffentlicht. Damit haften
              diese Platformen auch für jegliche Urheberrechtsverletzung auf
              ihrer Platform und werden dazu verpflichtet, alles mögliche zu
              tun, um von allen Rechteinhabern die nötigen Lizenzen zu erwerben.
              Sie müssen auch den Upload von allen urheberrechtlich geschützten
              Inhalten, für die sie keine Lizenzen haben, verhindern und wenn
              sie dennoch auf Urheberrechtsverletzungen hingewiesen werden,
              diese verletzenden Inhalte unverzüglich entfernen. Dabei darf der
              Upload legaler Inhalte aber nicht verhindert werden und es soll
              auch zu keiner allgemeinen Überwachungspflicht kommen. Platformen,
              die sowohl jünger als 3 Jahre sind, als auch weniger als 10 Mio. €
              Umsatz jährlich machen und weniger als 5 Mio. Nutzer pro Monat
              haben, müssen dabei nicht den Upload urheberrechtsverletzender
              Werke blockieren, sondern nur Lizenzen erwerben.
            </p>
            <p>
              <a className="text-blue-dark" href="#">
                mehr...
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16">
        <h2>Was kannst du tun?</h2>
        <p>
          Du findest auch, dass es zwar wichtig ist, Urheber gerecht zu
          entlohnen, man dafür aber auf keinen Fall die unkomplizierte
          Meinungsäußerung im Internet, das Teilen kreativer Inhalte wie z.B.
          Memes und die Möglichkeit sich unabhängig über Geschehnisse zu
          informieren, opfern darf?
        </p>
        <p>
          Es gibt viele Möglichkeiten wie Du Dich einbringen kannst: Im vollen
          Komfort der eigenen vier Wände die Petition unterzeichnen, Freunde und
          Bekannte über die Situation informieren oder Seite and Seite mit uns
          auf die Straße gehen und demonstrieren — jede Unterstützung hilft. Im
          Folgenden findest du eine Auswahl an Möglichkeiten:
        </p>
        <div className="lg:flex lg:text-center mt-16">
          <div className="lg:pr-12 flex-1">
            <h2>Unterschreibe die Petition</h2>
            <p>
              Du willst einer von 5 Millionen sein, die sich bisher mit ihrer
              Unterschrift gegen diese unverhältnismäßigen Veränderungen
              aufgelehnt haben? Dann unterschreibe jetzt diese Petition und
              zeige dadurch, dass Du kein Bot bist, sondern ein Mensch aus
              Fleisch und Blut! Hier findest Du die Petition:
            </p>
            <div className="my-8 text-center">
              <Button text="Petition" />
            </div>
          </div>
          <div className="lg:px-12 lg:border-r lg:border-l border-blue flex-1">
            <h2>Komm auf eine Demo</h2>
            <p>
              Du willst, dass Dich die Politiker hören? Du willst zeigen, dass
              das Internet voller normaler Menschen ist? Dann zeige Dich, sei
              laut und friedlich und komm mit vielen Tausend anderen
              Internetnutzern auf dies Straßen! Schließe Dich einer Demo an — es
              gibt genug überall in Europa ;) — und bring Freunde, Bekannte,
              Geschwister, Eltern, Oma, Opa und alle anderen mit!
            </p>
            <p>Hier findest du eine Übersicht aller Demos:</p>
            <div className="my-8 text-center">
              <Button text="Demos" />
            </div>
          </div>
          <div className="lg:pl-12 flex-1">
            <h2>Informiere jeden</h2>
            <p>
              Du glaubst, dass Deine Freunde, Bekannten, und Familie noch nicht
              ausreichend über dieses Problem Bescheid wissen? Dann teile mit
              allen worum es geht, was und wie groß das Problem ist! Natürlich
              kannst Du dafür auch die unten verlinkten social Media benutzen.
            </p>
            <div className="flex flex-row mt-4 justify-center">
              <SocialButton
                icon="Facebook"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.facebook}
              />
              <SocialButton
                icon="Twitter"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.twitter}
              />
              <SocialButton
                icon="Instagram"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.instagram}
              />
              <SocialButton
                icon="Youtube"
                color="orange"
                hoverColor="blue-dark"
                hoverBorder="orange"
                hoverBackground="orange"
                link={links.youtube}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-blue-dark">
        <div className="container mx-auto my-16">
          <div className="my-16">
            <h1>Was ist bis jetzt passiert?</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
            <h1>Artikel 11 im Detail</h1>
            <p>
              Presseverlage sollen für ihre Presseveröffentlichungen die
              gleichen Möglichkeiten besitzen wie z.B. Musiker für ihre Musik,
              wenn diese Presseveröffentlichungen in Gänze oder Teile davon
              online von Diensten der Informationsgesellschaft verwendet werden,
              also z.B. Verhinderung der Verwendung oder Verwendung gegen
              Bezahlung. Dienste der Informationsgesellschaft sind alle, die
              Dienstleistungen anbieten, die auf elektronischem Weg erbracht
              werden, also z.B. online Suchmaschinen. Davon ausgenommen sind
              Hyperlinks, einzelne Wörter oder "sehr kurze Auszüge". Diese
              Möglichkeiten sollen 2 Jahre lang bestehen, beginnend mit dem
              folgenden 1. Januar nach der Erstveröffentlichung, also abhängig
              vom Datum der Erstveröffentlichung auch bis zu 3 Jahre lang.
              Außerdem sollen die Autoren einen "angemessenen Teil" der
              Einnahmen bekommen, die für die online Nutzung ihrer
              Veröffentlichungen an die Presseverlage bezahlt werden. Verstößt
              ein Dienst der Informationsgesellschaft gegen diese Bestimmungen,
              so müssen die Sanktionen "wirksam, verhältnismäßig und
              abschreckend" sein. Diese Bestimmungen gelten nicht für den
              privaten oder nicht-komerziellen Gebrauch, wenn die Handlungen von
              einzelnen Personen durchgeführt werden.
            </p>
            <h1>Artikel 13 im Detail</h1>
            <p>
              Platformen, die das Teilen von nutzererstellten Inhalten
              ermöglichen, sollen so behandelt werden, als ob sie die Inhalte,
              die von ihren Nutzern hochgeladen wurden, selbst veröffentlicht
              hätten. Dies bedeutet, dass diese Platformen unter anderem auch
              für jegliche Urheberrechtsverletzung auf ihrer Platform haften.
              Deshalb sollen diese Platformen für jegliche urheberrechtlich
              geschützten Inhalte auf ihrer Platform Lizenzen von allen
              Rechteinhabern erwerben. Diese Lizenzen gelten dann auch für ihre
              Nutzer, sofern die Nutzer die Inhalte zu nicht-komerziellen
              Zwecken oder ohne signifikante Einnahmen benutzen. Für jeden
              Inhalt, für den eine Platform keine Lizenz hat, haftet sie, außer
              die Platform hat alles mögliche versucht, um eine Lizenz zu
              erwerben und den Upload zu verhindern, und hat nach Kenntnis der
              Urheberrechtsverletzung den jeweiligen Inhalt unverzüglich
              entfernt und sichergestellt, dass dieser Inhalt in Zukunft nicht
              mehr hochgeladen wird. Die Anstrengungen, die jede Platform in
              dieser Richtung unternehmen muss sollen dabei im Verhältnis zur
              Größe der Platform und der Verfügbarkeit und den Kosten der
              Maßnahmen stehen. Platformen, die jünger als 3 Jahre sind, weniger
              als 10 Mio. € Umsatz jährlich haben und monatlich weniger als 5
              Mio. Nutzer haben müssen nur Lizenzen erwerben und Inhalte, die
              Urheberrechte verletzen nach Kentniss unverzüglich entfernen.
              Dabei darf der Upload von Inhalten, die keine Urheberrechte
              verletzen oder deren Zweck vom Urheberrecht ausgenommen ist (z.B.
              Zitat oder Parodie) unter keinen Umständen verhindert werden.
              Außerdem soll es zu keiner allgemeinen Überwachungspflicht kommen
              und Platformen sollen Rechteinhabern auf deren Anfrage ihre
              Maßnahmen zur Verhinderung von Urheberrechtsverletzungen
              mitteilen. Darüber hinaus soll es einen einfachen Beschwerde- und
              Meldemechanismus geben, bei dem die Entscheidung der Sperrung von
              Inhalten menschlicher Kontrolle unterliegt und der auch die
              Möglichkeit bietet Steitigkeiten außerhalb von Gerichten zu lösen.
              Sobald die Richtlinie in Effekt tritt, will man sich mit
              Platformen und Rechteinhabern zusammensetzen, um Anhaltspunkte zur
              Umsetzung der Auflagen zu erarbeiten.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
