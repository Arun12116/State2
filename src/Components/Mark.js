import React from 'react'
import {useState} from "react";
import ReactMarkdown from 'react-markdown';
    const Mark = () => {
        const [markDown,setMarkDown]=useState(" ");
        const changehandler=(e)=>{
    setMarkDown(e.target.value);
        }
  return (
    <>
    <div className="main">
        <div className="container">
        <textarea  className="left-side "name="" id="" cols="30" rows="10" value={markDown} onChange={changehandler} ></textarea>
        <div className="right-side"><ReactMarkdown>{markDown}</ReactMarkdown></div>
        </div>

    </div>
    </>
  )
}

export default Mark