import React from "react";
import './Form.css'

const Form = (props) => {
    return (
    <div className="outer">
        <div className="container">
            <button className="btn" onClick={props.handler} >- 1</button   >
        </div>
    </div>    
        );
    };

export default Form;