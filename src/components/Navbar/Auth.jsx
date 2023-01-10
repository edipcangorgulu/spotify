import { Menu } from '@headlessui/react'
import foto from '../../img/foto.png'
import { Icon } from 'Icons'


const Auth = () => {

    const user = {
        name: 'Edip Can',
        avatar: { foto }
    }
    return (
        <Menu as="nav" className={"relative"} >
            {({ open }) => (<>
                <Menu.Button className={`flex  items-center h-8 pr-2 rounded-3xl ${open ? 'bg-active' : 'bg-black'} hover:bg-active`} >
                    <img src={foto} className={"w-8 h-8 rounded-full p-px mr-2"} />
                    <span className='text-sm font-semibold mr-2'>{user.name}</span>
                    <span className={open && 'rotate-180'} >
                        <Icon size={16} name="downDir" /></span>
                </Menu.Button>
                <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"} >
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Hesap
                                <Icon size={16} name="external" />
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Profil
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Ayarlar
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a
                                className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                href="#"
                            >
                                Oturumu Kapat
                            </a>
                        )}
                    </Menu.Item>

                </Menu.Items>
            </>)}
        </Menu>
    )
}
export default Auth