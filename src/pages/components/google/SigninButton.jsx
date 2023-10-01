'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

function SigninButton() {
  return (
    <button onClick={signIn()}>
      Signin with Google
    </button>
  )
}

export default SigninButton
