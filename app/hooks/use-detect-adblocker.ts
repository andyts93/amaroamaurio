import { useState, useEffect } from 'react';

const REQUEST_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

const useAdsBlocked = () => {
    const [adsBlocked, setAdsBlocked] = useState<boolean>(false);

    useEffect(() => {
        const checkAdsBlocked = () => {
            fetch(REQUEST_URL, {
                method: 'HEAD',
                mode: 'no-cors'
            })
                .then((response) => {
                    setAdsBlocked(response.redirected);  // ads are blocked if request is redirected
                })
                .catch(() => {
                    setAdsBlocked(true);  // ads are blocked if request fails
                });
        };

        checkAdsBlocked();
    }, []);

    return adsBlocked;
};

export default useAdsBlocked;
