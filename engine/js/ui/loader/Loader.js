function Loader(path) {
    Loader.path = path;
    Loader.total = Loader.count = 0;
    Loader.listener = this;
}
Loader.to = new Vector();
Loader.from = new Vector();
Loader.paintArrow = function(
    graphics,
    lengthFactor,
    angleFactor
) {
    return graphics.
        moveTo(Loader.from).
        lineTo(Loader.to.
            set(
                0,
                - Loader.from.y / lengthFactor
            ).
            rotate(- Loader.count * Math.PI / angleFactor).
            add(Loader.from)
        );
}
Loader.paint = function(graphics) {
    Loader.paintArrow(
        Loader.paintArrow(
            graphics.
                beginPath(4).
                arc(
                    graphics.
                        getSize(Loader.from).
                        div(2),
                    Loader.from.y / 7
                ).
                fill("#EEEEEE").
                stroke("#DDDDDD").
                beginPath(2),
            9,
            4
        ).
            stroke().
            beginPath(3),
        11,
        32
    ).stroke();
}
Loader.onLoad = function() {
    Loader.count++;
    if (
        Loader.listener
        &&
        Loader.listener.onLoad
    ) {
        Loader.listener.onLoad();
    }
}
