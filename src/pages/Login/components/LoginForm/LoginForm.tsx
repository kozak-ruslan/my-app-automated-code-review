import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

import { USERS } from './constants';
import { useHasPermission } from './hooks/useHasPermission';

export const LoginForm = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const onSubmit = () => {
        setIsUserLoggedIn(
            USERS.some(
                (user) =>
                    user.email === userData.username &&
                    user.password === userData.password
            )
        );
    };

    const hasPermission = useHasPermission();

    return (
        <>
            {isUserLoggedIn ? (
                <>
                    <div>user logged in</div>

                    {hasPermission({
                        userData,
                        permission: 'delete:comments'
                    }) && (
                        <div>
                            -- role:admin; permission: "delete:comments" --
                        </div>
                    )}
                    {hasPermission({
                        userData,
                        permission: 'view:comments'
                    }) && (
                        <div>
                            -- role:admin, manager, user; permission:
                            "view:comments" --
                        </div>
                    )}
                    {hasPermission({
                        userData,
                        permission: 'update:comments'
                    }) && (
                        <div>
                            -- roles:admin, manager; permission:
                            "update:comments" --
                        </div>
                    )}
                </>
            ) : (
                <Box>
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        type="email"
                        variant="standard"
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                username: e.target.value
                            })
                        }
                    />

                    <TextField
                        required
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                password: e.target.value
                            })
                        }
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onSubmit}
                    >
                        Login
                    </Button>
                </Box>
            )}
        </>
    );
};
