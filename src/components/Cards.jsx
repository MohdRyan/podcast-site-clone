import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
  // Array of objects containing data for each card
  const cardData = [
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/Hacks-to-capture-aesthetically-appealing-images-on-camera.png?text=Card+1",
      author: "Dan Harmone",
      title: "Capture aestically appealing images",
      episode: "Episode 1 · Season 1",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/The-Alex-Hirsch-Business-Show.png?text=Card+2",
      author: "Dan Harmone",
      title: "The Alex Hirsch Business Show",
      episode: "Episode 2 · Season 1",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/How-to-get-organic-reach.png?text=Card+3",
      author: "Dan Harmone",
      title: "How to get Organic Reach",
      episode: "Episode 3 · Season 2",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/Jumping-on-business-trends.png?text=Card+4",
      author: "Dan Harmone",
      title: "Jumping on Business Trends",
      episode: "Episode 4 · Season 2",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/Books-to-learn-about-business.png?text=Card+5",
      author: "Dan Harmone",
      title: "Books to Learn About Business",
      episode: "Episode 5 · Season 3",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/How-to-get-organic-reach.png?text=Card+6",
      author: "Dan Harmone",
      title: "How to get Organic Reach",
      episode: "Episode 6 · Season 3",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/The-Alex-Hirsch-Business-Show.png?text=Card+7",
      author: "Dan Harmone",
      title: "The Alex Hirsch Business Show",
      episode: "Episode 7 · Season 4",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/Jumping-on-business-trends.png?text=Card+4?text=Card+8",
      author: "Dan Harmone",
      title: "Jumping on Business Trends",
      episode: "Episode 8 · Season 4",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gradient-to-bl from-slate-600 to-indigo-950 ">
      {/* Header Section */}
      <div className="w-full h-auto flex justify-center">
        <div className="w-[80%] h-auto flex flex-col justify-center items-center text-white mt-14 ">
          <div>
            <h1 className="text-lg">RELEASED THIS WEEK</h1>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text">
              LATEST EPISODES
            </h1>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto py-10 px-4 ">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-3">
              <div className="bg-white bg-opacity-5 rounded-sm   overflow-hidden shadow-lg group transition-transform transform hover:scale-110 ">
                <img
                  src={card.imageUrl} // Use the dynamic image URL
                  alt={`Card ${index + 1}`}
                  className="w-full h-60 object-cover  "
                />
                <div className="p-8 text-white max-[1030px]:hidden ">
                  <p className="text-sm text-white font-semibold ">
                    {card.author}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">
                    {card.title} {/* Use the dynamic title */}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {card.episode} {/* Use the dynamic episode info */}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
