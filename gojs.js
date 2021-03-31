function init() {
  var $ = go.GraphObject.make;

  diagram = $(
    go.Diagram,
    "helloGO", // must name or refer to the DIV HTML element
    {
      // have mouse wheel events zoom in and out instead of scroll up and down
      // "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,
      allowVerticalScroll: false,
      "animationManager.initialAnimationStyle": go.AnimationManager.None,
      InitialAnimationStarting: function (e) {
        var animation = e.subject.defaultAnimation;
        animation.easing = go.Animation.EaseOutExpo;
        animation.duration = 1000;
        animation.add(e.diagram, "scale", 0.1, 0.8);
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
    new go.Binding("zOrder", 'bold', function (progress) {
      return progress ? 1 : 0;
    }),

    $(go.Shape,
      new go.Binding('stroke', 'colorPath', function (progress) {
        return progress == null ? '#9F9DA3' : progress;
      }),
      new go.Binding('strokeWidth', 'bold', function(progress) {
        return progress ? 4 : 1;
      })
      ),
    $(
      go.Shape, // the "to" end arrowhead
      { toArrow: "Standard", stroke: null },
      new go.Binding('fill', 'colorPath', function (progress) {
        return progress == null ? '#9F9DA3' : progress;
      }),
      new go.Binding('scale', 'bold', function (progress) {
        return progress==true ? 2 : 1;
      })
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
      new go.Binding("segmentFraction").makeTwoWay(),
      new go.Binding("stroke", 'colorText', function (progress) {
        return progress == null ? '#9F9DA3' : progress;
      }),
      new go.Binding("font", 'colorText', function (progress) {
        return progress == null ? "bold 7pt cabin" : "bold 8.5pt cabin";
      }),
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

  diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  for (p of diagram.model.linkDataArray) {
    diagram.model.set(p, 'colorPath', null);
    diagram.model.set(p, 'colorText', null);
    diagram.model.set(p, 'bold', false);
  }
  highlightNode(machine.current_State.key)
  highlightPath(machine.prev_State.key, machine.current_State.key)
}

function highlightNode(key) {
  var node = diagram.findNodeForKey(key);
  
  for (p of diagram.model.nodeDataArray) {
    if (p.key == key){
      diagram.model.set(p, 'isHighlighted', true);
      break;
    }
  }

  highlighter.location = new go.Point(
    node.location.x + 27.5,
    node.location.y + 27.5
  );
}

function eraseNode() { 
  for (p of diagram.model.nodeDataArray) {
    diagram.model.set(p, 'isHighlighted', false);
  }
}

function highlightPath(last_state, current_state) {
  colorTextf = '#2CB6B1';
  colorPathf = '#2CB6B1';
  colorTextt = '#44404E';
  colorPatht = '#44404E';
  for (p of diagram.model.linkDataArray) {
    if (p.from == last_state && p.to == current_state) {
      // console.log(p);
      diagram.model.set(p, 'colorPath', colorPathf);
      diagram.model.set(p, 'colorText', colorTextf);
      diagram.model.set(p, 'bold', true);
      // break;
    }
    else if(p.from == current_state){
      diagram.model.set(p, 'colorPath', colorPatht);
      diagram.model.set(p, 'colorText', colorTextt);
      diagram.model.set(p, 'bold', true);
      }
    else{
      diagram.model.set(p, 'bold', false);
      diagram.model.set(p, 'colorPath', null);
      diagram.model.set(p, 'colorText', null);
    }
  }
}

function choosePic(data) {
  return data.name.charAt(0) <= "Z" && data.name.charAt(0) >= "A"
    ? data.isHighlighted
      ? `./Pic/${data.name}.png`
      : `./Pic/${data.name}black.png`
    : `./Pic/${data.name}.png`;
}

function handleClick(button) {
  machine.input_String.push(button);
  //set prev state
  machine.prev_State = machine.current_State;
  // get next state
  let next = machine.getNext(button);

  // set current state = next state
  machine.setCurrentState(next);

  highlightNode(machine.current_State.key);
  highlightPath(machine.prev_State.key, machine.current_State.key);

  // Reset erase Node
  if (machine.current_State.name == 'start' && button == 'Reset'){
    eraseNode();
  }
  console.log(machine.current_State.name);
}

function restart() {
  machine.input_String = [];
  machine.Restart();
  eraseNode();
  highlightNode(machine.current_State.key)
  highlightPath(machine.prev_State.key, machine.current_State.key)
}
