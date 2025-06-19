import Nav from "@/components/nav/nav"

export default function Layout({children}: any){
    return(
        
        <div id="appLayout">

        <Nav/>
        {children}
        {/* >Footer/> */}
        </div>
    
    )
}