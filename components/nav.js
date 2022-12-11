import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const links = [
    { label: "About Us", href:"/about"},
    { label: "Find Food", href: "/food"},
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact"},
]

export default function Nav({ active }) {
    console.log(active)
    return (
        <nav className="text-black font-light">
            <ul className="flex flex-wrap justify-between items-start sm:items-center p-8 mt-6 sm:mt-0 mx-4">
                <Link href="/">
                    <Image src={logo} alt="adelina's logo" width="75" height="75"/>
                </Link>
                <ul className="flex justify-items-center items-center text-[20px]">
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Link legacyBehavior href={href}>
                                <a className={`hover:text-dark-teal hover:drop-shadow-lg px-12 py-2 ${active === label ?  'text-dark-teal drop-shadow-lg bg-white bg-opacity-10' : ``}$`}>
                                    {label} 
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
      )
}