FlatTerrestrial.PEBBLE = 0;
FlatTerrestrial.WATERLEAF = 1;
FlatTerrestrial.WATERLEAFS = 2;
FlatTerrestrial.NEST = 3;
FlatTerrestrial.MAX = FlatTerrestrial.NEST + 1;

TallTerrestrial.STUMP = 0;
TallTerrestrial.BUSH = 1;
TallTerrestrial.FLOWER = 2;
TallTerrestrial.MUSHROOMS = 3;
TallTerrestrial.ROCK = 4;
TallTerrestrial.GREENROCK = 5;
TallTerrestrial.GREENBLOCK = 6;
TallTerrestrial.MAX = TallTerrestrial.GREENBLOCK + 1;

TallTerrestrial.BASELINES = [
    [TallTerrestrial.STUMP, 10],
    [TallTerrestrial.BUSH, 5],
    [TallTerrestrial.MUSHROOMS, 5]
];

function TerroidTerrain() {
    Terrain.apply(
        this,
        [
            // see Terrain.js for map legend
            [
                [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  1,  2,  2,  2,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  4,  5,  5,  5, 12,  2,  3,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  7,  8, 11,  5, 10, 11,  6,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  4,  5, 12, 13, 12,  3,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  4,  5,  5,  5,  5,  6,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  7,  8,  8, 11,  5,  6,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  0,  0,  0,  7,  8,  9,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  1,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  7,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
                [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
            ],
            // flats
            [
                [  8,   2, FlatTerrestrial.PEBBLE],
                [  5,   5, FlatTerrestrial.WATERLEAF],
                [  4,   4, FlatTerrestrial.WATERLEAFS],
                [  2,   5, FlatTerrestrial.NEST]
            ],
            // talls
            [
                [ 10,   2, TallTerrestrial.STUMP],
                [ 12,   3, TallTerrestrial.BUSH],
                [  2,   4, TallTerrestrial.FLOWER],
                [  9,   5, TallTerrestrial.MUSHROOMS],
                [ 10,   6, TallTerrestrial.ROCK],
                [ 11,   7, TallTerrestrial.GREENROCK],
                [  7,   8, TallTerrestrial.GREENBLOCK]
            ]
        ]
    );
}
