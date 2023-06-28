import React from "react";

const dateObject = new Date();
const copy = dateObject.getFullYear();

function Footer() {
    return <footer className="footer">
        <p>Copyright &copy; {copy}</p>
    </footer>
}

export default Footer;