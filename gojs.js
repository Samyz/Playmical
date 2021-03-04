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
    {
      fromSpot: go.Spot.Bottom, // coming out from middle-right
      toSpot: go.Spot.Top,
    },
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

  diagram.linkTemplate = $(
    go.Link,
    {
      routing: go.Link.AvoidsNodes, // Orthogonal routing
      corner: 10, // with rounded corners
      curve: go.Link.JumpOver,
    },
    new go.Binding("fromEndSegmentLength"),
    new go.Binding("toEndSegmentLength"),
    new go.Binding("points").makeTwoWay(),
    $(go.Shape),
    $(
      go.Shape, // the "to" end arrowhead
      { toArrow: "Standard" }
    )
  );

  highlighter = $(
    go.Part,
    "Auto",
    {
      layerName: "Background",
      selectable: false,
      isInDocumentBounds: false,
      locationSpot: go.Spot.Center,
    },
    $(go.Shape, "Circle", {
      fill: $(go.Brush, "Radial", { 0.4: "#DBFF00", 1.0: "#FFFFFF" }),
      stroke: null,
      desiredSize: new go.Size(110, 110),
    })
  );
  diagram.add(highlighter);

  // diagram.layout =
  // $(go.LayeredDigraphLayout,  // this will be discussed in a later section
  //   { columnSpacing: 5,
  //     setsPortSpots: false });

  var nodeDataArray = [
    { key: 1, loc: "0 0", isHighlighted: false, name: "HH" }, //, "name": "Start\nstate"
    { key: 2, loc: "400 0", isHighlighted: false, name: "O" }, //, "name": "End\nstate"
    { key: 3, loc: "200 -200", isHighlighted: false, name: "start" },
  ];
  var linkDataArray = [
    { from: 3, to: 1 },
    {
      from: 3,
      to: 2,
      //   points: [200, -200,300, -100,400,0],
    },
  ];

  diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  var node = diagram.findNodeForKey(1);
  highlighter.location = new go.Point(
    node.location.x + 38,
    node.location.y + 38
  );
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
