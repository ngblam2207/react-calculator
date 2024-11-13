const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {thisYear}</p>
        </footer>
    )
}

export default Footer