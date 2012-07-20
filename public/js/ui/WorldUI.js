function WorldUI(
    id,
    path,
    width,
    height
) {
    UI.apply(
        this,
        [
            id,
            path,
            width,
            arguments.length > 3 ? height : width
        ]
    );
    this.scroll = new Vector();
    this.setScroll = function(vector) {
        WorldUI.vector.set(this.scroll);
        this.scroll.set(vector);
        this.getSize(WorldUI.box.min).div(2);
        if (
            this.worldContext
            &&
            this.worldContext.world
        ) {
            this.worldContext.world.
                getSize(WorldUI.box.max).
                    sub(WorldUI.box.min);
            this.scroll.limit(WorldUI.box);
        }
        return !WorldUI.vector.eq(
            this.scroll.sub(WorldUI.box.min)
        );
    }
    this.toWorld = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                arguments[0].add(this.scroll);
            } else if (arguments[0] instanceof Box) {
                this.toWorld(arguments[0].min);
                this.toWorld(arguments[0].max);
            }
            return arguments[0];
        }
    }
    this.toScreen = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                arguments[0].sub(this.scroll);
            } else if (arguments[0] instanceof Box) {
                this.toScreen(arguments[0].min);
                this.toScreen(arguments[0].max);
            }
            return arguments[0];
        }
    }
    this.isInScreen = function(box) {
        return !this.getBox(WorldUI.box).isOutOf(box);
    }
    this.setWorldContext = function(worldContext) {
        return this.worldContext = worldContext;
    }
}
WorldUI.vector = new Vector();
WorldUI.box = new Box();
