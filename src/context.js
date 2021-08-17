import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [is_sidebar_open, set_is_sidebar_open] = useState(false);
    const [is_modal_open, set_is_modal_open] = useState(false);

    const open_sidebar = () => {
        set_is_sidebar_open(true);
    }

    const close_sidebar = () => {
        set_is_sidebar_open(false);
    }

    const open_modal = () => {
        set_is_modal_open(true);
    }

    const close_modal = () => {
        console.log('saf');
        set_is_modal_open(false);
    }

    return (
        <AppContext.Provider value={{
            is_sidebar_open,
            is_modal_open,
            open_sidebar,
            open_modal,
            close_sidebar,
            close_modal
        }}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}