const TopNav = () => {
  return (
    <>
      <div className="w-full h-auto bg-blue-950   flex justify-center  items-center  max-[600px]:hidden  ">
        <div className="w-[80%] h-auto flex justify-evenly flex-wrap">
          <div className=" h-auto flex items-center">
            <p className="text-white text-xs font-semibold py-2  ">
              Welcome To Audio Podcast Theme
            </p>
          </div>
          <div className="h-auto flex justify-end items-center text-xs font-semibold ">
            <div className="text-white flex space-x-2 ">
              <button>Support /</button>
              <button> Wishlist /</button>
              <button>My Account /</button>
              <button>Sign Up /</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
