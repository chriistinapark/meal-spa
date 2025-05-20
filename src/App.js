
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header   from './components/Header';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import Category from './pages/Category';
import Recipe   from './pages/Recipe';
import About    from './pages/About';
import Contact  from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    
    <div className="d-flex flex-column min-vh-100">

      <BrowserRouter basename="/meal-spa">
        <Header />

        
        <main className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        
        <Footer />
      </BrowserRouter>

    </div>
  );
}
