const heading = React.createElement("h1", { id: 'headingtag' }, "Hello React Bro !!!")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

//nested elements
const divele = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", { id: "headtag" }, "this is h1")
    )
)
const nesteddiv = ReactDOM.createRoot(document.getElementById("nesteddiv"))
nesteddiv.render(divele)

//siblings
const parele = React.createElement("div", { id: "parent1" },
    React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", { id: "headtag1" }, "this is h1"),
            React.createElement("h2", { id: "headtag2" }, "this is h2")
        ]
    )
)
const sibdiv = ReactDOM.createRoot(document.getElementById("sibdiv"))
sibdiv.render(parele)

//childsibilings
const childele = React.createElement("div", { id: "parent1" },
    [React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", { id: "headtag1" }, "this is h1"),
            React.createElement("h2", { id: "headtag2" }, "this is h2")
        ]
    ), React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", { id: "headtag3" }, "this is h1"),
            React.createElement("h2", { id: "headtag4" }, "this is h2")
        ]
    )]
)
const childdiv = ReactDOM.createRoot(document.getElementById("childdiv"))
sibdiv.render(childele)
