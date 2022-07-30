import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';

const App = () => {
   const [tasks, setTasks] = useState([]);
   const input = useRef(null);

   function onAddTask(e) {
      e.preventDefault();
      if (!input.current || !input.current.value) {
         return;
      }

      setTasks([...tasks, input.current.value])
   }

   return (
      <>
         <h2>To Do:</h2>
         <input ref={input} placeholder={'Add task....'} />
         <button onClick={(e) => onAddTask(e)}>ADD</button>
         {tasks.length < 1 && <p>Nothing to do, relax!</p>}
         {tasks.length > 0 && tasks.map(task => (<p key={task}>{task}</p>))}
      </>
   );
}


ReactDOM.render(<App />, document.getElementById('app'));