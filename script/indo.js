/**
 * Created with JetBrains WebStorm.
 * User: tclh123
 * Date: 13-4-15
 * Time: 上午12:54
 */

var INDO = INDO || { version : '1.0' };

var Data;

var camera, controls, scene, renderer;

var projector = new THREE.Projector(), mouse = { x: 0, y: 0 }, INTERSECTED;