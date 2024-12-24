const NewsLetter = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-blue-200 to-pink-200 h-auto py-[4rem] w-full flex justify-center items-center">
        <div className="w-[80%] h-auto flex max-[1000px]:flex-col ">
          <div className="w-[50%] space-y-4 max-[1000px]:w-full max-[1000px]:py-5   ">
            <div className="w-full h-auto font-semibold ">
              GET NOTIFIED ABOUT LATEST EPISODE
            </div>
            <div className="w-full h-auto text-3xl uppercase font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text">
              SIGN UP FOR NEWSLETTER!
            </div>
            <div className="w-full h-auto">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>

          <div className="w-[50%] flex justify-center items-center max-[1000px]:w-[80%] ">
            <div className="w-full flex justify-evenly  ">
              <input
                type="text "
                placeholder="Enter Your Email "
                className="py-3 px-[6rem] rounded-3xl text-black max-[1000px]:px-[3rem] max-[500px]:px-0"
              />
              <button className="bg-gradient-to-r from-orange-300 to-pink-500  px-4 py-1 rounded-full text-white font-semibold uppercase max-[500px]:text-xs  ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
