function Object() {
    this.position = new Vector();
    this.getSize = function(vector) {
        var image = this.getImage();
        return vector.set(
            image.width,
            image.height
        );
    }
    this.getBox = function(box) {
        box.min.set(
            this.getSize(box.max).div(2)
        ).neg();
        return box.add(this.position);
    }
}

function Tall() {
    Object.apply(this);
    this.getBottom = function() {
        return this.position.y;
    }
    this.getBox = function(box) {
        this.getSize(box.min).neg();
        box.max.set(box.min.x /= 2).neg();
        return box.add(this.position);
    }
}
