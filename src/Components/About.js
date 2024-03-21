import React, { useState } from 'react'

export default function About() {
    const [myStyle,setmyStyle] = useState({
        color :'black',
        backgroundColor : 'white'
    })
    const [btnText,setBtnText]=useState("Dark Mode")
    const toggleStyle = ()=>{
        if(myStyle.color == 'white'){
            setmyStyle({
                color :'black',
                backgroundColor : 'white'
            })
            setBtnText("Dark Mode")
        }
        else{
            setmyStyle({
                color :'white',
                backgroundColor : 'black'
            })
            setBtnText("Light Mode");
        }

    }
    return (
        <div className="container my-3" style={myStyle}>
            <h2 className="my-3">About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                           <strong> Analyze Your text. </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                          Textutils gives you a way to analyze your text quickly and efficinetly. Be it word count, character count or Copy text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                           <strong>Free to use. </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.Textutils reports the number of words and character. Thus it is suitable for writing text word/ character limit.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
            <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
    )
}