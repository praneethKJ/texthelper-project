import React, { useState } from 'react'


export default function TextForm(props) {
  
  const [text, setText] = useState('')
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  // function to convert to upper case
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  // function to clear Text
  const handleClear = () => {
    let newText = '';
    setText(newText)
  }
  // function to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  // copy text
  const handleCopy = () => {
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to ClipBoard", "success");
  }
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <label htmlFor="box" className="form-label my-2"><h2>Enter here</h2></label>
          <textarea className="form-control" id="box" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'lightgray' : 'white' }} value={text} rows="7"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container mt-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Preview</h2>
        <p className='mb-1'>{text.split(" ").length} World and {text.length} Characters</p>
        <p className='mb-1'>{0.008 * text.split(" ").length} time to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"enter something to Preview"}</p>
        <button className="btn btn-primary" onClick={handleCopy}>Copy Preview</button>
      </div>
    </>
  )
}
