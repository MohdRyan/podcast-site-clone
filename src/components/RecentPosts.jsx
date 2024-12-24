const RecentPosts = () => {
  // Array of objects containing data for each card
  const cardData = [
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/news3.png?text=Card+1",
      title: "By John Walter",
      description: "Fall Womens Shoes Trends",
      points: [
        "Focus on details",
        "Use natural light",
        "Experiment with angles",
        "Keep backgrounds clean",
        "Adjust exposure settings",
        "Experiment with reflections",
        "Use the rule of thirds",
        "Incorporate leading lines",
        "Capture candid moments",
      ],
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/news1.png?text=Card+2",
      title: "By John Walter",
      description: "Our favotite accesories",
      points: [
        "Understand your audience",
        "Build strong connections",
        "Stay updated",
        "Develop a unique selling proposition",
        "Analyze market trends",
        "Focus on customer satisfaction",
        "Streamline operational processes",
        "Monitor financial performance regularly",
        "Adapt to changing consumer behavior",
      ],
    },
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/news2.png?text=Card+3",
      title: "By John Walter",
      description: "Morning routine to kick-start your journey.",
      points: [
        "Engage consistently",
        "Use relevant hashtags",
        "Share authentic stories",
        "Optimize post timing for your audience",
        "Leverage trending topics strategically",
        "Collaborate with influencers in your niche",
        "Create visually appealing content",
        "Encourage user-generated content",
        "Respond promptly to comments and messages",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-600 to-slate-950">
      {/* Header Section */}
      <div className="w-full h-auto flex justify-center">
        <div className="w-[80%] h-auto flex flex-col justify-center items-center text-white mt-14">
          <div>
            <h1 className="text-lg max-[400px]:text-sm ">
              LATEST ARTICLES FROM US
            </h1>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text max-[400px]:text-3xl">
              OUR RECENT POST
            </h1>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-h-8xl max-w-5xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6  ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-sm overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${card.imageUrl})`,
            }}
          >
            {/* Set consistent card size */}
            <div className="w-full h-[500px] max-[800px]:h-[250px] max-[500px]:h-[200px]   ">
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <h4 className="text-white text-md font-semibold ">
                  {card.title}
                </h4>
                <h1 className="text-white text-xl font-bold text-center max-[400px]:text-sm">
                  {card.description}
                </h1>
                <p className="text-white text-sm text-center px-4 py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur veniam quasi ut sapiente consequuntur ullam.
                </p>
                <button className="px-6 py-2 text-white rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 max-[400px]:text-xs">
                  Read Blog
                </button>
              </div>

              {/* Hover Points */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-lg font-bold mb-2">
                  Highlights
                </h4>
                <ul className="text-white text-sm space-y-2 ">
                  {card.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
