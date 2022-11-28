import TweetCreator from "../Components/TweetCreator";
import TweetList from "../Components/TweetList";
import { TweetContextProvider } from "../TweetContext";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <TweetContextProvider>
          <TweetCreator />
          <TweetList />
        </TweetContextProvider>
      </header>
    </div>
  );
}

export default Home;
