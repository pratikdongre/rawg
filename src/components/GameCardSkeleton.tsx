const GameCardSkeleton = () => {
  return (
    <div className="bg-zinc-800 animate-pulse rounded-2xl overflow-hidden m-2 shadow-md">
      {/* Image Placeholder */}
      <div className="aspect-video bg-zinc-700 w-full"></div>

      {/* Text Placeholder */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-zinc-700 rounded w-5/6"></div>
        <div className="h-4 bg-zinc-700 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
