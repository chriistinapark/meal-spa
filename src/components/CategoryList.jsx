import CategoryItem from './CategoryItem';

export default function CategoryList({ catalog = [] }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {catalog.map(item => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
}
