import { useContext } from "react";

import "./MainPage.css";

import Navbar from "../navbar/Navbar";
import ShopItems from "../shopItems/ShopItems";
import Sidebar from "../sidebar/Sidebar";
import EcommerceItemsContext from "../../context/EcommerceItemsContext";

function MainPage() {
  const { filteredEcommerceItems } = useContext(EcommerceItemsContext);

  return (
    <>
      <Navbar />
      <div className="ShopAndSidebar">
        <Sidebar />
        <ShopItems items={filteredEcommerceItems} />
      </div>
    </>
  );
}

export default MainPage;
