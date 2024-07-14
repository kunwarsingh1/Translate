import React, {  useState } from 'react'    

export const Form = () => {
    // const [Name, setName] = useState('')
    // const [Email,setEmail] = useState('')
    // const [Password,setPassword] = useState('')
    const [Data,setData] = useState('')
    const [Answer,setAnswer] = useState([])
    const [lang,setLang] = useState()
    // useEffect(()=>{
       
    // // },[])
    // let returning;

    // const data_function = async(text)=>{
      
    // }

    const validate = () => {
      if (Data === '') {
        return 0;
      }
      else{
        return 1
      }
      
    };

    
    
      const handleclick =  async(e)=>{
        const axios = require('axios') 
        e.preventDefault()
        if(!validate()){
          alert('enter data')
        }
           
      else{
        let config = {
        method: 'get',
        url: `http://localhost:5000/data?text=${Data}&lang=${lang}`,
        headers: { 
          'accept': 'application/json, text/plain, /', 
          'content-type': 'application/json', 
        },
  
      };
      
      
      await axios.request(config)
      .then((response) => {
         setAnswer(JSON.stringify(response.data));
      })}
    }
  
  return (
    <>
        <form action='post' onSubmit={handleclick} >

        <div className='flex justify-center'>
          <label>Select language: </label>

          <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="it">Italian</option>
              <option value="hi">Hindi</option>
          </select>
        </div>


        <div className='flex justify-center pl-9'>
        <label>Text :  </label>

        <input name='text' placeholder='Enter Text' value={Data} onChange={(e) => setData(e.target.value)}  />
        </div>


        <div className='flex justify-center'>
        <button className='border-2 ' type='submit'>Submit</button>
        </div>


        <div className='flex justify-center'>{Answer}</div>
        </form>
        
    </>
  )
}