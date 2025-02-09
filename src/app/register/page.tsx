import { useRouter } from 'next/router'
import React, { useState } from 'react'

function page() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassowrd] = useState("")
    const [error ,setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password != confirmPassword) {
            setError("Your passord does not match")
        }

        try {
            const res = await fetch("/api/auth/register",{
                method: "POST",
                headers : {"Content-Type" : "appication/json"},
                body: JSON.stringify({email,password})
            })

            const data = res.json()
            if(!res.ok){
                setError("Registration failed")
            }

            router.push("/login")

        } catch (error) {
            setError("Failed to register")
        }
    }
  return (
    <div>page</div>
  )
}

export default page