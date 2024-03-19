import React , {useState} from 'react'

export default function TextForm(props) {
    const handeleUpClick =()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleonchange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here ... ")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleonchange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handeleUpClick}>Convert to Uppercase</button>
        </div>
    )
}