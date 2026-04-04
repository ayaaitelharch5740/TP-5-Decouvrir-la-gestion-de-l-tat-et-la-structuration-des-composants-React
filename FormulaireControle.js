import { useState } from 'react';

function FormulaireControle() {
  const [champs, setChamps] = useState({
    prenom: '',
    courriel: '',
    message: '',
  });
  const [confirmation, setConfirmation] = useState(null);

  function mettreAJour(e) {
    setChamps({ ...champs, [e.target.name]: e.target.value });
  }

  function soumettre(e) {
    e.preventDefault();
    if (!champs.prenom || !champs.courriel) return;
    setConfirmation(`Message reçu de ${champs.prenom} (${champs.courriel})`);
    setChamps({ prenom: '', courriel: '', message: '' });
  }

  return (
    <div className="carte-formulaire">
      <span className="badge-type controle">useState — contrôlé</span>
      {confirmation && <p className="msg-succes">{confirmation}</p>}
      <form onSubmit={soumettre}>
        <input name="prenom"   value={champs.prenom}   onChange={mettreAJour} placeholder="Prénom" />
        <input name="courriel" value={champs.courriel} onChange={mettreAJour} placeholder="Adresse email" type="email" />
        <textarea name="message" value={champs.message} onChange={mettreAJour} placeholder="Votre message" rows={3} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default FormulaireControle;