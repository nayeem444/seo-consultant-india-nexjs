import { SpeedInsights } from "@vercel/speed-insights/next"

import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <SpeedInsights/>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
