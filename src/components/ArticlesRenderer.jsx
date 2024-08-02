const ArticlesRenderer = ({articles}) => {
  return (
    <div className="articles">
      {articles.map((article) => (
        <div className="article" key={article.id}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h3>{article.title}</h3>
          </a>
          <h5>{article.abstract}</h5>
          <div className="details">
            <p>
              Published on <b>{article.published_date}</b>
            </p>
            <p>
              <b>{article.byline}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesRenderer