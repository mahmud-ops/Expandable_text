import { useState } from "react";

interface props {
  children: string;
  maxChar?: number;
  expanded: boolean;
}

const Text = ({ children, maxChar, expanded }: props) => {
  const [isExpanded, setIsExpanded] = useState(!expanded);
  const [currentMaxChar, setCurrentMaxChar] = useState(maxChar || 100);

  function handleClick() {
    setIsExpanded(!isExpanded);
    setCurrentMaxChar(isExpanded ? maxChar || 100 : children.length);
  }

  return (
    <>
      <div className="p-3 bg-yellow-100 m-2 border rounded-lg">
        {isExpanded ? (
          <p>{children}</p>
        ) : (
          <p>{children.slice(0, currentMaxChar)}</p>
        )}
        <button onClick={handleClick} className="cursor-pointer text-gray-600">
          {isExpanded ? `Show less` : `...Show more`}
        </button>
      </div>
    </>
  );
};

export default Text;
