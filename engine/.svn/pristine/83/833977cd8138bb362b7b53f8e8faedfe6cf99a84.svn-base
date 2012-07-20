function Matrix() {
    this.setIdentity = function() {
        return this.set(
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        );
    }
    this.mul = function(matrix) {
        return this.set(
            this._11 * matrix._11 + this._12 * matrix._21 + this._13 * matrix._31 + this._14 * matrix._41,
            this._11 * matrix._12 + this._12 * matrix._22 + this._13 * matrix._32 + this._14 * matrix._42,
            this._11 * matrix._13 + this._12 * matrix._23 + this._13 * matrix._33 + this._14 * matrix._43,
            this._11 * matrix._14 + this._12 * matrix._24 + this._13 * matrix._34 + this._14 * matrix._44,
            this._21 * matrix._11 + this._22 * matrix._21 + this._23 * matrix._31 + this._24 * matrix._41,
            this._21 * matrix._12 + this._22 * matrix._22 + this._23 * matrix._32 + this._24 * matrix._42,
            this._21 * matrix._13 + this._22 * matrix._23 + this._23 * matrix._33 + this._24 * matrix._43,
            this._21 * matrix._14 + this._22 * matrix._24 + this._23 * matrix._34 + this._24 * matrix._44,
            this._31 * matrix._11 + this._32 * matrix._21 + this._33 * matrix._31 + this._34 * matrix._41,
            this._31 * matrix._12 + this._32 * matrix._22 + this._33 * matrix._32 + this._34 * matrix._42,
            this._31 * matrix._13 + this._32 * matrix._23 + this._33 * matrix._33 + this._34 * matrix._43,
            this._31 * matrix._14 + this._32 * matrix._24 + this._33 * matrix._34 + this._34 * matrix._44,
            this._41 * matrix._11 + this._42 * matrix._21 + this._43 * matrix._31 + this._44 * matrix._41,
            this._41 * matrix._12 + this._42 * matrix._22 + this._43 * matrix._32 + this._44 * matrix._42,
            this._41 * matrix._13 + this._42 * matrix._23 + this._43 * matrix._33 + this._44 * matrix._43,
            this._41 * matrix._14 + this._42 * matrix._24 + this._43 * matrix._34 + this._44 * matrix._44
        );
    }
    this.setXRotation = function(rad) {
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        this.setIdentity();
        this._22 = cos;
        this._23 = - sin;
        this._32 = sin;
        this._33 = cos;
        return this;
    }
    this.setYRotation = function(rad) {
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        this.setIdentity();
        this._11 = cos;
        this._13 = sin;
        this._31 = - sin;
        this._33 = cos;
        return this;
    }
    this.setZRotation = function(rad) {
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        this.setIdentity();
        this._11 = cos;
        this._12 = - sin;
        this._21 = sin;
        this._22 = cos;
        return this;
    }
    this.setRotation = this.setZRotation;
    this.setScale = function() {
        this.setIdentity();
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.setScale(
                    arguments[0].x,
                    arguments[0].y,
                    arguments[0].z
                );
            } else {
                this._11 = arguments[0];
                if (arguments.length > 1) {
                    this._22 = arguments[1];
                    if (arguments.length > 2) {
                        this._33 = arguments[2];
                    }
                }
            }
        }
        return this;
    }
    this.setTranslate = function() {
        this.setIdentity();
        if (arguments.length > 0) {
            if (arguments[0] instanceof Vector) {
                this.setTranslate (
                    arguments[0].x,
                    arguments[0].y,
                    arguments[0].z
                );
            } else {
                this._14 = arguments[0];
                if (arguments.length > 1) {
                    this._24 = arguments[1];
                    if (arguments.length > 2) {
                        this._34 = arguments[2];
                    }
                }
            }
        }
        return this;
    }
    this.set = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Matrix) {
                this.set(
                    arguments[0]._11,
                    arguments[0]._12,
                    arguments[0]._13,
                    arguments[0]._14,
                    arguments[0]._21,
                    arguments[0]._22,
                    arguments[0]._23,
                    arguments[0]._24,
                    arguments[0]._31,
                    arguments[0]._32,
                    arguments[0]._33,
                    arguments[0]._34,
                    arguments[0]._41,
                    arguments[0]._42,
                    arguments[0]._43,
                    arguments[0]._44
                );
            } else if (arguments.length > 15) {
                this._11 = arguments[0];
                this._12 = arguments[1];
                this._13 = arguments[2];
                this._14 = arguments[3];
                this._21 = arguments[4];
                this._22 = arguments[5];
                this._23 = arguments[6];
                this._24 = arguments[7];
                this._31 = arguments[8];
                this._32 = arguments[9];
                this._33 = arguments[10];
                this._34 = arguments[11];
                this._41 = arguments[12];
                this._42 = arguments[13];
                this._43 = arguments[14];
                this._44 = arguments[15]; 
            }
        }
        return this;
    }
    this.setIdentity();
    this.set.apply(
        this,
        arguments
    );
}
