import React, { useEffect } from 'react'; 
import { useForm } from 'react-hook-form'; 

const EditPhotoForm = ({ photo, onSave }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm(); 

  // Actualiza el estado local cuando cambian las props de la foto seleccionada
  useEffect(() => {
    if (photo) {
      setValue('title', photo.title);
      setValue('description', photo.description);
    }
  }, [photo, setValue]); 

  const onSubmit = (data) => { 
    // Asegura que "onSave" se llame solo si "photo" es válido
    if (photo) {
      onSave({...photo, title: data.title, description: data.description});
    }
  };

  return (
    <form style={{paddingTop: '10px', alignItems: 'center', display: 'flex',}} onSubmit={handleSubmit(onSubmit)}> {/* la siguiente línea se modificó */}
      <input style={{height: '30px'}}
        {...register('title', { required: true })} 
        type="text"
      />
      {errors.title && <span>El título es requerido</span>} 
      <textarea style={{marginLeft: '10px'}}
        {...register('description')} 
      />
      <button style={{height: '30px', marginLeft: '10px'}} type="submit">Save Changes</button>
    </form>
  );
};

export default EditPhotoForm;
