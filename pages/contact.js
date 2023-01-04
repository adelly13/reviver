import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Background from '../components/background'

export default function Home() {
  return (
    <div>
      <Nav active="Contact" />
      <Background />
      <main>
        <div className="text-center relative mt-12 text-[50px]">
          Contact
        </div>
      </main>
    </div>
  )
}