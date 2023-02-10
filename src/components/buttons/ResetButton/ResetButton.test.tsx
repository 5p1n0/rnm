import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResetButton } from "./ResetButton";

describe('<ResetButton>', () => {

  test('hover state style', () => {
    render(<ResetButton handler={() => { }} />)
  
    const user = userEvent.setup();
  
    user.hover(screen.getByTestId('reset-button')).then(() => {
      expect(screen.getByTestId('reset-button')).toHaveStyle({
        color: '#202329',
        background: '#9ece10'
      });
    })
  })

})