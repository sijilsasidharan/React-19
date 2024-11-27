import React, { FormEvent } from 'react';
import './Login.css';

const Login = () => {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formDataJson: any = {};
        for (const [key, value] of formData.entries()) {
            formDataJson[key] = value;
        }
        console.log(formData, formDataJson);
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username </label>
        <input type='text' name='username' placeholder='Username'></input>
        <br />
        <label htmlFor='password'>Password </label>
        <input type='password' name='password' placeholder='Password'></input>
        <br />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login