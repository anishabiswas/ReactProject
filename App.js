import React from "react";
import ReactDOM from "react-dom/client";

//by create react element

// const content = React.createElement(
//   "div",
//   { id: "parent", className: "newdiv" },
//   React.createElement(
//     "div",
//     { id: "child", className: "newdiv" },
//     // when u try to create sibling elements.. then create in the form of array
//     [
//       React.createElement("h1", { id: "text" }, "hi i am a big fan of yours!"),
//       React.createElement("h1", {}, "hi i am a big🚀 fan of salman and Dhoni!"),
//     ]
//   )
// );

const heading = <h1 id="head">hi , this is Pure JSX code</h1>;
const link = "https://github.com/anishabiswas?tab=repositories";
const imgLink = "salmanImg.jpg";

//JSx code
// const content = (
//   <div id="parent">
//     <div id="child">
//       <h1 id="subchild1" className="newdiv">
//         hi i am a big fan of yours!
//       </h1>
//       <a href={link}>guess what????</a>
//       <h1 id="subchild2">hi i am a big fan of salman 👨‍🎤 and Dhoni 🏏!</h1>
//       <img src={imgLink} alt="salman" />
//     </div>
//   </div>
// );

//react functional component
const Title = () => (
  <span>
    Hi this is an title component. And we are calling this by using simple jsx.
  </span>
);
const InnerContent = () => {
  return (
    <div id="child">
      <h1 id="subchild1" className="newdiv">
        hi i am a big fan of yours!
      </h1>
      {Title()}
      <a href={link}>guess what????</a>
      <h1 id="subchild2">hi i am a big fan of salman 👨‍🎤 and Dhoni 🏏!</h1>
      <img src={imgLink} alt="salman" />
    </div>
  );
};
const OuterContent = () => {
  return (
    <div id="parent">
      <InnerContent></InnerContent>
      {/* using JS inside HTML between curly braces. */}
      {heading}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<OuterContent />);
