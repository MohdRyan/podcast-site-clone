const SupportCreators = () => {
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/7301210/pexels-photo-7301210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] min-h-screen w-full text-white flex  items-center justify-end  bg-no-repeat bg-cover   ">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-[50%] flex flex-col  items-center justify-center space-y-6 ">
            <p className="uppercase ">support creators </p>
            <h1 className="text-4xl font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text uppercase">
              support the show on patreon
            </h1>
            <div className="w-[60%] text-center">
              <p>
                Your Support Will Motivate Our Creators To Bring More Quality
                Content To You! Help Us Keep This Project Going. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-300 to-blue-800  px-4 py-1 rounded text-white font-semibold uppercase">
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportCreators;
