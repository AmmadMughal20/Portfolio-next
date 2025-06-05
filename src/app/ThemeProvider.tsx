'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

export default function ThemeProvider({ children }: { children: React.ReactNode })
{
    const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode)

    useEffect(() =>
    {
        const html = document.documentElement
        if (isDarkMode)
        {
            html.classList.add('dark')
        } else
        {
            html.classList.remove('dark')
        }
    }, [isDarkMode])

    return <>{children}</>
}
