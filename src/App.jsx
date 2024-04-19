import { useState } from 'react'
import ListeTache from './listetache'

import './App.css'

function App() {
  const [tache, setTache] = useState('');
  const [listeTaches, setListeTaches] = useState([]); // Création de la liste des tâches

  function handleChange(e) {
    setTache(e.target.value);
  }

  function handleSendTache() {
    console.log("cliquer");
    setListeTaches([...listeTaches, tache]); // Ajout de la nouvelle tâche à la liste
    setTache(''); // Réinitialisation de la valeur de tache après l'ajout
  }

  return (
    <div className="container">
      <h1 className='titre'>My Todo List</h1>
      <input 
        type="text" 
        className="inputTache" 
        id="inputTache" 
        onChange={handleChange}
        value={tache}
      />
      <button className='btn' onClick={handleSendTache}>Ajouter</button>
      {listeTaches.length > 0 && (
        <ul className='listeTache'>
          <ListeTache listeTaches={listeTaches} setListeTaches={setListeTaches}/>
        </ul>
      )}
    </div>
  );
}

export default App;