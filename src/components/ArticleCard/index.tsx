import React, { ReactPropTypes } from "react";
import { Article } from "../../model/Article";

interface IArticle {
  article: Article;
}

export default function ArticleCard({ article }: IArticle) {
  if (article.urlToImage) {
    return (
      <div
        key={article.url}
        className="col-span-2 flex flex-col bg-transparent justify-between border-solid border-gray rounded-md border w-full overflow-hidden mb-8"
      >
        <img className="w-full" src={article.urlToImage}></img>
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
    );
  }

  return (
    <div
      key={article.url}
      className="flex flex-col bg-transparent justify-between border-solid border-gray rounded-md border p-4 w-full mb-8"
    >
      <div className="flex flex-col">
        <h1 className="text-lightGray font-serif font-bold text-2xl">
          {article.title}
        </h1>
        <p className="text-lightGray font-sans pt-1 pb-2">
          {article.description || "No description."}
        </p>
      </div>
      <div className="flex flex-col">
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
  );
}
