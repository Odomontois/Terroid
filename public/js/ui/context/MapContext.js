function MapContext(worldContext) {
    Context.apply(this);
    this.worldContext = worldContext;
    this.getWorld = function() {
        return this.worldContext.world;
    }
    this.getObjects = function() {
        return this.getWorld().objects;
    }
    this.getTerrain = function() {
        return this.getWorld().terrain;
    }
    this.getCells = function() {
        return this.getTerrain().cells;
    }
    this.getWorldSize = function(vector) {
        return this.getWorld().getSize(vector);
    }
    this.paint = function(graphics) {
        graphics.clear(Tile.GRASSCOLOR);
        graphics.getSize(MapContext.cellSize).
            div(
                this.getCells().length,
                this.getCells()[0].length
            ).
            floor();
        for (
            var i = 0;
            i < this.getCells().length;
            i++
        ) {
            for (
                var j = 0;
                j < this.getCells()[0].length;
                j++
            ) {
                var objs = this.getCells()[i][j];
                for (
                    var k = 0;
                    k < objs.length;
                    k++
                ) {
                    var obj = objs[k];
                    var ID = obj.ID;
                    if (
                        ID > 0
                        ||
                        k > 0
                    ) {
                        graphics.
                            beginPath().
                            rect(
                                i * MapContext.cellSize.x,
                                j * MapContext.cellSize.y,
                                MapContext.cellSize.x,
                                MapContext.cellSize.y
                            ).
                            fill(
                                obj.getColor()
                            );
                    }
                }
            }
        }
        for (
            var i = 0;
            i < this.getObjects().length;
            i++
        ) {
            graphics.getBox(MapContext.box).min.
                set(
                    this.getObjects()[i].position
                ).mul(
                    MapContext.box.max.x,
                    MapContext.box.max.y
                ).div(
                    this.getWorldSize(MapContext.worldSize)
                ).sub(
                    MapContext.box.max.set(MapContext.cellSize).div(4)
                );
            MapContext.box.max.
                mul(2).
                add(MapContext.box.min);
            graphics.
                beginPath().
                rect(MapContext.box).
                fill(
                    this.getObjects()[i] == this.worldContext.selected ? "#FF0000" : "#FFFF00"
                );
        }
        MapContext.box.set(
            graphics.getSize(MapContext.vector)
        ).max.
            mul(
                MapContext.vector.x,
                MapContext.vector.y
            ).
            div(
                this.getWorldSize(MapContext.worldSize)
            ).
            add(
                MapContext.box.min.
                    set(this.ui.scroll).
                    mul(
                        MapContext.vector.x,
                        MapContext.vector.y
                    ).
                    div(MapContext.worldSize)
            );
        graphics.
            beginPath().
            rect(MapContext.box).
            stroke();
    }
    this.back = function() {
        this.ui.setContext(this.worldContext);
    }
    this.onKey = function(
        key,
        isDown
    ) {
        if (isDown) {
            this.back();
        }
    }
    this.onClick = function(vector) {
        this.ui.setScroll(
            MapContext.vector.
                set(vector).
                mul(
                    this.getWorldSize(MapContext.worldSize).x,
                    MapContext.worldSize.y
                ).
                div(
                    this.ui.getBox(MapContext.box).max
                )
        );
        this.back();
    }
}
MapContext.worldSize = new Vector();
MapContext.cellSize = new Vector();
MapContext.vector = new Vector();
MapContext.box = new Box();
