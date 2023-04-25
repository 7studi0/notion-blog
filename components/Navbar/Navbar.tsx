import Link from 'next/link'
import React from 'react'

interface LinkData {
  href: string
  title: string
}

interface Props {
  links: LinkData[]
}

const NavbarLinks = (props: Props) => {
  const { links } = props

  return (
    <ul className="text-gray-800 md:flex md:flex-row md:ml-auto">
      {links.map(link => (
        <li className="mx-3 md:mx-4" key={link.title}>
          <Link
            href={link.href}
            className="block px-2 py-1 md:p-2 rounded-lg font-semibold hover:text-gray-700 focus:text-gray-700 transition-all duration-300"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const links = [
    { href: '/', title: 'Home' },
    { href: '#', title: 'Twitter' },
    { href: '#', title: 'Qiita' },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container px-6 py-4 mx-auto md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-medium text-gray-800">
            Notion Blog
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline-purple"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:w-auto">
          <NavbarLinks links={links} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
