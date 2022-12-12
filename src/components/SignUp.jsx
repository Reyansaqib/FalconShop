import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <>
            <h1 className='background text-light text-center textfont'>Sign Up </h1>
            <div className="signup">
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6 signupform">
                        <div class="mb-3 row mt-4">
                            <label for="Name" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="Name" placeholder="Falcon Shop" required/>
                            </div>
                        </div>
                        <div class="mb-3 row mt-4">
                            <label for="username" class="col-sm-2 col-form-label">Username</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="username" placeholder="falconshop" required/>
                            </div>
                        </div>
                        <div class="mb-3 row mt-4">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="email@example.com" required/>
                            </div>
                        </div>
                        <div class="mb-3 row mt-4">
                            <label for="phone" class="col-sm-2 col-form-label">Phone</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="phone" placeholder="1234567890" required/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="password" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="password" required/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="cpassword" class="col-sm-2 col-form-label">Confirm Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="cpassword" required/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <div class="col-sm-12">
                                <button type='submit' className='btn background text-success w-100'> Sign Up </button>
                            </div>
                        </div>
                        <Link to={'/login'} className="text-decoration-none">Already a user? Login here</Link>
                        
                    </div>
                    <div className="col-3">

                    </div>
                </div>

            </div>
        </>
  )
}
