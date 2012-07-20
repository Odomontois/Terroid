function Terrestrial(ID) {
    this.ID = ID;
    this.box = new Box();
    this.getImage = function() {
        return this.getSprite().getImage(this.ID);
    }
    this.getColor = function() {
        return "#555555";
    }
}

function Tile(ID) {
    Object.apply(this);
    Terrestrial.apply(
        this,
        [ID]
    );
    this.getSprite = function() {
        return Tile.sprite;
    }
    this.getColor = function() {
        return this.ID > Tile.GRASS ? (
            this.ID == Tile.WATER ? "#001133" : "#001155"
        ) : Tile.GRASSCOLOR;
    }
}
Tile.GRASSCOLOR = "#005511";
Tile.size = new Vector();
Tile.UNKNOWN = -1;
Tile.GRASS = 0;
Tile.WATER = 5;
Tile.MAX = 14;

function FlatTerrestrial(ID) {
    Object.apply(this);
    Terrestrial.apply(
        this,
        [ID]
    );
    this.getSprite = function() {
        return FlatTerrestrial.sprite;
    }
    this.getColor = function() {
        return "#007700";
    }
}
FlatTerrestrial.MAX = 0;

function TallTerrestrial(ID) {
    Tall.apply(this);
    Terrestrial.apply(
        this,
        [ID]
    );
    if (TallTerrestrial.BASELINES) {
        for (
            var i = 0;
            i < TallTerrestrial.BASELINES.length;
            i++
        ) {
            var a = TallTerrestrial.BASELINES[i];
            if (a[0] == ID) {
                this.baseLine = a[1];
                break;
            }
        }
    }
    this.getSprite = function() {
        return TallTerrestrial.sprite;
    }
    this.TallTerrestrialParent_getBottom = this.getBottom;
    this.getBottom = function() {
        var ret = this.TallTerrestrialParent_getBottom();
        if (this.baseLine) {
            ret -= this.baseLine;
        }
        return ret;
    }
}
TallTerrestrial.MAX = 0;

function Terrain(
    map,
    flats,
    objects
) {
    /*

    Map is Array[j][i]

    Legend:

    0 - grass
     
    water inside grass
    1 2 3
    4 5 6
    7 8 9

    grass inside water
    10 11
    12 13

    and map size >= 13x13 for 400x400 screen

    */
    this.paint = function(
        graphics,
        objects
    ) {
        graphics.toWorld(
            graphics.getBox(Terrain.box)
        ).
            div(Tile.size).
            floor().max.
                add(Vector.ONE).
                limit(
                    Terrain.vector.set(
                        this.cells.length,
                        this.cells[0].length
                    )
                );
        for (
            var i = Terrain.box.min.x;
            i < Terrain.box.max.x;
            i++
        ) {
            for (
                var j = Terrain.box.min.y;
                j < Terrain.box.max.y;
                j++
            ) {
                var objs = this.cells[i][j];
                for (
                    var k = 0;
                    k < objs.length;
                    k++
                ) {
                    var obj = objs[k];
                    if (obj.getBottom) {
                        objects.push(obj);
                    } else {
                        graphics.drawImage(
                            obj.getImage(),
                            graphics.toScreen(
                                Terrain.vector.set(obj.box.min)
                            )
                        );
                    }
                }
            }
        }
    }
    this.getObjects = function(vector) {
        if (
            Terrain.vector.set(vector).div(Tile.size).floor().x >= 0
            &&
            Terrain.vector.x < this.cells.length
            &&
            Terrain.vector.y >= 0
            &&
            Terrain.vector.y < this.cells[0].length
        ) {
            return this.cells[Terrain.vector.x][Terrain.vector.y];
        }
    }
    this.getTile = function(vector) {
        var objects = this.getObjects(vector);
        if (objects) {
            return objects[0];
        }
    }
    this.reset = function() {
        for (
            var i = 0;
            i < this.cells.length;
            i++
        ) {
            for (
                var j = 0;
                j < this.cells[i].length;
                j++
            ) {
                var objs = this.cells[i][j];
                for (
                    var k = 0;
                    k < objs.length;
                    k++
                ) {
                    var obj = objs[k];
                    if (i + j + k == 0) {
                        this.size.set(
                            obj.getSize(Tile.size)
                        ).mul(
                            this.cells.length,
                            this.cells[0].length
                        );
                    }
                    obj.position.
                        set(
                            Terrain.vector.set(Tile.size)
                        ).
                        mul(
                            i,
                            j
                        ).
                        add(
                            Terrain.vector.div(2)
                        );
                    obj.getBox(obj.box);
                }
            }
        }
    }
    this.cells = [];
    if (map) {
        for (
            var i = 0;
            i < map[0].length;
            i++
        ) {
            this.cells[i] = [];
            for (
                var j = 0;
                j < map.length;
                j++
            ) {
                this.cells[i][j] = [];
                this.cells[i][j][0] = new Tile(map[j][i]);
            }
        }
        Tile.sprite = new Sprite(
            "terrain",
            Tile.MAX
        );
    }
    if (flats) {
        for (
            var i = 0;
            i < flats.length;
            i++
        ) {
            var obj = flats[i];
            this.cells[obj[0]][obj[1]].push(
                new FlatTerrestrial(obj[2])
            );
        }
        FlatTerrestrial.sprite = new Sprite(
            "terrain/flat",
            FlatTerrestrial.MAX
        );
    }
    if (objects) {
        for (
            var i = 0;
            i < objects.length;
            i++
        ) {
            var obj = objects[i];
            this.cells[obj[0]][obj[1]].push(
                new TallTerrestrial(obj[2])
            );
        }
        TallTerrestrial.sprite = new Sprite(
            "terrain/tall",
            TallTerrestrial.MAX
        );
    }
    this.size = new Vector();
}
Terrain.vector = new Vector();
Terrain.box = new Box();
