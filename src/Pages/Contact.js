import React from 'react'
import "../assets/css/Contact.css";



const Contact = () => {
    return (
        <div className='contact' id='Contact'>
            <div className="container contact-me-section pt-5 pb-5">
                <h1 className='d-flex align-items-center justify-content-center  fw-bolder pt-5 pb-5'>Contact-Me</h1>
                <div className="row g-3">
                    <div className="col-md-6 col-lg-12">

                        <form action="#">
                            <div className="mb-3">
                                <label for="gmail" className='form-label'>Gmail</label>
                                <input type="text" className='form-control' id='gmail' name='gmail' placeholder='Please Enter Your Gmail Here ' />
                            </div>
                            <div className="mb-3">
                                <label for="subject" className='form-label'>Subject</label>
                                <input type="text" className='form-control' id='subject' name='subject' placeholder='subject' />
                            </div>
                            <div className="mb-3">
                                <label for="message" className='form-label'>Message</label>
                                <textarea className='form-control' name="message" id="message" cols="30" rows="5" placeholder='Message'></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="formFileMultiple" class="form-label "> Send Multiple files </label>
                                <input class="form-control " type="file" id="formFileMultiple" multiple />
                            </div>
                            <button type='submit' className='btn btn-success px-5 py-2'>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact