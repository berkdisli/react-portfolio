import React from "react";
import "./Impressum.scss";

export default function Impressum() {
  return (
    <div id="impressum" className="impressum">
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      <p>Berk Disli Lichtenberger Str. 10179 Berlin</p>
      <p>
        {" "}
        <strong>Vertreten durch: </strong>
        Berk Disli
      </p>
      Impressum der{" "}
      <a href="https://www.kanzlei-hasselbach.de/">
        <text>
          Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht
        </text>
      </a>
    </div>
  );
}
