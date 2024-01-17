import arrow from '../../assests/arrow_down.svg'

const FAQ = () => {
  return (
    <div className="ml-[130px] mt-[100px] mb-[100px]">
      <div className="font-inter text-[48px] font-bold tracking-[0.24px] gradient-text">
        FAQ
      </div>
      <div className='mt-[40px]'>
        <ul className='flex flex-col gap-[30px]'>
          <li className="flex justify-between items-center rounded-[12px] py-[24px] px-[17px] border border-[#217EEC] w-[848px] h-[58px] ">
            <div>Can education flashcards be used for all age groups?</div>
            <img src={arrow} alt="" />
          </li>
          <li className="flex justify-between items-center rounded-[12px] py-[24px] px-[17px] border border-[#217EEC] w-[848px] h-[58px] ">
            <div>How do education flashcards work?</div>
            <img src={arrow} alt="" />
          </li>
          <li className="flex justify-between items-center rounded-[12px] py-[24px] px-[17px] border border-[#217EEC] w-[848px] h-[58px] ">
            <div>Can education flashcards be used for test preparation?</div>
            <img src={arrow} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
