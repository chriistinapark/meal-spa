import { Link } from 'react-router-dom';

export default function MealItem({ idMeal, strMeal, strMealThumb }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={strMealThumb} className="card-img-top" alt={strMeal} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title flex-grow-1">{strMeal}</h5>
          <Link to={`/meal/${idMeal}`} className="btn btn-primary mt-2">Recipe</Link>
        </div>
      </div>
    </div>
  );
}
