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
  const[data,setdata] = useState([{itemname:'',quantity:0,expdate:""}])
  const[searchdata,setsearchdata] = useState('')
  const[deletesucess,setdeletesuccess] = useState(false);
  const[editdata,seteditdata] = useState([]);
  const[loader,setloader] = useState(false);

  return (
    <div className="w-full h-screen bg-[#F7F8FA]">
      <userContext.Provider value={{ showmodal, setshowmodal,data,setdata,setsearchdata,searchdata,deletesucess,setdeletesuccess,loader,setloader,editdata,seteditdata }}>
        <Header />
          
        <Items />

        <Modal />
      </userContext.Provider>
    </div>
  );
};

export default Home;
