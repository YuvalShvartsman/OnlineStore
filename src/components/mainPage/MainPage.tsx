import EcommerceItemsProvider from "../../providers/EcommerceItemsProvider";
import Navbar from "../navbar/Navbar";
import ShopItems from "../shopItems/ShopItems";
import Sidebar from "../sidebar/Sidebar";

function MainPage() {
  return (
    <EcommerceItemsProvider>
      <Navbar />
      <ShopItems />
      <Sidebar />
    </EcommerceItemsProvider>
  );
}

export default MainPage;
