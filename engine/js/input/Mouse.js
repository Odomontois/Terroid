function Mouse() {
    Input.apply(this);
    Mouse.listener = this;
    Input.addListener(
        "click",
        function(event) {
            if (
                Mouse.listener
                &&
                Mouse.listener.onClick
                &&
                (event = event ? event : window.event)
            ) {
                Mouse.listener.onClick(
                    Mouse.vector.set(
                        event.pageX ? event.pageX : event.clientX + document.body.scrollLeft,
                        event.pageY ? event.pageY : event.clientY + document.body.scrollTop
                    )
                );
            }
        }
    );
    Input.addListener(
        "touchstart",
        function(event) {
            if (
                Mouse.listener
                &&
                Mouse.listener.onClick
                &&
                (event = event ? event : window.event)
                &&
                event.touches
            ) {
                for (
                    var i = 0;
                    i < event.touches.length;
                    i++
                ) {
                    Mouse.listener.onClick(
                        Mouse.vector.set(
                            event.touches[i].pageX,
                            event.touches[i].pageY
                        )
                    );
                }
            }
        }
    );
}
Mouse.vector = new Vector();
