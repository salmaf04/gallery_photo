import React, { useState, useEffect } from 'react';

const EditPhotoForm = ({ photo, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Actualiza el estado local cuando cambian las props de la foto seleccionada
  useEffect(() => {
    if (photo) {
      setTitle(photo.title);
      setDescription(photo.description);
    }
  }, [photo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Asegura que "onSave" se llame solo si "photo" es válido
    if (photo) {
      onSave({...photo, title, description});
    }
  };

  return (
    <form style={{paddingTop: '10px', alignItems: 'center', display: 'flex',}} onSubmit={handleSubmit}>
      <input style={{height: '30px'}}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea style={{marginLeft: '10px'}}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button style={{height: '30px', marginLeft: '10px'}} type="submit">Save Changes</button>
    </form>
  );
};

export default EditPhotoForm