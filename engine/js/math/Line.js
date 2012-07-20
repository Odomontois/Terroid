function Line() {
    this.origin = new Vector();
    this.normal = new Vector();
    this.getDistance = function(vector) {
        return Math.sqrt(
            (
                Math.pow(
                    (vector.x - this.origin.x) * this.normal.y -
                    (vector.y - this.origin.y) * this.normal.x,
                    2
                ) +
                Math.pow(
                    (vector.y - this.origin.y) * this.normal.z -
                    (vector.z - this.origin.z) * this.normal.y,
                    2
                ) +
                Math.pow(
                    (vector.z - this.origin.z) * this.normal.x -
                    (vector.x - this.origin.x) * this.normal.z,
                    2
                )
            ) / this.normal.getSquaredLength()
        );
    }
    this.set = function(
        origin,
        normal
    ) {
        this.origin.
            set(origin);
        this.normal.
            set(normal).
            normalize();
        return this;
    }
    this.set.apply(
        this,
        arguments
    );
}
