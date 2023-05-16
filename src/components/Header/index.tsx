import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SearchInput from "../SearchInput";
import { api } from "../../services/api";
import { Article } from "../../model/Article";

interface HeaderProps {
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
  setHeroArticle: React.Dispatch<React.SetStateAction<Article | undefined>>;
}

export default function Header({ setArticles, setHeroArticle }: HeaderProps) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length > 3) {
      api
        .get(
          `everything?q=${input}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        )
        .then((result) => {
          setArticles(result.data.articles.slice(0, 20));
          setHeroArticle(undefined);
        })
        .catch((error) => console.error("Error when fetching data: ", error));
    }
  }, [input, setArticles]);

  return (
    <div className="flex items-center justify-between w-full p-8">
      {input.length === 0 && <Logo className="w-40 mr-10"></Logo>}
      <SearchInput setInput={setInput}></SearchInput>
    </div>
  );
}
