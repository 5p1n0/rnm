import { StyledInput } from "./SearchBar.styles";

type Props = {
  inputEl: React.RefObject<HTMLInputElement> | null;
};

export const SearchBar = ({ inputEl }: Props) => {
  return (
    <StyledInput
      ref={inputEl}
      type="text"
      placeholder="Search by name or title..."
    />
  );
};
