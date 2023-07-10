import React, { useContext } from 'react';

import penIcon from '../src/assets/penIcon.svg';
import AuthProvider, { AuthContext } from '../contexts/AuthContext';


function UploaderRoot(props:any) {

  const {signIn} = useContext(AuthContext)

  const {isAuthenticated} = useContext(AuthContext)

  function handleFileUpload(image:any) {
    const file = image.target.files[0];
  
    const reader = new FileReader();  
  
    reader.readAsDataURL(file);
  
    reader.onload = function(event) {
      const base64Image = event.target?.result; // Adiciona a verificação de nulidade aqui
  
      if (base64Image) { // Verifica se base64Image não é nulo
        const data = {
          base64Image: base64Image,
          imageName: props.title
        };
  
        console.log(data);
  
        fetch('https://paintballapi.azurewebsites.net/storage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(result => {
            console.log('POST request result:', result);
          })
          .catch(error => {
            console.error(error);
          });
      }
    };
  }

  return (
    isAuthenticated&&
    <>
        <input type="file" id={props.title} style={{ display: 'none' }} onChange={(event:any)=>handleFileUpload(event)} />
        <label className='w-10 h-10 rounded cursor-pointer flex items-center justify-center' htmlFor={props.title}>
          <img className='opacity-50' src={penIcon} alt={''}></img>
        </label>
    </>
  )
}

function Uploader() {
  return (
    <AuthProvider>
      <UploaderRoot/>
    </AuthProvider>
  )
}

export default Uploader