import Footer from "./Footer"
import NavMenu from "./NavMenu/NavMenu"
export default function AppLayout({ children }){
    return(
        <>
        {/* <NavMenu/> */}
        {children}
        <Footer/>
        </>
    )
}