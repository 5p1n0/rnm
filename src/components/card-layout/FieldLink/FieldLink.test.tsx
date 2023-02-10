import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FieldLink } from "./FieldLink";

describe('<FieldLink>', () => {

  test('hover state', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={null} />
        </Routes>
        <FieldLink name={'test'} destination={'/'} state={null} />
      </BrowserRouter>
    )
  
    const user = userEvent.setup();
  
    user.hover(screen.getByTestId('card-link')).then(() => {
      expect(screen.getByTestId('card-link')).toHaveStyle({
        color: '#202329',
        background: '#55cd64'
      });
    })
  })

})