import { useEffect, useState } from 'react';
import { getAllCategories } from '../api/api';
import CategoryList from '../components/CategoryList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data);
      setFiltered(data);
    });
  }, []);

  const handleSearch = str => {
    setFiltered(
      catalog.filter(
        item => item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoryList catalog={filtered} />}
    </>
  );
}
