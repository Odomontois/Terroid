function SoundLoader(path) {
    ImageLoader.apply(
        this,
        [path]
    );
}
SoundLoader.path = "snd";
SoundLoader.load = function(name) {
    Loader.total++;
    var ret = new Sound(
        Loader.path + "/" + 
        SoundLoader.path + "/" +
        name
    );
    Loader.onLoad();
    return ret;
}
