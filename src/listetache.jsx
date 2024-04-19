import React, { useState } from 'react';
import { BiSolidTrashAlt } from "react-icons/bi";

function ListeTache({ listeTaches, setListeTaches }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (index) => {
    setCheckedItems({ ...checkedItems, [index]: !checkedItems[index] });
  };

  const deleteTache = (index) => {
    console.log(listeTaches)
    // Créez une nouvelle liste de tâches en excluant la tâche à l'index spécifié
    const updatedListeTaches = listeTaches.filter((_, i) => i !== index);
    // Mettez à jour l'état de la liste de tâches avec la nouvelle liste
    setListeTaches(updatedListeTaches);
  };

  return (
    <>
      {listeTaches.map((tache, index) => (
        <li key={index}>
          <p className={checkedItems[index] ? 'barre' : ''}>
            <input
              type="checkbox"
              checked={checkedItems[index] || false}
              onChange={() => handleChange(index)}
            />
            {tache}
            <BiSolidTrashAlt onClick={() => deleteTache(index)} />
          </p>
        </li>
      ))}
    </>
  );
}

export default ListeTache;
