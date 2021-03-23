import Option from "./Components/Options/Options";
import GameContextProvider from "./Contexts/GameContext";

export default function App() {
  return (
    <GameContextProvider>
      <Option />
    </GameContextProvider>
  );
};
