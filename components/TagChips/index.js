import React, { useState } from "react";
const tags = [
  { tag: "Happy", color: "#8fce00", neutral: "gray" },
  { tag: "Horror", color: "#F47C74", neutral: "gray" },
  { tag: "Exciting", color: "orange", neutral: "gray" },
  { tag: "Sad", color: "#FFC5D0", neutral: "gray" },
  { tag: "Seduction", color: "violet", neutral: "gray" },
  { tag: "Disappointment", color: "#E1D5D2", neutral: "gray" },
];

function TagChips({ handleTagClick }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleClick = (index, tag) => {
    setSelectedTag(index);
    handleTagClick(tag);
  };

  return (
    <div className="flex flex-wrap">
      {tags.map((item, index) => {
        return (
          <div
            key={item.tag}
            style={{
              background: selectedTag === index ? item.color : item.neutral,
            }}
            className={`sm:p-4 p-2 h-[24px] sm:text-base text-sm flex items-center justify-center rounded-md cursor-pointer mt-2 ${
              index !== item.length ? "mr-3" : ""
            } `}
            onClick={() => handleClick(index, item.tag)}
          >
            {item.tag}
          </div>
        );
      })}
    </div>
  );
}

export default TagChips;
