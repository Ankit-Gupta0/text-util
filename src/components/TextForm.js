import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClrClick = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert("TextArea Cleared","success");
    }
    const handleCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; wrong way to change the state
    // setText("new text"); correct way
    return (
        <>
        <div className="container" style={{color:props.mode === 'dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8" style={{backgroundColor
            :props.mode === 'dark' ? 'green':'white',color:props.mode === 'dark' ? 'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClrClick}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split (" ").length} words and {text.length} characters</p>
            <p>{text.split (" ").length *0.008}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
        </div>
        </>
    )
}
