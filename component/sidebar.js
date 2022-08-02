class Sidebar extends HTMLElement {
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
                <div class="side-bar-container tablet-desktop-view">
                    <img src="assets/notification.svg" class="side-bar-action-icon" />
                    <img src="assets/calculator.svg" class="side-bar-action-icon" />
                </div>
            </body>
        </html>`;
    }
}

window.customElements.define('sidebar-custom', Sidebar);