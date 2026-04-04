function ChampTemperature({ valeur, etiquette, onChangement }) {
  return (
    <div className="champ-temp">
      <label className="label-temp">{etiquette}</label>
      <input
        type="number"
        value={valeur}
        onChange={(e) => onChangement(e.target.value)}
        placeholder={`Température en ${etiquette}`}
        className="input-temp"
      />
    </div>
  );
}

export default ChampTemperature;