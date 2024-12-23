const NewsLetter = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-blue-200 to-pink-200 h-auto py-[4rem] w-full flex justify-center items-center">
        <div className="w-[80%] h-auto flex  ">
          <div className="w-[50%] space-y-4 ">
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

          <div className="w-[50%] flex justify-center items-center  ">
            <div className="flex gap-2 ">
              <input
                type="text "
                placeholder="Enter Your Email "
                className="py-3 px-[7rem] rounded-3xl text-black"
              />
              <button className="bg-gradient-to-r from-orange-300 to-pink-500  px-4 py-1 rounded-full text-white font-semibold uppercase">
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
