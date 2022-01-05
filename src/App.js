import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";
import Footer from "./Footer/Footer";
function App() {
  const [category, setcategory] = useState("general");
  const [NewsResults, setNewsResults] = useState();
  const [NewsArray, setNewsArray] = useState([]);
  const [Loadmore, setLoadmore] = useState(20);
  const NewsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${Loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    NewsApi();
    // eslint-disable-next-line
  }, [NewsResults, category, Loadmore]);

  return (
    <div className="App">
      <Navbar setcategory={setcategory} />
      <NewsContent
        Loadmore={Loadmore}
        setLoadmore={setLoadmore}
        NewsArray={NewsArray}
        NewsResults={NewsResults}
      />
      <Footer />
    </div>
  );
}

export default App;
