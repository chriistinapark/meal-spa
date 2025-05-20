import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealsByCategory } from '../api/api';
import MealList from '../components/MealList';
import Preloader from '../components/Preloader';

export default function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMealsByCategory(name).then(data => setMeals(data));
  }, [name]);

  return (
    <>
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>← Back</button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}
