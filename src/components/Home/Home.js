import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebse from '../../hooks/useFirebase';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <h2>This is home</h2>
            <p>USER Name:{user?user?.displayName:"there is no user name"}</p>
            <p>Email ::  {user?.email}</p>
        </div>
    );
};

export default Home;