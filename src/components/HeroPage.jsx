const HeroPage = () => {
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/17722676/pexels-photo-17722676/free-photo-of-microphone-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] min-h-screen w-full text-white flex  items-center justify-end  bg-no-repeat bg-cover bg-bottom  ">
        <div className=" flex flex-col w-[50%] mr-16 ">
          <div className="flex gap-3  text-xs font-semibold">
            <div>Rating 8.0</div>
            <div> 2023</div>
            <div>Motivational</div>
          </div>
          <div className="uppercase text-8xl font-extrabold flex flex-col  ">
            <h1>The </h1>
            <h1>Inspire </h1>
            <h1>Podcast </h1>
          </div>
          <div className="text-md font-semibold w-[80%] py-5 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis et accusamus id dicta libero aperiam reiciendis
              distinctio sunt mollitia accusantium. Reiciendis impedit, ipsam
              delectus laborum modi amet consectetur accusamus dolorum.
            </p>
          </div>
          <div className="w-full h-auto flex items-center gap-x-10 my-5  ">
            <div>
              <h1 className="text-md font-semibold cursor-pointer">
                PLAY PODCAST
              </h1>
            </div>
            <div>
              <button className="bg-gradient-to-r from-blue-300 to-blue-800  px-4 py-1 rounded text-white font-semibold">
                Explore All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
