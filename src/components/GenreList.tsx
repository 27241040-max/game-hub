import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  const genreNameMap: Record<string, string> = {
    Action: "动作 / Action",
    Indie: "独立 / Indie",
    Adventure: "冒险 / Adventure",
    RPG: "角色扮演 / RPG",
    Strategy: "策略 / Strategy",
    Shooter: "射击 / Shooter",
    Casual: "休闲 / Casual",
    Simulation: "模拟 / Simulation",
    Puzzle: "解谜 / Puzzle",
    Arcade: "街机 / Arcade",
    Platformer: "平台跳跃 / Platformer",
    Racing: "竞速 / Racing",
    "Massively Multiplayer": "大型多人 / Massively Multiplayer",
    Sports: "体育 / Sports",
    Fighting: "格斗 / Fighting",
    Family: "家庭 / Family",
    "Board Games": "桌游 / Board Games",
    Educational: "教育 / Educational",
    Card: "卡牌 / Card",
  };

  const getGenreLabel = (name: string) =>
    genreNameMap[name] || `${name} / ${name}`;

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        类型 / Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="md"
                variant="link"
              >
                {getGenreLabel(genre.name)}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
