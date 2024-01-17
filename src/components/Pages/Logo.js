import Add from '../../assests/add.svg'
import LogoName from '../../assests/logo.png'

const Logo = () => {
  return (
    <div className='flex px-[100px] mt-[180px] justify-between items-center'>
      <div className='flex items-center justify-center gap-2'>
        <img src={LogoName} alt="" />
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <img src={Add} alt="" />
      <div className="font-inter text-[28px] font-semibold gradient-text">
      Create Flashcard
      </div>
      </div>
    </div>
  );
};

export default Logo;
