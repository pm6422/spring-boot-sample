import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'Frontend/src/components/ui/toaster'
import { ThemeProvider } from 'Frontend/src/components/theme-provider'
import router from 'Frontend/src/router'
import 'Frontend/src/index.css'

export default function App() {
    return <React.StrictMode>
                <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                    <RouterProvider router={router} />
                    <Toaster />
                </ThemeProvider>
            </React.StrictMode>;
}

