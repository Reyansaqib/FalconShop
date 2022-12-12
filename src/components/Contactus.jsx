import React from 'react'
import { Link } from 'react-router-dom'

export default function Contactus() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <div className="col-sm-6 col-12">
            <div className="col-3 contact">
            <a className='text-decoration-none text-light' href="mailto:reyansaqib@gmail.com">Reyansaqib@gmail.com</a>
            </div>
            <div className="col-3 contact">
            7006788959
            </div>
            <div className="col-3 contact">
            Dreygam,Budgam
            </div>
            
        </div>
        <div className="col-sm-6 col-12">
                        <div class="mb-3 row mt-4">
                            <label for="Name" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="Name" placeholder="Falcon Shop" required/>
                            </div>
                        </div>
                        <div class="mb-3 row mt-4">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="falconshop" required/>
                            </div>
                        </div>
                        <div class="mb-3 row mt-4">
                            <label for="subject" class="col-sm-2 col-form-label">Subject</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="subject"  required/>
                            </div>
                        </div>
                        <div class="mb-3 row mt-4">
                            <label for="message" class="col-sm-2 col-form-label">Message</label>
                            <div class="col-sm-10">
                                <textarea  className="form-control" id='message' name="message" rows={5}> </textarea>
                            </div>
                        </div>
                        
                        <div class="mb-3 row">
                            <div class="col-sm-12">
                                <button type='submit' className='btn background text-success w-100'> Submit </button>
                            </div>
                        </div>
                        
                    
        </div>
    </div>
    </div>
    </>
  )
}
