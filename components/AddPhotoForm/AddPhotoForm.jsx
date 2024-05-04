import React, { useState } from 'react';

const AddPhotoForm = ({ onAddPhoto }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) {
            alert('Por favor, selecciona una foto.');
            return;
        }
        onAddPhoto({ file, title, description });
        
        setFile(null);
        setTitle('');
        setDescription('');
    };

    return (
        <form style={{paddingBottom: '10px', alignItems: 'center', display: 'flex',}} onSubmit={handleSubmit}>
            <input 
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept="image/*"
            />
            <input style={{height: '30px'}}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea style={{marginLeft: '10px'}}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button style={{marginLeft: '10px', height: '30px',fontWeight: 'bold'}} type="submit">Add Photo</button>
        </form>
    );
};

export default AddPhotoForm;
