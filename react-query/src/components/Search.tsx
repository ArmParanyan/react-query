import React, { useEffect, useState } from 'react';

const YourComponent: React.FC = () => {
    const [delayedRefresh, setDelayedRefresh] = useState(false);

    const handleChange = () => {
        setDelayedRefresh(true);
    };

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (delayedRefresh) {
            timeoutId = setTimeout(() => {
                // Reload the page after the specified delay
                window.location.reload();
            }, 3000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [delayedRefresh]);

    return (
        <div>
            <input type="search" onChange={handleChange}/>

        </div>
    );
};

export default YourComponent;
