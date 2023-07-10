import { useContext, useEffect, useState } from 'react'
import menu from '../src/assets/menu.svg'
import x from '../src/assets/x.svg'
import AuthProvider, { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const NavbarRoot = () => {

  const {isAuthenticated}:any = useContext(AuthContext)

  const {logout}:any = useContext(AuthContext)

  const [navStyle, setNavStyle] = useState(false);

  const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !navStyle) {
        console.log("Passou de 150");
        setNavStyle(true);
      } else if (window.scrollY <= 50 && navStyle) {
        console.log("Retornou de 150");
        setNavStyle(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navStyle]);

  return (
    <>
      <nav className={
        'fixed top-0 w-full flex border-zinc-800 transition-all items-center shadow-xl bg-zinc-900 justify-between px-6 left-0 z-50 '+(
          navStyle ? ' h-16' :' h-20 ')}>
        <div className="flex flex-col text-white">
          <p className=' font-bold text-lg'>TROPA DE CHOQUE</p>
          <p >Paintball Club</p>
        </div>
        {isAuthenticated&&
          <div className='h-full flex items-center justify-end flex-1' onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
            <img className='w-8 ' src={mobileMenuOpen?x:menu} alt={''}></img>
          </div>          
        }
      </nav>    
      {isAuthenticated&&
        <div onClick={()=>setMobileMenuOpen(false)} className={'fixed w-full flex h-screen transition-all z-40 '+(mobileMenuOpen?"left-0":"left-full")+(navStyle ? ' pt-16' :' pt-20 ')}>
          <div className={'w-full text-white h-min shadow-xl flex-col bg-zinc-900 transition-all flex items-center justify-end'}>
            <Link to={"/"} className='  text-center py-4'>Pagina Inicial</Link>
            <Link to={"clients"} className='  text-center py-4'>Clientes</Link>
            <Link to={"/"}onClick={logout} className='  text-center py-4'>Sair</Link>
          </div>
        </div>           
      }  
    </>
  )
}

const Navbar = () => {

  return (
    <AuthProvider>
      <NavbarRoot></NavbarRoot>
    </AuthProvider>
  )
}

export default Navbar