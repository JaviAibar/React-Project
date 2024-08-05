import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import logo from "./logo.png"
import "./index.css"
 
const Page = (
    <div>
      <Header />
        <MyContent />
        <img src={logo} />
        <Footer />
    </div>
)

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