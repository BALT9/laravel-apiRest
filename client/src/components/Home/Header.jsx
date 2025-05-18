import header from './header.module.css';

function Header() {
    return (
        <>
            <div className={header.container}>
                <header className={header.header}>
                    <div className={header.content}>
                        <h1><span>Get Quick</span><br />Medical Services</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error corrupti laboriosam ratione? Labore nihil
                            voluptatum dolores! Quam repellat dicta et? Lorem ipsum dolor sit amet.
                        </p>
                        <button className={header.btn}>Get Services</button>
                    </div>
                    <div className={header.image}>
                        <span className={header.image_bg}></span>
                        <img src="https://i.blogs.es/fc0fc9/650_1000_gi01a201312292200/450_1000.webp" alt="header" />
                        <div className={`${header.image_content} ${header.image_content_1}`}>
                            <span><i className='bx bx-user' ></i></span>
                            <div className={header.details}>
                                <h4>1520+</h4>
                                <p>Active Clients</p>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;