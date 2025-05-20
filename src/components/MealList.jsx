import MealItem from './MealItem';

export default function MealList({ meals = [] }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {meals.map(item => (
        <MealItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
}
