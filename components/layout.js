import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Footer from "./footer";
import Header from "./header";

const Layout = (props)=> (
    <div>
        <Header/>
        <div>
            {props.children}
        </div>
        <Footer/>
    </div>
)

export default Layout;