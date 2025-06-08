import type { Games } from "./hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCriticScore from "./GameCriticScore";
import CropImage from "./services/CropImage";

interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <div className=" m-2 rounded-2xl w-full h-full  border-2">
      <img
        src={CropImage(game.background_image)}
        alt=""
        className="w-full h-48 object-cover rounded-2xl"
      />
      <div>
        <p className="p-2 m-0 text-2xl font-medium">{game.name}</p>
        <div className="flex flex-cols-1 justify-between mx-2 ">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <GameCriticScore metacritic={game.metacritic}></GameCriticScore>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
