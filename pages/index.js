import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Nav active="Home" />
      <main>
        <div className="relative pt-12 mt-12 text-[150px]">
          <h2 class="absolute text-transparent bg-clip-text bg-gradient-to-b from-dark-green/30 to-brown/30 left-1/2 -translate-x-[48.25%] -translate-y-[-2.25%]">REVIVER</h2>
          <h2 class="absolute text-black left-1/2 -translate-x-[50%]">REVIVER</h2>
        </div>
      </main>
    </div>
  )
}
