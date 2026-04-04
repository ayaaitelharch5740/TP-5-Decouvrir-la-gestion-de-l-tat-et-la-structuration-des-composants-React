import { useState } from 'react';
import ChampTemperature from './ChampTemperature';

function ConvertisseurTemp() {
  const [celsius, setCelsius] = useState('');

  const fahrenheit = celsius !== ''
    ? ((parseFloat(celsius) * 9) / 5 + 32).toFixed(1)
    : '';

  function depuisCelsius(valeur) {
    setCelsius(valeur);
  }

  function depuisFahrenheit(valeur) {
    const enCelsius = valeur !== ''
      ? (((parseFloat(valeur) - 32) * 5) / 9).toFixed(1)
      : '';
    setCelsius(enCelsius);
  }

  return (
    <div className="carte-formulaire">
      <span className="badge-type lifting">Lifting state up</span>
      <div className="ligne-temp">
        <ChampTemperature
          valeur={celsius}
          etiquette="°C"
          onChangement={depuisCelsius}
        />
        <span className="separateur-temp">⇄</span>
        <ChampTemperature
          valeur={fahrenheit}
          etiquette="°F"
          onChangement={depuisFahrenheit}
        />
      </div>
      {celsius && (
        <p className="resultat-temp">
          {celsius} °C = {fahrenheit} °F
        </p>
      )}
    </div>
  );
}

export default ConvertisseurTemp;