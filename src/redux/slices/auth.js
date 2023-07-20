import { createSlice } from '@reduxjs/toolkit';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider
} from 'firebase/auth';
import { auth } from '../../firebase.config';

const initialState = {
  isAuth: false,
  user: null,
  errors: null,
  favorites: []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    signup(state, action) {
      state.user = action.payload;
    },
    singin(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.errors = action.payload;
    },
    clearError(state) {
      state.errors = null;
    },
    setLogOut(state) {
      signOut(auth);
      state.user = null;
    },
    setFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite(state, action) {
      state.favorites = action.payload;
    }
  }
});

export const { signup, singin, setError, clearError, setAuth, setLogOut, setFavorites, removeFavorite } = authSlice.actions;

export default authSlice.reducer;

export const signupUser = (email, password) => async dispatch => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    dispatch(signup(userCredentials));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    return false;
  }
}

export const signupGoogle = () => async dispatch => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(auth, provider);
    dispatch(signup(userCredentials));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    return false;
  }
}

export const signupFacebook = () => async dispatch => {
  try {
    const provider = new FacebookAuthProvider();
    const userCredentials = await signInWithPopup(auth, provider);
    dispatch(signup(userCredentials));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    return false;
  }
}

export const signupGithub = () => async dispatch => {
  try {
    const provider = new GithubAuthProvider();
    const userCredentials = await signInWithPopup(auth, provider);
    dispatch(signup(userCredentials));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    return false;
  }
}

export const signinUser = (email, password, username) => async dispatch => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredentials.user, {
      displayName: username
    });
    dispatch(signup(userCredentials));
    return true;
  } catch (error) {
    dispatch(setError(error.message));
    return false;
  }
}

export const addFavorite = (id, title) => async dispatch => {
  try {
    dispatch(setFavorites({
      id,
      title
    }));
  } catch (error) {
    dispatch(setError(error.message));
  }
}

export const deleteFavorite = (id) => (dispatch, getState) => {
  try {
    const { favorites } = getState().authState;
    const filteredFavorites = favorites.filter((article) => article.id !== id);
    dispatch(removeFavorite(filteredFavorites));
  } catch (error) {
    console.log(error);
  }
}