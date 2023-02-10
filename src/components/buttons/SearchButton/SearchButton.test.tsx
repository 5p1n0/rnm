import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchButton } from "./SearchButton";

describe('<SearchButton>', () => {

  test('hover state style', () => {
    
    render(<SearchButton handler={() => {}}/>)
  
    const user = userEvent.setup();
  
    user.hover(screen.getByTestId('search-button')).then(() => {    
      expect(screen.getByTestId('search-button')).toHaveStyle({
        color: '#202329',
        background: '#9ece10'
      });
    })
  })

})