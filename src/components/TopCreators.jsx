const TopCreators = () => {
  return (
    <div className="w-full h-auto mt-12 mb-[3rem]">
      {/* Heading Section */}
      <div className="flex flex-col gap-y-6 text-black justify-center items-center max-[600px]:gap-y-2 ">
        <p className="uppercase font-semibold  ">top creators of this week</p>
        <h1 className="text-3xl uppercase font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text max-[600px]:text-2xl">
          meet the podcast host
        </h1>
      </div>

      {/* Creators Section */}
      <div className="w-full h-auto flex justify-evenly items-center mt-16 max-[600px]:mt-4">
        {/* Creator 1 */}
        <div className="relative w-[20%] flex flex-col items-center ">
          <div className="relative w-auto h-auto  group">
            <img
              src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/team4.png"
              alt="Christ Jemkede"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 rounded-full group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
              <div className="flex space-x-6">
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-facebook-f hover:text-blue-600"></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-twitter hover:text-blue-600 "></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-instagram hover:text-blue-600"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-3">
            <p className="font-semibold cursor-pointer max-[450px]:text-sm  ">
              Christ Paul
            </p>
            <p className="uppercase text-xs font-semibold max-[450px]:text-xs ">
              creator
            </p>
          </div>
        </div>

        {/* Creator 2 */}
        <div className="relative w-[20%] flex flex-col items-center">
          <div className="relative w-auto h-auto  group">
            <img
              src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/team3.png"
              alt="Brad Pitkar"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 rounded-full group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
              <div className="flex space-x-6">
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-facebook-f hover:text-blue-600"></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-twitter hover:text-blue-600"></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-instagram hover:text-blue-600"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-3 ">
            <p className="font-semibold cursor-pointer max-[450px]:text-sm ">
              Brad Pitkar
            </p>
            <p className="uppercase text-xs font-semibold">creator</p>
          </div>
        </div>

        {/* Creator 3 */}
        <div className="relative w-[20%] flex flex-col items-center">
          <div className="relative w-auto h-auto group">
            <img
              src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/team2.png"
              alt="Anjelina Joseph"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 rounded-full group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
              <div className="flex space-x-6">
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-facebook-f hover:text-blue-600"></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-twitter hover:text-blue-600"></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-instagram hover:text-blue-600"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-3">
            <p className="font-semibold cursor-pointer max-[450px]:text-sm  ">
              Alena Jos
            </p>
            <p className="uppercase text-xs font-semibold">creator</p>
          </div>
        </div>

        {/* Creator 4 */}
        <div className="relative w-[20%] flex flex-col items-center">
          <div className="relative w-auto h-auto  group">
            <img
              src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/team1.png"
              alt="Shalini Tiwari"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 rounded-full group-hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
              <div className="flex space-x-6">
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-facebook-f hover:text-blue-600"></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-twitter hover:text-blue-600"></i>
                </a>
                <a href="#" className="text-white text-xl">
                  <i className="fab fa-instagram hover:text-blue-600"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-3">
            <p className="font-semibold cursor-pointer max-[450px]:text-sm  ">
              Tiwari 
            </p>
            <p className="uppercase text-xs font-semibold">creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
