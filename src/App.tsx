import MainPage from "./components/mainPage/MainPage";
import EcommerceItemsProvider from "./providers/EcommerceItemsProvider";
import WatchItemsProvider from "./providers/WatchItemsProvider";

function App() {
  return (
    <EcommerceItemsProvider>
      <WatchItemsProvider>
        <MainPage />
      </WatchItemsProvider>
    </EcommerceItemsProvider>
  );
}

export default App;
