function ActionsContext() {
    Ticker.apply(
        this,
        [1 / 3]
    );
    this.iconsPosition = new Vector();
    this.icons = new Sprite(
        "icons",
        2
    );
    this.getIconBox = function(
        box,
        index
    ) {
        var img = this.icons.getImage(index);
        box.max.set(
            img.width,
            img.height
        );
        var d = box.max.x / 5;
        box.max.add(
            this.ui.getSize(box.min).
                sub(
                    d + box.max.x,
                    box.min.y - d - (box.max.y + d) * index
                )
        );
        return box;
    }
    this.paint = function(graphics) {
        for (
            var i = 0;
            i < this.icons.getSize();
            i++
        ) {
            graphics.drawImage(
                this.icons.getImage(i),
                this.getIconBox(
                    ActionsContext.box,
                    i
                ).min
            );
        }
    }
    this.onClick = function(vector) {
        for (
            var i = 0;
            i < this.icons.getSize();
            i++
        ) {
            if (
                this.getIconBox(
                    ActionsContext.box,
                    i
                ).contains(vector)
            ) {
                return this.onAction(i);
            }
        }
    }
}
ActionsContext.box = new Box();
