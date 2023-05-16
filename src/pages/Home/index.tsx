import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { Article } from "../../model/Article";
import ArticleCard from "../../components/ArticleCard";
import RandomImage from "../../components/RandomImage";
import HeroArticleCard from "../../components/HeroArticleCard";
import { isMobile } from "react-device-detect";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [heroArticle, setHeroArticle] = useState<Article>();

  useEffect(() => {
    api
      .get(
        `top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      )
      .then((result) => {
        setArticles(result.data.articles);
      })
      .catch((error) => console.error("Error when fetching data: ", error));

    api
      .get(
        `top-headlines?sources=cnn&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      )
      .then((result) => {
        setHeroArticle(result.data.articles[0]);
      })
      .catch((error) => console.error("Error when fetching data: ", error));
  }, []);

  return (
    <div className="flex-col items-start justify-center bg-black w-screen min-h-screen">
      <Header setArticles={setArticles} setHeroArticle={setHeroArticle} />
      {heroArticle && !isMobile && (
        <HeroArticleCard article={heroArticle}></HeroArticleCard>
      )}
      <div className="p-8">
        <div className="grid grid-cols-2 grid-flow-row gap-3 mt-8 mb-8 ">
          {articles.length > 0 &&
            articles.map((article: Article) => (
              <ArticleCard article={article}></ArticleCard>
            ))}
        </div>
      </div>
      <RandomImage></RandomImage>
    </div>
  );
}
