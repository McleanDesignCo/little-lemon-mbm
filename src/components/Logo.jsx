import Image from "next/image";
import { LogoImage } from '@/images/logos/nav-logo.png'
import navlogo from '@/images/logos/nav-logo.png'

export function Logo(props) {
  return (
    <Image 
    src={navlogo}
    width={120}
    height={60}
    alt="Little Lemon Restaurant Logo"/>
  )
}
