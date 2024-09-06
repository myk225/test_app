import { useState } from "react"
import Main from "../components/Main/Main"
import { SideBar } from "../components/Navbar/SideBar"
import "./layout.css"
const Layout = ({children}) => {
  const [arrow,setArrow]=useState(false);
  return (
    <div className="layout-main">
        <SideBar setArrow={setArrow} arrow={arrow}/>
            <Main arrow={arrow}>
                hello
                {children}
            </Main>
    </div>
  )
}

export default Layout