import React from 'react'

import './NavBar.scss'

const NavBar = () => {
    return(
        <nav>
            <div className="nav-wrapper navbar">
                <a href='/' className="left photobank">ФОТОБАНК</a>
                <ul className="center listHeader">
                    <li><a href='/popular' className="listHeader">Популярное</a></li>
                    <li><a href='/subsc' className="listHeader">Подписки</a></li>
                    <li><a href='/profile' className="listHeader">Профиль</a></li>
                    <li><a href='/settings' className="listHeader">Настройки</a></li>
                    <li><input className="search" placeholder="ПОИСК"></input></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar