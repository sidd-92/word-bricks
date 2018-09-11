let elem = React.createElement;
function AnswerBox(props) {
  let list = props.name.map(n =>
    elem(
      "li",
      { key: n, className: "page-item disabled" },
      elem("a", { className: "page-link" }, n)
    )
  );
  return elem("ul", { className: "pagination" }, list);
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
}
let names = ["A", "B", "C"];
const twonav = elem(
  "nav",
  { "aria-label": "..." },
  elem(AnswerBox, { name: names }),
  elem(AnswerBox, { name: names })
);
const fournav = elem("div", null, twonav, twonav);
ReactDOM.render(fournav, document.getElementById("answerBox"));
