import React, { Component } from 'react';

const ArticleList = ({ articles }) => (
  <div>
    {articles.map(article =>
      <div>
        <a href={article.url}>{article.title}</a>
      </div>
    )}
  </div>
);

export default ArticleList;
