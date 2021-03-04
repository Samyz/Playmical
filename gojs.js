function init() {
  var $ = go.GraphObject.make;

  var diagram = $(
    go.Diagram,
    "helloGO", // must name or refer to the DIV HTML element
    {
      // have mouse wheel events zoom in and out instead of scroll up and down
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      "animationManager.initialAnimationStyle": go.AnimationManager.None,
      InitialAnimationStarting: function (e) {
        var animation = e.subject.defaultAnimation;
        animation.easing = go.Animation.EaseOutExpo;
        animation.duration = 1000;
        animation.add(e.diagram, "scale", 0.1, 1);
        animation.add(e.diagram, "opacity", 0, 1);
      },
      // enable undo & redo
      "undoManager.isEnabled": true,
      positionComputation: function (diagram, pt) {
        return new go.Point(Math.floor(pt.x), Math.floor(pt.y));
      },
      "draggingTool.isEnabled": false,
    }
  );

  diagram.nodeTemplate = $(
    go.Node,
    "Auto",
    { desiredSize: new go.Size(75, 75) },
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Panel,
      "Spot",
      { isClipping: true },
      $(go.Shape, "Circle", { width: 75, strokeWidth: 0 }),
      $(
        go.Picture,
        { margin: 10, width: 75, height: 75 },
        new go.Binding("source", "", choosePic)
      )
    )
  );

  var nodeDataArray = [
    { key: 1, loc: "0 0", isHighlighted: true, name: "H" }, //, "name": "Start\nstate"
    { key: 2, loc: "400 0", isHighlighted: false, name: "O" }, //, "name": "End\nstate"
    { key: 3, loc: "200 200", name: "start" },
  ];
  var linkDataArray = [{ from: 1, to: 2 }, { from: 1, to: 3 }];

  diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
}

function choosePic(data) {
  return data.name.charAt(0) == "H" ||
    data.name.charAt(0) == "O" ||
    data.name.charAt(0) == "C" ||
    data.name.charAt(0) == "N"
    ? data.isHighlighted
      ? `./Pic/${data.name}.png`
      : `./Pic/${data.name}black.png`
    : `./Pic/${data.name}.png`;
}
