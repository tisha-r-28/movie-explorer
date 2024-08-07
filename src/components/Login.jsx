import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { loginData, token } from '../atoms/UserAtom';
import { useNavigate } from 'react-router';

function Login() {

    const navigate = useNavigate();

    const [ formdata, setFormData ] = useAtom(loginData);

    const [ error, setError ] = useState({});

    const [ authToken, setAuthToken ] = useAtom(token);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formdata,
            [name] : value
        })
    }

    const handleError = () =>{
        const newEmail = JSON.parse(localStorage.getItem('email'));
        const newPassword = JSON.parse(localStorage.getItem('password'));
        let errors = {}
        if(formdata.email === ''){

            errors.emailError = 'Email is required!';

        }
        if(!formdata.password || formdata.password === ''){

            errors.passwordError = 'Password is required!'
            
        }

        if(formdata.password !== newPassword && formdata.email !== newEmail){
            errors.message = 'Enter valid credential';
        }else if(formdata.password !== newPassword){
            errors.message = 'Enter valid password to login';
        }else if(formdata.email !== newEmail){
            errors.message = 'Enter a valid email';
        }

        if(Object.keys(errors).length > 0){
            setError(errors)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const hasErrors = handleError();
        if (hasErrors) return;

        const newToken = `${formdata.email}345&45*$566hbvgfgs56878!4#5%50^`;
        setAuthToken(newToken);
    }

    useEffect(() => {
        if (authToken) {
            localStorage.setItem('token', JSON.stringify(authToken));
            navigate('/');
        }
    }, [authToken, navigate]);

    return (
        <>
            <section className="container-fluid" style={{height : '100vh', backgroundColor : "#040404"}}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 text-white mt-5 pt-5" style={{backgroundColor : "#040404"}}>
                            <h1 className='text-center'>Welcome Back!</h1>
                            <h1 className='fs-2 mt-4'>Login</h1>
                            <form className='mt-4' onSubmit={(e) => handleLogin(e)} method='post'>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' onChange={(e) => handleChange(e)} value={formdata.email}/>
                                    { error.emailError && <p className="text-danger my-1 p-0">{error.emailError}</p> }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name='password' onChange={(e) => handleChange(e)}  value={formdata.password}/>
                                    { error.passwordError && <p className="text-danger my-1 p-0">{error.passwordError}</p> }
                                </div>
                                { error.message && <p className="fs-5 text-danger my-1 p-0">{error.message}</p> }
                                <button type="submit" className="btn btn-primary mt-3">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
