// app/layout.js
import { Analytics } from '@vercel/analytics/react'
import FloatingSocials from "@/section/FloatingSocials";
import Header from "@/section/Header";

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />

        {children}
        <Analytics />
        <FloatingSocials />
      </body>
    </html>
  )
}
