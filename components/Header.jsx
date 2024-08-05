import React from "react"
import ReactDOM from "react-dom/client"
import OtherComponent from "./OtherComponent"

export default function Header() {
    return (
        <header>
            <nav>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                    <OtherComponent />
                </ul>
            </nav>
        </header>
    )
}