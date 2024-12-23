const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 h-[60vh] w-full flex justify-center py-10 ">
        <div className="w-[80%] h-auto grid  grid-cols-4 text-white gap-x-10">
          <div className="gap-y-6 flex  flex-col">
            <h1 className="uppercase text-xl font-semibold ">about us </h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              laboris nisi ut aliquip ex ea commodo consequat. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae abillo.
            </p>
            <h1 className="uppercase text-xl font-semibold ">
              my social profile{" "}
            </h1>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="uppercase text-xl font-semibold ">
              important links
            </h1>
            <a href="#">License</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Support </a>
            <a href="#">FAQ</a>
            <button className="bg-gradient-to-r from-blue-300 to-blue-800  rounded text-white font-semibold  w-[6rem] py-2">
              Buy Now
            </button>
          </div>
          <div className="flex flex-col gap-y-6">
            <h1 className="uppercase text-xl font-semibold ">get in touch</h1>
            <p className="cursor-pointer">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse eos
              soluta
            </p>
            <p className="cursor-pointer">nomsil@nomail.com</p>
            <p className="cursor-pointer">1-800 6363 4585</p>
          </div>
          <div>
            <h1 className="uppercase text-xl font-semibold  ">Instragram</h1>
            <div className="grid grid-cols-4 gap-3 mt-4">
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/374217737_3453140614996624_1815196004571127708_nlow.jpg"
                alt="one"
                className="w-[5rem] h-[4rem]"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/352796888_209850471486460_3790070777521032325_nlow.jpg"
                alt="one"
                className="w-[5rem] h-[4rem]"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/352840865_126917027080563_7661338116321051543_nlow.jpg"
                alt="one"
                className="w-[5rem] h-auto"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/353355864_1009048343666667_8998521307796240072_nlow.jpg"
                alt="one"
                className="w-[5rem] h-[4rem]"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/353597274_1318987958706249_8245594952925114677_nlow.jpg"
                alt="one"
                className="w-[5rem] h-auto"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/352876791_655614909371381_5640847821153300775_nlow.jpg"
                alt="one"
                className="w-[5rem] h-[4rem]"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/353081539_778998140365116_272108635920388783_nlow.jpg"
                alt="one"
                className="w-[5rem] h-auto"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/352863370_1335481887318204_1152919232470514411_nlow.jpg"
                alt="one"
                className="w-[5rem] h-[4rem]"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/353459751_658783349459679_7078855677245845035_nlow.jpg"
                alt="one"
                className="w-[5rem] h-auto"
              />
              <img
                src="https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/sb-instagram-feed-images/351776803_632494908809918_8677405482317291521_nlow.jpg"
                alt="one"
                className="w-[5rem] h-[4rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
