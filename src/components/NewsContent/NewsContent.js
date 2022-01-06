import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";
const NewsContent = ({ NewsArray, NewsResults, Loadmore, setLoadmore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>
        {NewsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {Loadmore <= NewsResults && (
          <div>
            
            <button className="loadMore" onClick={()=>setLoadmore(Loadmore+20)}>Load More</button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
