function SpriteAnimation(
    sprite,
    period
) {
    if (sprite instanceof Sprite) {
        Animation.apply(
            this,
            [period]
        );
        this.sprite = sprite;
    } else if (arguments.length > 2) {
        Animation.apply(
            this,
            [
                arguments[2]
            ]
        );
        this.sprite = new Sprite(
            arguments[0],
            arguments[1]
        );
    }
    this.getImageIndex = function() {
        return Math.floor(
            this.getState() * this.sprite.getSize()
        );
    }
    this.SpriteAnimationParent_simulate = this.simulate;
    this.simulate = function(dt) {
        var i = this.getImageIndex();
        this.SpriteAnimationParent_simulate(dt);
        return i != this.getImageIndex();
    }
    this.getImage = function() {
        return this.sprite.getImage(
            this.getImageIndex()
        );
    }
}
