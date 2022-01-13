import { Navigation } from './Navigation'

export const Layout = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-primary mx-auto transition-colors duration-150">
      <Navigation />
      <main className="min-h-screen">{children}</main>
    </div>
  )
}
