import { TopBar } from '../Navbar/TopBar'
import './main.css'
const Main = ({children}) => {
  return (
    <div className="Main">
        <TopBar/>
        <div className="content">
            {children}
        </div>
    </div>
  )
}

export default Main