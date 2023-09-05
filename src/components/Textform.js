import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    //setText("Enter text here 12");
    const txtLength = (txt) =>{
        let count  = 0; 
        let t = txt.split(" ");
        for(let i=0; i<t.length; i++){
            if (t[i] === "") {
                count++;
            }
        }
        return t.length-count;
    }
    const charLength = (ch) => {
        let count  = 0;
        let c = ch.split("");
        for(let i=0; i<c.length; i++){
            if (c[i] === " ") {
                count++;
            }
        }
        return ch.length-count;
    }
    const handleUpClick = () => {
        // console.log("UpperCase was clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        // console.log("UpperCase was clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("Changed text");
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }
    const handleFindNum = () => {
        let matches = text.replace(/[^0-9]/g, "");
        if (matches){
            setText(matches);
            props.showAlert("Found Number", "success");
        }
    }
  return (
    <>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-5" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={handleFindNum}>Find Number</button>
    </div>
    <div className="container my-5" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>Your text summary</h1>
        <p>{txtLength(text)} words and {charLength(text)} characters</p>
        <p>This Paragraph can be read in {0.008 * txtLength(text)} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text above to preview here"}</p>
    </div>
    </>
  )
}
