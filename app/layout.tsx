

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from "@clerk/themes"
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Julu e-learning',
  description: 'Let&apos;s create a better world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ThemeProvider attribute='class' defaultTheme='system' enableSystem >
    <ClerkProvider
    appearance={{
      baseTheme: dark
    }}>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
    // </ThemeProvider>
  )
}
