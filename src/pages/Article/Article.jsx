import { useLocation } from "react-router-dom";
import "./Article.css";
const Article = () => {
  const { state: article } = useLocation();
  const keywords = article.adx_keywords.split(";");
  return (
    <div className="article-description">
      <div className="header">
        <h3>{article.title}</h3>
        {article.media.length && (
          <img src={article.media[0]["media-metadata"][2].url} />
        )}
      </div>
      <div className="details">
        <h4>Description : {article.abstract}</h4>

        <p>
          Source of this article is <b>{article.source}</b>
        </p>
        <p>
          Published on <b>{article.published_date}</b>
        </p>
        <p>
          Updated on <b>{article.updated}</b>
        </p>
        <p>
          Section is <b>{article.section} & </b> SubSection is{" "}
          <b>{article.subsection}</b>
        </p>

        <p>Keywords of this article are:-</p>
        <div className="keywords-container">
          {article.des_facet.map((key) => (
            <b>{key},</b>
          ))}
        </div>
        <p>Description of Fascets are:-</p>
        <div className="keywords-container">
          {keywords.map((key) => (
            <b>{key},</b>
          ))}
        </div>
        <p>
          <b>{article.byline}</b>
        </p>
      </div>
    </div>
  );
};

export default Article;
