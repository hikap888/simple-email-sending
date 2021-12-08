import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../image/leftSide.png'
import profilePic1 from '../image/rightSide.png'
import profilePic2 from '../image/Logo1.png'
import { PhoneInput } from './phone-input'
import { useState } from 'react'




const ContactUs: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [body, setBody] = useState('')
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Sending')
    const data = {
      name,
      email,
      phone
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }
  return (

    <div>
      <main className="w-full h-screen flex justify-center items-center">
        <Image src={profilePic} alt="left" />
        <div className="flex flex-col">
          <Image src={profilePic2} alt="left" className="mx-4" />
          <div className="border-solid border-2 border-black h-full w-full flex flex-col">
            <div className="border-b-4 border-solid border-black w-full my-3">
              <p> Advertis you Company</p>
            </div>
            <div>
              <h2 className="py-2">Full name</h2>
              <input type="text" onChange={(e) => { setName(e.target.value) }} className="w-full border-2 border-black text-gray-900 focus:outline-none text-sm" placeholder="name" />
            </div>
            <div>
              <h2 className="py-2">Email</h2>
              <input type="text" onChange={(e) => { setEmail(e.target.value) }} className="w-full border-2 border-black text-gray-900 focus:outline-none text-sm" placeholder="email" />
            </div>
            <div>
              <h2 className="py-2">Phone Number</h2>
              <input type="number" onChange={(e) => { setPhone(e.target.value) }} className="w-full border-2 border-black text-gray-900 focus:outline-none text-sm" placeholder="phone number" />
            </div>
            <div className="flex justify-center">
              <input type='submit' onClick={(e) => { handleSubmit(e) }} />
            </div>
          </div>
        </div>
        <Image src={profilePic1} alt="right" />
      </main >
    </div >
  )
}

export default ContactUs
