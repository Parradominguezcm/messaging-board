import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

function AllPeeps() {
    return (
        <>
            <header>
                < Header />
            </header>
            < Main />
            < Main />
            < Main />
            <footer>
                < Footer />
            </footer>
        </>
    )
}
export default AllPeeps;