import React from 'react';
import { useForm } from 'react-hook-form';

const AddPhotoForm = ({ onAddPhoto }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (!data.file[0]) {
            alert('Por favor, selecciona una foto.');
            return;
        }
        onAddPhoto({ file: data.file[0], title: data.title, description: data.description });
        setValue('file', null);
        setValue('title', '');
        setValue('description', '');
    };

    return (
        <form style={{paddingBottom: '10px', alignItems: 'center', display: 'flex',}} onSubmit={handleSubmit(onSubmit)}>
            <input 
                {...register('file')}
                type="file"
                accept="image/*"
            />
            <input style={{height: '30px'}}
                {...register('title', { required: true })}
                type="text"
                placeholder="Title"
            />
            {errors.title && <span>The title is required</span>}
            <textarea style={{marginLeft: '10px'}}
                {...register('description')}
                placeholder="Description"
            />
            <button style={{marginLeft: '10px', height: '30px',fontWeight: 'bold'}} type="submit">Add Photo</button>
        </form>
    );
};

export default AddPhotoForm;

