import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />} 
        {isOpen ? "Menyuni Yopish" : "Menyuni Ochish"}
      </button>

      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-md rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          <li className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer">🏠 Bosh sahifa</li>
          <li className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer">ℹ️ Haqida</li>
          <li className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 cursor-pointer">📞 Aloqa</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
