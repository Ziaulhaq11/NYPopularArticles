import { useEffect, useState } from "react";
import "./Articles.css";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchArticles = async () => {
    setLoading(true);
    await fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=KrZBodWefz6sgBGFH9yCCY5VQVSIREga"
    )
      .then((res) => res.json())
      .then((articles) => setArticles(articles.results))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  } else if (articles.length === 0) {
    return <h1>No Data Found</h1>;
  }

  return (
    <div className="articles-container">
      <h1>NY Times Most Popular Articles</h1>
      <div className="articles">
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
            </a>
            <h5>{article.abstract}</h5>
            <div className="details">
              <p>Published on <b>{article.published_date}</b></p>
              <p><b>{article.byline}</b></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
