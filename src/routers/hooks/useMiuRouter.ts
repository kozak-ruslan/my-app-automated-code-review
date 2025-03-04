import { Router } from '@toolpad/core';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMiuRouter = (initialPath: string): Router => {
    const [pathname, setPathname] = useState(initialPath);
    const navigate = useNavigate();

    const onNavigate = useCallback(
        (pathname: string | URL) => {
            setPathname(String(pathname));
            navigate(pathname);
        },
        [navigate]
    );

    return useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => onNavigate(path)
        };
    }, [onNavigate, pathname]);
};
