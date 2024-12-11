import React, { createContext, useState } from 'react';

// Context untuk menyimpan artikel
export const SavedArticlesContext = createContext();

export const SavedArticlesProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  // Fungsi untuk menambahkan artikel
  const saveArticle = (article) => {
    setSavedArticles((prev) => [...prev, article]);
  };

  // Fungsi untuk menghapus artikel
  const removeArticle = (url) => {
    setSavedArticles((prev) => prev.filter((article) => article.url !== url));
  };

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, saveArticle, removeArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
};
