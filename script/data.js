/**
 * Created with JetBrains WebStorm.
 * User: tclh123
 * Date: 13-4-15
 * Time: 上午12:52
 */

INDO.Data = function() {
};
//// Json Data

var scaleX = 1;
var scaleY = 1;
var floorHeight = 1;
var tiltAngle = 8/180*Math.PI;     // 倾斜10度

/////////

var placeList = [
    // floor #1
    {
        index : 0,
        type : 'room',
        x : 1,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        roomid : '101'
    },
    {
        index : 1,
        type : 'room',
        x : 2,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        roomid : '103'
    },
    {
        index : 2,
        type : 'room',
        x : 3,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        roomid : '105'
    },
    {
        index : 3,
        type : 'stair',
        x : 4,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        nearRoom : '106',
        isLeftSide : true
    },
    {
        index : 4,
        type : 'room',
        x : 5,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        roomid : '106'
    },
    {
        index : 5,
        type : 'stair',
        x : 6,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        nearRoom : '107',
        isLeftSide : true
    },
    {
        index : 6,
        type : 'room',
        x : 7,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        roomid : '107'
    },
    {
        index : 7,
        type : 'stair',
        x : 10,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 1,
        nearRoom : '107',
        isLeftSide : false
    },
    {
        index : 8,
        type : 'entrance',
        x : 4,
        y : 0,
        floor : 0,
        tiltAngle : 0,
        xEnd : 1,
        entranceNO : 'A'
    },
    /*
    [0,1],
    [1,2],
    [2,3],
    [3,4],
    [4,5],
    [5,6],
    [6,7],
    [3,8]
     */
    // floor #2
    {
        index : 9,
        type : 'stair',
        x : 0,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '201',
        isLeftSide : true
    },
    {
        index : 10,
        type : 'room',
        x : 1,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '201'
    },
    {
        index : 11,
        type : 'room',
        x : 2,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '203'
    },
    {
        index : 12,
        type : 'room',
        x : 3,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '206'
    },
    {
        index : 13,
        type : 'stair',
        x : 4,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '207',
        isLeftSide : true
    },
    {
        index : 14,
        type : 'room',
        x : 5,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '207'
    },
    {
        index : 15,
        type : 'stair',
        x : 6,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '208',
        isLeftSide : true
    },
    {
        index : 16,
        type : 'room',
        x : 7,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '208'
    },
    //WC
    {
        index : 17,
        type : 'wc',
        x : 8,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '208',
        isMan : false
    },
    {
        index : 18,
        type : 'room',
        x : 9,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '211'
    },
    {
        index : 19,
        type : 'stair',
        x : 10,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '211',
        isLeftSide : false
    },
    {
        index : 20,
        type : 'room',
        x : 11,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '214'
    },
    {
        index : 21,
        type : 'entrance',
        x : 10,
        y : 0,
        floor : 0,
        tiltAngle : 0,
        xEnd : 0,
        entranceNO : 'B'
    },
    /*
    [9,10],
    [10,11],
    [11,12],
    [12,13],
    [13,14],
    [14,15],
    [15,16],
    [16,17],
    [17,18],
    [18,19],
    [19,20],

    // entrance
    [21, 19],

    // stair
    [13,3],
    [15,5],
    [19,7],
     */
    //中区
    {
        index : 22,
        type : 'room',
        x : 12,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '213'
    },
    {
        index : 23,
        type : 'room',
        x : 13,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '216'
    },
    {
        index : 24,
        type : 'stair',
        x : 14,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '216',
        isLeftSide : false
    },
    {
        index : 25,
        type : 'room',
        x : 15,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '217'
    },
    {
        index : 26,
        type : 'stair',
        x : 16,
        y : 1,
        floor : 2,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '217',
        isLeftSide : false
    },
    {
        index : 27,
        type : 'entrance',
        x : 12,
        y : 0,
        floor : 0,
        tiltAngle : 0,
        xEnd : 0,
        entranceNO : 'C'
    },
    /*
    [22,23],
    [23,24],
    [24,25],
    [25,26],

    [27,22],
     */
    // floor #3
    {
        index : 28,
        type : 'stair',
        x : 0,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '301',
        isLeftSide : true
    },
    {
        index : 29,
        type : 'room',
        x : 1,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '301'
    },
    {
        index : 30,
        type : 'room',
        x : 2,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '303'
    },
    {
        index : 31,
        type : 'room',
        x : 3,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '306'
    },
    {
        index : 32,
        type : 'stair',
        x : 4,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '307',
        isLeftSide : true
    },
    {
        index : 33,
        type : 'room',
        x : 5,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '307'
    },
    {
        index : 34,
        type : 'stair',
        x : 6,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '308',
        isLeftSide : true
    },
    {
        index : 35,
        type : 'room',
        x : 7,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '308'
    },
    //WC
    {
        index : 36,
        type : 'wc',
        x : 8,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '308',
        isMan : false
    },
    {
        index : 37,
        type : 'room',
        x : 9,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '311'
    },
    {
        index : 38,
        type : 'stair',
        x : 10,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '311',
        isLeftSide : false
    },
    {
        index : 39,
        type : 'room',
        x : 11,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '312'
    },
    // 中区
    {
        index : 40,
        type : 'corner',
        x : 12,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '314'
    },
    {
        index : 41,
        type : 'room',
        x : 13,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '314'
    },
    {
        index : 42,
        type : 'stair',
        x : 14,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '314',
        isLeftSide : false
    },
    {
        index : 43,
        type : 'room',
        x : 15,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '315'
    },
    {
        index : 44,
        type : 'stair',
        x : 16,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '315',
        isLeftSide : false
    },
    {
        index : 45,
        type : 'room',
        x : 17,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '316'
    },
    //WC
    {
        index : 46,
        type : 'wc',
        x : 18,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '316',
        isMan : true
    },
    {
        index : 47,
        type : 'room',
        x : 19,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '318'
    },
    {
        index : 48,
        type : 'stair',
        x : 20,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '318',
        isLeftSide : false
    },
    /*
    [28,29],
    [29,30],
    [30,31],
    [31,32],
    [32,33],
    [33,34],
    [34,35],
    [35,36],
    [36,37],
    [37,38],
    [38,39],
    [39,40],
    [40,41],
    [41,42],
    [42,43],
    [43,44],
    [44,45],
    [45,46],
    [46,47],
    [47,48],
     */
    // 右区
    {
        index : 49,
        type : 'room',
        x : 22,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '320'
    },
    {
        index : 50,
        type : 'stair',
        x : 23,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '320',
        isLeftSide : false
    },
    {
        index : 51,
        type : 'room',
        x : 24,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '321'
    },
    {
        index : 52,
        type : 'room',
        x : 25,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '324'
    },
    {
        index : 53,
        type : 'room',
        x : 26,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '325'
    },
    // entrance
    {
        index : 54,
        type : 'entrance',
        x : 19,
        y : 0,
        floor : 0,
        tiltAngle : 0,
        xEnd : 0,
        entranceNO : 'D'
    },
    {
        index : 55,
        type : 'entrance',
        x : 22,
        y : 0,
        floor : 0,
        tiltAngle : 0,
        xEnd : 0,
        entranceNO : 'E'
    },
    /*
    [49,50],
    [50,51],
    [51,52],
    [52,53],

    // entrance
    [54,47],
    [55,49],

     // stair
     [28,9],
     [32,13],
     [34,15],
     [38,19],

     [42,24],
     [44,26],

     */

    //floor #4
    {
        index : 56,
        type : 'stair',
        x : 0,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '401',
        isLeftSide : true
    },
    {
        index : 57,
        type : 'room',
        x : 1,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '401'
    },
    {
        index : 58,
        type : 'room',
        x : 2,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '403'
    },
    {
        index : 59,
        type : 'room',
        x : 3,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '406'
    },
    {
        index : 60,
        type : 'stair',
        x : 4,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '407',
        isLeftSide : true
    },
    {
        index : 61,
        type : 'room',
        x : 5,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '407'
    },
    {
        index : 62,
        type : 'stair',
        x : 6,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '408',
        isLeftSide : true
    },
    {
        index : 63,
        type : 'room',
        x : 7,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '408'
    },
    //WC
    {
        index : 64,
        type : 'wc',
        x : 8,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '408',
        isMan : false
    },
    {
        index : 65,
        type : 'room',
        x : 9,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '411'
    },
    {
        index : 66,
        type : 'stair',
        x : 10,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '411',
        isLeftSide : false
    },
    {
        index : 67,
        type : 'room',
        x : 11,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '412'
    },
    // 中区
    {
        index : 68,
        type : 'corner',
        x : 12,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '414'
    },
    {
        index : 69,
        type : 'room',
        x : 13,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '414'
    },
    {
        index : 70,
        type : 'stair',
        x : 14,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '414',
        isLeftSide : false
    },
    {
        index : 71,
        type : 'room',
        x : 15,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '415'
    },
    {
        index : 72,
        type : 'stair',
        x : 16,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '415',
        isLeftSide : false
    },
    {
        index : 73,
        type : 'room',
        x : 17,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '416'
    },
    //WC
    {
        index : 74,
        type : 'wc',
        x : 18,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '416',
        isMan : true
    },
    {
        index : 75,
        type : 'room',
        x : 19,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '418'
    },
    {
        index : 76,
        type : 'stair',
        x : 20,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '418',
        isLeftSide : false
    },
    {
        index : 77,
        type : 'room',
        x : 21,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '419'
    },
    // 右区
    {
        index : 78,
        type : 'room',
        x : 22,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '421'
    },
    {
        index : 79,
        type : 'stair',
        x : 23,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        nearRoom : '421',
        isLeftSide : false
    },
    {
        index : 80,
        type : 'room',
        x : 24,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '422'
    },
    {
        index : 81,
        type : 'room',
        x : 25,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '425'
    },
    {
        index : 82,
        type : 'room',
        x : 26,
        y : 1,
        floor : 4,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '426'
    },
    /*
    // 56-82
     [56,57],
     [57,58],
     [58,59],
     [59,60],
     [60,61],
     [61,62],
     [62,63],
     [63,64],
     [64,65],
     [65,66],
     [66,67],
     [67,68],
     [68,69],
     [69,70],
     [70,71],
     [71,72],
     [72,73],
     [73,74],
     [74,75],
     [75,76],
     [76,77],
     [77,78],
     [78,79],
     [79,80],
     [80,81],
     [81,82],
     */

    // TODO: 先加了一个宿舍，用于演示。。
    {
        index : 83,
        type : 'place',
        x : 30,
        y : -30,
        floor : 0,
        descr : 'Dormitory #9'
    },

    //TODO: 完善南楼
    //floor #5
    //floor #6
    //floor #7

    //TODO: 中间梯、北楼
];
var edgeList = [

    ////////////
    // floor #1
    [0,1],
    [1,2],
    [2,3],
    [3,4],
    [4,5],
    [5,6],
    [6,7],

    // entrance
    [3,8],

    ////////////
    // floor #2
    [9,10],
    [10,11],
    [11,12],
    [12,13],
    [13,14],
    [14,15],
    [15,16],
    [16,17],
    [17,18],
    [18,19],
    [19,20],

    // entrance
    [21, 19],

    // stair
    [13,3],
    [15,5],
    [19,7],

    // 中区
    [22,23],
    [23,24],
    [24,25],
    [25,26],

    // entrance
    [27,22],
    ////////////
    // floor #3
    [28,29],
    [29,30],
    [30,31],
    [31,32],
    [32,33],
    [33,34],
    [34,35],
    [35,36],
    [36,37],
    [37,38],
    [38,39],
    [39,40],
    [40,41],
    [41,42],
    [42,43],
    [43,44],
    [44,45],
    [45,46],
    [46,47],
    [47,48],

    //右区
    [49,50],
    [50,51],
    [51,52],
    [52,53],

    // entrance
    [54,47],
    [55,49],

    // stair
    [28,9],
    [32,13],
    [34,15],
    [38,19],

    [42,24],
    [44,26],

    ////////////
    // floor #4
    [56,57],
    [57,58],
    [58,59],
    [59,60],
    [60,61],
    [61,62],
    [62,63],
    [63,64],
    [64,65],
    [65,66],
    [66,67],
    [67,68],
    [68,69],
    [69,70],
    [70,71],
    [71,72],
    [72,73],
    [73,74],
    [74,75],
    [75,76],
    [76,77],
    [77,78],
    [78,79],
    [79,80],
    [80,81],
    [81,82],
    // stair
    [56,28],
    [60,32],
    [62,34],
    [66,38],
    [70,42],
    [72,44],
    [76,48],
    [79,50],

    ////////////
    // floor #5
    ////////////
    // floor #6
    ////////////
    // floor #7

    // 各入口
    [8,21],
    [21,27],
    [27,54],
    [54,55],

    // 跟宿舍
    [54, 83],
    [55, 83],
];

