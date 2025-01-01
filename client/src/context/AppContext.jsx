import { createContext, useState } from "react";

export const AppContext = createContext()

const AppConstextProvider = (props) => {
    const [user, setUser] = useState (null);

    const value = {
        user,setUser

    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppConstextProvider