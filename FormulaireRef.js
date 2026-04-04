import { useRef, useState } from 'react';

function FormulaireRef() {
  const prenomRef = useRef();
  const courrielRef = useRef();
  const [apercu, setApercu] = useState(null);

  function lireValeurs(e) {
    e.preventDefault();
    const prenom   = prenomRef.current.value;
    const courriel = courrielRef.current.value;
    if (!prenom || !courriel) return;
    setApercu({ prenom, courriel });
  }

  return (
    <div className="carte-formulaire">
      <span className="badge-type ref">useRef — non-contrôlé</span>
      <form onSubmit={lireValeurs}>
        <input ref={prenomRef}   type="text"  placeholder="Prénom" />
        <input ref={courrielRef} type="email" placeholder="Adresse email" />
        <button type="submit">Lire les valeurs</button>
      </form>
      {apercu && (
        <p className="msg-succes">
          Lu depuis le DOM : {apercu.prenom} / {apercu.courriel}
        </p>
      )}
    </div>
  );
}

export default FormulaireRef;