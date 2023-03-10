import categories from "data/categories"


function Category({ category }) {
  return (
    <div
      style={{ 'background': category.color }}
      className="rounded-md before:pt-[100%] before:block relative">

      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img src={category.cover} className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0" />
      </div>
    </div>
  )
}






const Search = () => {
  return (
    <div className="grid grid-cols-8 gap-6">
      {categories.map(category => <Category category={category} />)}
    </div>
  )
}

export default Search