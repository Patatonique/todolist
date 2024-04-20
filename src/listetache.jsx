import React, { useState } from 'react';
import { BiSolidTrashAlt, BiSolidPencil } from "react-icons/bi";

function ListeTache({ listeTaches, setListeTaches }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [editedValue, setEditedValue] = useState('');

  const handleChange = (index) => {
    setCheckedItems({ ...checkedItems, [index]: !checkedItems[index] });
  };

  const deleteTache = (index) => {
    const updatedListeTaches = listeTaches.filter((_, i) => i !== index);
    setListeTaches(updatedListeTaches);
  };

  const handleEditChange = (e) => {
    setEditedValue(e.target.value);
  };

  const saveEditedTache = (index) => {
    const updatedListeTaches = listeTaches.map((tache, i) =>
      i === index ? editedValue : tache
    );
    setListeTaches(updatedListeTaches);
    setEditIndex(null);
  };

  return (
    <>
      {listeTaches.map((tache, index) => (
        <li className='uneTache' key={index}>
          <div className={checkedItems[index] ? 'tache barre' : 'tache'}>
            <div>
              <input
                type="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleChange(index)}
              />
              {editIndex === index ? (
                <input
                  type="text"
                  className='changeTache'
                  value={editedValue}
                  onChange={handleEditChange}
                  onBlur={() => saveEditedTache(index)}
                  autoFocus
                />
              ) : (
                <span>{tache}</span>
              )}
            </div>

            <div>
              <BiSolidTrashAlt className='icon' onClick={() => deleteTache(index)} />
              <BiSolidPencil
                className='icon stylo'
                onClick={() => {
                  setEditIndex(index);
                  setEditedValue(tache);
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default ListeTache;
