import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import { useForm } from "react-hook-form";


import { AuthContext } from "../context";



export const LoginForm = () => {


    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const user = {
            ...data,
            id: 'ABC'
        }

        login(user);

        navigate('/dashboard', {
            replace: true
        });
    }

    return (
        <div className="card shadow-lg">
            <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate 
                >
                                    
                    <div className="mb-3">
                        <label className="mb-2 text-muted">E-Mail Address</label>
                        <input 
                            type="email" 
                            className="form-control"  
                            {...register("email", 
                            { 
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
                            })}
                        />

                        {errors.email && <span>Por favor chequee el input del correo electronico</span>}
                    </div>

                    <div className="mb-3">
                        <label className="mb-2 text-muted">Password</label>
                        <input 
                            type="password" 
                            className="form-control"  
                            {...register("password", { required: true })}
                        />

                        {errors.password && <span>This field is required</span>}
                    </div>

                    

                    <div className="d-flex align-items-center">              
                        <button type="submit" className="btn btn-primary ms-auto">
                            Login
                        </button>
                    </div>
                </form>
            </div>
                            
            {/*<div className="card-footer py-3 border-0">
                <div className="text-center">
                    Don't have an account? <a href="register.html" className="text-dark">Create One</a>
                </div>
            </div>*/}
        </div>
    )
}
