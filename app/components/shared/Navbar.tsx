import Link from 'next/link'

import NavLinks from './NavLinks'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <Link href="/">
        <h2 className="text-2xl font-bold">DevHub</h2>
      </Link>
      <NavLinks/>
      

    </nav>
  )
}
