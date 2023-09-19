
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";


const MainLayout = () => {

    const navigation = useNavigation();

    return (
        <div>
            <section  className="shadow-md py-8 flex justify-between px-10">
                <div>
                    <h1 className="text-xl font-bold">Amazon</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                    <p>
                        {
                            navigation.state == 'loading' ? "loading" : 'loaded'
                        }
                    </p>
                </nav>
            </section>


            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;