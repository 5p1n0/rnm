import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./SearchBar"

describe('<SearchBar>', () => {
  
  test('focus state style', () => {
    
    render(
      <SearchBar inputEl={null}/>
    )
  
    const user = userEvent.setup();
  
    const searchBar = screen.getByPlaceholderText("Search by name or title...");
    user.click(searchBar).then(() => {    
      expect(searchBar).toHaveStyle(
        'outline: solid 2px rgb(158, 206, 16)'
      )
    })
  })
  
})