import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import {SidebarData} from './SidebarData'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
   
    return(
        <>
        
            <div className="navbar">
                 <Link to="#" className="menu-bars">
                     <FaIcons.FaBars onClick={showSidebar} />
                 </Link>
            </div>
        
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                 <ul className ='nav-menu-items'onClick={showSidebar}>
                    <li className="navbar-toggle">
                         <div className="menu-bars">
                                <AiIcons.AiOutlineClose style={{color: "#f5f5f5"}} onClick={showSidebar} />
                        </div>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>
                                        {item.title}
                                    </span>
                                    
                                </Link>
                            </li>
                            
                        )
                    })}
                   
                </ul>
               
            </nav>
            <center>
                <div className ='TAKTAU'> 
                Creative CV<br/><br/>
                </div>
                </center>
        </>
     )
 }

 export default Navbar;