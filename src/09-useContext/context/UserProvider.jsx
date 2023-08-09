import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {

    // const user = {
    //     id: 1,
    //     name: 'David Flores',
    //     email: 'david.flores@itsoft.mx',
    // }

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
