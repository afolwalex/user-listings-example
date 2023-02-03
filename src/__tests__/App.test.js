import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Left Side and User Components", () => {
	render(<App />);
	const leftSide = screen.getByText(/Emerald/i);
	const userComponent = screen.getByText(/Filter by:/i);
	expect(leftSide).toBeInTheDocument();
	expect(userComponent).toBeInTheDocument();
});
