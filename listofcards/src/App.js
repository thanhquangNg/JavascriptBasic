import React,{useState} from 'react';

import Form from './component/Form.js'

function App() {
  //functions
  const[query, setQuery] = useState('');
  const[result,setResult]= useState([]);
  /*handle the URL address and fecth the data */
  
  return (
    <div className="App">
      <header>
        <h1>List of Cards</h1>
        {/* get the address URL and fetch the data */}
        <Form
        address={query}
        setAddress={setQuery}
        result={result}
        setResult={setResult}/>      
      </header>
    </div>
  );
}

export default App;
