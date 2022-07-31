import React from 'react';
import ToDoRow from './ToDoRow';

export default ({ toDos, onTaskDone }) => {


   return (
      <table>
         <tbody>
            <tr>
               <th>Task</th>
               <th>Action</th>
            </tr>
            {toDos.map((toDo, i) => <ToDoRow onTaskDone={onTaskDone} toDo={toDo} key={toDo.id} />)}
         </tbody>
      </table>
   )

}