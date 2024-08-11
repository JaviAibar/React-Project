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






ReactDOM.createRoot(document.getElementById("root")).render(Page)