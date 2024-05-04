import React from 'react';

const PhotoGallery = ({ photos, onPhotoSelect }) => {
    return (
        <div style={{display:'flex', flexWrap: 'wrap'}}>
            {photos.map((photo) => (
                <div key={photo.id} onClick={() => onPhotoSelect(photo)} style={{ cursor: 'pointer' }}>
                    <img src={URL.createObjectURL(photo.file)} alt={photo.title} style={{ width: '300px', height: '300px'}}/>
                </div>
            ))}
        </div>
    );
};

export default PhotoGallery