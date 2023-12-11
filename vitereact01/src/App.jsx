import "./App.css";
import AppCounter from "./app-counter/AppCounter";
import MainApp from "./callBackTest/MainApp";
import ColorChanger from "./color-changer/ColorChanger";
import CurrencyConvMain from "./currency-conver-1/CurrencyConvMain";
import CurrencyMain from "./currency-converter/CurrencyMain";
import PasswordGenerator from "./password-generator/PasswordGenerator";
import UserCard from "./user-card/UserCard";


function App() {

  return (
    <>
      {/* <ColorChanger /> */}
      {/* <AppCounter /> */}
      {/* <UserCard name="Angela" post ="loream ipsum lorema ipsum" btnText="Click Me"/>
      <UserCard name="Angela" post ="loream ipsum lorema ipsum" /> */}
      {/* <PasswordGenerator /> */}
      {/* <MainApp /> */}
      <CurrencyMain />
      {/* <CurrencyConvMain /> */}
    </>
  )
}

export default App
