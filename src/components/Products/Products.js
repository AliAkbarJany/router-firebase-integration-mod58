import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebse from '../../hooks/useFirebase';


const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <h4>NAME:: {user ? user.displayName : 'nothing'}</h4>
        </div>
    );
};

export default Products;