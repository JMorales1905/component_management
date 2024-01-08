'use client'
import type { Metadata } from 'next'
import './globals.css'

import SplashScreen from '@/components/SplashScreen'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from "react"


// export const metadata: Metadata = {
//   title: 'IkigaiJAM',
//   description: 'Personal Website Portfolio',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname()
  const isHome = pathName === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

  return (
    <html className='bg-Void' lang="en">
      <body>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            {children}
          </>
        )}
      </body>
    </html>
  )
}
