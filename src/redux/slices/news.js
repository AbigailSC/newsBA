import { createSlice } from '@reduxjs/toolkit';
import news from '@data/news.json';

const initialState = {
  heroLandingNews: [],
  latestNews: [],
  detail: null,
  searchedNews: [],
  tagDetail: null,
  relatedNews: null,
  allLatestNews: [],
  allTrendingNews: [],
  allAnalysis: []
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
    },
    setSearchedNews(state, action) {
      state.searchedNews = action.payload;
    },
    clearSearchedNews(state) {
      state.searchedNews = [];
    },
    setTagDetail(state, action) {
      state.tagDetail = action.payload;
    },
    clearTagDetail(state) {
      state.tagDetail = null;
    },
    setRelatedNew(state, action) {
      state.relatedNews = action.payload;
    },
    clearRelatedNew(state) {
      state.relatedNews = null;
    },
    setAllLatestNews(state, action) {
      state.allLatestNews = action.payload;
    },
    clearLatestNews(state) {
      state.allLatestNews = [];
    },
    setAllTrendingNews(state, action) {
      state.allTrendingNews = action.payload;
    },
    setAllAnalysis(state, action) {
      state.allAnalysis = action.payload;
    },
    clearAnalysis(state) {
      state.allAnalysis = [];
    },
    clearTrendingNews(state) {
      state.allTrendingNews = [];
    }
  }
});

export const {
  setHeroLandingNews,
  setLatestNews,
  setDetailOfNews,
  clearDetailOfNews,
  setSearchedNews,
  clearSearchedNews,
  setTagDetail,
  clearTagDetail,
  setRelatedNew,
  clearRelatedNew,
  setAllLatestNews,
  clearLatestNews,
  setAllTrendingNews,
  setAllAnalysis,
  clearAnalysis,
  getTotalNews,
  clearTrendingNews
} = newsSlice.actions;

export default newsSlice.reducer;

export const selectHeroLandingNews = () => (dispatch) => {
  try {
    const trending = news.articles.sort((a, b) => b.views - a.views).slice(0, 4);
    dispatch(setHeroLandingNews(trending));
  } catch (error) {
    console.log(error);
  }
};

export const selectLatestNews = () => (dispatch) => {
  try {
    const latest = [...news.articles].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);
    dispatch(setLatestNews(latest));
  } catch (error) {
    console.log(error);
  }
}

export const selectDetailOfNews = (id) => (dispatch) => {
  try {
    const detail = news.articles.find((article) => article.id === id);
    dispatch(setDetailOfNews(detail));
  } catch (error) {
    console.log(error);
  }
}

export const selectSearchedNews = (searchTerm) => (dispatch) => {
  try {
    if (!searchTerm) {
      dispatch(setSearchedNews([]));
    } else {
      const searched = [...news.articles].filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
      const searchedOrderByDate = searched.sort((a, b) => new Date(b.date) - new Date(a.date));

      dispatch(setSearchedNews(searchedOrderByDate));
    }
  } catch (error) {
    console.log(error);
  }
}

export const selectTagDetail = (tag) => (dispatch) => {
  try {
    const tagModified = tag.replace(/-/g, ' ');
    const tagDetail = [...news.articles].filter((article) => article.tags.some((tag) => tag.name === tagModified));
    dispatch(setTagDetail(tagDetail));
  } catch (error) {
    console.log(error);
  }
}

export const selectRelatedNew = (mainTag, currentArticleId) => (dispatch) => {
  try {
    const filteredArticles = [...news.articles].filter((article) => article.mainTag === mainTag && article.id !== currentArticleId);
    if (filteredArticles.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * filteredArticles.length);
    const related = filteredArticles[randomIndex]
    dispatch(setRelatedNew(related));
  } catch (error) {
    console.log(error);
  }
}

export const selectAllLatestNews = () => (dispatch) => {
  try {
    const sortedArticles = [...news.articles].sort((a, b) => new Date(b.date) - new Date(a.date));
    dispatch(setAllLatestNews(sortedArticles));
  } catch (error) {
    console.log(error);
  }
}

export const selectAllTrendingNews = () => (dispatch) => {
  try {
    const allTrendingNews = [...news.articles].sort((a, b) => b.views - a.views);
    const filteredTrendingNews = [...allTrendingNews].filter((article) => article.views > 400);
    dispatch(setAllTrendingNews(filteredTrendingNews));
  } catch (error) {
    console.log(error);
  }
}

export const getAllAnalysis = () => (dispatch) => {
  try {
    const allAnalysis = [...news.articles].filter((article) => article.tags[0].name === 'analysis');
    const allAnalysisOrderByDate = allAnalysis.sort((a, b) => new Date(b.date) - new Date(a.date));
    dispatch(setAllAnalysis(allAnalysisOrderByDate));
  } catch (error) {
    console.log(error);
  }
}
