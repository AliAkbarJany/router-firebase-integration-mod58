import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>please register</h3>
            <form>
                <input type="text" placeholder='NAME'></input>
                <br></br>
                <br></br>
                <input type='email' placeholder='Your email' ></input>
                <br></br>
                <br></br>
                <input type='password' placeholder='password' ></input>
                <br></br>
                <br></br>
                <input type='submit' value='Register' ></input>
                    
            </form>
        </div>
    );
};

export default Register;