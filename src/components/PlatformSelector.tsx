import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  const platformNameMap: Record<string, string> = {
    PC: "PC / 电脑",
    PlayStation: "PlayStation / 索尼",
    Xbox: "Xbox / 微软",
    iOS: "iOS / 苹果",
    Android: "Android / 安卓",
    "Apple Macintosh": "Apple Macintosh / 苹果电脑",
    Linux: "Linux / Linux",
    Nintendo: "Nintendo / 任天堂",
    Atari: "Atari / 雅达利",
    "Commodore / Amiga": "Commodore / Amiga / 康懋达",
    SEGA: "SEGA / 世嘉",
    "3DO": "3DO / 3DO",
    "Neo Geo": "Neo Geo / NEOGEO",
    Web: "Web / 网页",
  };

  const getPlatformLabel = (name: string) =>
    platformNameMap[name] || `${name} / ${name}`;

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name
          ? getPlatformLabel(selectedPlatform.name)
          : "平台 / Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {getPlatformLabel(platform.name)}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
