function Ticker() {
    Context.apply(this);
    Animation.apply(
        this,
        [
            arguments.length > 0 ? arguments[0] : 1.0
        ]
    );
    this.isTicker = function() {
        return this.getState() > 0.5;
    }
    this.TickerParent_simulate = this.simulate;
    this.simulate = function(dt) {
        var isTicker = this.isTicker();
        this.TickerParent_simulate(dt);
        return isTicker != this.isTicker();
    }
}
