import React from "react";
import { useState} from "react";
import './list.css';
function Todo(props){
    const [inputText,setInputText] = useState('');
    return(
        <>
             
            
               <h1>Todo List App</h1><hr/>
               <div className="inputArea">
                <input type="text" placeholder="Enter Your Task" value={inputText} onChange={e=>{setInputText(e.target.value)}}/>
                <button onClick={()=>{
                    props.addList(inputText)
                    setInputText("")
                }}>Add</button>
               </div>
            
        
        </>
    )
}
export default Todo;