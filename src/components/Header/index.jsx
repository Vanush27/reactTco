import "./styles.css";
import CommentsIcon from "../../icons/LiveChat/index";
import CartIcon from "../../icons/MiniCart/index";
import HeartIcon from "../../icons/Heart/index";
import SearchIcon from "../../icons/Search/index";


const Header = () => {
    return (
        <header className="header">

            <div className="nav_left"
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     flexBasis: "68%"
                 }}>
                <div className="logo_wrapper" style={{
                    alignItems: "center",
                    padding: "20px"
                }}>
                    <img src={"https://www.marks-iplaw.jp/wp-content/uploads/2019/04/PUMA-1-1170x464.jpg"} alt=""/>
                </div>


                <ul className="nav_list"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px"
                    }}>
                    <li>New Arrivals</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Collaborations</li>
                    <li>Sport</li>
                    <li>Outlet</li>
                    <li>Gift Guide</li>
                </ul>
            </div>

            <div className="nav_right"
                 style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center"
                 }}>

                <div className="search-container">

                    <form action="/action_page.php" className="">
                        <div className="search_form">
                            <SearchIcon/>
                            <input type="text" className="search" placeholder="SEARCH PUMA.COM " name="search"/>
                        </div>


                    </form>
                </div>
                <div className="icons-wrapper">
                    <CommentsIcon/>
                    <HeartIcon/>
                    <CartIcon/>

                </div>

            </div>
        </header>
    );
}
export default Header;