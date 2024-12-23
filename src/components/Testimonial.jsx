import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  // Array of objects containing data for each card
  const cardData = [
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/our-testimonials2.png?text=Card+1",
      author: "Kimmy Hed",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis velit eum minus? Illo, sed. Qui ipsum deserunt, atque ea excepturi exercitationem eaque placeat vitae, natus corrunem eaque placeat vitae, natus corrupti nemo tempora sit, impedit nihil dolor doloremque! Consequatur odio error, autem laudantium deseruntt, impedit nihil dolor doloremque! Consequatur odio error, autem laudantium deserunt sunt!",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/team4.png?text=Card+2",
      author: "Dan Harmone",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis velit eum minunem eaque placeat vitae, natus corrupti nemo tempora sit, impedit nihil dolor doloremque! Consequatur odio error, autem laudantium deseruntui ipsum deserunt, atque ea excepturi exercitationem eaque placeat vitae, natus corrupti nemo tempora sit, impedit nihil dolor doloremque! Consequatur odio error, autem laudantium deserunt sunt!",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/team3.png?text=Card+3",
      author: "Varun ",
      title:
        "Lorem ipsum dolor nem eaque placeat vitae, natus corrupti nemo tempora sit, impedit nihil dolor doloremque! Consequatur odio error, autem laudantium deserunt, consectetur adipisicing elit. Facilis velit eum minus? Illo, sed. Qui ipsum deserunt, atque ea excepturi exercitationem eaque placeat vitae, natus corrupti nemo tempora sit, impedit nihil dolor doloremque! Consequatur odio error, autem laudantium deserunt sunt!",
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/team1.png?text=Card+4",
      author: "Anjelina",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis velit eum minus? Illo, sed. Qui ipsum deserunt, atque ea excepturi exercitationem eaque placeat vitae, natus corrupti nemo tempora sit, impedit nihil dolor doloremque! Consequatur odio error, autem laudantium deserunt sunt!",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
  };

  return (
    <div className="bg-gradient-to-br from-white to-pink-200 h-auto ">
      {/* Header Section */}
      <div className="w-full h-auto flex justify-center">
        <div className="w-[80%] h-auto flex flex-col justify-center items-center text-black mt-14">
          <div>
            <h1 className="text-lg uppercase">Testimonial</h1>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text uppercase">
              what people say!
            </h1>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto py-10 px-4 ">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <div key={index} className="px-3">
              <div className="flex flex-col items-center justify-center w-full h-auto">
                <img
                  src={card.imageUrl} // Use the dynamic image URL
                  alt={`Card ${index + 1}`}
                  className="w-[10rem] h-auto rounded-full object-cover flex   "
                />
                <div className="p-8 text-black">
                  <p className="text-md text-black font-semibold flex justify-center items-center ">
                    {card.author}
                  </p>
                  <h3 className="text-sm  text-black mb-2 text-center">
                    {card.title} {/* Use the dynamic title */}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
