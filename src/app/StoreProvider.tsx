'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import Topbar from '@/components/Topbar'
import SideNav from '@/components/Navbar'
import ThemeProvider from './ThemeProvider'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
})
{
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current)
    {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}>
        <ThemeProvider>
            <SideNav />
            <Topbar />
            <div>
                <main>
                    {children}
                </main>
            </div>
        </ThemeProvider>
    </Provider>
}