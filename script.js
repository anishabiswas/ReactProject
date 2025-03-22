const content = React.createElement(
  "div",
  { id: "parent", className: "newdiv" },
  React.createElement(
    "div",
    { id: "child", className: "newdiv" },
    // when u try to create sibling elements.. then create in the form of array
    [
      React.createElement("h1", { id: "text" }, "hi i am a big fan of yours!"),
      React.createElement("h1", {}, "hi i am a big fan of salman!"),
    ]
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
