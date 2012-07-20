function Timer() {
    Timer.listener = this;
    Timer.onTimeout();
}
Timer.dt = 40;
Timer.onTimeout = function() {
    if (
        Timer.listener
        &&
        Timer.listener.onDt
    ) {
        Timer.listener.onDt(Timer.dt / 1000.0);
    }
    setTimeout(
        Timer.onTimeout,
        Timer.dt
    );
}
