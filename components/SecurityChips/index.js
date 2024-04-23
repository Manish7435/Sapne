import React, { useState } from "react";

const items = [
  { privacy: "Public", color: "#8B93FF", neutral: "gray" },
  { privacy: "Private", color: "#FF6C22", neutral: "gray" },
];

export default function SecurityChips({ onClickHandler }) {
  const [selectedChip, setSelectedCHip] = useState(null);

  const handleClick = (index, privacy) => {
    setSelectedCHip(index);
    onClickHandler(privacy);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={item.privacy}
          onClick={() => handleClick(index, item.privacy)}
          style={{
            background: selectedChip === index ? item.color : item.neutral,
          }}
          className={`p-4 h-[24px] flex items-center justify-center rounded-md cursor-pointer ${
            index !== 0 ? "ml-3" : ""
          }`}
        >
          {item.privacy}
        </div>
      ))}
    </>
  );
}
