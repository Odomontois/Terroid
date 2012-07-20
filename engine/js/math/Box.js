function Box() {
    this.min = new Vector();
    this.max = new Vector();
    this.toString = function() {
        return "Box(" + this.min.toString() + ", " + this.max.toString() + ")";
    }
    this.getSize = function(result) {
        return result.set(this.max).
            sub(this.min);
    }
    this.getCenter = function(result) {
        return this.getSize(result).
            div(2).
            add(this.min);
    }
    this.contains = function(vector) {
        return (
            vector.x >= this.min.x
            &&
            vector.y >= this.min.y
            &&
            vector.z >= this.min.z
            &&
            vector.x <= this.max.x
            &&
            vector.y <= this.max.y
            &&
            vector.z <= this.max.z
        );
    }
    this.isOutOf = function(box) {
        return (
            this.min.x > box.max.x
            ||
            this.min.y > box.max.y
            ||
            this.min.z > box.max.z
            ||
            this.max.x < box.min.x
            ||
            this.max.y < box.min.y
            ||
            this.max.z < box.min.z
        );
    }
    this.floor = function() {
        this.min.floor();
        this.max.floor();
        return this;
    }
    this.add = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.min.add(arguments[0]);
                this.max.add(arguments[0]);
            }
        }
        return this;
    }
    this.div = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.min.div(arguments[0]);
                this.max.div(arguments[0]);
            }
        }
        return this;
    }
    this.set = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Box) {
                this.set(
                    arguments[0].min,
                    arguments[0].max
                );
            } else if (arguments[0] instanceof Vector) {
                this.max.set(
                    this.min.set(arguments[0])
                );
                if (arguments.length > 1) {
                    if (arguments[1] instanceof Vector) {
                        this.max.set(arguments[1]);
                    } else {
                        this.max.
                            set(Vector.ONE).
                            mul(arguments[1]);
                        this.min.sub(this.max);
                        this.max.add(arguments[0]);
                    }
                } else {
                    this.min.sub(this.min);
                }
            }
        }
        return this;
    }
    this.set.apply(
        this,
        arguments
    );
}
