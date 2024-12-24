import img from "../images/Podcast-Logo.png";

const MainNav = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-wrap justify-evenly  items-center sticky top-0 z-50 bg-blue-900 max-[800px]:gap-y-3  max-[800px]:py-2 ">
        <div className=" h-auto bg-blue-900 flex justify-center items-center  ">
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div className="h-auto bg-blue-900 flex items-center justify-center text-white text-xs font-bold max-[800px]:hidden  ">
          <div className="flex flex-wrap justify-evenly gap-x-8 gap-y-4 ">
            <button className="relative group">
              HOME
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-700"></span>
            </button>
            <button className="relative group ">
              PAGES
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-700"></span>
            </button>

            <button className="relative group">
              TRENDING
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-700"></span>
            </button>
            <button className="relative group">
              UPCOMING
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-700"></span>
            </button>
            <button className="relative group ">
              NEWS
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-700"></span>
            </button>

            <button className="relative group">
              CONTACT
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-full transition-all duration-700"></span>
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-orange-500  px-4 py-1.5 rounded-lg">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="h-auto bg-blue-900 flex items-center justify-center ">
          <input
            className="px-8 py-2 rounded-xl text-xs font-semibold "
            type="text "
            placeholder="Search For Podcast"
          />
        </div>
      </div>
    </>
  );
};

export default MainNav;
