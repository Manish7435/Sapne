import React, { useState } from "react";
import { tags } from "@/constants";

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
