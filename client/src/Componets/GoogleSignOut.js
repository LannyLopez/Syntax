import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '922982704320-pdgv9aneald00po760gsp4qkds0fuvr0.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('You have successfully logged out');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;