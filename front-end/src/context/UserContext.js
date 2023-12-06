import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userInfo, setUserData] = useState({});

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            try {
                setUserData(JSON.parse(storedUserData));
            } catch (error) {
                console.error('Error parsing user data:', error);
                setUserData({});
            }
        }
    }, []);

    const setUserInfo = (info) => {
        setUserData(info);
        localStorage.setItem('userData', JSON.stringify(info));
    };

    const clearUserInfo = () => {
        setUserData({});
        localStorage.removeItem('userData');
    };

    return (
        <UserContext.Provider value={{ userData: userInfo, setUserInfo, clearUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
