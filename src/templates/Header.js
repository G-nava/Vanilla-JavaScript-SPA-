const Header = () =>{
    const view = `
        <div class="header__container">
            <a class="header__items">Guajira Visuals</a>
            <div class="header__items">
                <a class="items" href="/">About me</a>
                <a class="items" href="#/stack">My stack</a>
                <a class="items" href="#/projects">Projects</a>
            </div>
        </div>
    `;
    return view;
};

export default Header;