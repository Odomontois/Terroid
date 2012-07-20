function Input() {
}
Input.addListener = function(
    name,
    handler
) {
    if (document.addEventListener) {
        document.addEventListener(
            name,
            handler,
            false
        );
    } else if (document.attachEvent) {
        document.attachEvent(
            "on" + name,
            handler
        );
    }
}
