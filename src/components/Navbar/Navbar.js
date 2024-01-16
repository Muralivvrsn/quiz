import LogoName from '../../assests/logo+name.svg'
const Navbar = () => {
  return (
    <div className="w-full mt-[32px] flex items-center justify-between">
      <div className='w-[191px] h-[39px] flex-shrink-0 ml-[100px]'>
        <img src={LogoName} alt="" />
      </div>
      <div className='flex mr-[100px] hidden lg:block'>
        <ul className='flex items-center'>
            <li className='mx-3 text-[#3A3740] font-inter text-lg font-normal'><button>Home</button></li>
            <li className='mx-3 text-[#3A3740] font-inter text-lg font-normal'><button>FlashCard</button></li>
            <li className='mx-3 text-[#3A3740] font-inter text-lg font-normal'><button>Contact</button></li>
            <li className='mx-3 text-[#3A3740] font-inter text-lg font-normal'><button>FAQ</button></li>
            <li className='mx-3 flex p-[13px_40px] justify-center items-center gap-2.5 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white font-inter text-lg font-medium'><button>Login</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
