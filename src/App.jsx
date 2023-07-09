import { Route, Routes, Navigate } from 'react-router-dom';
import {
  Analysis,
  Detail,
  Home,
  Latest,
  Login,
  NotFound,
  Register,
  Releases,
  Reviews,
  Tag,
  Trending
} from './pages';
import { Navbar, Footer } from './components';

function App() {
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
          <Route path="trending" element={<Trending />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
