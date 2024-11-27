import React, { FormEvent } from 'react';
import './Login.css';

const Login = () => {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const dieteryRestrictions = formData.getAll('dieteryRestrictions');

        
        console.log({ ...data, dieteryRestrictions})
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username </label>
        <input type='text' name='username' placeholder='Username'></input>
        <br />
        <label htmlFor='password'>Password </label>
        <input type='password' name='password' placeholder='Password'></input>
        <br />
        <label htmlFor='description'>Description </label>
        <textarea name='description' placeholder='Description'></textarea>
        <br />
        <fieldset>
          <legend>Employement status</legend>
          <label>
            <input type="radio" name='employementStatus' value='unemployed' />
            Unemployed
          </label>
          <label>
            <input type="radio" name='employementStatus' value='part-time' />
            Part time
          </label>
          <label>
            <input type="radio" name='employementStatus' value='full-time' />
            Full time
          </label>
        </fieldset>
        <br />
        <fieldset>
          <legend>Dietery Restrictions</legend>
          <label>
            <input type="checkbox" name='dieteryRestrictions' value='kosher' />
            Kosher
          </label>
          <label>
            <input type="checkbox" name='dieteryRestrictions' value='vegan' />
            Vegan
          </label>
          <label>
            <input type="checkbox" name='dieteryRestrictions' value='glutan-free' />
            Glutan-free
          </label>
        </fieldset>
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login