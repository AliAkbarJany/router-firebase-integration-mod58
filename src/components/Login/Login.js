import React from 'react';
import useFirebse from '../../hooks/useFirebase';

const Login = () => {

    const{signInwithgoogle}=useFirebse();
    return (
        <div>
            <h3>please login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={signInwithgoogle}>Google sign In</button>
            </div>
            <form>
                
                <input type='email' placeholder='Your email' ></input>
                <br></br>
                
                <input type='password' placeholder='password' ></input>
                <br></br>
                
                <input type='submit' value='Login' ></input>
                    
            </form>
        </div>
    );
};

export default Login;