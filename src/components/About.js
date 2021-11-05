import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    
    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode");
        }else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    
    return (
        <div className= "container" style={myStyle}>
            <section id="questions" className="p-0">
                <div className="container">
                    <h1 className="text-center mb-4">
                        About Us
                    </h1>
                    <div className="accordion accordion-flush" id="questions" style={myStyle}>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#question-one">
                                    Where exactly are you located ?
                                </button>
                            </h2>
                            <div id="question-one" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingOne" data-bs-parent="#questions">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nemo eos incidunt natus nulla? Aut quasi perferendis vel voluptates voluptate aspernatur fugiat et iste ipsum accusantium reprehenderit libero unde assumenda ad, quae deserunt ipsam cupiditate obcaecati commodi error incidunt quos dolores nemo! Odit adipisci fuga porro accusamus cum! Incidunt, molestias.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#question-two">
                                    How much does it cost to attend ?
                                </button>
                            </h2>
                            <div id="question-two" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingOne" data-bs-parent="#questions">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nemo eos incidunt natus nulla? Aut quasi perferendis vel voluptates voluptate aspernatur fugiat et iste ipsum accusantium reprehenderit libero unde assumenda ad, quae deserunt ipsam cupiditate obcaecati commodi error incidunt quos dolores nemo! Odit adipisci fuga porro accusamus cum! Incidunt, molestias.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#question-three">
                                    What are the prerequisites ?
                                </button>
                            </h2>
                            <div id="question-three" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingOne" data-bs-parent="#questions">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nemo eos incidunt natus nulla? Aut quasi perferendis vel voluptates voluptate aspernatur fugiat et iste ipsum accusantium reprehenderit libero unde assumenda ad, quae deserunt ipsam cupiditate obcaecati commodi error incidunt quos dolores nemo! Odit adipisci fuga porro accusamus cum! Incidunt, molestias.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#question-four">
                                    How do I sign-up ?
                                </button>
                            </h2>
                            <div id="question-four" className="accordion-collapse collapse" style={myStyle} aria-labelledby="flush-headingOne" data-bs-parent="#questions">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nemo eos incidunt natus nulla? Aut quasi perferendis vel voluptates voluptate aspernatur fugiat et iste ipsum accusantium reprehenderit libero unde assumenda ad, quae deserunt ipsam cupiditate obcaecati commodi error incidunt quos dolores nemo! Odit adipisci fuga porro accusamus cum! Incidunt, molestias.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-2">
            <button onClick={toggleStyle} type="button" className= "btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}
