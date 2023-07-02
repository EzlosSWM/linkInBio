function Footer() {
    let dateObj = new Date(); 
    let year = dateObj.getFullYear();

    return (
        <footer>
            <h3>&copy; Carlos Gomez {year}</h3>
        </footer>
    )
}

export default Footer;
