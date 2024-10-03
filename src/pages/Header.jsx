import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  return (
    <div className="flex fixed top-0  items-center justify-between p-[30px] opacity-100 px-4 py-4 border-b-2 w-full h-[75px] text-white">
      <div className="flex items-center flex-col">
        <h1 className="text-[30px] font-bold">Bek</h1>
        <span>Otajanov</span>
      </div>

      <div className="flex items-center gap-4">
        <h2 className="text-[23px]">+998-91-858-13-19</h2>
        <div>
        </div>


      </div>
    </div>
  );
};

export default Header;
