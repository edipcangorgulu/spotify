import { Icon } from "Icons"

const Search = () => {
    return (
        <div className='mr-auto ml-4 relative'>
            <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
                <Icon size={24} name="search" />
            </label>
            <input type="text" className="h-10 pl-12 outline-none text-black font-medium bg-white rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]" placeholder='Ne dinlemek istiyorsun?' />
        </div>
    )
}

export default Search