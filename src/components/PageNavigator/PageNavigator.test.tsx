import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PageNavigator } from "./PageNavigator";

describe('<PageNavigator>', () => {

  beforeEach(() => render(<PageNavigator prev={2} next={3} setPage={() => {}} />))

  test('hover state style (next button)', () => {
    const user = userEvent.setup();
  
    user.hover(screen.getByTestId('next')).then(() => {
      expect(screen.getByTestId('next')).toHaveStyle({
        color: '#202329',
        background: '#55cd64'
      });
    })    
  })

  test('hover state style (prev button)', () => {
    const user = userEvent.setup();

    user.hover(screen.getByTestId('prev')).then(() => {
      expect(screen.getByTestId('prev')).toHaveStyle({
        color: '#202329',
        background: '#55cd64'
      });
    })
  })

})