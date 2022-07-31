import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import useSWR from 'swr'
import fetcher from './lib/fetcher';
import ToDoTable from './components/ToDoTable';
import ToDoForm from './components/ToDoForm';

const App = () => {
   const { data, error, mutate } = useSWR('/api/toDos', fetcher);

   function onChange() {
      mutate();
   }

   return (
      <>
         {/* {data && <pre>{JSON.stringify(data._embedded.toDos, null, 2)}</pre>} */}
         {!data && <div>loading...</div>}
         {error && <div>failed to load</div>}
         {data &&
            <>
               <h2>To Do:</h2>
               <ToDoForm onSubmit={onChange}/>
               {data._embedded.toDos.length < 1 && <p>Nothing to do, relax!</p>}
               {data._embedded.toDos.length > 0 && <ToDoTable onTaskDone={onChange} toDos={data._embedded.toDos} />}
            </>
         }
      </>
   );
}


ReactDOM.render(<App />, document.getElementById('app'));