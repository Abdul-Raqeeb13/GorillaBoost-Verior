import { useState } from "react";

const cardData = [
  { id: 1, description: "Add Your Brand Name With Description", image: "/assets/Overlay0.svg" },
  { id: 2, description: "Add A Logo To Represent Your Brand", image: "/assets/Overlay (1).svg" },
  { id: 3, description: "Add your Secondary Brand Logo", image: "/assets/Overlay (2).svg" },
  { id: 4, description: "Add Color Representing Your Brand", image: "/assets/Overlay (3).svg" },
  { id: 5, description: "Add Brand Tone And Voice", image: "/assets/Overlay (3.1).svg" },
  { id: 6, description: "Add Target Audience", image: "/assets/Overlay (4).svg" },
  { id: 7, description: "Add Call To Action (optional)", image: "/assets/Overlay (5).svg" },
];

const toneOptions = ["Professional", "Friendly", "Casual", "Serious"];

function BMCard() {
  const [activeCard, setActiveCard] = useState(null);
  const [cardValues, setCardValues] = useState({});
  const [input, setInput] = useState("");
  const [tags, setTags] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [colorTags, setColorTags] = useState({});
  const [selectedImage, setSelectedImage] = useState({});

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter" && input.trim()) {
      if (id === 6 || id === 7) {
        setTags(prev => ({
          ...prev,
          [id]: [...(prev[id] || []), input.trim()],
        }));
      } else if (id === 4) {
        setColorTags(prev => ({
          ...prev,
          [id]: [...(prev[id] || []), { name: input.trim(), code: `#${input.trim().toLowerCase()}` }],
        }));
      } else {
        setCardValues(prev => ({ ...prev, [id]: input.trim() }));
      }
      setInput("");
      setActiveCard(null);
    }
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(prev => ({ ...prev, [id]: URL.createObjectURL(file) }));
      setCardValues(prev => ({ ...prev, [id]: file.name }));
    }
  };

  const handleSelectChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(selected);
    setCardValues(prev => ({ ...prev, 5: selected }));
    setActiveCard(null);
  };

  const removeTag = (id, tag) => {
    if (id === 4) {
      setColorTags(prev => ({
        ...prev,
        [id]: prev[id].filter(t => t.name !== tag),
      }));
    } else {
      setTags(prev => ({
        ...prev,
        [id]: prev[id].filter(t => t !== tag),
      }));
    }
  };

  return (
    <div className="flex flex-wrap bg-lightGray">
      {cardData.map((card, index) => {
        const cardWidthClass =
          index < 4 ? "w-full sm:w-1/2 md:w-1/3 lg:w-1/4" : "w-full sm:w-1/2 md:w-1/3";

        return (
          <div key={card.id} className={`${cardWidthClass} bg-commonBgColor py-3 px-3`}>
            <div className="bg-lightGray rounded-xl shadow-md p-4 pt-0 px-6 flex flex-col justify-between h-full">
              <div className="flex flex-col items-center text-center">
                {card.id === 2 || card.id === 3 ? (
                  <>
                    {selectedImage[card.id] ? (
                      <div className="w-full">
                        <img
                          src={selectedImage[card.id]}
                          alt="Uploaded"
                          className="w-full h-32 rounded-md object-contain"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="p-5 text-cen">
                          <img
                            src={card.image}
                            alt="Card Icon"
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <p className="text-white font-ibm text-17 font-medium">{card.description}</p>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {card.id === 4 && colorTags[card.id]?.length > 0 ? null : (
                      <div className="p-5">
                        <img src={card.image} alt="Card Icon" className="w-12 h-12 object-cover" />
                      </div>
                    )}
                    <p className="text-white mb-4 font-ibm text-17 font-medium">{card.description}</p>

                    {activeCard === card.id && card.id === 5 && (
                      <select
                        multiple
                        className="w-full px-4 py-2 mb-2 rounded-md"
                        onChange={handleSelectChange}
                      >
                        {toneOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    )}

                    {activeCard === card.id && card.id !== 5 && (
                      <input
                        type="text"
                        className="w-full text-white bg-extraLightGray px-4 py-2 mb-2 rounded-md"
                        placeholder="Type here and press Enter"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e, card.id)}
                      />
                    )}

                    {card.id === 5 && selectedOptions.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2 justify-center">
                        {selectedOptions.map((option, idx) => (
                          <span key={idx} className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">
                            {option}
                          </span>
                        ))}
                      </div>
                    )}

                    {cardValues[card.id] && typeof cardValues[card.id] === "string" && card.id !== 5 && (
                      <p className="text-white mb-2 text-17 font-medium">{cardValues[card.id]}</p>
                    )}

                    {card.id === 4 && colorTags[card.id]?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2 justify-center">
                        {colorTags[card.id].map((color, idx) => (
                          <span
                            key={idx}
                            className="bg-redColor text-white px-3 py-2 rounded-md text-xs"
                          >
                            {color.name}
                            <span
                              className="text-white cursor-pointer ml-2"
                              onClick={() => removeTag(card.id, color.name)}
                            >✖</span>
                          </span>
                        ))}
                      </div>
                    )}

                    {(card.id === 6 || card.id === 7) && tags[card.id]?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2 justify-center">
                        {tags[card.id].map((tag, idx) => (
                          <span key={idx} className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">
                            {tag}
                            <span className="text-red-500 cursor-pointer ml-2" onClick={() => removeTag(card.id, tag)}>✖</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Footer Button */}
              <div className="mt-4">
                {(card.id === 2 || card.id === 3) ? (
                  <>
                    <button
                      className="bg-extraLightGray px-10 py-2 w-full text-red-500 rounded-md font-ibm font-semibold text-14"
                      onClick={() => document.getElementById(`file-input-${card.id}`).click()}
                    >
                      + Add
                    </button>
                    <input
                      id={`file-input-${card.id}`}
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, card.id)}
                    />
                  </>
                ) : (
                  activeCard !== card.id &&
                  (
                    (card.id === 1 && !cardValues[card.id]) || // For Card 1: show only if value not set
                    (card.id !== 1 && (card.id !== 5 || selectedOptions.length === 0))
                  ) && (
                    <button
                      className="bg-extraLightGray px-10 py-2 w-full text-red-500 rounded-md font-ibm font-semibold text-14"
                      onClick={() => setActiveCard(card.id)}
                    >
                      + Add
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BMCard;
