function Sprite(
    name,
    size
) {
    this.images = new Array();
    for (
        var i = 0;
        i < size;
        i++
    ) {
        this.images[this.images.length] = ImageLoader.load(
            name + "/" + (i < 9 ? "0" : "") + (i + 1)
        );
    }
    this.getSize = function() {
        return this.images.length;
    }
    this.getImage = function(index) {
        return this.images[index];
    }
}
