import React, { useState } from 'react'
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton, SignIn } from '@clerk/clerk-react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>React-Auth</h1>
      <header>
      <SignedIn>
      <UserButton/>
      </SignedIn>
      
      <SignedOut>
      <SignInButton/>
      <SignUpButton/>
      </SignedOut>
      </header>
      
    </>
  )
}

export default App
