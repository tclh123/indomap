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

INDO.Math.INF = 1<<30;

// 单源最短路
// var ret = INDO.Math.Dijkstra(Data.getPlaces(), Data.getPaths(), 0, 7)
INDO.Math.Dijkstra = function(points, edges, startIndex, endIndex) {
    var father = [];    //保存路径
    var route = [];     // 返回路径，end->start
    var dist = [];      //到起点距离
    var vis = [];       //标记点

    var n = points.length;
    var m = edges.length;
    if(n<=0 || m<=0) return null;

    for(var i=0; i<n; i++) dist[i] = i==startIndex? 0 : INDO.Math.INF;
    vis[startIndex] = true;
    var u = startIndex;

    // loop
    for(var k=0; k<n-1; k++) {
        for(var i in edges) {
            if(edges[i][0] == u || edges[i][1] == u) {  // 无向图
                var v = edges[i][ edges[i][0] == u? 1:0 ];   // 取另一个端点

//                console.log('u='+u+', v='+v);

                var vector = new INDO.Math.Vector3();
                vector.subVectors(points[u], points[v]);
                var w = vector.length();  // 3D空间中两点距离

//                dist[v] = Math.min(dist[v], dist[u]+w);
                if(dist[u]+w < dist[v]) {
                    dist[v] = dist[u]+w;
                    father[v] = u;
                }
            }
        }
        var minx = INDO.Math.INF;
        var tu = -1;
        for(var i=0; i<n; i++) {
            if(!vis[i]) {
                if(minx > dist[i]) {
                    minx = dist[i];
                    tu = i;
                }
            }
        }
        if(minx == INDO.Math.INF || tu == -1) break;    //说明其他点是无法到达了
//        father[tu] = u;
        u = tu;
        vis[u] = true;
    }

    // 不可达
    if(dist[endIndex] == INDO.Math.INF) return { distance : INDO.Math.INF, route : [] };

    for(var u = endIndex; ; u = father[u]) {
        route.push(u);
        if(u == startIndex) break;
    }
    return { distance : dist[endIndex], route : route };
};