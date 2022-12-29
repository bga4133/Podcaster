import { render, screen, waitFor } from "@testing-library/react"
import { PodcastScreen } from "../../../podcasts/views/PodcastScreen"

describe('<PodcastScreen /> test', () => {
    const { container } = render(<PodcastScreen />);
    it("render the component", async () => {
        expect(container).toMatchSnapshot();
    })
    it("shouldn't show the div with the class podcastScreen if data is no loadet", async () => {
        const containerDiv = container.querySelector('podcastScreen');
        expect(containerDiv).toBeFalsy();
    });
    it("should show the data after load the page ", async () => {
        const { container } = render(<PodcastScreen  />);
        const containerDiv = container.querySelector("container");
        await waitFor(
          () => {
            expect(screen.getByTestId("imgId")).toBeInTheDocument();
          },
          { timeout: 4000 }
        );
      });
    
});