import { useState } from "react"







export default function Contact(){
    // values of inputs
    const [inputs,setInputs] = useState({
        name:'',
        email:'',
        message:''
    });
    // submit form
    const toogleInputs = (event) => {
        const {name,value} = event.target;
        setInputs((prevInputs)=>(
           { 
            ...prevInputs,[name]: value
           }
        ))
    }
    // function of handling
    const clickSubmit = (event) => {
        event.preventDefault();
        alert('hii .........................');
    }
    return(
        <div className="contact">
        <div className="contact-first">
            {/* phone */}
           <div>
                <p><b>Phone</b></p>                <p>(+212) 619-887858</p>                <p>(+212) 701-741309</p>
           </div> 
            {/* email */}
           <div>
                <p><b>Email</b></p>                <p>fadelellaherrami@gmail.com</p>                <p>f.errami2823@uca.ac.ma</p>
           </div> 
        </div>
           <div className="contact--second">
                <p className="conatct--text">I 
                    am always open to discussing new projects, opportunities in tech world,
                    partnerships and more so mentorship. 
                </p>
                <form onSubmit={clickSubmit} className="contact--form">
                    {/* name */}
                    <div>
                        <div><label htmlFor="name" ><b>Name</b></label></div> 
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={inputs.name}
                            onChange={toogleInputs}
                            className="contact--inputs"
                        />
                    </div>
                    {/* email */}
                    <div>
                        <div><label htmlFor="email" ><b>Email</b></label></div> 
                        <input 
                            id="email"
                            name="email"
                            type="email"
                            value={inputs.email}
                            onChange={toogleInputs}
                            className="contact--inputs"
                        />
                    </div>
                    {/* message */}
                    <div>
                        <div><label htmlFor="message" ><b>Message</b></label> </div>
                        <input 
                            id="message"
                            name="message"
                            type="text"
                            value={inputs.message}
                            onChange={toogleInputs}
                            className="contact--inputs"
                        />
                    </div>
                    {console.log(inputs)}
                    <div className="contact--btn">
                        <button>submit</button>
                    </div>
                </form>
           </div>
        </div>
    )
}