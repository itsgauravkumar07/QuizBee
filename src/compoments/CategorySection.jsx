import categories from "../Data/categories";

function CategorySelection({ onSelectCategory }) {
  return (
    <div className="grid gap-5 mt-8 sm:grid-cols-3 md:grid-cols-6">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => onSelectCategory(cat.name)}
          className="flex flex-col justify-center items-center transition-all duration-300 hover:scale-105"
        >
          <img src={cat.image} alt={cat.name} className="h-32 w-32 object-cover mb-3 rounded-2xl" />
          <span className="text-base font-medium text-gray-950">{cat.name}</span>
        </button>
      ))} 
    </div>
  );
}

export default CategorySelection;
