// Start Import depandency
import { createContext, useContext, useState, useEffect, Children } from "react";

// 1. Create the context
const AuthContext = createContext();

// 2. Create the Provider Components
export const AuthProvider = ({children}) => {
    // UseState to manage on user and theme
    const [user, setUser] = useState(null);
    const [theme, setThem] = useState(localStorage.getItem('theme' || 'light'));
    
    // Effect to apply theme class to the body element
    useEffect(() => {
        const root = window.document.documentElement;
        console.log(root); // Console result of root
        root.classList.remove('light','dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme])

    // Auth Actions
    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    // Theme Actions
    const toggleTheme = () => {
        setThem((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <AuthContext.Provider value={{user, theme, login, logout, toggleTheme}}>
            {children}
        </AuthContext.Provider>
    )
}

// 3. Finaly Custom hook for easy consumption
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used without an AuthProvider');
    }
    return context;
}