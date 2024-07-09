import CustomerReview from "./customerReviews/CustomerReview";
import PriceRange from "./priceRange/PriceRange";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <PriceRange />
      <CustomerReview />
    </div>
  );
}

export default Sidebar;
