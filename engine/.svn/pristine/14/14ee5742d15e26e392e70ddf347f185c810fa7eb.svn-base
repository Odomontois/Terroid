function Graphics(
    id,
    width,
    height
) {
    this.transform = function(matrix) {
        if (this.screenContext) {
            this.screenContext.transform(
                matrix._11,
                matrix._21,
                matrix._12,
                matrix._22,
                matrix._14,
                matrix._24
            );
        }
        return this;
    }
    this.beginPath = function() {
        if (this.screenContext) {
            if (arguments.length > 0) {
                this.screenContext.lineWidth = arguments[0];
            }
            this.screenContext.beginPath();
        }
        return this;
    }
    this.closePath = function() {
        if (this.screenContext) {
            this.screenContext.closePath();
        }
        return this;
    }
    this.fill = function() {
        if (this.screenContext) {
            if (arguments.length > 0) {
                this.screenContext.fillStyle = arguments[0];
            }
            this.screenContext.fill();
        }
        return this;
    }
    this.stroke = function() {
        if (this.screenContext) {
            if (arguments.length > 0) {
                this.screenContext.strokeStyle = arguments[0];
            }
            this.screenContext.stroke();
        }
        return this;
    }
    this.moveTo = function() {
        if (
            arguments.length > 1
            &&
            this.screenContext
        ) {
            this.screenContext.moveTo(
                arguments[0],
                arguments[1]
            );
        } else if (
            arguments.length > 0
            &&
            arguments[0] instanceof Vector
        ) {
            this.moveTo(
                arguments[0].x,
                arguments[0].y
            );
        }
        return this;
    }
    this.lineTo = function() {
        if (
            arguments.length > 1
            &&
            this.screenContext
        ) {
            this.screenContext.lineTo(
                arguments[0],
                arguments[1]
            );
        } else if (
            arguments.length > 0
            &&
            arguments[0] instanceof Vector
        ) {
            this.lineTo(
                arguments[0].x,
                arguments[0].y
            );
        }
        return this;
    }
    this.arc = function(
        x,
        y,
        r,
        from,
        to
    ) {
        if (
            arguments.length > 1
            &&
            arguments[0] instanceof Vector
        ) {
            if (arguments.length > 3) {
                this.arc(
                    arguments[0].x,
                    arguments[0].y,
                    arguments[1],
                    arguments[2],
                    arguments[3]
                );
            } else if (arguments.length > 2) {
                this.arc(
                    arguments[0].x,
                    arguments[0].y,
                    arguments[1],
                    arguments[2]
                );
            } else {
                this.arc(
                    arguments[0].x,
                    arguments[0].y,
                    arguments[1]
                );
            }
        } else if (
            arguments.length > 2
            &&
            this.screenContext
        ) {
            this.screenContext.arc(
                x,
                y,
                r,
                arguments.length > 3 ? from : 0,
                arguments.length > 4 ? to : Math.PI * 2,
                false
            );
        }
        return this;
    }
    this.rect = function() {
        if (arguments.length > 0) {
            if (arguments[0] instanceof Box) {
                this.rect(
                    arguments[0].min.x,
                    arguments[0].min.y,
                    arguments[0].max.x - arguments[0].min.x,
                    arguments[0].max.y - arguments[0].min.y
                );
            } else if (
                arguments.length > 3
                &&
                this.screenContext
            ) {
                this.screenContext.rect(
                    arguments[0],
                    arguments[1],
                    arguments[2],
                    arguments[3]
                );
            }
        }
        return this;
    }
    this.drawImage = function(image) {
        if (arguments.length > 0) {
            if (
                arguments.length > 1
                &&
                arguments[1] instanceof Vector
            ) {
                this.drawImage(
                    image,
                    arguments[1].x,
                    arguments[1].y
                );
            } else if (this.screenContext) {
                this.screenContext.drawImage(
                    image,
                    arguments.length > 1 ? arguments[1] : 0,
                    arguments.length > 2 ? arguments[2] : 0
                );
            }
        }
        return this;
    }
    this.clear = function() {
        if (this.screen) {
            this.rect(
                0,
                0,
                this.screen.width,
                this.screen.height
            );
            if (arguments.length > 0) {
                this.fill(arguments[0]);
            } else {
                this.fill();
            }
        }
        return this;
    }
    this.text = function(
        text,
        position
    ) {
        if (this.screenContext) {
            this.screenContext.strokeText(
                text,
                position.x - this.screenContext.measureText(text).width / 2,
                position.y,
                this.screen.width
            );
        }
        return this;
    }
    this.line = function() {
        if (arguments.length > 3) {
            this.beginPath().
                moveTo(
                    arguments[0],
                    arguments[1]
                ).
                lineTo(
                    arguments[2],
                    arguments[3]
                ).
                stroke();
        } else if (
            arguments.length > 1
            &&
            arguments[0] instanceof Vector
            &&
            arguments[1] instanceof Vector
        ) {
            this.line(
                arguments[0].x,
                arguments[0].y,
                arguments[1].x,
                arguments[1].y
            );
        } else if (
            arguments.length > 0
            &&
            arguments[0] instanceof Box
        ) {
            this.line(
                arguments[0].min,
                arguments[0].max
            );
        }
        return this;
    }
    this.circle = function(
        center,
        r
    ) {
        return this.beginPath().
            arc(
                center,
                r
            ).
            stroke();
    }
    this.getSize = function(vector) {
        return vector.set(
            this.screen ? this.screen.width : 0,
            this.screen ? this.screen.height : 0
        );
    }
    this.getBox = function(box) {
        return box.set(
            this.getSize(box.max)
        );
    }
    this.toGraphics = function(vector) {
        var element = this.screen;
        while (element) {
            vector.sub(
                element.offsetLeft,
                element.offsetTop
            );
            element = element.offsetParent;
        }
        return vector;
    }
    if (
        this.screen = document.getElementById(id)
    ) {
        this.screen.width = width;
        this.screen.height = height;
        this.screen.focus();
        if (this.screen.getContext) {
            this.screenContext = this.screen.getContext("2d");
        }
    }
}
