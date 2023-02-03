import { render, screen } from "@testing-library/react";
import LeftSide from "../components/LeftSide";

describe("Left Side Component", () => {
	it("Renders Search Input", () => {
		const { container } = render(<LeftSide />);
		expect(container.getElementsByClassName("search-input").length).toBe(1);
	});
});
