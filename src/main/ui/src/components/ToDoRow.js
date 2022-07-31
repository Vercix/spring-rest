import React from 'react';

export default ({ toDo, onTaskDone = () => { } }) => {

   function handleClick(e) {
      e.preventDefault();
      if (!toDo.id) {
         return
      }
      fetch(`/api/toDos/${toDo.id}`, {
         method: "DELETE",
      }).then(response => {
         onTaskDone();
      })
   }

   return (
      <tr >
         <td>{toDo.contents}</td>
         <td><button onClick={handleClick}> DONE </button></td>
      </tr>
   )

}