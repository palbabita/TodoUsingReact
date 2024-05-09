import React from "react";
import './list.css';
function Todoshow(props) {

    return(
        <>
        <li className="list-item">
            {props.item}
            <span className="icons">
                <i className="fa-solid fa-trash-can icon-delete"
                onClick={e=>
                    props.deleteItem(props.index)
                }></i>

            </span>

        </li>
<hr/>
        </>
    )
}
export default Todoshow;