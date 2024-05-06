import { useState } from 'react'
import EditButton from '../Buttons/LightBoxEditButton/EditButton';
import DeleteButton from '../Buttons/LightBoxDeleteButton/DeleteButton';
import SaveButton from '../Buttons/LightBoxSaveButton/SaveButton';
import CloseButton from '../Buttons/LightBoxCloseButton/CloseButton';
import EditPhotoForm from '../EditPhotoForm/EditPhotoForm';

function PhotoLightbox({ photo, onDelete, onSavePhoto, onUpdatePhoto, onClose }) {
  const [editingPhoto, setEditingPhoto] = useState(false);

  if (!photo) return null;

  return (
    <div className="lightbox-backdrop" style={{position: 'fixed', top: 0, left: 0, width: '100%',
    height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000}}  onClick={onClose}>
      <div className="lightbox-content" style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px',
      position: 'relative'}}  onClick={e => e.stopPropagation()}>
        <img src={URL.createObjectURL(photo.file)} alt={photo.title} style={{ width: '200px', height: '200px'}} />
        <h3>Title: {photo.title}</h3>
        <p>Descrption: {photo.description}</p>
        <EditButton  onEdit={() => setEditingPhoto(true)} /> 
        <DeleteButton onDelete={() => onDelete(photo.id)} />
        <SaveButton onSavePhoto={() => onSavePhoto(photo)} />
        <CloseButton onClose={onClose} />
        {editingPhoto && (
          <EditPhotoForm 
            photo={photo} 
            onSave={(editedPhoto) => {
                onUpdatePhoto(editedPhoto);
                setEditingPhoto(false);
            }} 
          />
        )} 
      </div>
    </div>
  );
}

export default PhotoLightbox;