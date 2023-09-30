// import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants/index'

const Nav = () => {
  return (
    <header className='padding-x py-8 fixed z-10 w-full'>
        <nav className='flex justify-between items-center max-container max-sm:h-5'>
            <a href="">
                <img src={headerLogo} alt="Logo" width={130} height={29} className='max-sm:h-5' />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-sm:gap-10'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                          href={item.href} 
                          className="font-montserrat leading-normal text-slate-gray max-sm:text-[12px]">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            {/* <div className='hidden max-md:block'>
                <img 
                  src={hamburger}
                  alt='hamburger'
                  width={25}
                  height={25}
                />
            </div> */}
        </nav>
    </header>
  )
}

export default Nav