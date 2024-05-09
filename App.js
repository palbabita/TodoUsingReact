import logo from './logo.svg';
import './App.css';
import Todo from './components/list';
import { useState } from 'react';
import Todoshow from "./components/Todolistshow"
function App() {
  const [listTodo, setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText != "")
     setListTodo([...listTodo,inputText]);
  }
  const deleteItem=(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1) 
    setListTodo([...newListTodo])
  }
  return (    <div className="container">

<div className="center-container">

    <Todo addList = {addList}/>
    <h1>My Today Task </h1>
    <hr/>
    {listTodo.map((listItem,i)=>{
      return(
        <Todoshow key={i} index={i} item={listItem} deleteItem={deleteItem}/>
      )
    })}
    </div>
    </div>
  );
}

export default App;
