import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
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
