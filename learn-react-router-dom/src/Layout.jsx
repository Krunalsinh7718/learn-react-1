import {Outlet} from 'react-router-dom';
import { Footer, Header } from './components';
function Layout() {
    return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>);
}

function LayoutFull() {
    return (
    <>
        <Header />
            <Outlet />
        <Footer />
    </>);
}
export { Layout, LayoutFull} ;
