function Keyboard() {
    Input.apply(this);
    Keyboard.listener = this;
    Input.addListener(
        "keydown",
        function(event) {
            Keyboard.onKey(
                event,
                true
            );
        }
    );
    Input.addListener(
        "keyup",
        function(event) {
            Keyboard.onKey(
                event,
                false
            );
        }
    );
}
Keyboard.UP = 38;
Keyboard.DOWN = 40;
Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.FIRE = 32;
Keyboard.onKey = function(
    event,
    isDown
) {
    if (
        Keyboard.listener
        &&
        Keyboard.listener.onKey
        &&
        (event = event ? event : window.event)
    ) {
        var key = event.keyCode ? event.keyCode : event.charCode;
        switch (key) {
          case 119:
            key = Keyboard.UP;
            break;
          case 120:
            key = Keyboard.DOWN;
            break;
          case 97:
            key = Keyboard.LEFT;
            break;
          case 100:
            key = Keyboard.RIGHT;
            break;
        }
        Keyboard.listener.onKey(
            key,
            isDown
        );
    }
}
