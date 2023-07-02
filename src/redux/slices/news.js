import { createSlice } from '@reduxjs/toolkit';
import news from '@data/news.json';

const initialState = {
  heroLandingNews: [],
  latestNews: [],
  detail: null
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setHeroLandingNews(state, action) {
      state.heroLandingNews = action.payload;
    },
    setLatestNews(state, action) {
      state.latestNews = action.payload;
    },
    setDetailOfNews(state, action) {
      state.detail = action.payload;
    },
    clearDetailOfNews(state) {
      state.detail = null;
    }
  }
});

export const { setHeroLandingNews, setLatestNews, setDetailOfNews, clearDetailOfNews } = newsSlice.actions;

export default newsSlice.reducer;

export const selectHeroLandingNews = () => (dispatch) => {
  const trending = news.articles.sort((a, b) => b.views - a.views).slice(0, 4);
  dispatch(setHeroLandingNews(trending));
};

export const selectLatestNews = () => (dispatch) => {
  const latest = news.articles.sort((a, b) => b.date - a.date).slice(0, 10);
  dispatch(setLatestNews(latest));
}

export const selectDetailOfNews = (id) => (dispatch) => {
  try {
    const detail = news.articles.find((article) => article.id === id);
    dispatch(setDetailOfNews(detail));
  } catch (error) {
    console.log(error);
  }
}