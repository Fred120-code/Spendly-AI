"use client"
import React from 'react'
import Wrapper from '../components/Wrapper'
import { useUser } from '@clerk/nextjs'

const page = () => {

  //recupere les informations de l'utilisateur connecté
  const {user} = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string;
  
  return (
   <Wrapper>
    <div>
      knkknlk
    </div>
   </Wrapper>
  )
}

export default page