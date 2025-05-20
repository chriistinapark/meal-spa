import { Link } from 'react-router-dom';

export default function CategoryItem({ idCategory, strCategory, strCategoryThumb, strCategoryDescription }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
        <div className="card-body">
          <h5 className="card-title">{strCategory}</h5>
          <p className="card-text">{strCategoryDescription.slice(0, 100)}...</p>
        </div>
        <div className="card-footer text-center bg-white">
          <Link className="btn btn-primary" to={`/category/${strCategory}`}>Open</Link>
        </div>
      </div>
    </div>
  );
}
