var animate = [];
var flag = 0
function circle(e) {
    var point = new Point(view.size.width, view.size.height);
    var center = point * Point.random();
    var circle = new Path.Circle({
        center: center,
        radius: 500,
        fillColor: data[e.key].color,
    });
    animate.push(circle)
}

function dots(e) {
    var count = 10
    var dotsArray = [];
    for (var i = 0; i < count; i++) {
        var point = new Point(view.size.width * 0.75, view.size.height * 0.75);
        var center = point * Point.random();
        dotsArray.push(center);
        var path = new Path.Circle({
            center: center,
            radius: 30,
            fillColor: data[e.key].color,
        });
        animate.push(path)
    }
}

function lines(e) {
    var count = 200
    for (var i = 0; i < count; i++) {
        var line = new Path();
        line.strokeColor = data[e.key].color;
        line.strokeWidth = 5;
        var widthStart = Point.random() * view.size.width
        var heightStart = Point.random() * view.size.height * 0.5
        line.add(new Point(widthStart, heightStart), new Point(widthStart + 100, heightStart + 100));
        animate.push(line)
    }
}

function rectangle(e) {
    var point = new Point(view.size.width * 0.1, view.size.height * 0.1);
    var center = point * Point.random();
    var rect = new Path.Rectangle({
        point: center,
        size: [1000, 1000],
        fillColor: data[e.key].color
    });
    animate.push(rect)
    flag = 1;
}

function onFrame(e) {
    for (var i = 0; i < animate.length; i++) {
        animate[i].scale(0.9)
        if (animate[i].fillColor)
            animate[i].fillColor.hue += 1;
        if (flag === 1) {
            animate[i].rotate(7)
        }
        if (animate[i].area < 1) {
            animate[i].remove();
            animate.splice(i, 1);
        }
    }
}

function onKeyDown(e) {
    if (data[e.key]) {
        if (data[e.key].shape == "circle") {
            circle(e);
        }
        else if (data[e.key].shape == "dots") {
            dots(e);
        }
        else if (data[e.key].shape == "lines") {
            lines(e);
        }
        else if (data[e.key].shape == "rectangle") {
            rectangle(e)
        }
    }
}

