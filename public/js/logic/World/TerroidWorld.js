function Hydra() {
    Character.apply(
        this,
        [
            Hydra.sprites ?
            Hydra.sprites :
            Hydra.sprites = new CharacterSpriteSet("hydra")
        ]
    );
    this.isAllowed = function(tile) {
        return tile && tile.ID == Tile.WATER;
    }
}
Hydra.sprites = false;

function TerroidWorld() {
    World.apply(
        this,
        [new TerroidTerrain()]
    );
    this.sprites = [
        new CharacterSpriteSet("blue"),
        new CharacterSpriteSet("purple"),
        new CharacterSpriteSet("red"),
        new CharacterSpriteSet("harry"),
        new CharacterSpriteSet("tiger")
    ];
    this.objects = Array(50);
    for (
        var i = 0;
        i < this.objects.length;
        i++
    ) {
        var n = Math.floor(
            i * (this.sprites.length + 1) / this.objects.length
        );
        if (n > this.sprites.length - 1) {
            this.objects[i] = new Hydra();
        } else {
            this.objects[i] = new Character(this.sprites[n]);
        }
    }
}
