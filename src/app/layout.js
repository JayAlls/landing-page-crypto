import './globals.scss'
import Header from "../app/component/Header/Header";

export const metadata = {
  title: 'Start Your Crypto Portfolio',
  description: 'The Crypto Portfolio for your life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
