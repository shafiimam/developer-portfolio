import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { Suspense } from 'react'
import Hero from '../components/Hero/Hero'
import Intro from '../components/Intro/Intro'
import Projects from '../components/Projects/Projects'
import GoToButton from '../components/UI/GoToButton'

export default function Home() {

  return (
    <Box mt={['50px', '170px', '70px']}>
      <Head>
        <title>Shafi Imam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/si-dev.svg" />
      </Head>
     
       <main className='main'>
        
        <Intro />
        <Projects />
      </main>
       

    </Box>
  )
}
