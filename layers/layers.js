var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                interactive: true,
    title: 'ซึมเศร้า<br />\
    <img src="styles/legend/_0_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/_0_1.png" /> ๑๐๑ - ๓๐๐<br />\
    <img src="styles/legend/_0_2.png" /> ๓๐๑ - ๖๐๐<br />\
    <img src="styles/legend/_0_3.png" /> ๖๐๑ - ๑๐๐๐<br />\
    <img src="styles/legend/_0_4.png" /> ๑๐๐๑ - ๒๐๐๐<br />'
        });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'PROV_NAMT': 'PROV_NAMT', 'PROV_NAME': 'PROV_NAME', 'AMP_NAMT': 'AMP_NAMT', 'AMP_NAME': 'AMP_NAME', 'AREA_CODE': 'AREA_CODE', 'LABELCLASS': 'LABELCLASS', 'CRE_DATE': 'CRE_DATE', 'APP_DATE': 'APP_DATE', 'CRE_USID': 'CRE_USID', 'MOD_USID': 'MOD_USID', 'APP_USID': 'APP_USID', 'APP_STA': 'APP_STA', 'DEPTID': 'DEPTID', 'ADD_EDIT': 'ADD_EDIT', 'REMARK': 'REMARK', 'MOD_DATE': 'MOD_DATE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'Dess_Num': 'Dess_Num', });
lyr__0.set('fieldImages', {'PROV_CODE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'PROV_NAMT': 'TextEdit', 'PROV_NAME': 'TextEdit', 'AMP_NAMT': 'TextEdit', 'AMP_NAME': 'TextEdit', 'AREA_CODE': 'TextEdit', 'LABELCLASS': 'Range', 'CRE_DATE': 'DateTime', 'APP_DATE': 'DateTime', 'CRE_USID': 'TextEdit', 'MOD_USID': 'TextEdit', 'APP_USID': 'TextEdit', 'APP_STA': 'TextEdit', 'DEPTID': 'TextEdit', 'ADD_EDIT': 'TextEdit', 'REMARK': 'TextEdit', 'MOD_DATE': 'DateTime', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'Dess_Num': 'TextEdit', });
lyr__0.set('fieldLabels', {'PROV_CODE': 'hidden field', 'AMP_CODE': 'hidden field', 'PROV_NAMT': 'hidden field', 'PROV_NAME': 'hidden field', 'AMP_NAMT': 'inline label - visible with data', 'AMP_NAME': 'hidden field', 'AREA_CODE': 'hidden field', 'LABELCLASS': 'hidden field', 'CRE_DATE': 'hidden field', 'APP_DATE': 'hidden field', 'CRE_USID': 'hidden field', 'MOD_USID': 'hidden field', 'APP_USID': 'hidden field', 'APP_STA': 'hidden field', 'DEPTID': 'hidden field', 'ADD_EDIT': 'hidden field', 'REMARK': 'hidden field', 'MOD_DATE': 'hidden field', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', 'Dess_Num': 'inline label - always visible', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});