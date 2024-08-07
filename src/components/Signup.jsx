import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { signupData } from '../atoms/UserAtom';
import { useNavigate } from 'react-router';

function Signup() {

    const navigate = useNavigate();

    const [ formData, setFormData ] = useAtom(signupData);

    const [ error, setError ] = useState({});

    const handleError = () => {
        const newEmail = JSON.parse(localStorage.getItem('email'));
        let errors = {}
        if(!formData.name ||  formData.name === ''){
            errors.nameError = "Name is required!"
        }
        if(!formData.email ||  formData.email === ''){
            errors.emailError = "Email is required!"
        }else if(formData.email === newEmail){
            errors.emailError = "User with provided email is already exist!"
        }
        if(!formData.password ||  formData.password === ''){
            errors.passwordError = "Password is required!"
        }

        if(Object.keys(errors).length > 0){
            setError(errors);
        }
    }

    const hanldeChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSignup = (e) => {
        e.preventDefault();
        handleError();
        localStorage.setItem('email', JSON.stringify(formData.email));
        localStorage.setItem('password', JSON.stringify(formData.password));
        navigate('/login');
    }

    return (
        <>
            <section className="container-fluid" style={{height : '100vh', backgroundColor : "#040404"}}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 text-white mt-5 pt-5" style={{backgroundColor : "#040404"}}>
                            <h1 className='text-center'>Welcome to Movie-Explorer!</h1>
                            <h1 className='fs-2 mt-4'>Sign-up</h1>
                            <form className='mt-4' onSubmit={(e) => handleSignup(e)} method='post'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' onChange={(e) => hanldeChange(e)}/>
                                    { error.nameError && <p className="text-danger my-1 p-0">{error.nameError}</p> }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={(e) => hanldeChange(e)}/>
                                    { error.emailError && <p className="text-danger my-1 p-0">{error.emailError}</p> }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name='password' onChange={(e) => hanldeChange(e)}/>
                                    { error.passwordError && <p className="text-danger my-1 p-0">{error.passwordError}</p> }
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Sign-up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
