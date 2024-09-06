import "./navbar.css"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
const array=[1,2,3,4,5,6];
export const SideBar = ({setArrow,arrow}) => {
  return (
    <div className={`test sidebar ${arrow ? "sideBarClose" : ""}`}>
        <BrandComp setArrow={setArrow}/>
        <div className="navItems">
                {
                    array.map((i)=>{
                        return <div  key={i} className="navItem">
                             <MdOutlineSpaceDashboard className="icon"/>
                              <p>DashBoard</p>
                    </div>
                    })
                }
                     <div  className="navItem active">
                            <MdOutlineSpaceDashboard className="icon"/>
                              <p>DashBoard</p>
                    </div>
        </div>
        <div className="bottomItems">
                 <div  className="navItem logout">
                            <CiLogout className="icon"/>
                              <p>Log out</p>
                    </div>
        </div>
        {
        arrow ? <IoMdArrowDroprightCircle className="openClose" onClick={()=>setArrow(!arrow)}/> : <IoMdArrowDropleftCircle className="openClose" onClick={()=>setArrow(!arrow)}/>
        }
    </div>
  )
}
const defaultSroce='https://www.dsource.in/sites/default/files/resource/logo-design/logos/logos-representing-india/images/01.jpeg';
const BrandComp=({source=defaultSroce})=>{
    return <div className="brand">
    <img className="brandLogo" src={source} alt="" />
    <h1 className="brandName">
            Brand name
    </h1>
  
</div>
}