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
        x : 21,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '320'
    },
    {
        index : 50,
        type : 'stair',
        x : 22,
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
        x : 23,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '321'
    },
    {
        index : 52,
        type : 'room',
        x : 24,
        y : 1,
        floor : 3,
        tiltAngle : tiltAngle,
        xEnd : 0,
        roomid : '324'
    },
    {
        index : 53,
        type : 'room',
        x : 25,
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
        x : 21,
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

    //TODO: 完善南楼

    //floor #4
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
    ////////////
    // floor #5
    ////////////
    // floor #6
    ////////////
    // floor #7
];

INDO.Data.prototype = {
    getPlaces : function() {
        var list = [];
        for(var i in placeList) {
            var p = placeList[i];
            if(p.type == 'room') {
                list.push(new INDO.Room(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.roomid));
            } else if(p.type == 'entrance') {
                list.push(new INDO.Entrance(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.entranceNO));
            } else if(p.type == 'stair') {
                list.push(new INDO.Stair(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.nearRoom, p.isLeftSide));
            } else if(p.type == 'wc') {
                list.push(new INDO.Wc(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.nearRoom, p.isMan));
            } else if(p.type == 'corner') {
                list.push(new INDO.Corner(p.x, p.y, scaleX, scaleY, p.floor, floorHeight, p.tiltAngle, p.xEnd, p.nearRoom));
            }
        }
        return list;
    },
    getPaths : function() {
        return edgeList;
    }
};