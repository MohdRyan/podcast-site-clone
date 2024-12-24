const Creator = () => {
  return (
    <>
      <div className="bg-indigo-800  w-full text-white flex pt-20 max-[1000px]:flex-col  ">
        <div className="w-[50%] max-[1000px]:w-full max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:justify-center">
          <div className="uppercase text-md font-semibold py-4 pl-20 max-[1000px]:pl-0">
            about the creator
          </div>
          <div className=" text-5xl uppercase font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text pl-20 max-[1000px]:pl-0 max-[400px]:text-3xl  ">
            Curious minds
          </div>
          <div className="flex  flex-col gap-y-4 pl-20 pt-8 max-[1000px]:px-10">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipis icing elit. Atque,
              necessitatibus. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Unde eos, suscipit eius
              laudantium ipsum officia perferendis.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
              necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </div>
            <div className="max-[400px]:hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
              necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              Lorem ipsum dolor sit amet. elit.
            </div>
            <div className="max-[500px]:hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
              necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolore et delectus. elit. Saepe, rerum.
            </div>
            <div className="w-full max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center max-[500px]:text-xs  ">
              <button className="uppercase bg-gradient-to-r from-pink-600 to-orange-600  px-4 py-1 rounded text-white font-semibold ">
                get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] max-[1000px]:w-full max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:my-10 max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center  ">
          <div className="max-[1000px]:flex  max-[1000px]:w-full  max-[1000px]:items-center  max-[1000px]:justify-center flex flex-col items-center justify-center  ">
            <img
              className="w-[60%] h-auto animate-bounce-slow max-[1000px]:w-[60%]  "
              src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/themes/vw-podcast-audio-pro/assets/images/Curious_Minds/Mask_Group_img.png"
              alt=""
            />
          </div>
          <div className="text-lg font-semibold flex flex-col justify-center items-center max-[600px]:text-sm ">
            <div className="text-xl  max-[600px]:text-sm">Haywood Ja Blomi</div>
            <div className="uppercase max-[600px]:text-sm ">Creator</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creator;
