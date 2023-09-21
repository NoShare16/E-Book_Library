import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white bg-black'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href="/">
          <Image
            src={"/neuralNetwork.jpeg"}
            alt='logo'
            width={55}
            height={40}
          />
        </Link>

        <Image
          src={"/hamburger-menu.svg"}
          width={30}
          height={30}
          alt='Menu'
          className='block md:hidden'
        />

        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <a href="https://www.alex-wirschke.com/" target='_blank'>
              My Portfolio
            </a>
          </li>
          <li className='body-text !font-normal'>
            <a href="https://github.com/NoShare16" target='_blank'>
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar