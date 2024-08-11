const Page = (
    <div>
        <Header />
        <MyContent />
        <Footer />
    </div>
)
function Header() {
    return (
        <header>
            <h1>This is the header</h1>
        </header>
    )
}

function MyContent() {
    return (
        <div>
            <ul>
                <li>Element 1</li>
                <li>Element 2</li>
                <li>Element 3</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>(c) 2024 Javi</small>
        </footer>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(Page)