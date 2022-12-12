import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <h1 className='background text-light text-center textfont'>Login </h1>
            <div className="login">
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6 loginform">
                        <div class="mb-3 row mt-4">
                            <label for="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="email@example.com"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="password" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="password"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <div class="col-sm-12">
                                <button type='submit' className='btn background text-success w-100'> Login </button>
                            </div>
                        </div>
                        <Link to={'/signup'} className="text-decoration-none">Not a user? Create account</Link>
                        
                    </div>
                    <div className="col-3">

                    </div>
                </div>

            </div>
        </>
    )
}
