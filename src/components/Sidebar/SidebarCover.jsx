import { useDispatch, useSelector } from "react-redux"
import { setSidebar } from "stores/Player"
import { Icon } from "Icons"

const SidebarCover = () => {

    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)
    return (
        <div className='pt-[100%] relative bg-black group'>
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0 " />
            <button
                onClick={() => dispatch(setSidebar(false))}
                className="w-6 h-6 bg-black -rotate-90 absolute top-1 right-1 rounded-full opacity-0 hover:scale-[1.06] group-hover:opacity-100 flex items-center justify-center">
                <Icon size={16} name='arrowLeft' />
            </button>
        </div>
    )
}

export default SidebarCover
