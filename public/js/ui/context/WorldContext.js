function WorldContext(world) {
    ActionsContext.apply(this);
    this.world = world;
    this.mapContext = new MapContext(this);
    this.selectNext = function() {
        if (this.selected) {
            for (
                var i = 0;
                i < this.world.objects.length;
                i++
            ) {
                if (this.selected == this.world.objects[i]) {
                    this.selected = this.world.objects[
                        ++i < this.world.objects.length ? i : 0
                    ];
                    break;
                }
            }
        } else {
            this.selected = this.world.objects[0];
        }
    }
    this.onKey = function(
        key,
        isDown
    ) {
        if (isDown) {
            switch (key) {
              case 67:
                this.onAction(WorldContext.CHAR_ACTION);
                break;
              case 77:
                this.onAction(WorldContext.MAP_ACTION);
                break;
              case 78:
                this.selectNext();
                break;
              default:
                if (this.selected) {
                    this.checkUpdate(
                        this.selected.move(key)
                    );
                }
            }
        }
    }
    this.WorldContextParent_onClick = this.onClick;
    this.onClick = function(vector) {
        if (
            !this.WorldContextParent_onClick(vector)
        ) {
            for (
                var i = 0;
                i < this.world.objects.length;
                i++
            ) {
                var obj = this.world.objects[i];
                if (
                    this.selected != obj
                    &&
                    this.ui.toScreen(
                        obj.getBox(WorldContext.box)
                    ).contains(vector)
                ) {
                    this.selected = obj;
                    this.checkUpdate(true);
                    break;
                } else if (
                    i == this.world.objects.length - 1
                    &&
                    this.selected
                ) {
                    this.checkUpdate(
                        this.selected.move(
                            this.ui.toWorld(
                                WorldContext.vector.set(vector)
                            )
                        )
                    );
                }
            }
        }
    }
    this.WorldContextParent_simulate = this.simulate;
    this.simulate = function(dt) {
        this.checkUpdate(
            this.WorldContextParent_simulate(dt) && this.selected
        );
        this.checkUpdate(
            this.world.simulate(dt)
        );
    }
    this.WorldContextParent_paint = this.paint;
    this.paint = function(graphics) {
        this.world.paint(graphics);
        if (
            this.selected
            &&
            this.isTicker()
        ) {
            graphics.
                beginPath().
                rect(
                    graphics.toScreen(
                        this.selected.getBox(WorldContext.box)
                    )
                ).
                stroke('#EEFFDD');
        }
        this.WorldContextParent_paint(graphics);
    }
    this.onAction = function(index) {
        switch (index) {
          case WorldContext.MAP_ACTION:
            return this.ui.setContext(this.mapContext);
          case WorldContext.CHAR_ACTION:
            if (!this.selected) {
                this.selectNext();
            }
            if (this.selected) {
                this.ui.setScroll(this.selected.position);
            }
            return true;
        }
    }
    this.reset = function() {
        this.world.reset()
        this.checkUpdate(true);
    }
}
WorldContext.vector = new Vector();
WorldContext.box = new Box();
WorldContext.MAP_ACTION = 0;
WorldContext.CHAR_ACTION = 1;
