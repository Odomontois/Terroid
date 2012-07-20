function CharacterSpriteSet(name) {
    this.create = function(sub) {
        return new Sprite(
            name + "/" + sub,
            3
        );
    }
    this.left = this.create("left");
    this.right = this.create("right");
    this.up = this.create("up");
    this.down = this.create("down");
}

function Character(sprites) {
    function CharacterAnimationSet() {
        function CharacterAnimation(sprite) {
            SpriteAnimation.apply(
                this,
                [
                    sprite,
                    0.5
                ]
            );
        }
        this.left = new CharacterAnimation(sprites.left);
        this.right = new CharacterAnimation(sprites.right);
        this.up = new CharacterAnimation(sprites.up);
        this.down = new CharacterAnimation(sprites.down);
    }
    Tall.apply(this);
    this.animations = new CharacterAnimationSet();
    this.setAnimation = function(animation) {
        if (this.animation != animation) {
            this.animation = animation;
            if (this.animation) {
                this.animation.reset();
            }
            return true;
        }
    }
    this.move = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                if (
                    Math.abs(
                        Character.vector.
                            set(arguments[0]).
                            sub(this.position).
                            x
                    ) > Math.abs(Character.vector.y)
                ) {
                    if (Character.vector.x > 0) {
                        return this.move(Keyboard.RIGHT);
                    } else if (Character.vector.x < 0) {
                        return this.move(Keyboard.LEFT);
                    }
                } else {
                    if (Character.vector.y > 0) {
                        return this.move(Keyboard.DOWN);
                    } else if (Character.vector.y < 0) {
                        return this.move(Keyboard.UP);
                    }
                }
            } else {
                switch (arguments[0]) {
                  case Keyboard.LEFT:
                    return this.setAnimation(this.animations.left);
                  case Keyboard.RIGHT:
                    return this.setAnimation(this.animations.right);
                  case Keyboard.UP:
                    return this.setAnimation(this.animations.up);
                  case Keyboard.DOWN:
                    return this.setAnimation(this.animations.down);
                }
            }
        }
    }
    this.getImage = function() {
        return this.animation.getImage();
    }
    this.isAllowed = function(tile) {
        return tile && tile.ID == Tile.GRASS;
    }
    this.simulate = function(
        dt,
        world
    ) {
        var ret = this.animation.simulate(dt);
        Character.position.set(this.position);
        if (
            !this.isAllowed(
                world.terrain.getTile(
                    this.position.add(
                        this.getSize(Character.vector).
                            mul(dt).
                            mul(
                                this.animation == this.animations.left ?
                                    -1 :
                                    (this.animation == this.animations.right ? 1 : 0),
                                this.animation == this.animations.up ?
                                    -1 :
                                    (this.animation == this.animations.down ? 1 : 0)
                            ).
                            div(2)
                    )
                )
            )
        ) {
            this.position.set(Character.position);
            if (this.animation == this.animations.left) {
                ret = this.move(Keyboard.RIGHT) || ret;
            } else if (this.animation == this.animations.right) {
                ret = this.move(Keyboard.LEFT) || ret;
            } else if (this.animation == this.animations.up) {
                ret = this.move(Keyboard.DOWN) || ret;
            } else if (this.animation == this.animations.down) {
                ret = this.move(Keyboard.UP) || ret;
            }
        } else {
            ret = ret || !Character.position.eq(this.position);
        }
        return ret;
    }
    this.move(Keyboard.DOWN);
}
Character.position = new Vector();
Character.vector = new Vector();
Character.box = new Box();
