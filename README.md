# React-Project

This project comes from the tutorial from [Scrimba](https://v2.scrimba.com/learn-react-c0e). It will evolve to a personal project using React!

Until v17 injecting jsx was made by 

```jsx
ReactDOM.render(myNavBar, document.getElementById("root"))
```

but since v18 it's done like this:

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(navbar)
```