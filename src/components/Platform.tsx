import usePlatform, { type platform } from "./hooks/usePlatform";

// interface Props {
//   platform: Platform;
// }

const PlatformList = () => {
  const { platform, error } = usePlatform();
  return (
    <div>
      {platform.map((p) => {
        console.log(p);
        return <button className="bg-amber-400">{p.name}</button>;
      })}
    </div>
  );
};

export default PlatformList;
