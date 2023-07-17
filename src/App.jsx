import { Route, Routes, Navigate } from 'react-router-dom';
import {
  Analysis,
  Detail,
  Home,
  Latest,
  Login,
  NotFound,
  Profile,
  Register,
  Releases,
  Results,
  Reviews,
  Tag,
  Trending
} from './pages';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Navbar, Footer, ProtectedRoute, ScrollToTop } from '@components';
import { auth } from './firebase.config';
import { setAuth } from '@redux/slices/auth';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(setAuth(currentUser));
    });
  }, []);

  return (
    <main className="min-h-[calc(100vh-80px)] text-gray-200 bg-zinc-900">
      <Navbar />
      <div className="pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/tag/:tag" element={<Tag />} />
          <Route path="/news/:id" element={<Detail />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search/:search" element={<Results />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;
