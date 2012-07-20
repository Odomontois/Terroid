function Animation(period) {
    this.period = period;
    this.getState = function() {
        return this.t / this.period;
    }
    this.setState = function() {
        this.t = arguments.length > 0 ? this.period * arguments[0] : 0;
    }
    this.onPeriod = function() {
        this.t -= Math.floor(
            this.getState()
        ) * this.period;
    }
    this.simulate = function(dt) {
        if (
            (this.t += dt) >= this.period
        ) {
            this.onPeriod();
        }
    }
    this.reset = function() {
        this.setState();
    }
    this.reset();
}
