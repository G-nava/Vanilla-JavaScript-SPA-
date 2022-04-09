const Header = () =>{
    const view = `
        <div class="header">
            <a class="header__items" href="/">Home</a>
            <div class="header__items>
                <a class="items" href="#/about">About me</a>
                <a class="items" href="#/stack">My stack</a>
                <a class="items" href="#/projects">Projects</a>
            </div>
        </div>
    `;
    return view;
};

export default Header;