function Plane() {
    this.getCrossing = function() {
        if (
            arguments.length > 0
            &&
            arguments[0] instanceof Vector
        ) {
            if (
                arguments.length > 2
                &&
                arguments[1] instanceof Vector
                &&
                arguments[2] instanceof Vector
            ) {
                var ro = (
                    this.a * arguments[1].x +
                    this.b * arguments[1].y +
                    this.c * arguments[1].z +
                    this.d
                ) / (
                    this.a * arguments[2].x +
                    this.b * arguments[2].y +
                    this.c * arguments[2].z
                );
                arguments[0].set(
                    arguments[1].x - arguments[2].x * ro,
                    arguments[1].y - arguments[2].y * ro,
                    arguments[1].z - arguments[2].z * ro
                );
            } else if (
                arguments.length > 1
                &&
                arguments[1] instanceof Line
            ) {
                this.getCrossing(
                    arguments[0],
                    arguments[1].origin,
                    arguments[1].normal
                );
            }
            return arguments[0];
        }
    }
    this.getNormal = function(result) {
        return result.set(
            this.a,
            this.b,
            this.c
        );
    }
    this.getProjection = function(
        result,
        vector
    ) {
        return this.getCrossing(
            result,
            vector,
            this.getNormal(Plane.vector)
        );
    }
    this.getSin = function(line) {
        return this.getNormal(Plane.vector).getSin(line.normal);
    }
    this.getDistance = function(vector) {
        return this.a * vector.x +
            this.b * vector.y +
            this.c * vector.z +
            this.d;
    }
    this.isFront = function(vector) {
        return this.getDistance(vector) >= 0;
    }
    this.isBack = function(vector) {
        return this.getDistance(vector) <= 0;
    }
    this.set = function() {
        if (
            arguments.length > 0
            &&
            arguments[0] instanceof Line
        ) {
            this.set(
                arguments[0].origin,
                arguments[0].normal
            );
        } else if (
            arguments.length > 1
            &&
            arguments[0] instanceof Vector
            &&
            arguments[1] instanceof Vector
        ) {
            this.a = arguments[1].x;
            this.b = arguments[1].y;
            this.c = arguments[1].z;
            this.d = - (
                this.a * arguments[0].x +
                this.b * arguments[0].y +
                this.c * arguments[0].z
            );
        }
        return this;
    }
    this.set(
        arguments.length > 0 && arguments[0] instanceof Vector ? arguments[0] : Vector.ZERO,
        arguments.length > 1 && arguments[1] instanceof Vector ? arguments[1] : Vector.Y
    );
}
Plane.vector = new Vector();
Plane.XY = new Plane(
    Vector.ZERO,
    Vector.Z
);
Plane.XZ = new Plane();
Plane.YZ = new Plane(
    Vector.ZERO,
    Vector.X
);
