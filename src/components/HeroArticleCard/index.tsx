import React, { ReactPropTypes } from "react";
import { Article } from "../../model/Article";

interface IHeroArticle {
  article: Article;
}

export default function HeroArticleCard({ article }: IHeroArticle) {
  return (
    <div
      key={article.url}
      className="col-span-2 flex flex-col bg-transparent justify-between w-full overflow-hidden mb-8 relative"
    >
      <img className="w-full" src={article.urlToImage}></img>
      <div className="absolute bottom-0 pt-12 bg-gradient-to-t from-black via-75% to-transparent">
        <div className="flex flex-col p-4">
          <h1 className="text-lightGray font-serif font-bold text-2xl">
            {article.title}
          </h1>
          <p className="text-lightGray font-sans pt-1 pb-2">
            {article.description || "No description."}
          </p>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-lightGray font-sans text-sm">
            {article.source.name}
          </p>
          <a
            href={article.url}
            className="text-lightGray font-serif font-bold underline"
            target="_blank"
          >
            Go to article
          </a>
        </div>
      </div>
    </div>
  );
}
