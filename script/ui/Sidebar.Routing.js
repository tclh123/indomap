/**
 * Created with JetBrains WebStorm.
 * User: tclh123
 * Date: 13-4-24
 * Time: 上午2:51
 */
Sidebar.Routing = function () {
    var container = new UI.Panel();
    container.setPadding( '10px' );
//    container.setBorderTop( '1px solid #ccc' );

    container.add( new UI.Text( 'Routing' ).setColor( '#666' ) );
    container.add( new UI.Break(), new UI.Break() );


    var from = new UI.Input().setWidth( '120px' ).setColor( '#444' ).setFontSize( '12px' );
    from.dom.id = 'inputFrom';
    container.add(from);
    var to = new UI.Input().setWidth( '120px' ).setColor( '#444' ).setFontSize( '12px').setMarginLeft('10px');
    to.dom.id = 'inputTo';
    container.add(to);

    var btnSearching = new UI.Button().setWidth('80px').setMarginLeft('10px').setLabel('Routing').onClick(function(){

        clearPath();

        if(from.getValue() && from.getValue()!='') {
            var place1 = Data.search(from.getValue());
            selectPlace(place1);
        }

        if(to.getValue() && to.getValue()!='') {
            var place2 = Data.search(to.getValue());
            selectPlace(place2);
            selectPath(place1, place2);
        }
    });
    container.add(btnSearching);
    container.add( new UI.Break(), new UI.Break() );

    var textArea = new UI.TextArea().setWidth( '350px').setHeight( '150px' ).setColor( '#444' ).setFontSize( '12px' );
    textArea.dom.id = 'displayArea';
    container.add(textArea);


    return container;
};