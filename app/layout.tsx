import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CasperAI - AI-Powered Research Assistant",
  description:
    "Transform your research with CasperAI - Upload papers and let AI create presentations, podcasts, and visual content",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
       
      </head>
      <body>{children}</body>
    </html>
  )
}
