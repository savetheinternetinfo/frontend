import React from 'react';
import { useStateValue } from '../contexts/StateContext'

function Imprint() {
  const [{translation}] = useStateValue();

  return (
    <div className="container mx-auto py-16">
      <h1>Impressum</h1>
      <p>
        Savetheinternet.info<br />
        Dominic Kis<br />
        Sofienstraße 22<br />
        76461 Muggensturm<br />
        Germany
      </p>
      <p>E-Mail: info@savetheinternet.info</p>
      <p>
      Platform of the European Commission for online dispute resolution: <a href="http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</a>
      <br />
      We are neither obligated nor willing to take part in a Dispute Resolution before Independent Consumer Arbitration Service.
      </p>
    </div>
  );
}

export default Imprint;