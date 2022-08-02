class Header extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = 
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" type="text/css" href="../css/index.css">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
            <header>
            <div class="header-container">
                <img class="header-logo-container" src="assets/logo.png"/>
                <div class="header-action-container">
                    <div class="text-action-container tablet-desktop-view">
                        <img src="assets/search.svg" class="header-action-icon"/>
                        <div class="header-action-text">Search</div>
                    </div>
                    <div class="text-action-container tablet-desktop-view">
                        <img src="assets/vector.svg" class="header-action-icon"/>
                        <div class="header-action-text">EN</div>
                    </div>
                    <div class="text-action-container tablet-desktop-view">
                        <img src="assets/user.svg" class="header-action-icon"/>
                        <div class="header-action-text">Welcome, Mr. Ibrahim Aziz</div>
                    </div>
                    <img onclick="customMenuBar()" id="menu-close" src="assets/menu-bar.svg" class="menu-bar-icon"/>
                    <img onclick="customMenuBar()" id="menu-open" src="assets/cross-blue.svg" class="menu-cross-icon" style="display:none"/>
                    <div id="nav-container" class="navigation-container" style="display:none">
                        <div class="navigation-menu">
                            <div class="navigation-text">Search</div>
                            <img src="../assets/search.svg" class="navigation-icon"/>
                        </div>
                        <div class="navigation-menu">
                            <div class="navigation-text">EN</div>
                            <img src="../assets/vector.svg" class="navigation-icon"/>
                        </div>
                        <div class="navigation-menu">
                            <div class="navigation-text">My Profile</div>
                            <img src="../assets/user.svg" class="navigation-icon"/>
                        </div>
                        <div class="navigation-menu">
                            <div class="navigation-text">Sign Out</div>
                            <img src="../assets/sign-out.svg" class="navigation-icon"/>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div class="mobile-user-name">Welcome Mr. Ibrahim Aziz</div>
    
        </header>

        

             
            </body>
        </html>`;
    }
}

window.customElements.define('custom-header', Header);