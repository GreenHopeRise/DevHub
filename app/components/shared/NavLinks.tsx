"use client"
import { navLinks } from '@/app/constants/navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function NavLinks() {
    const pathName = usePathname()

  return (
    <ul className='flex gap-6'>
        {
            navLinks.map((links)=>(
                <li key={links.href} className={pathName===links.href?'font-bold text-blue-600':''}>
                    <Link href={links.href}>
                    {links.label}
                    </Link>

                </li>
            ))
        }
    </ul>
  )
}
