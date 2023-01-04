import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Background from '../components/background'

export default function Home() {
  return (
    <div>
      <Nav active="About Us" />
      <Background />
      <main>
        <div className="text-center relative mt-12 text-[50px]">
            About Us
        </div>
        <div className="text-center">
          description/motivation placeholder
        </div>
        <div className="justify-center grid grid-cols-3">
          <div className="text-center col-start-2 col-span-1 bg-black/10">
            <div>
              Adelina Chau
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}