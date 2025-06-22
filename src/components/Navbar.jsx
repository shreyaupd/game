import {useRef} from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';

const Navbar = () => {
    const navContainerRef = useRef(null);
  return (
    <div ref={navContainerRef} className='inset-x-0 h-16 bg-white fixed transition-all duration-700 top-4 z-50 sm:inset-x-6'>
       <header className='absolute w-full top-1/2 -translate-y-1/2'>
       <nav className='flex size-full item-center justify-between p-4'>
        <div className="flex  gap-7">
            <img src="/img/logo.png" alt="logo" className='h-10' />
            <Button 
            id="product-button"
            title="Products"
            rightIcon={< TiLocationArrow/>}
            containerClass="bg-blue-50 md:flex hidden item-center justify-center gap-2"
            />

        </div>
       </nav>

       </header>
    </div>
  )
}

export default Navbar