import { useEffect, useState, createContext } from "react";

const TweetContext = createContext();

function TweetContextProvider({ children }) {
  const [tweetArr, setTweetArr] = useState([]);

  const getTweetsFromStorage = async () => {
    try {
      const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
      );
      const tweetStorage = await response.json();
      const storedTweetArray = tweetStorage.tweets;
      setTweetArr(storedTweetArray);
      console.log(storedTweetArray);
    } catch (err) {
      alert("Server is offline.");
    }
  };

  useEffect(() => {
    getTweetsFromStorage();
    const refreshInterval = setInterval(() => {
      getTweetsFromStorage();
    }, 5000);

    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <TweetContext.Provider value={{ tweetArr, setTweetArr }}>
      {children}
    </TweetContext.Provider>
  );
}

export { TweetContext, TweetContextProvider };
