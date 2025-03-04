export type Role = keyof typeof ROLES;
export type Permission = (typeof ROLES)[keyof typeof ROLES][number];

export const USERS = [
    {
        email: 'admin@gmail.com',
        password: 'admin1!',
        roles: ['admin', 'manager', 'user']
    },
    {
        email: 'manager@gmail.com',
        password: 'manager1!',
        roles: ['manager', 'user']
    },
    {
        email: 'user@gmail.com',
        password: 'user1!',
        roles: ['user']
    }
];

export const ROLES = {
    admin: [
        'view:comments',
        'create:comments',
        'delete:comments',
        'update:comments'
    ],
    manager: ['view:comments', 'create:comments', 'update:comments'],
    user: ['view:comments', 'create:comments']
} as const;
