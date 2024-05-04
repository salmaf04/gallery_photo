
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import AddButton from '../components/Buttons/AddButton/addButton';
import AddPhotoForm from '../components/AddPhotoForm/AddPhotoForm';
import PhotoLightbox from '../components/PhotoLightBox/PhotoLightBox';
import EditPhotoForm from '../components/EditPhotoForm/EditPhotoForm';



function App() {
    const [photos, setPhotos] = useState([]);
    const [isAddingPhoto, setIsAddingPhoto] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [editingPhoto, setEditingPhoto] = useState(null);
    

    // Esta función maneja la adición de una nueva foto a la galería
    const handleAddPhoto = (photoData) => {
        const newPhoto = {
          ...photoData,
          id: uuidv4(),
        };
    
        setPhotos(prevPhotos => [...prevPhotos, newPhoto]);
        setIsAddingPhoto(false); // Cierra el formulario después de añadir
    };

    const handlePhotoSelect = (photo) => {
        console.log("Foto seleccionada:", photo);
        setSelectedPhoto(photo);
    };

    const handleDeletePhoto = (photoId) => {
        setPhotos(photos.filter(photo => photo.id !== photoId));
        setSelectedPhoto(null); // Cerrar lightbox al eliminar
    };
    
    const handleSavePhoto = (photo) => {
        // Crear una URL para el archivo de la imagen
        const url = URL.createObjectURL(photo.file);
        // Crear un nuevo elemento <a> en el documento
        const a = document.createElement('a');
        a.href = url;
        a.download = photo.title || 'photo';
        document.body.appendChild(a); // Agregar el elemento <a> al documento
        a.click(); // Simular un clic en el enlace para iniciar la descarga
        document.body.removeChild(a); // Remover el elemento <a> del documento
        URL.revokeObjectURL(url); // Limpiar la URL de objeto para liberar recursos
    };
    
    const handleSaveEdit = (editedPhoto) => {
        const updatedPhotos = photos.map(photo => photo.id === editedPhoto.id ? editedPhoto : photo);
        setPhotos(updatedPhotos);
        setEditingPhoto(null); // Ocultar formulario de edición
        setSelectedPhoto(null); // Opcionalmente, cerrar el lightbox si estaba abierto
    };

    return (
        <div>
            <AddButton handleAddPhoto={() => setIsAddingPhoto(true)} />
            {isAddingPhoto && <AddPhotoForm onAddPhoto={handleAddPhoto} />}
            <PhotoGallery photos={photos} onPhotoSelect={handlePhotoSelect}/>
            {selectedPhoto && (
                <PhotoLightbox
                  photo={selectedPhoto}
                  onEdit={() => setEditingPhoto(selectedPhoto)}
                  onDelete={handleDeletePhoto}
                  onSavePhoto={handleSavePhoto}
                  onClose={() => setSelectedPhoto(null)}
                />
            )}
            {/* Mostrando el formulario de edición si 'editingPhoto' está activo */}
            {editingPhoto && (
                <EditPhotoForm 
                  photo={editingPhoto} 
                  onSave={handleSaveEdit}
                />
            )}
        </div>
    );
}

export default App;