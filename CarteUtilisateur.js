import { useContext } from 'react';
import { SessionContext } from './SessionContext';

function CarteUtilisateur() {
  const { session, setSession } = useContext(SessionContext);

  const initiales = session.connecte
    ? `${session.prenom[0]}${session.nom[0]}`.toUpperCase()
    : '?';

  function seDeconnecter() {
    setSession({ prenom: '', nom: '', connecte: false });
  }

  function seReconnecter() {
    setSession({ prenom: 'Alice', nom: 'Lambert', connecte: true });
  }

  return (
    <div className="carte-utilisateur">
      <span className="badge-type contexte">useContext — global</span>
      <div className="user-corps">
        <div className="avatar">{initiales}</div>
        <div>
          {session.connecte ? (
            <>
              <p className="user-nom">{session.prenom} {session.nom}</p>
              <p className="user-statut connecte">● Connecté(e)</p>
            </>
          ) : (
            <>
              <p className="user-nom">Invité</p>
              <p className="user-statut deconnecte">○ Déconnecté(e)</p>
            </>
          )}
        </div>
      </div>
      {session.connecte ? (
        <button onClick={seDeconnecter} className="btn-session deconnexion">
          Se déconnecter
        </button>
      ) : (
        <button onClick={seReconnecter} className="btn-session connexion">
          Se reconnecter
        </button>
      )}
    </div>
  );
}

export default CarteUtilisateur;