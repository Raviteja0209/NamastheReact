const divele = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", { id: "headtag" }, "this is h1")
    )
)

nesteddiv.render(divele)