import React from 'react'
import '../styles/globals.css'
import Login from '../components/Login'
import Sidebar from '../components/sidebar'
import { getServerSession } from 'next-auth'
import ClientProvider from '../components/ClientProvider'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { SessionProvider } from '../components/SessionProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode

}) {

  const session = await getServerSession(authOptions)
   
  return (
    <html>
      <head />
      <body>

        <SessionProvider session={session}>
          { !session ? (
            <Login/>
          ):(

          <div className='flex'>

            <div className='bg-[#202123] max-w-xs h-screen 
             overflow-auto md:min-w-[20rem]'>
             <Sidebar/>
            </div>

            <ClientProvider/>

            <div className="bg-[#343541] flex-1">{children}</div>

          </div>  
          )}
        </SessionProvider> 

      </body>
    </html>
  )
}


