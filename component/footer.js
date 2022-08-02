class Footer extends HTMLElement {
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
                <footer id="footer-control" class="footer">
                    <div class="footer-content">
                        <div class="footer-sub-info">Personal Data Protection Notice</div>
                        <div class="footer-sub-info">Terms and Conditions</div>
                        <div class="footer-sub-info">Frequently Ask Question (FAQ)</div>
                    </div>
                    <div class="footer-txt">@Zurich Malaysia</div>
                </footer> 
            </body>
        </html>`;
    }
}

window.customElements.define('custom-footer', Footer);