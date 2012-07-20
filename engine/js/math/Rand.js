function Rand() {
}
Rand.getInt = function(
    min,
    max
) {
    return Math.floor(
        Math.random() * (max - min)
    ) + min;
}
