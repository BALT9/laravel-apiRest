import nav from './nav.module.css';

function Nav() {
    return (
        <>
            <div className={nav.container}>
                <nav>
                    <div className={nav.nav_logo}>
                        Logotipo
                    </div>
                    <ul className={nav.nav_links}>
                        <li className={nav.link}><a href="#">Home</a></li>
                        <li className={nav.link}><a href="#">About us</a></li>
                        <li className={nav.link}><a href="#">Courses</a></li>
                        <li className={nav.link}><a href="#">Blog</a></li>
                        <li className={nav.link}><a href="#">Contact</a></li>
                    </ul>
                    <div>
                        <button className={`${nav.btn} ${nav.btn1}`}>Login</button>
                        <button className={nav.btn}>Register</button>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Nav;