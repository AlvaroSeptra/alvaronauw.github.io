import * as GrIcons from 'react-icons/gr'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as Io5Icons from 'react-icons/io5'

export const SidebarData=[
    {
        title: 'PROFIL',
        path: '/',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'EXPERIENCE',
        path: '/products',
        icon: <GrIcons.GrValidate />,
        cName: 'nav-text'
    },
    {
        title: 'CONTACT',
        path: '/team',
        icon: <Io5Icons.IoShareSocialOutline />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]