import React, { useState } from "react"

export default ({onSubmit = () => {}}) => {
   const [contents, setContents] = useState('');

   const handleChange = (event) => {
      setContents(event.target.value);
    }

   function handleSubmit(e) {
      e.preventDefault();
      const body = JSON.stringify({contents: contents})
      fetch("/api/toDos", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json'
         },
         body: body
      }).then(response =>{
         onSubmit();
      })
   }


   return (
      <form onSubmit={handleSubmit}>
         <input type="text" name='contents'  value={contents} onChange={handleChange}/>
         <input type="submit" value="ADD" />
      </form>
   )
}