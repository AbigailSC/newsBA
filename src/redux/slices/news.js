import { createSlice } from '@reduxjs/toolkit';
import news from '@data/news.json';

const initialState = {
  heroLandingNews: [],
  latestNews: [],
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
    }
  }
});

export const { setHeroLandingNews, setLatestNews } = newsSlice.actions;

export default newsSlice.reducer;

export const selectHeroLandingNews = () => (dispatch) => {
  const trending = news.articles.sort((a, b) => b.views - a.views).slice(0, 4);
  dispatch(setHeroLandingNews(trending));
};

export const selectLatestNews = () => (dispatch) => {
  const latest = news.articles.sort((a, b) => b.date - a.date).slice(0, 10);
  dispatch(setLatestNews(latest));
}