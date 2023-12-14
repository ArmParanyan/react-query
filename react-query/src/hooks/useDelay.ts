// useDelayedRefresh.ts
import { useEffect } from 'react';

const useDelayedRefresh = (delay: number = 3000): void => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Reload the page after the specified delay
            window.location.reload();
        }, delay);

        // Clear the timeout if the component unmounts or if the dependency array changes
        return () => clearTimeout(timeoutId);
    }, [delay]);
};

export default useDelayedRefresh;
