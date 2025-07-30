import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Beauty & Wellness Services - Premium Treatments & Pricing",
  description:
    "Transform yourself with our premium beauty and wellness treatments. Professional IV therapy, body sculpting, facials, and more at competitive prices.",
  keywords:
    "beauty services, wellness treatments, IV therapy, body sculpting, facials, botox, fillers, massage, spa treatments",
  openGraph: {
    title: "Beauty & Wellness Services - Premium Treatments",
    description: "Professional beauty and wellness treatments at competitive prices",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
