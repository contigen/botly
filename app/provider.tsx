'use client'

import { NextUIProvider } from '@nextui-org/react'
import { IconlyProvider } from 'react-iconly'

export function AppUIProvider({ children }: { children: React.ReactNode }) {
    return <NextUIProvider>{children}</NextUIProvider>
}
