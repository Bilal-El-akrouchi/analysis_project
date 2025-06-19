import Header from '../components/header/Header';
import SectionUn from '../components/section1/SectionUn';
import SectrionDeux from '../components/section2/SectrionDeux';
import SectionTrois from '../components/section3/SectionTrois';
import SectionQuatres from '../components/section4/SectionQuatres';
import Layout from './layout';

export default function Welcome() {
    return (
        <Layout>
            <main className="w-sxreen">
                <Header />
                <SectionUn />
                <SectionTrois />
                <SectrionDeux />
                <SectionQuatres />
            </main>
        </Layout>
    );
}
