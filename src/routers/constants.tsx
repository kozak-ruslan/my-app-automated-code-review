import {
    BarChart,
    Dashboard,
    Description,
    Home,
    Layers,
    Login,
    RoundaboutLeft,
    ShoppingCart
} from '@mui/icons-material';
import { Navigation } from '@toolpad/core/AppProvider';

export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items'
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <Dashboard />
    },
    {
        segment: 'login',
        title: 'Login',
        icon: <Login />
    },
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCart />
    },
    {
        segment: 'home',
        title: 'Home',
        icon: <Home />
    },
    {
        segment: 'about',
        title: 'About',
        icon: <RoundaboutLeft />
    },
    {
        kind: 'divider'
    },
    {
        kind: 'header',
        title: 'Analytics'
    },
    {
        segment: 'reports',
        title: 'Reports',
        icon: <BarChart />,
        children: [
            {
                segment: 'sales',
                title: 'Sales',
                icon: <Description />
            },
            {
                segment: 'traffic',
                title: 'Traffic',
                icon: <Description />
            }
        ]
    },
    {
        segment: 'integrations',
        title: 'Integrations',
        icon: <Layers />
    }
];
