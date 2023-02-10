import { StyledImg } from "./Avatar.styles";

type Props = {
  reverse: boolean;
  image: string;
  name: string;
};

export const Avatar = ({ reverse, image, name }: Props) => {
  return <StyledImg alt={name} reverse={reverse} src={image} />;
};
