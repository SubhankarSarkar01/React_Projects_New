import React , {useState} from 'react'

export default function TextForm(props) {
    const handeleUpClick =()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handeleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handeleClearClick =()=>{
        setText("");
    }

    const handleonchange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleonchange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handeleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handeleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handeleClearClick}>Clear</button>
        </div>
        <div className="container my-3 ">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}