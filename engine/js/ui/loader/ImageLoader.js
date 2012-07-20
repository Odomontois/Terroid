function ImageLoader(path) {
    Loader.apply(
        this,
        [path]
    );
}
ImageLoader.path = "img";
ImageLoader.ext = "png";
ImageLoader.load = function(name) {
    Loader.total++;
    var ret = new Image();
    ret.onload = function() {
        Loader.onLoad();
    }
    ret.src = Loader.path + "/" + 
        ImageLoader.path + "/" +
        name + "." + ImageLoader.ext;
    return ret;
}
