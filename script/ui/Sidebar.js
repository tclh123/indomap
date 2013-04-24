/**
 * Created with JetBrains WebStorm.
 * User: tclh123
 * Date: 13-4-24
 * Time: 上午2:45
 */
var Sidebar = function () {

    var container = new UI.Panel();
    container.setPosition( 'absolute' );
    container.setClass( 'sidebar' );

    container.setBorderTop( '1px solid #ccc' );
    container.setBorderBottom( '1px solid #ccc' );
    container.setBorderLeft( '1px solid #ccc' );
    container.setBorderRight( '1px solid #ccc' );

    container.add( new Sidebar.Routing() );
//    container.add( new Sidebar.Scene( signals ) );
//    container.add( new Sidebar.Object3D( signals ) );
//    container.add( new Sidebar.Geometry( signals ) );
//    container.add( new Sidebar.Material( signals ) );

    return container;

};