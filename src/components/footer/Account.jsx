import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AccountRedirect({ authStatus }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (authStatus === true) {
            navigate('/');
        } else {
            navigate('/signup');
        }
    }, [authStatus, navigate]);

    return null;
}

export default AccountRedirect;