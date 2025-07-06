import React, { useState } from "react";
import { BsX } from "react-icons/bs";

function ModalSection({ isOpen, onClose, name, year, description, image, link }) {
    const [expanded, setExpanded] = useState(false);

    if (!isOpen) return null;

    const words = description.split(" ");
    const shouldTruncate = words.length > 10;
    const displayedText = expanded ? description : words.slice(0, 10).join(" ") + (shouldTruncate ? "..." : "");

    const toggleExpanded = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-all">
            <div
                className={`bg-black rounded-lg shadow-lg max-w-lg w-full p-6 relative transition-all duration-500 ease-in-out ${expanded ? "h-auto" : "max-h-[80vh]"
                    } overflow-auto`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    onClick={() => {
                        setExpanded(false);
                        onClose();
                    }}
                >
                    <BsX size={28} />
                </button>

                <h2 className="text-2xl font-semibold text-white mb-4">{name}</h2>
                <p className="text-gray-300 mb-2">Year: {year}</p>
                <img src={image} alt={name} className="mb-4 rounded w-full h-64 object-cover" />

                <p className="text-gray-200 mb-4 leading-relaxed">
                    {displayedText}
                    {shouldTruncate && (
                        <button
                            onClick={toggleExpanded}
                            className="text-cyan-400 hover:text-orange-400 ml-2 underline"
                        >
                            {expanded ? "Show Less" : "Read More"}
                        </button>
                    )}
                </p>

                <div className="flex justify-end space-x-4">
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold py-2 px-4 rounded"
                        onClick={() => {
                            setExpanded(false);
                            onClose();
                        }}
                    >
                        Close
                    </button>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Visit Project
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ModalSection;
