function World(terrain) {
    this.terrain = terrain;
    this.getSize = function(vector) {
        return vector.set(this.terrain.size);
    }
    this.simulate = function(dt) {
        var ret = false;
        if (this.objects) {
            for (
                var i = 0;
                i < this.objects.length;
                i++
            ) {
                ret = this.objects[i].simulate(
                    dt,
                    this
                ) || ret;
            }
        }
        return ret;
    }
    this.paint = function(graphics) {
        var objects = [];
        this.terrain.paint(
            graphics,
            objects
        );
        for (
            var i = 0;
            i < this.objects.length;
            i++
        ) {
            if (
                graphics.isInScreen(
                    graphics.toScreen(
                        this.objects[i].getBox(World.box)
                    )
                )
            ) {
                objects.push(this.objects[i]);
            }
        }
        if (objects.length) {
            objects.sort(World.sort);
            for (
                var i = 0;
                i < objects.length;
                i++
            ) {
                var obj = objects[i];
                graphics.drawImage(
                    obj.getImage(),
                    graphics.toScreen(
                        obj.getBox(World.box)
                    ).min
                );
            }
        }
    }
    this.reset = function() {
        this.terrain.reset();
        if (this.objects) {
            for (
                var i = 0;
                i < this.objects.length;
                i++
            ) {
                World.box.set(
                    this.getSize(World.box.max)
                );
                do {
                    this.objects[i].position.set(
                        Rand.getInt(
                            World.box.min.x,
                            World.box.max.x
                        ),
                        Rand.getInt(
                            World.box.min.y,
                            World.box.max.y
                        )
                    );
                } while (
                    !this.objects[i].isAllowed(
                        this.terrain.getTile(this.objects[i].position)
                    )
                );
                this.objects[i].move(
                    World.box.getCenter(World.vector)
                );
            }
        }
    }
}
World.vector = new Vector();
World.box = new Box();
World.sort = function(obj1, obj2) {
    return obj1.getBottom() - obj2.getBottom();
}
