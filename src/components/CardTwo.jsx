const CardTwo = () => {
  // Array of objects containing data for each card
  const cardData = [
    {
      imageUrl:
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/Hacks-to-capture-aesthetically-appealing-images-on-camera.png?text=Card+1",
      title: "Full Season",
      description: "A brief overview of capturing stunning images.",
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
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/The-Alex-Hirsch-Business-Show.png?text=Card+2",
      title: "Full Season",
      description: "Insights on business strategies.",
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
        "https://preview.vwthemesdemo.com/vw-audio-podcast/wp-content/uploads/sites/270/2023/10/How-to-get-organic-reach.png?text=Card+3",
      title: "Full Season",
      description: "Maximizing the organic reach.",
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
    <div className="bg-gradient-to-r from-slate-600 to-slate-900 ">
      {/* Header Section */}
      <div className="w-full h-auto flex justify-center">
        <div className="w-[80%] h-auto flex flex-col justify-center items-center text-white mt-14">
          <div>
            <h1 className="text-lg uppercase">Listen to the Complete Season</h1>
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-b from-pink-500 to-orange-500 text-transparent bg-clip-text">
              PODCAST SERIES
            </h1>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-h-8xl max-w-5xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center rounded-sm overflow-hidden shadow-lg group"
            style={{
              backgroundImage: `url(${card.imageUrl})`,
            }}
          >
            {/* Set consistent card size */}
            <div className="w-full h-[500px]">
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <h4 className="text-white text-md font-semibold uppercase">
                  {card.title}
                </h4>
                <h1 className="text-white text-2xl font-bold text-center">
                  {card.description}
                </h1>
                <p className="text-white text-sm text-center px-4 py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur veniam quasi ut sapiente consequuntur ullam.
                </p>
                <button className="mt-14 px-6 py-2 text-white rounded-lg bg-gradient-to-r from-orange-500 to-blue-500">
                  Watch Episodes
                </button>
              </div>

              {/* Hover Points */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-start p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-lg font-bold mb-2">
                  Highlights
                </h4>
                <ul className="text-white text-sm space-y-2">
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

export default CardTwo;
