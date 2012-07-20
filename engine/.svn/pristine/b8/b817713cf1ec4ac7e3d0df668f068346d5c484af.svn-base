function Sound(name) {
    this.audio = document.createElement("audio");
    if (this.audio) {
        if (this.audio.canPlayType) {
            var types = [
                "mpeg",
                "wav"
            ];
            for (
                var i = 0;
                i < types.length;
                i++
            ) {
                if (
                    this.audio.canPlayType("audio/" + types[i])
                ) {
                    this.audio.src = name + "." + (
                        types[i] == "mpeg" ? "mp3" : types[i]
                    );
                    this.audio.preload = "auto";
                    this.audio.load();
                }
            }
        } else {
            this.audio = null;
        }
    }
    this.play = function() {
        if (this.audio) {
            this.audio.play();
        }
        return this;
    }
}
