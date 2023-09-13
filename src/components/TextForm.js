import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState(' ')
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
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
  }
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <label htmlFor="box" className="form-label my-3"><h1>Enter here</h1></label>
          <textarea className="form-control" id="box" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'lightgray' : 'white' }} value={text} rows="7"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container mt-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Preview</h1>
        <p className='mb-1'>{text.split(" ").length} World and {text.length} Characters</p>
        <p className='mb-1'>{0.008 * text.split(" ").length} time to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <button className="btn btn-primary" onClick={handleCopy}>Copy Preview</button>
      </div>

    </>
  )
}
