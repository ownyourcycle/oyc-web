import { useState, useEffect } from 'react';

type CookieConsent = 'accepted' | 'rejected' | undefined;

export const useCookieConsent = () => {
    const [consent, setConsent] = useState<CookieConsent>();

    useEffect(() => {
        // Check if we already have stored consent
        const storedConsent = localStorage.getItem('cookie-consent');
        if (storedConsent) {
            setConsent(storedConsent as CookieConsent);
        }
    }, []);

    const acceptCookies = () => {
        setConsent('accepted');
        localStorage.setItem('cookie-consent', 'accepted');
    };

    const rejectCookies = () => {
        setConsent('rejected');
        localStorage.setItem('cookie-consent', 'rejected');
    };

    return {
        consent,
        acceptCookies,
        rejectCookies,
    }
}
