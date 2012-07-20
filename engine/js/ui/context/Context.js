function Context() {
    this.checkUpdate = function(value) {
        return this.update = value || this.update;
    }
    this.onPaint = function(graphics) {
        if (this.update) {
            this.paint(graphics);
            this.update = !this.update;
        }
    }
}
