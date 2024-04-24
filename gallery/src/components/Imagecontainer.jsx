import React from "react";

export const Imagecontainer = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" />

      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          photo ops by {image.user}
        </div>
        <ul>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Like:</strong>
            {image.likes}
          </li>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};