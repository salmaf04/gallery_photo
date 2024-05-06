import React from 'react'

const CloseButton = ({onClose}) => {
    return (
      <button style={{marginLeft:'2px', height:'25px', fontWeight: 'bold'}} onClick={onClose}>Close</button>
    );
  }

export default CloseButton