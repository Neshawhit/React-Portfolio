import React from 'react'

const Contact = () => {
    return (
        <div id="container contact" className='col-5 mx-5 ' >
            <h1 className='m-3' style={{ fontFamily: 'Indie Flower' }}>Contact</h1>
            <form className='border border-primary form-control form-group container ' style={{marginLeft:'65%' }} >
                <div className='name'>
                    <label for="Name" className="form-label m-3">Name:</label>
                    <input style={{ height: '60px', width: '400px', marginRight: '5px', borderRadius: '9px', marginTop: '30px'}} type="text" id='name' ></input>
                </div>
                <div className="form-group">
                    <label for="email" className="form-label m-3">Email: </label>
                    <input style={{ height: '60px', width: '400px', marginLeft: '8px', borderRadius: '9px', marginTop: '30px'}} type="email"  className="" id="exampleFormControlInput1" ></input>
                </div>
                <div className="">
                    {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                    <label  for="Message" className="form-label m-3 d-flex ">Message:</label>
                    <textarea style={{ height: '100px', width: '400px', marginLeft: '75px', borderRadius: '9px', marginTop: '5px', padding:'5px'}} className="mb-3" id="exampleFormControlTextarea1" placeholder='write message here'></textarea>
                </div>
                <button className='' style={{cursor: 'pointer', justifyContent: 'center', backgroundColor: 'lightblue', width: '200px', height: '40px', borderRadius: '9px', marginTop: '20px', marginBottom:'20px', marginLeft:'70px'}} type="submit"> Contact Me!</button>
            </form>
        </div>

    )
}


// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address


export default Contact;