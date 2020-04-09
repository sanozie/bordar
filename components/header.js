//Utils
import Link from 'next/link'
//Libraries
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => (
   <Nav style={{width: "90%", margin: "0 5%"}}>
      <NavItem style={{width: "10%", padding: "1.5% 0 1.5% 2%"}} className="mr-auto">
         <Link href="/">
         <img src={props.navlogo} className="img-fluid" />
         </Link>
      </NavItem>
      {
         props.navitems.map(navitem => (
               <NavItem key={navitem.key} className="d-flex">
                  <Link href={navitem.link}>
                     <NavLink  className="align-self-center">{navitem.label}</NavLink>
                  </Link>
               </NavItem>
            )
         )
      }
   </Nav>
)

export default Header