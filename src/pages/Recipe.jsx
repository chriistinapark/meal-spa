import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api/api';
import Preloader from '../components/Preloader';

export default function Recipe() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then(data => setMeal(data));
  }, [id]);

  if (!meal) return <Preloader />;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingr = meal[`strIngredient${i}`];
    const meas = meal[`strMeasure${i}`];
    if (ingr) ingredients.push({ ingr, meas });
  }

  return (
    <>
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>← Back</button>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid mb-3" />
      <h4>Ingredients</h4>
      <ul className="list-group mb-3">
  {ingredients.map(({ ingr, meas }) => (
    <li
      key={ingr}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>{ingr}</span>
      <span className="fw-semibold">{meas}</span>
    </li>
  ))}
</ul>

      <h4>Instructions</h4>
      <p>{meal.strInstructions}</p>
      {meal.strYoutube && (
        <div className="ratio ratio-16x9">
          <iframe src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} title="YouTube video" allowFullScreen />
        </div>
      )}
    </>
  );
}
