import React from 'react';
import useFirebse from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {

    const [signInWithGoogle, user]=useSignInWithGoogle (auth);

    
    return (
        <div>
            <h3>please login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={()=>signInWithGoogle()} >Google sign In</button>
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