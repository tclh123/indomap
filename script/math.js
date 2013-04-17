/**
 * Created with JetBrains WebStorm.
 * User: tclh123
 * Date: 13-4-17
 * Time: 下午12:42
 */


INDO.Math = INDO.Math || {};

INDO.Math.Vector3 = function ( x, y, z ) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
};

INDO.Math.Vector3.prototype = {

    constructor: INDO.Math.Vector3,

    set: function ( x, y, z ) {

        this.x = x;
        this.y = y;
        this.z = z;

        return this;

    },

    setX: function ( x ) {

        this.x = x;

        return this;

    },

    setY: function ( y ) {

        this.y = y;

        return this;

    },

    setZ: function ( z ) {

        this.z = z;

        return this;

    },

    copy: function ( v ) {

        this.x = v.x;
        this.y = v.y;
        this.z = v.z;

        return this;

    },

    add: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'DEPRECATED: Vector3\'s .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
            return this.addVectors( v, w );

        }

        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;

    },

    addScalar: function ( s ) {

        this.x += s;
        this.y += s;
        this.z += s;

        return this;

    },

    addVectors: function ( a, b ) {

        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;

        return this;

    },

    sub: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'DEPRECATED: Vector3\'s .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
            return this.subVectors( v, w );

        }

        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;

    },

    subVectors: function ( a, b ) {

        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;

        return this;

    },

    multiply: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'DEPRECATED: Vector3\'s .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
            return this.multiplyVectors( v, w );

        }

        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;

        return this;

    },

    multiplyScalar: function ( s ) {

        this.x *= s;
        this.y *= s;
        this.z *= s;

        return this;

    },

    multiplyVectors: function ( a, b ) {

        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;

        return this;

    },

    divide: function ( v ) {

        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;

        return this;

    },

    divideScalar: function ( s ) {

        if ( s !== 0 ) {

            this.x /= s;
            this.y /= s;
            this.z /= s;

        } else {

            this.x = 0;
            this.y = 0;
            this.z = 0;

        }

        return this;

    },

    negate: function () {

        return this.multiplyScalar( - 1 );

    },

    dot: function ( v ) {

        return this.x * v.x + this.y * v.y + this.z * v.z;

    },

    lengthSq: function () {

        return this.x * this.x + this.y * this.y + this.z * this.z;

    },

    length: function () {

        return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

    },

    lengthManhattan: function () {

        return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

    },

    normalize: function () {

        return this.divideScalar( this.length() );

    },

    setLength: function ( l ) {

        var oldLength = this.length();

        if ( oldLength !== 0 && l !== oldLength  ) {

            this.multiplyScalar( l / oldLength );
        }

        return this;

    },

    cross: function ( v, w ) {

        if ( w !== undefined ) {

            console.warn( 'DEPRECATED: Vector3\'s .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
            return this.crossVectors( v, w );

        }

        var x = this.x, y = this.y, z = this.z;

        this.x = y * v.z - z * v.y;
        this.y = z * v.x - x * v.z;
        this.z = x * v.y - y * v.x;

        return this;

    },

    crossVectors: function ( a, b ) {

        this.x = a.y * b.z - a.z * b.y;
        this.y = a.z * b.x - a.x * b.z;
        this.z = a.x * b.y - a.y * b.x;

        return this;

    },

    distanceTo: function ( v ) {

        return Math.sqrt( this.distanceToSquared( v ) );

    },

    distanceToSquared: function ( v ) {

        var dx = this.x - v.x;
        var dy = this.y - v.y;
        var dz = this.z - v.z;

        return dx * dx + dy * dy + dz * dz;

    },

    equals: function ( v ) {

        return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

    },

    toArray: function () {

        return [ this.x, this.y, this.z ];

    },

    clone: function () {

        return new INDO.Math.Vector3( this.x, this.y, this.z );

    }

};

// 地点
INDO.Place = function(x, y, z, descr) {
    INDO.Math.Vector3.call(this, x, y, z);

    this.descr = descr;
};

INDO.Place.prototype = Object.create( INDO.Math.Vector3.prototype );

///// 室内位置

//由 平面图 转换到 3D坐标系下

// 教室
INDO.ClassRoom = function(x, y, scaleX, scaleY, floor, floorHeight, tiltAngle, xEnd, roomid) {
    INDO.Place.call(x*scaleX, floor*floorHeight+(xEnd-x)*scaleX*Math.tan(tiltAngle), y*scaleY, 'Classroom '+roomid);
    this.roomid = roomid;
};
INDO.ClassRoom.prototype = Object.create( INDO.Place.prototype );

// 厕所
INDO.Wc = function() {

};
INDO.Wc.prototype = Object.create( INDO.Place.prototype );

// 大楼入口/出口
INDO.Entrance = function() {

};
INDO.Entrance.prototype = Object.create( INDO.Place.prototype );

// 楼梯口
INDO.Stair = function(x, y, scaleX, scaleY, floor, floorHeight, tiltAngle, xEnd, nearClassRoom) {
    INDO.Place.call(x*scaleX, floor*floorHeight+(xEnd-x)*scaleX*Math.tan(tiltAngle), y*scaleY, 'The stairs next to the classroom '+roomid);
    this.nearClassRoom = nearClassRoom;
};
INDO.Stair.prototype = Object.create( INDO.Place.prototype );