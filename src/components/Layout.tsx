import { Navigation } from './Navigation'
import { Footer } from './Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full min-h-screen bg-primary mx-auto transition-colors duration-150 flex flex-col">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
