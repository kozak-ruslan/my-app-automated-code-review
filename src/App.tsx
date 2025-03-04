import { extendTheme } from '@mui/material';
import { DashboardLayout, PageContainer } from '@toolpad/core';
import { AppProvider } from '@toolpad/core/AppProvider';

import { Routers, useMiuRouter } from './routers';
import { NAVIGATION } from './routers/constants';

const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536
        }
    }
});

export const App = () => {
    const miuRouter = useMiuRouter('/dashboard');

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={miuRouter}
            theme={demoTheme}
        >
            <DashboardLayout>
                <PageContainer>
                    <Routers />
                </PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
};

export default App;
