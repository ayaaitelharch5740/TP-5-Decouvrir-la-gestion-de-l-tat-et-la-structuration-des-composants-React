import { useState } from 'react';
import { SessionContext } from './SessionContext';
import FormulaireControle from './FormulaireControle';
import FormulaireRef from './FormulaireRef';
import ConvertisseurTemp from './ConvertisseurTemp';
import CarteUtilisateur from './CarteUtilisateur';
import './App.css';

function App() {
  const [session, setSession] = useState({
    prenom: 'Alice',
    nom: 'Lambert',
    connecte: true,
  });

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <div className="app-fond">
        <header className="app-entete">
          <h1>Formulaires & Contexte React</h1>
          <p className="app-sous-titre">
            Formulaires contrôlés, useRef, lifting state, useContext
          </p>
        </header>
        <main className="app-grille">
          <FormulaireControle />
          <FormulaireRef />
          <ConvertisseurTemp />
          <CarteUtilisateur />
        </main>
      </div>
    </SessionContext.Provider>
  );
}

export default App;