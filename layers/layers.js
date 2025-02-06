ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8966857.984236, 5375534.944979, -8950088.531504, 5383541.750142]);
var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Roadsshp_1 = new ol.format.GeoJSON();
var features_Roadsshp_1 = format_Roadsshp_1.readFeatures(json_Roadsshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadsshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadsshp_1.addFeatures(features_Roadsshp_1);
var lyr_Roadsshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadsshp_1, 
                style: style_Roadsshp_1,
                popuplayertitle: "Roads.shp",
                interactive: false,
    title: 'Roads.shp<br />\
    <img src="styles/legend/Roadsshp_1_0.png" /> Alleyway / Lane<br />\
    <img src="styles/legend/Roadsshp_1_1.png" /> Arterial<br />\
    <img src="styles/legend/Roadsshp_1_2.png" /> Collector<br />\
    <img src="styles/legend/Roadsshp_1_3.png" /> Cul-de-Sac<br />\
    <img src="styles/legend/Roadsshp_1_4.png" /> Expressway / Highway<br />\
    <img src="styles/legend/Roadsshp_1_5.png" /> Freeway<br />\
    <img src="styles/legend/Roadsshp_1_6.png" /> Local Street<br />\
    <img src="styles/legend/Roadsshp_1_7.png" /> Private<br />\
    <img src="styles/legend/Roadsshp_1_8.png" /> Ramp<br />\
    <img src="styles/legend/Roadsshp_1_9.png" /> Roundabout<br />'
        });
