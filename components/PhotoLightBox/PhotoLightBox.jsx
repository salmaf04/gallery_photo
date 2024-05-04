import React from 'react';
import EditButton from '../Buttons/LightBoxEditButton/EditButton';
import DeleteButton from '../Buttons/LightBoxDeleteButton/DeleteButton';
import SaveButton from '../Buttons/LightBoxSaveButton/SaveButton';
import CloseButton from '../Buttons/LightBoxCloseButton/CloseButton';


const PhotoLightbox = ({ photo, onEdit, onDelete, onSavePhoto, onClose }) => {
  if (!photo) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={URL.createObjectURL(photo.file)} alt={photo.title} />
        <h3>{photo.title}</h3>
        <p>{photo.description}</p>
        <EditButton onEdit={() => onEdit(photo)} />
        <DeleteButton onDelete={() => onDelete(photo.id)} />
        <SaveButton onSavePhoto={() => onSavePhoto(photo)} />
        <CloseButton onClose={onClose} />
        
      </div>
    </div>
  );
};

export default PhotoLightbox;