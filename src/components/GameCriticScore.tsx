interface Props {
  metacritic: number;
}

const GameCriticScore = ({ metacritic }: Props) => {
  let color = metacritic > 90 ? "green" : metacritic > 80 ? "yellow" : "red";
  return (
    <>
      <p className="bg-gray-300 px-1 text-sm" style={{ color }}>
        {metacritic}
      </p>
    </>
  );
};

export default GameCriticScore;
