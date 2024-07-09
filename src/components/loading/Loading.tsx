import "./Loading.css";
import LoadingGif from "/loading.gif";

function Loading() {
  return (
    <div className="LoadingContainer">
      <img src={LoadingGif} />
    </div>
  );
}

export default Loading;
