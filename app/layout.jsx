// app/layout.js
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
