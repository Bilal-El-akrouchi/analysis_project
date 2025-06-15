import Nav from '../components/nav/nav'
import Header from '../components/header/Header'
import SectionUn from '../components/section1/SectionUn'
import SectrionDeux from '../components/section2/SectrionDeux'
import SectionTrois from '../components/section3/SectionTrois'

export default function Welcome() {
    return(
        <>
        <main className=' w-sxreen'>
        <Nav/>
        <Header/>
        <SectionUn/>
        <SectionTrois/>
        <SectrionDeux/>
        </main>
        </>
    )
}