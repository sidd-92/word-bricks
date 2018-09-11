let elem = React.createElement;
function AnswerBox(props) {
  const nav = elem(
    "nav",
    { "aria-label": "..." },
    elem(
      "ul",
      { className: "pagination" },
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "1")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "2")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "3")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "3")
      )
    ),
    elem(
      "ul",
      { className: "pagination" },
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "1")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "2")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "3")
      )
    ),
    elem(
      "ul",
      { className: "pagination" },
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "1")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "2")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "3")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "3")
      )
    ),
    elem(
      "ul",
      { className: "pagination" },
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "1")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "2")
      ),
      elem(
        "li",
        { className: "page-item disabled" },
        elem("a", { className: "page-link" }, "3")
      )
    )
  );
  return elem("p", null, props.name);
}

//const twonav = elem("div", null, nav, nav, nav);
ReactDOM.render(
  elem(AnswerBox, { name: "NAVBAR" }),
  document.getElementById("answerBox")
);