var format_GeohashdensitymapforCollision_2 = new ol.format.GeoJSON();
var features_GeohashdensitymapforCollision_2 = format_GeohashdensitymapforCollision_2.readFeatures(json_GeohashdensitymapforCollision_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeohashdensitymapforCollision_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeohashdensitymapforCollision_2.addFeatures(features_GeohashdensitymapforCollision_2);
var lyr_GeohashdensitymapforCollision_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeohashdensitymapforCollision_2, 
                style: style_GeohashdensitymapforCollision_2,
                popuplayertitle: "Geohash density map for Collision",
                interactive: false,
    title: 'Geohash density map for Collision<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_0.png" /> 1<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_1.png" /> 2<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_2.png" /> 2 - 4<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_3.png" /> 4 - 7<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_4.png" /> 7 - 11<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_5.png" /> 11 - 17<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_6.png" /> 17 - 29<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_7.png" /> 29 - 45<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_8.png" /> 45 - 63<br />\
    <img src="styles/legend/GeohashdensitymapforCollision_2_9.png" /> 63 - 330<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_Roadsshp_1.setVisible(true);lyr_GeohashdensitymapforCollision_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Roadsshp_1,lyr_GeohashdensitymapforCollision_2];
lyr_Roadsshp_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ROADSEGMEN': 'ROADSEGMEN', 'STREET': 'STREET', 'FROM_STREE': 'FROM_STREE', 'TO_STREET': 'TO_STREET', 'FROM_LEFT_': 'FROM_LEFT_', 'TO_LEFT_AD': 'TO_LEFT_AD', 'FROM_RIGHT': 'FROM_RIGHT', 'TO_RIGHT_A': 'TO_RIGHT_A', 'LANES': 'LANES', 'OWNERSHIP': 'OWNERSHIP', 'CARTO_CLAS': 'CARTO_CLAS', 'CREATE_DAT': 'CREATE_DAT', 'UPDATE_DAT': 'UPDATE_DAT', 'SOURCE_DAT': 'SOURCE_DAT', 'SOURCE': 'SOURCE', 'RIGHT_SIDE': 'RIGHT_SIDE', 'REGIONAL_R': 'REGIONAL_R', 'HIGHWAY': 'HIGHWAY', 'MUNICIPALI': 'MUNICIPALI', 'GENERAL_GR': 'GENERAL_GR', 'SEQUENCE': 'SEQUENCE', 'STATUS_DAT': 'STATUS_DAT', 'PLOW_ROUTE': 'PLOW_ROUTE', 'MEDIAN_TYP': 'MEDIAN_TYP', 'STREET_NAM': 'STREET_NAM', 'STREET_TYP': 'STREET_TYP', 'STREET_DIR': 'STREET_DIR', 'PLOW_PRIOR': 'PLOW_PRIOR', 'LEAF_ROUTE': 'LEAF_ROUTE', 'LEFT_MUNIC': 'LEFT_MUNIC', 'RIGHT_MUNI': 'RIGHT_MUNI', 'CATEGORY': 'CATEGORY', 'SUBCATEGOR': 'SUBCATEGOR', 'STATUS': 'STATUS', 'PAVEMENT_W': 'PAVEMENT_W', 'ROW_WIDTH': 'ROW_WIDTH', 'QUARTER_GR': 'QUARTER_GR', 'WARDID': 'WARDID', 'PLANNINGCO': 'PLANNINGCO', 'PARCELID': 'PARCELID', 'SHOULDER': 'SHOULDER', 'FLOW_DIREC': 'FLOW_DIREC', 'SALT_SAND_': 'SALT_SAND_', 'STARTX': 'STARTX', 'STARTY': 'STARTY', 'ENDX': 'ENDX', 'ENDY': 'ENDY', 'OPERATIONS': 'OPERATIONS', 'SURFACE_LA': 'SURFACE_LA', 'SPEED_LIMI': 'SPEED_LIMI', 'TRUCK_ACCE': 'TRUCK_ACCE', 'BUS_ROUTE': 'BUS_ROUTE', 'AADT': 'AADT', 'AADT_YEAR': 'AADT_YEAR', 'AADT_TYPE': 'AADT_TYPE', 'CALCULATED': 'CALCULATED', 'SERVICE_YE': 'SERVICE_YE', 'BIKE_ACCES': 'BIKE_ACCES', 'SALT_PRIOR': 'SALT_PRIOR', 'SNOWLOAD_R': 'SNOWLOAD_R', 'STREET_SWE': 'STREET_SWE', 'SNOWLOAD_P': 'SNOWLOAD_P', 'GlobalID': 'GlobalID', 'Shape__Len': 'Shape__Len', });
lyr_GeohashdensitymapforCollision_2.set('fieldAliases', {'ID': 'ID', 'GEOHASH': 'GEOHASH', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Roadsshp_1.set('fieldImages', {'OBJECTID': 'Range', 'ROADSEGMEN': 'Range', 'STREET': 'TextEdit', 'FROM_STREE': 'TextEdit', 'TO_STREET': 'TextEdit', 'FROM_LEFT_': 'Range', 'TO_LEFT_AD': 'Range', 'FROM_RIGHT': 'Range', 'TO_RIGHT_A': 'Range', 'LANES': 'Range', 'OWNERSHIP': 'TextEdit', 'CARTO_CLAS': 'TextEdit', 'CREATE_DAT': 'DateTime', 'UPDATE_DAT': 'DateTime', 'SOURCE_DAT': 'DateTime', 'SOURCE': 'TextEdit', 'RIGHT_SIDE': 'TextEdit', 'REGIONAL_R': 'TextEdit', 'HIGHWAY': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'GENERAL_GR': 'TextEdit', 'SEQUENCE': 'Range', 'STATUS_DAT': 'DateTime', 'PLOW_ROUTE': 'TextEdit', 'MEDIAN_TYP': 'TextEdit', 'STREET_NAM': 'TextEdit', 'STREET_TYP': 'TextEdit', 'STREET_DIR': 'TextEdit', 'PLOW_PRIOR': 'Range', 'LEAF_ROUTE': 'TextEdit', 'LEFT_MUNIC': 'TextEdit', 'RIGHT_MUNI': 'TextEdit', 'CATEGORY': 'TextEdit', 'SUBCATEGOR': 'TextEdit', 'STATUS': 'TextEdit', 'PAVEMENT_W': 'TextEdit', 'ROW_WIDTH': 'TextEdit', 'QUARTER_GR': 'TextEdit', 'WARDID': 'Range', 'PLANNINGCO': 'Range', 'PARCELID': 'Range', 'SHOULDER': 'TextEdit', 'FLOW_DIREC': 'TextEdit', 'SALT_SAND_': 'TextEdit', 'STARTX': 'TextEdit', 'STARTY': 'TextEdit', 'ENDX': 'TextEdit', 'ENDY': 'TextEdit', 'OPERATIONS': 'TextEdit', 'SURFACE_LA': 'TextEdit', 'SPEED_LIMI': 'Range', 'TRUCK_ACCE': 'TextEdit', 'BUS_ROUTE': 'TextEdit', 'AADT': 'Range', 'AADT_YEAR': 'TextEdit', 'AADT_TYPE': 'TextEdit', 'CALCULATED': 'Range', 'SERVICE_YE': 'TextEdit', 'BIKE_ACCES': 'TextEdit', 'SALT_PRIOR': 'Range', 'SNOWLOAD_R': 'TextEdit', 'STREET_SWE': 'Range', 'SNOWLOAD_P': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_GeohashdensitymapforCollision_2.set('fieldImages', {'ID': 'TextEdit', 'GEOHASH': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_Roadsshp_1.set('fieldLabels', {'OBJECTID': 'no label', 'ROADSEGMEN': 'no label', 'STREET': 'inline label - always visible', 'FROM_STREE': 'no label', 'TO_STREET': 'no label', 'FROM_LEFT_': 'no label', 'TO_LEFT_AD': 'no label', 'FROM_RIGHT': 'no label', 'TO_RIGHT_A': 'no label', 'LANES': 'no label', 'OWNERSHIP': 'no label', 'CARTO_CLAS': 'no label', 'CREATE_DAT': 'no label', 'UPDATE_DAT': 'no label', 'SOURCE_DAT': 'no label', 'SOURCE': 'no label', 'RIGHT_SIDE': 'no label', 'REGIONAL_R': 'no label', 'HIGHWAY': 'no label', 'MUNICIPALI': 'no label', 'GENERAL_GR': 'no label', 'SEQUENCE': 'no label', 'STATUS_DAT': 'no label', 'PLOW_ROUTE': 'no label', 'MEDIAN_TYP': 'no label', 'STREET_NAM': 'no label', 'STREET_TYP': 'no label', 'STREET_DIR': 'no label', 'PLOW_PRIOR': 'no label', 'LEAF_ROUTE': 'no label', 'LEFT_MUNIC': 'no label', 'RIGHT_MUNI': 'no label', 'CATEGORY': 'no label', 'SUBCATEGOR': 'no label', 'STATUS': 'no label', 'PAVEMENT_W': 'no label', 'ROW_WIDTH': 'no label', 'QUARTER_GR': 'no label', 'WARDID': 'no label', 'PLANNINGCO': 'no label', 'PARCELID': 'no label', 'SHOULDER': 'no label', 'FLOW_DIREC': 'no label', 'SALT_SAND_': 'no label', 'STARTX': 'no label', 'STARTY': 'no label', 'ENDX': 'no label', 'ENDY': 'no label', 'OPERATIONS': 'no label', 'SURFACE_LA': 'no label', 'SPEED_LIMI': 'no label', 'TRUCK_ACCE': 'no label', 'BUS_ROUTE': 'no label', 'AADT': 'no label', 'AADT_YEAR': 'no label', 'AADT_TYPE': 'no label', 'CALCULATED': 'no label', 'SERVICE_YE': 'no label', 'BIKE_ACCES': 'no label', 'SALT_PRIOR': 'no label', 'SNOWLOAD_R': 'no label', 'STREET_SWE': 'no label', 'SNOWLOAD_P': 'no label', 'GlobalID': 'no label', 'Shape__Len': 'no label', });
lyr_GeohashdensitymapforCollision_2.set('fieldLabels', {'ID': 'no label', 'GEOHASH': 'no label', 'NUMPOINTS': 'no label', });
lyr_GeohashdensitymapforCollision_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});