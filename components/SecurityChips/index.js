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
          className={`sm:p-4 p-2 h-[24px] sm:text-base text-sm flex items-center justify-center rounded-md cursor-pointer mt-24 ${
            index !== item.length ? "mr-3" : ""
          } `}
        >
          {item.privacy}
        </div>
      ))}
    </>
  );
}
