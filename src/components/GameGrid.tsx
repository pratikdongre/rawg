import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../App";

interface Props {
  GameQuery: GameQuery;
}

const GameGrid = ({ GameQuery }: Props) => {
  const { games, error, isLoading } = useGames(GameQuery);
  const skeletons = Array(9).fill(0);
  return (
    <div className="grid lg:grid-cols-3 gap-3 me-4 md:grid-cols-2 sm:grid-cols-1">
      {error && <p>{error}</p>}

      {isLoading &&
        skeletons.map((_, index) => <GameCardSkeleton key={index} />)}

      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </div>
  );
};

export default GameGrid;
