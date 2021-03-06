/**
 * Created with JetBrains WebStorm.
 * User: tclh123
 * Date: 13-4-17
 * Time: 下午5:31
 */



// 地点
INDO.Place = function(x, y, z, descr, index) {
    INDO.Math.Vector3.call(this, x, y, -z); //-z，Three.js的z轴指向屏幕向外

    this.descr = descr;
    this.index = index;
};

INDO.Place.prototype = Object.create( INDO.Math.Vector3.prototype );

///// 室内位置

//由 平面图 转换到 3D坐标系下

// 教室
INDO.Room = function(x, y, scaleX, scaleY, floor, floorHeight, tiltAngle, xEnd, roomid, idx) {
//    INDO.Place.call(this, x*scaleX, floor*floorHeight+(xEnd-x)*scaleX*Math.tan(tiltAngle), y*scaleY, 'Room '+roomid);
    INDO.Place.call(this, x*scaleX, floor*floorHeight-(x-xEnd)*scaleX*Math.tan(tiltAngle), y*scaleY, 'Room '+roomid, idx);
    this.roomid = roomid;
};
INDO.Room.prototype = Object.create( INDO.Place.prototype );

// 厕所
INDO.Wc = function(x, y, scaleX, scaleY, floor, floorHeight, tiltAngle, xEnd, nearRoom, isMan, idx) {
    INDO.Place.call(this, x*scaleX, floor*floorHeight-(x-xEnd)*scaleX*Math.tan(tiltAngle), y*scaleY, 'WC('+(isMan? 'men':'women')+'):room '+nearRoom, idx);
    this.isMan = isMan;
    this.nearRoom = nearRoom;
};
INDO.Wc.prototype = Object.create( INDO.Place.prototype );

// 大楼入口(出口)
INDO.Entrance = function(x, y, scaleX, scaleY, floor, floorHeight, tiltAngle, xEnd, entranceNO, idx) {
    INDO.Place.call(this, x*scaleX, floor*floorHeight-(x-xEnd)*scaleX*Math.tan(tiltAngle), y*scaleY, 'Entrance '+entranceNO, idx);
    this.entranceNO = entranceNO;
};
INDO.Entrance.prototype = Object.create( INDO.Place.prototype );

// 楼梯口
// isLeftSide : 楼梯在教室的左边？
INDO.Stair = function(x, y, scaleX, scaleY, floor, floorHeight, tiltAngle, xEnd, nearRoom, isLeftSide, idx) {
    INDO.Place.call(this, x*scaleX, floor*floorHeight-(x-xEnd)*scaleX*Math.tan(tiltAngle), y*scaleY, 'Stair('+ (isLeftSide? 'left':'right') +' side of room '+nearRoom+')', idx);
    this.nearRoom = nearRoom;
};
INDO.Stair.prototype = Object.create( INDO.Place.prototype );

// 转角
INDO.Corner = function(x, y, scaleX, scaleY, floor, floorHeight, tiltAngle, xEnd, nearRoom, idx) {
    INDO.Place.call(this, x*scaleX, floor*floorHeight-(x-xEnd)*scaleX*Math.tan(tiltAngle), y*scaleY, 'Corner:room '+nearRoom, idx);
    this.nearRoom = nearRoom;
};
INDO.Corner.prototype = Object.create( INDO.Place.prototype );
