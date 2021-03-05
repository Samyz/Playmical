function init() {
  var $ = go.GraphObject.make;

  var diagram = $(
    go.Diagram,
    "helloGO", // must name or refer to the DIV HTML element
    {
      // have mouse wheel events zoom in and out instead of scroll up and down
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      allowVerticalScroll: false,
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
      positionComputation: function(d, p) { return new go.Point(-600, -20);},
    }
  );

  diagram.nodeTemplate = $(
    go.Node,
    {
      fromSpot: go.Spot.Bottom, // coming out from middle-right
      toSpot: go.Spot.Top,
    },
    "Auto",
    { desiredSize: new go.Size(55, 55) },
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Panel,
      "Spot",
      { isClipping: true },
      $(go.Shape, "Circle", { width: 55, strokeWidth: 0 }),
      $(
        go.Picture,
        { margin: 10, width: 55, height: 55 },
        new go.Binding("source", "", choosePic)
      )
    )
  );

  diagram.linkTemplate = $(
    go.Link,
    {
      routing: go.Link.Orthogonal, // Orthogonal routing AvoidsNodes
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
    ),
    $(
      go.TextBlock,
      {
        textAlign: "center",
        font: "bold 7pt cabin",
        margin: 4,
        segmentIndex: 0,
        segmentFraction: 0,
        background: "#FFFFFF",
      }, // centered multi-line text
      new go.Binding("text").makeTwoWay(),
      new go.Binding("segmentIndex").makeTwoWay(),
      new go.Binding("segmentFraction").makeTwoWay()
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
      fill: $(go.Brush, "Radial", { 0.0: "#2CB6B1", 1.0: "#FFFFFF"}),//, 0.9: "#FFFFFF" 
      stroke: null,
      desiredSize: new go.Size(85, 85),
    })
  );
  diagram.add(highlighter);

  // diagram.layout =
  // $(go.LayeredDigraphLayout,  // this will be discussed in a later section
  //   { columnSpacing: 5,
  //     setsPortSpots: false });

  // var nodeDataArray = [
  //   { key: 1, loc: "0 0", isHighlighted: false, name: "HH" }, //, "name": "Start\nstate"
  //   { key: 2, loc: "400 0", isHighlighted: false, name: "O" }, //, "name": "End\nstate"
  //   { key: 3, loc: "200 -200", isHighlighted: false, name: "start" },
  // ];
  // var linkDataArray = [
  //   { from: 3, to: 1 },
  //   {
  //     from: 3,
  //     to: 2,
  //     //   points: [200, -200,300, -100,400,0],
  //   },
  // ];

  diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  var node = diagram.findNodeForKey(0);
  highlighter.location = new go.Point(
    node.location.x + 27.5,
    node.location.y + 27.5
  );
}

function choosePic(data) {
  return data.name.charAt(0) <= "Z" && data.name.charAt(0) >= "A"
    ? data.isHighlighted
      ? `./Pic/${data.name}.png`
      : `./Pic/${data.name}black.png`
    : `./Pic/${data.name}.png`;
}
