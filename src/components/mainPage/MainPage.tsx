import { useContext } from "react";

import "./MainPage.css";

import Navbar from "../navbar/Navbar";
import ShopItems from "../shopItems/ShopItems";
import Sidebar from "../sidebar/Sidebar";
import EcommerceItemsContext from "../../context/EcommerceItemsContext";
import Loading from "../loading/Loading";

function MainPage() {
  const { filteredEcommerceItems, loading } = useContext(EcommerceItemsContext);

  return (
    <>
      {!loading ? (
        <>
          <Navbar />
          <div className="ShopAndSidebar">
            <Sidebar />
            <ShopItems items={filteredEcommerceItems} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MainPage;
