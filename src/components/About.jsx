import React, { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";
import Footer from "./Footer";
import Header from "./common/Header";

function About() {
  const ctx = useContext(LanguageContext);

  return (
    <React.Fragment>
      <Header />
      <div className="w-1/2 mx-auto py-16">
        <h1>Über uns</h1> <br />
        <h3>Wer sind wir?</h3>
        <br />
        Hinter savetheinternet.info steht eine große und bunte Gruppe von
        Leuten, die alle dasselbe Ziel verfolgen: Das Internet retten. Unsere
        Gruppierung hat sich zwar über das Internet zusammengefunden, unsere
        Mitglieder leben und arbeiten jedoch über den gesamten deutschsprachigen
        Raum verteilt. Wir agieren dabei vollkommen unparteiisch und
        distanzieren uns auch in aller Form von jeglichen politischen
        Ausrichtungen. Als freie Gruppe von Internetaktivisten agieren wir
        wirtschaftlich unabhängig und vergrößern unsere Reichweite stetig. Dabei
        achten wir jedoch sehr stark auf die Anonymität und Sicherheit unserer
        Mitglieder. <br /> <br />
        <h3>Wie arbeiten wir?</h3>
        <br />
        Unsere Gruppe ist über verschiedene Webseiten organisiert und im
        ständigen Kontakt untereinander. Unsere Leute sind auf der Straße aktiv
        um Flyer zu verteilen, telefonieren mit Politikern, Journalisten und
        Influencern, organisieren Demos und Informationsstände oder kümmern sich
        um die Webseite, Videos und Werbematerial. Wir betreiben dabei reine
        Sachpolitik und möchten in erster Linie die Menschen darüber informieren
        welche Gesetzesänderungen geplant sind und welche Auswirkungen diese
        haben werden. Dabei spielt es für uns keine Rolle, von welchem
        Parlamentsmitglied diese Änderungen vorgeschlagen werden. <br /> <br />
        <h3>Wo treten wir auf?</h3>
        <br />
        Neben unserer Webseite sind wir auch auf Facebook, Twitter, Instagram
        und YouTube aktiv. Zudem sind unsere Mitglieder auf der Straße
        unterwegs, um mit Ständen und Flyern die Menschen zu informieren. <br />{" "}
        <br />
        <h3>Wie finanzieren wir uns?</h3>
        <br />
        Die Finanzierung unserer Kampagnen erfolgt sowohl aus Selbstfinanzierung
        der Initiatoren, als auch durch die privaten Mittel unserer Aktivisten.
        Seit dem 5. November haben wir eine GoFundMe-Kampagne ins Leben gerufen
        um weiterhin aktiv zu bleiben. Wir standen dabei auf keiner Gehaltsliste
        und lehnen dies auch für die Zukunft ab. Die Arbeit unserer Aktivisten
        ist rein ehrenamtlich und findet ausschließlich in deren Freizeit statt,
        um die Inhalte unserer Kampagnen der Bevölkerung näher zu bringen.
        <br /> <br />
        <h3>Wie sind wir erreichbar?</h3>
        <br />
        Der direkte Weg ist das Impressum. Selbstverständlich sind wir auch über
        unsere anderen Plattformen erreichbar. Die entsprechenden Links befinden
        sich im oberen linken Eck unserer Webseite. <br /> <br />
        <h3>Wie kann ich euch unterstützen?</h3>
        <br />
        Informiere dich und sprich über das Thema mit deinen Freunden.
        Unterstütze unsere Arbeit mit der Petition oder direkt mit einer Spende
        und beteilige dich an den Diskussionen im Netz. <br />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default About;
