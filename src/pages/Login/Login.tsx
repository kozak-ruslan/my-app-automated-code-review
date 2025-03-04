import { FC } from 'react';

import { LoginForm } from './components/LoginForm';

export const Login: FC = () => {
    return (
        <div>
            <h1>Login</h1>

            <LoginForm />
        </div>
    );
};
