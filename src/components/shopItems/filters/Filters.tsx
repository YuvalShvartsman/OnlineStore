import "./Filters.css";
import LeftSideFIlters from "./leftSideFilters/LeftSideFIlters";
import Related from "./related/Related";

function Filters() {
  return (
    <div className="Filters">
      <LeftSideFIlters />
      <Related />
    </div>
  );
}

export default Filters;
