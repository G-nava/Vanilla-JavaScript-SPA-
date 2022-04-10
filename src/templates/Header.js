const Header = () =>{
    const view = `
        <div class="header__container" >
            <div class="header__title">
                <a class="item__title" href="/">Guajira Visuals</a>
            </div>
            <div class="header__items">
                <a class="items" href="#/about">About me</a>
                <a class="items" href="#/stack">My stack</a>
                <a class="items" href="#/projects">Projects</a>
            </div>
        </div>
    `;
    return view;
};

export default Header;