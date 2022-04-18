import { createContext, useState } from "react";


export const LoginContextToken = createContext();

const LoginContextTokenProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    return ( 
        <LoginContextToken.Provider value={{userData, setUserData}}>
            {children}
        </LoginContextToken.Provider>
     );
}
 
export default LoginContextTokenProvider;