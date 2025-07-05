import React from "react";
import { createContext } from "react";

import { useState, useEffect } from "react";
import Header from "../Header";
import Items from "../Items";
import Modal from "../Modal";

//Green (#28C76F) = Fresh

//Orange (#FF9F43) = Expiring Soon
//
//Red (#EA5455) = Expired

export const userContext = createContext();
const Home = () => {
  const [showmodal, setshowmodal] = useState(false);

  const handleshowmodal = () => {
    setshowmodal(true);
  };

  return (
    <div className="w-full h-screen bg-[#F7F8FA]">
      <userContext.Provider value={{ showmodal, setshowmodal }}>
        <Header />

        <Items />

        <Modal />
      </userContext.Provider>

      <section className="fixed bottom-0 w-full flex justify-center items-center">
        <div
          onClick={() => handleshowmodal()}
          className="text-white bg-[#28C76F] rounded-full w-12 h-12 flex justify-center items-center font-medium"
        >
          <span className="text-xl">+</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
