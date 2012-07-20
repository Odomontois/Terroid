function UI(
    id,
    path,
    width,
    height
) {
    Keyboard.apply(this);
    Mouse.apply(this);
    Timer.apply(this);
    SoundLoader.apply(
        this,
        [path]
    );
    Graphics.apply(
        this,
        [
            id,
            width,
            arguments.length > 3 ? height : width
        ]
    );
    this.onKey = function(
        key,
        isDown
    ) {
        if (
            this.context
            &&
            this.context.onKey
        ) {
            this.context.onKey(
                key,
                isDown
            );
        }
    }
    this.onClick = function(vector) {
        if (
            this.context
            &&
            this.context.onClick
        ) {
            this.context.onClick(
                this.toGraphics(
                    UI.vector.set(vector)
                )
            );
        }
    }
    this.onDt = function(dt) {
        if (this.context) {
            if (this.context.simulate) {
                this.context.simulate(dt);
            }
            this.context.onPaint(this);
        }
    }
    this.onLoad = function() {
        Loader.paint(this);
        if (Loader.count == Loader.total) {
            if (
                this.setContext(this.startContext)
                &&
                this.context.reset
            ) {
                this.context.reset();
            }
        }
    }
    this.setContext = function(context) {
        this.context = context;
        if (this.context) {
            this.context.ui = this;
            this.context.checkUpdate(true);
        }
        return this.context;
    }
    this.setStartContext = function(context) {
        return this.startContext = context;
    }
}
UI.vector = new Vector();
