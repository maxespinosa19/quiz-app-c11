import Footer from "./Footer"
import NavMenu from "./NavMenu/NavMenu"
export default function AppLayout({ children }){
    return(
        <div id="main-container">
        {/* <NavMenu/> */}
        {children}
        <Footer/>
        </div>
    )
}