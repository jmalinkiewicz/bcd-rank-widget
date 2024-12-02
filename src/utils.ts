import { Gamemode } from "./definitions";

export function getGamemodes(): Gamemode[] {
  const possibleGamemodes: Gamemode[] = ["br", "zb", "rbr", "rzb", "rr"];
  const params = new URLSearchParams(window.location.search);
  const gamemodesParam = params.get("gamemodes");
  return (
    gamemodesParam && gamemodesParam.trim() !== ""
      ? gamemodesParam.split(",")
      : ["br", "zb"]
  ).filter((gamemode): gamemode is Gamemode =>
    possibleGamemodes.includes(gamemode as Gamemode)
  );
}
