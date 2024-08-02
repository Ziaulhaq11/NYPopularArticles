import { render, screen } from "@testing-library/react";
import Articles from "./Articles";
import {mockData} from '../data'

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData)
  })
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Articles Component Test Case", () => {
  test("Component Render Successfully", async () => {
    render(<Articles />);
    const header = await screen.findByText("NY Times Most Popular Articles")
    expect(header).toBeInTheDocument()
  });

  test("Data Rendering Properly or not", async () => {
    render(<Articles />);
    const title = await screen.findByText(`Election 2024 Polls: The Harris vs. Trump Matchup`)
    expect(title).toBeInTheDocument()
  })
})

