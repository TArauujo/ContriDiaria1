import './App.css';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);


  const handleClick = (event) => {

    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,
    };

    console.log(newDot);
    setList((prev) => [...prev, newDot]);
    setUndid([]);
  }

 


  return (
    <div id= 'page' onClick = {handleClick}>
      <h1>Ponto onde se clica ai fica uma bolinha onde clicou entendeu?</h1>
      {JSON.stringify(list)}
      {list.map((item, index) => (
        <span 
          key={index}
          className='dot'
          style={{left: item.clientX, top: item.clientY, borderRadius: '50%'}}
        />
      ))}
      
    </div>
  );
}

export default App;