INDO.Data.prototype = {
    placeList : [],
    pathList : [],

    getPlaces : function() {
        this.placeList = [];
        for(var i in placeList) {
            var p = placeList[i];
            if(p.type == 'room') {
                this.placeList.push(new INDO.Room(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.roomid, i));
            } else if(p.type == 'entrance') {
                this.placeList.push(new INDO.Entrance(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.entranceNO, i));
            } else if(p.type == 'stair') {
                this.placeList.push(new INDO.Stair(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.nearRoom, p.isLeftSide, i));
            } else if(p.type == 'wc') {
                this.placeList.push(new INDO.Wc(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.nearRoom, p.isMan, i));
            } else if(p.type == 'corner') {
                this.placeList.push(new INDO.Corner(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.nearRoom, i));

            } else if(p.type == 'place') {
                this.placeList.push(new INDO.Place(p.x*scaleX, p.floor*floorHeight, p.y*scaleY, p.descr, i));
            }
        }
    },
    getPaths : function() {
        this.pathList = edgeList;
    },
    search : function(roomid) {
        for(var i in this.placeList) {
            var p = this.placeList[i];
            if((p instanceof INDO.Room) && p.roomid == roomid) {
                p.index = i;
                return p;
            }
        }
        return null;
    },
    findRoute : function(from, to) {
        return INDO.Math.Dijkstra(this.placeList, this.pathList, from, to).route;
    }
};