import React from 'react'
import { HomePage } from './HomePage'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Error404Page } from './Error404Page'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />

            <main className="p-2">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/page-not-found" element={<Error404Page />} />
                    {/* Si la ruta no existe */}
                    <Route path='/*' element={<Navigate to={"page-not-found"} />}></Route>

                </Routes>
            </main>
        </UserProvider>
    )
}
