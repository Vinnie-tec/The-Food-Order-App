import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CardProvider from "./store/CardProvider";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true);
  };

  const hideCartHandler = () => {
    SetCartIsShown(false);
  };

  return (
    <CardProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
