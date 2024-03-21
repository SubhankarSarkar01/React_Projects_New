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
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#9f91bf':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length==0} className="btn btn-primary mx- my-1" onClick={handeleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length==0}  className="btn btn-primary mx-2 my-1" onClick={handeleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length==0}  className="btn btn-primary mx-2 my-1" onClick={handeleClearClick}>Clear</button>
        </div>
        <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Nothing to Preview"}</p>
        </div>

        </>
    )
}