import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TopButton } from "./TopButton";

describe('<TopButton>', () => {

  test('hover state style', () => {
    render(<TopButton />)
  
    expect(screen.getByTestId('top-link')).toHaveAttribute("href", "#top");
  
    const user = userEvent.setup();
  
    user.hover(screen.getByTestId('top-button')).then(() => {
      expect(screen.getByTestId('top-button')).toHaveStyle({
        color: '#202329',
        background: '#9ece10'
      });
    })
  })
})