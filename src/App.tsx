import { useEffect, useState } from "react";
import "./App.css";
import { getGamemodes } from "./utils";
import { GamemodeTile } from "./components/rankTiles";

function App() {
  const [displayedGamemode, setDisplayedGamemode] = useState<number>(0);
  const gamemodes = getGamemodes();

  // Gamemodes:
  // Ranked Battle Royale AKA br
  // Ranked Zero Build AKA zb
  // Ranked Reload AKA rbr
  // Ranked Reload Zero Build AKA rzb
  // Rocket Racing AKA rr

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedGamemode(
        displayedGamemode < gamemodes.length - 1 ? displayedGamemode + 1 : 0
      );
    }, 10000);

    return () => clearInterval(interval);
  });

  function calculateYPosition() {
    return -150 * displayedGamemode;
  }

  return (
    <>
      <div className="animation-container">
        {gamemodes.map((gamemode) => {
          return (
            <>
              <GamemodeTile
                gamemode={gamemode}
                YPosition={calculateYPosition()}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
