import React from 'react'

const LoginForm = () => {
  return (
    <div id='LoginPage'>
        <form className='LoginForm'>
            <fieldset >
            <legend>Log in into you account</legend>
                <label for = 'email' placeholder='Enter your email id'>Email</label>
                <input type="email" name="email" ></input>
                <br></br>
                <label for = 'password' placeholder='Enter your password'>Password</label>
                <input type = 'password' name = 'password'></input>
                <br></br>
                <input type = 'submit' value = 'Login'></input>
            </fieldset>
        </form>
    </div>
  )
}

export default LoginForm