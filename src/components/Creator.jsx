const Creator = () => {
  return (
    <>
      <div className="bg-indigo-800 h-screen w-full text-white flex pt-20">
        <div className="w-[50%]">
          <div className="uppercase text-md font-semibold py-4 pl-20">
            about the creator
          </div>
          <div className=" text-5xl uppercase font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text pl-20 ">
            Curious minds
          </div>
          <div className="flex  flex-col gap-y-4 pl-20 pt-8">
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
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
              necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              Lorem ipsum dolor sit amet. elit.
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
              necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              dolore et delectus. elit. Saepe, rerum.
            </div>
            <div>
              <button className="uppercase bg-gradient-to-r from-pink-600 to-orange-600  px-4 py-1 rounded text-white font-semibold">
                get in touch
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] animate-bounce-slow ">
          <div>
            <img
              className="w-[28rem] h-auto ml-[10rem] "
              src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/themes/vw-podcast-audio-pro/assets/images/Curious_Minds/Mask_Group_img.png"
              alt=""
            />
          </div>
          <div className="text-lg font-semibold flex flex-col justify-center items-center ">
            <div className="text-xl">Haywood Ja Blomi</div>
            <div className="uppercase">Creator</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creator;
