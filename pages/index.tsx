import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import FirstLogo from '../image/FirstLogo.png'
import { useEffect } from 'react'
const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/contact-us')
    }, 2000)
  }, [])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-screen flex justify-center items-center">
        <Image
          src={FirstLogo}
          alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        />
      </main >

      <footer>


      </footer>
    </div >
  )
}

export default Home
