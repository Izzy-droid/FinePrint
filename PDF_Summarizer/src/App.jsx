import React, { useState, useEffect } from 'react'

import './App.css'

function App() {
 const [inputText, setinputText] = useState(' ');
 const [summary, setSummary] = useState('');
 const [loading, setLoading] = useState([]);

//   useEffect (() =>{
//     fetch(/* API endpoint*/)
//     .then(response) =>{
//       if(response){

//       }

//     }

//   })

//   }
//  const handleSubmit(() =>{


//  })

 
  return (
    <>
    <div>
      <div className="background-toplayer">
        <div className='top-container'>
          <p id='title'>FinePrint </p>
        </div> 
        <div className='paragraph-container'>  
        <p className='p-text'>Tired of reading 50+ pages of terms and conditions? Feed it through our summarizer and get the point in bite sized chunks</p>
      </div>
      </div>

     

      <div className='submit-area'>
        <div className='form-container'>
          <form className='form' >
            <input type='text' className='input-text'/>
            <input type="file" id="file1" name="upload" className='upload'></input>
            <button type="submit" value="submit" className='submit-btn'>Submit</button>
        </form>
        </div>
       
        
      </div>

    </div>
    </>
  )
}

export default App
