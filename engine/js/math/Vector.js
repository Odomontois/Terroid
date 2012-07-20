function Vector() {
    this.toString = function() {
        return "Vector(" + this.x + ", " + this.y + ", " + this.z + ")";
    }
    this.neg = function() {
        return this.set(
            - this.x,
            - this.y,
            - this.z
        );
    }
    this.floor = function() {
        return this.set(
            Math.floor(this.x),
            Math.floor(this.y),
            Math.floor(this.z)
        );
    }
    this.eq = function(vector) {
        return this.x == vector.x && this.y == vector.y && this.z == vector.z;
    }
    this.mul = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Matrix) {
                this.set(
                    Vector.vector.set(
                        this.x * arguments[0]._11 + this.y * arguments[0]._21 + this.z * arguments[0]._31 + arguments[0]._14,
                        this.x * arguments[0]._12 + this.y * arguments[0]._22 + this.z * arguments[0]._32 + arguments[0]._24,
                        this.x * arguments[0]._13 + this.y * arguments[0]._23 + this.z * arguments[0]._33 + arguments[0]._34
                    )
                );
            } else if (arguments[0] instanceof Vector) {
                this.set(
                    Vector.vector.set(
                        this.y * arguments[0].z - this.z * arguments[0].y,
                        this.z * arguments[0].x - this.x * arguments[0].z,
                        this.x * arguments[0].y - this.y * arguments[0].x
                    )
                );
            } else {
                this.x *= arguments[0];
                this.y *= arguments[arguments.length > 1 ? 1 : 0];
                this.z *= arguments[arguments.length > 2 ? 2 : 0];
            }
        }
        return this;
    }
    this.div = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.div(
                    arguments[0].x != 0 ? arguments[0].x : 1,
                    arguments[0].y != 0 ? arguments[0].y : 1,
                    arguments[0].z != 0 ? arguments[0].z : 1
                );
            } else {
                this.x /= arguments[0];
                this.y /= arguments[arguments.length > 1 ? 1 : 0];
                this.z /= arguments[arguments.length > 2 ? 2 : 0];
            }
        }
        return this;
    }
    this.add = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.x += arguments[0].x;
                this.y += arguments[0].y;
                this.z += arguments[0].z;
            } else {
                this.x += arguments[0];
                if (arguments.length > 1) {
                    this.y += arguments[1];
                    if (arguments.length > 2) {
                        this.z += arguments[2];
                    }
                }
            }
        }
        return this;
    }
    this.sub = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.x -= arguments[0].x;
                this.y -= arguments[0].y;
                this.z -= arguments[0].z;
            } else {
                this.x -= arguments[0];
                if (arguments.length > 1) {
                    this.y -= arguments[1];
                    if (arguments.length > 2) {
                        this.z -= arguments[2];
                    }
                }
            }
        }
        return this;
    }
    this.limit = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.set(
                    Math.min(
                        arguments[0].x,
                        this.x
                    ),
                    Math.min(
                        arguments[0].y,
                        this.y
                    ),
                    Math.min(
                        arguments[0].z,
                        this.z
                    )
                );
            } else if (arguments[0] instanceof Box) {
                this.set(
                    Math.max(
                        arguments[0].min.x,
                        this.x
                    ),
                    Math.max(
                        arguments[0].min.y,
                        this.y
                    ),
                    Math.max(
                        arguments[0].min.z,
                        this.z
                    )
                ).limit(arguments[0].max);
            }
        }
        return this;
    }
    this.getScalar = function(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }
    this.getSquaredLength = function() {
        return this.getScalar(this);
    }
    this.getLength = function() {
        return Math.sqrt(
            this.getSquaredLength()
        );
    }
    this.normalize = function() {
        if (
            this.x
            ||
            this.y
            ||
            this.z
        ) {
            this.div(
                this.getLength()
            );
        }
        return this;
    }
    this.getCos = function(vector) {
        var d = Math.sqrt(
            this.getSquaredLength() * vector.getSquaredLength()
        );
        return d ? this.getScalar(vector) / d : 1;
    }
    this.getSin = function(vector) {
        return Math.sqrt(
            Vector.vector.set(this).mul(vector).getSquaredLength() / (
                this.getSquaredLength() * vector.getSquaredLength()
            )
        );
    }
    this.getDistance = function(vector) {
        return Vector.vector.
            set(this).
            sub(vector).
            getLength();
    }
    this.getCenter = function(
        result,
        vector
    ) {
        return result.
            set(this).
            add(vector).
            div(2);
    }
    this.rotateX = function(rad) {
        return this.mul(
            Vector.matrix.setXRotation(rad)
        );
    }
    this.rotateY = function(rad) {
        return this.mul(
            Vector.matrix.setYRotation(rad)
        );
    }
    this.rotateZ = function(rad) {
        return this.mul(
            Vector.matrix.setZRotation(rad)
        );
    }
    this.rotate = this.rotateZ;
    this.set = function() {
        this.x = this.y = this.z = 0.0;
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.x = arguments[0].x;
                this.y = arguments[0].y;
                this.z = arguments[0].z;
            } else {
                this.x = arguments[0];
                if (arguments.length > 1) {
                    this.y = arguments[1];
                    if (arguments.length > 2) {
                        this.z = arguments[2];
                    }
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
Vector.vector = new Vector();
Vector.matrix = new Matrix();
Vector.ZERO = new Vector();
Vector.X = new Vector(1);
Vector.Y = new Vector(
    0,
    1
);
Vector.Z = new Vector(
    0,
    0,
    1
);
Vector.ONE = new Vector(
    1,
    1,
    1
);
