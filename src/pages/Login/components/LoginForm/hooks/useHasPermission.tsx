import { useCallback } from 'react';

import { Permission, ROLES, USERS } from '../constants';

type UseHasPermissionProps = {
    userData: { username: string; password: string };
    permission: Permission;
};

export const useHasPermission = () =>
    useCallback(({ userData, permission }: UseHasPermissionProps) => {
        const { roles } = USERS.find(
            (user) =>
                user.email === userData.username &&
                user.password === userData.password
        ) || { roles: [] };

        return roles.some((role: string) => ROLES[role].includes(permission));
    }, []);
