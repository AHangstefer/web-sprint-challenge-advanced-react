import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm/>)
    getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
    const mockOnSubmit = jest.fn()
    const {getByLabelText, getByTestId, getByText} = render(<CheckoutForm onSubmit={mockOnSubmit}/>)

    const form= getByTestId(/form/i);
    const firstName = getByTestId(/firstName/i);
    const submit = getByTestId(/successMessage/i);

    fireEvent.change(firstName, {target:{value:"Anna"}});
    fireEvent.click(getByTestId(/button/i));
    //fireEvent.onBlur(firstName);

    expect(form.outerHTML).toContain("Anna");
    
    getByText("Anna");
    getByText("You have ordered some plants! Woo-hoo!");
    getByText("Your new green friends will be shipped to:");

    
});
