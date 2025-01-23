import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppConstextProvider = (props) => {
    const [user, setUser] = useState (null);
    const [showLogin, setShowLogin] = useState (false);
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const loadCreditsData = async () =>{
        try {
            const {data}  = await axios.get()
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }

    const value = {
        user,setUser,showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit

    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppConstextProvider