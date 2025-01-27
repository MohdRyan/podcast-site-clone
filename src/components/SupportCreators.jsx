const SupportCreators = () => {
  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/7301210/pexels-photo-7301210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  w-full h-[40rem] text-white flex  items-center justify-end  bg-no-repeat bg-cover  py-5  max-[800px]:h-[25rem] max-[50px]:h-[20rem] ">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-[50%] mt-10  flex  flex-col  items-center justify-center space-y-6 max-[1200px]:w-full ">
            <p className="uppercase ">support creators </p>
            <h1 className="text-4xl font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text uppercase max-[700px]:text-3xl max-[550px]:text-xl max-[380px]:text-lg">
              support the show on patreon
            </h1>
            <div className="w-[60%] text-center max-[650px]:w-[80%]">
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
