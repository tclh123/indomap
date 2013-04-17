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
var floorHeight = 5;
var tiltAngle = 10/180*Math.PI;     // 倾斜10度
var placeList = [
    {
        index : 0,
        type : 'room',
        x : 1,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        roomid : '101'
    },
    {
        index : 1,
        type : 'room',
        x : 2,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        roomid : '102'
    },
    {
        index : 2,
        type : 'room',
        x : 3,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        roomid : '103'
    },
    {
        index : 3,
        type : 'room',
        x : 4,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        roomid : '104'
    },
    {
        index : 4,
        type : 'room',
        x : 5,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        roomid : '105'
    },

    {
        index : 5,
        type : 'entrance',
        x : 6,
        y : 0,
        floor : 1,
        tiltAngle : 0,
        xEnd : 6,
        entranceNO : 'A'
    },
    {
        index : 6,
        type : 'stair',
        x : 6,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        nearRoom : '106'  // 106室旁的楼梯
    },

    {
        index : 7,
        type : 'room',
        x : 7,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        roomid : '106'
    },
    {
        index : 8,
        type : 'room',
        x : 8,
        y : 1,
        floor : 1,
        tiltAngle : tiltAngle,
        xEnd : 8,
        roomid : '107'
    }
];
var edgeList = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 6],
    [6, 7],
    [7, 8],

    [5, 6]  // entrance -> stair
];
INDO.Data.prototype = {
    getPlaces : function() {
        var list = [];
        for(var i in placeList) {
            var p = placeList[i];
            if(p.type == 'room') {
                list.push(new INDO.Room(p.x, p.y, scaleX, scaleY, p.floor-1, floorHeight, p.tiltAngle, p.xEnd, p.roomid));
            } else if(p.type == 'entrance') {
                list.push(new INDO.Entrance(p.x, p.y, scaleX, scaleY, p.floor-1, floorHeight, p.tiltAngle, p.xEnd, p.entranceNO));
            } else if(p.type == 'stair') {
                list.push(new INDO.Stair(p.x, p.y, scaleX, scaleY, p.floor-1, floorHeight, p.tiltAngle, p.xEnd, p.nearRoom));
            }
        }
        return list;
    },
    getPaths : function() {
        return edgeList;
    }
};