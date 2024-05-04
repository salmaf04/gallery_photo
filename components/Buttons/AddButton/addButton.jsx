
import React from 'react'


const AddButton = ({handleAddPhoto}) => {
    return (
      <button style={{ fontSize: '20px', textAlign: 'center', fontWeight: 'bolder', color: 'midnightBlue',
       backgroundColor: 'transparent', borderColor: 'transparent'}} onClick={handleAddPhoto}>Add + </button>
    );
  }

export default AddButton
