import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "./hooks/useGames";
import type { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    linux: FaLinux,
  };
  return (
    <div className="flex flex-cols-1 gap-1 ">
      {platforms.map((platform) => {
        const Icon = iconsMap[platform.slug];
        return (
          <div className="w-6 h-6" key={platform.id}>
            <p key={platform.id}>
              {Icon && (
                <Icon className="text-gray-500 w-5 h-5 hover:text-blue-500 hover:w-6 hover:h-6"></Icon>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PlatformIconList;
