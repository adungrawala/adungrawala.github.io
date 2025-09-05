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
var format_Roads_Waterloo_1 = new ol.format.GeoJSON();
var features_Roads_Waterloo_1 = format_Roads_Waterloo_1.readFeatures(json_Roads_Waterloo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_Waterloo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_Waterloo_1.addFeatures(features_Roads_Waterloo_1);
var lyr_Roads_Waterloo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_Waterloo_1, 
                style: style_Roads_Waterloo_1,
                popuplayertitle: "Roads_Waterloo",
                interactive: false,
                title: '<img src="styles/legend/Roads_Waterloo_1.png" /> Roads_Waterloo'
            });
var format_Park_Buffer_400m_2 = new ol.format.GeoJSON();
var features_Park_Buffer_400m_2 = format_Park_Buffer_400m_2.readFeatures(json_Park_Buffer_400m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Park_Buffer_400m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Park_Buffer_400m_2.addFeatures(features_Park_Buffer_400m_2);
var lyr_Park_Buffer_400m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Park_Buffer_400m_2, 
                style: style_Park_Buffer_400m_2,
                popuplayertitle: "Park_Buffer_400m",
                interactive: false,
                title: '<img src="styles/legend/Park_Buffer_400m_2.png" /> Park_Buffer_400m'
            });
var format_Parks_Waterloo_3 = new ol.format.GeoJSON();
var features_Parks_Waterloo_3 = format_Parks_Waterloo_3.readFeatures(json_Parks_Waterloo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_Waterloo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_Waterloo_3.addFeatures(features_Parks_Waterloo_3);
var lyr_Parks_Waterloo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_Waterloo_3, 
                style: style_Parks_Waterloo_3,
                popuplayertitle: "Parks_Waterloo",
                interactive: false,
                title: '<img src="styles/legend/Parks_Waterloo_3.png" /> Parks_Waterloo'
            });
var format_Residence_Park_Access82_4 = new ol.format.GeoJSON();
var features_Residence_Park_Access82_4 = format_Residence_Park_Access82_4.readFeatures(json_Residence_Park_Access82_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residence_Park_Access82_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residence_Park_Access82_4.addFeatures(features_Residence_Park_Access82_4);
var lyr_Residence_Park_Access82_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residence_Park_Access82_4, 
                style: style_Residence_Park_Access82_4,
                popuplayertitle: "Residence_Park_Access (82%)",
                interactive: false,
                title: '<img src="styles/legend/Residence_Park_Access82_4.png" /> Residence_Park_Access (82%)'
            });
var format_CityBoundary_Waterloo_5 = new ol.format.GeoJSON();
var features_CityBoundary_Waterloo_5 = format_CityBoundary_Waterloo_5.readFeatures(json_CityBoundary_Waterloo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityBoundary_Waterloo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityBoundary_Waterloo_5.addFeatures(features_CityBoundary_Waterloo_5);
var lyr_CityBoundary_Waterloo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityBoundary_Waterloo_5, 
                style: style_CityBoundary_Waterloo_5,
                popuplayertitle: "CityBoundary_Waterloo",
                interactive: false,
                title: '<img src="styles/legend/CityBoundary_Waterloo_5.png" /> CityBoundary_Waterloo'
            });
var format_Not_under_400_WalkToPark18_6 = new ol.format.GeoJSON();
var features_Not_under_400_WalkToPark18_6 = format_Not_under_400_WalkToPark18_6.readFeatures(json_Not_under_400_WalkToPark18_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Not_under_400_WalkToPark18_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Not_under_400_WalkToPark18_6.addFeatures(features_Not_under_400_WalkToPark18_6);
var lyr_Not_under_400_WalkToPark18_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Not_under_400_WalkToPark18_6, 
                style: style_Not_under_400_WalkToPark18_6,
                popuplayertitle: "Not_under_400_WalkToPark (18%)",
                interactive: false,
                title: '<img src="styles/legend/Not_under_400_WalkToPark18_6.png" /> Not_under_400_WalkToPark (18%)'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Roads_Waterloo_1.setVisible(true);lyr_Park_Buffer_400m_2.setVisible(true);lyr_Parks_Waterloo_3.setVisible(true);lyr_Residence_Park_Access82_4.setVisible(true);lyr_CityBoundary_Waterloo_5.setVisible(true);lyr_Not_under_400_WalkToPark18_6.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Roads_Waterloo_1,lyr_Park_Buffer_400m_2,lyr_Parks_Waterloo_3,lyr_Residence_Park_Access82_4,lyr_CityBoundary_Waterloo_5,lyr_Not_under_400_WalkToPark18_6];
lyr_Roads_Waterloo_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SEGMENT_ID': 'SEGMENT_ID', 'STREET_NAM': 'STREET_NAM', 'FROM_LEFT': 'FROM_LEFT', 'TO_LEFT': 'TO_LEFT', 'FROM_RIGHT': 'FROM_RIGHT', 'TO_RIGHT': 'TO_RIGHT', 'LEFT_PARIT': 'LEFT_PARIT', 'RIGHT_PARI': 'RIGHT_PARI', 'FROM_STREE': 'FROM_STREE', 'TO_STREET': 'TO_STREET', 'STATUS_PHY': 'STATUS_PHY', 'STREET_TYP': 'STREET_TYP', 'MAIN_ROAD': 'MAIN_ROAD', 'CARTO_CLAS': 'CARTO_CLAS', 'FLOW_DIREC': 'FLOW_DIREC', 'NUMBER_LAN': 'NUMBER_LAN', 'SPEED_ZONE': 'SPEED_ZONE', 'PLOW_PRIOR': 'PLOW_PRIOR', 'FIRE_ROUTE': 'FIRE_ROUTE', 'CUL_DE_SAC': 'CUL_DE_SAC', 'MEDIAN': 'MEDIAN', 'LEFT_MUNIC': 'LEFT_MUNIC', 'RIGHT_MUNI': 'RIGHT_MUNI', 'OWNED_BY': 'OWNED_BY', 'MANAGED_BY': 'MANAGED_BY', 'AADT': 'AADT', 'AADT_DATE': 'AADT_DATE', 'AADT_SOURC': 'AADT_SOURC', 'LENGTH_M': 'LENGTH_M', });
lyr_Park_Buffer_400m_2.set('fieldAliases', {'PARK_NAME': 'PARK_NAME', 'ADDRESS': 'ADDRESS', 'PARK_TYPE': 'PARK_TYPE', 'CLASS': 'CLASS', 'HECTARES': 'HECTARES', 'PLAYGROUND': 'PLAYGROUND', 'TENNIS_CRT': 'TENNIS_CRT', 'DIAMOND': 'DIAMOND', 'FIELDS': 'FIELDS', 'BASKETBALL': 'BASKETBALL', 'CRICKET': 'CRICKET', 'RINKS': 'RINKS', 'TOBOGGAN': 'TOBOGGAN', 'WASHROOM': 'WASHROOM', 'NBHD_ASSN': 'NBHD_ASSN', 'AREA_M': 'AREA_M', });
lyr_Parks_Waterloo_3.set('fieldAliases', {'PARK_NAME': 'PARK_NAME', 'ADDRESS': 'ADDRESS', 'PARK_TYPE': 'PARK_TYPE', 'CLASS': 'CLASS', 'HECTARES': 'HECTARES', 'PLAYGROUND': 'PLAYGROUND', 'TENNIS_CRT': 'TENNIS_CRT', 'DIAMOND': 'DIAMOND', 'FIELDS': 'FIELDS', 'BASKETBALL': 'BASKETBALL', 'CRICKET': 'CRICKET', 'RINKS': 'RINKS', 'TOBOGGAN': 'TOBOGGAN', 'WASHROOM': 'WASHROOM', 'NBHD_ASSN': 'NBHD_ASSN', 'AREA_M': 'AREA_M', });
lyr_Residence_Park_Access82_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'addr_subur': 'addr_subur', 'addr_provi': 'addr_provi', 'phone': 'phone', 'natural': 'natural', 'social_fac': 'social_fac', 'social_f_1': 'social_f_1', 'short_name': 'short_name', 'leisure': 'leisure', 'addr_city': 'addr_city', 'developer': 'developer', 'addr_postc': 'addr_postc', 'website': 'website', 'residentia': 'residentia', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'amenity': 'amenity', 'operator': 'operator', 'name': 'name', 'type': 'type', 'Area': 'Area', 'PARK_NAME': 'PARK_NAME', 'ADDRESS': 'ADDRESS', 'PARK_TYPE': 'PARK_TYPE', 'CLASS': 'CLASS', 'HECTARES': 'HECTARES', 'PLAYGROUND': 'PLAYGROUND', 'TENNIS_CRT': 'TENNIS_CRT', 'DIAMOND': 'DIAMOND', 'FIELDS': 'FIELDS', 'BASKETBALL': 'BASKETBALL', 'CRICKET': 'CRICKET', 'RINKS': 'RINKS', 'TOBOGGAN': 'TOBOGGAN', 'WASHROOM': 'WASHROOM', 'NBHD_ASSN': 'NBHD_ASSN', 'AREA_M': 'AREA_M', });
lyr_CityBoundary_Waterloo_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_CHANG': 'YEAR_CHANG', 'NOTES': 'NOTES', 'SOURCE': 'SOURCE', 'AREA_M2': 'AREA_M2', });
lyr_Not_under_400_WalkToPark18_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'addr_subur': 'addr_subur', 'addr_provi': 'addr_provi', 'phone': 'phone', 'natural': 'natural', 'social_fac': 'social_fac', 'social_f_1': 'social_f_1', 'short_name': 'short_name', 'leisure': 'leisure', 'addr_city': 'addr_city', 'developer': 'developer', 'addr_postc': 'addr_postc', 'website': 'website', 'residentia': 'residentia', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'amenity': 'amenity', 'operator': 'operator', 'name': 'name', 'type': 'type', 'Area': 'Area', });
lyr_Roads_Waterloo_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SEGMENT_ID': 'TextEdit', 'STREET_NAM': 'TextEdit', 'FROM_LEFT': 'TextEdit', 'TO_LEFT': 'TextEdit', 'FROM_RIGHT': 'TextEdit', 'TO_RIGHT': 'TextEdit', 'LEFT_PARIT': 'TextEdit', 'RIGHT_PARI': 'TextEdit', 'FROM_STREE': 'TextEdit', 'TO_STREET': 'TextEdit', 'STATUS_PHY': 'TextEdit', 'STREET_TYP': 'TextEdit', 'MAIN_ROAD': 'TextEdit', 'CARTO_CLAS': 'TextEdit', 'FLOW_DIREC': 'TextEdit', 'NUMBER_LAN': 'TextEdit', 'SPEED_ZONE': 'TextEdit', 'PLOW_PRIOR': 'TextEdit', 'FIRE_ROUTE': 'TextEdit', 'CUL_DE_SAC': 'TextEdit', 'MEDIAN': 'TextEdit', 'LEFT_MUNIC': 'TextEdit', 'RIGHT_MUNI': 'TextEdit', 'OWNED_BY': 'TextEdit', 'MANAGED_BY': 'TextEdit', 'AADT': 'TextEdit', 'AADT_DATE': 'TextEdit', 'AADT_SOURC': 'TextEdit', 'LENGTH_M': 'TextEdit', });
lyr_Park_Buffer_400m_2.set('fieldImages', {'PARK_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PARK_TYPE': 'TextEdit', 'CLASS': 'TextEdit', 'HECTARES': 'TextEdit', 'PLAYGROUND': 'TextEdit', 'TENNIS_CRT': 'Range', 'DIAMOND': 'Range', 'FIELDS': 'Range', 'BASKETBALL': 'Range', 'CRICKET': 'Range', 'RINKS': 'TextEdit', 'TOBOGGAN': 'Range', 'WASHROOM': 'Range', 'NBHD_ASSN': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_Parks_Waterloo_3.set('fieldImages', {'PARK_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PARK_TYPE': 'TextEdit', 'CLASS': 'TextEdit', 'HECTARES': 'TextEdit', 'PLAYGROUND': 'TextEdit', 'TENNIS_CRT': 'Range', 'DIAMOND': 'Range', 'FIELDS': 'Range', 'BASKETBALL': 'Range', 'CRICKET': 'Range', 'RINKS': 'TextEdit', 'TOBOGGAN': 'Range', 'WASHROOM': 'Range', 'NBHD_ASSN': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_Residence_Park_Access82_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_provi': 'TextEdit', 'phone': 'TextEdit', 'natural': 'TextEdit', 'social_fac': 'TextEdit', 'social_f_1': 'TextEdit', 'short_name': 'TextEdit', 'leisure': 'TextEdit', 'addr_city': 'TextEdit', 'developer': 'TextEdit', 'addr_postc': 'TextEdit', 'website': 'TextEdit', 'residentia': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'amenity': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'Area': 'TextEdit', 'PARK_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PARK_TYPE': 'TextEdit', 'CLASS': 'TextEdit', 'HECTARES': 'TextEdit', 'PLAYGROUND': 'TextEdit', 'TENNIS_CRT': 'Range', 'DIAMOND': 'Range', 'FIELDS': 'Range', 'BASKETBALL': 'Range', 'CRICKET': 'Range', 'RINKS': 'TextEdit', 'TOBOGGAN': 'Range', 'WASHROOM': 'Range', 'NBHD_ASSN': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_CityBoundary_Waterloo_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'YEAR_CHANG': 'TextEdit', 'NOTES': 'TextEdit', 'SOURCE': 'TextEdit', 'AREA_M2': 'TextEdit', });
lyr_Not_under_400_WalkToPark18_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_provi': 'TextEdit', 'phone': 'TextEdit', 'natural': 'TextEdit', 'social_fac': 'TextEdit', 'social_f_1': 'TextEdit', 'short_name': 'TextEdit', 'leisure': 'TextEdit', 'addr_city': 'TextEdit', 'developer': 'TextEdit', 'addr_postc': 'TextEdit', 'website': 'TextEdit', 'residentia': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'amenity': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'Area': 'TextEdit', });
lyr_Roads_Waterloo_1.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'SEGMENT_ID': 'hidden field', 'STREET_NAM': 'no label', 'FROM_LEFT': 'no label', 'TO_LEFT': 'no label', 'FROM_RIGHT': 'no label', 'TO_RIGHT': 'no label', 'LEFT_PARIT': 'no label', 'RIGHT_PARI': 'no label', 'FROM_STREE': 'no label', 'TO_STREET': 'no label', 'STATUS_PHY': 'no label', 'STREET_TYP': 'no label', 'MAIN_ROAD': 'no label', 'CARTO_CLAS': 'no label', 'FLOW_DIREC': 'no label', 'NUMBER_LAN': 'no label', 'SPEED_ZONE': 'no label', 'PLOW_PRIOR': 'no label', 'FIRE_ROUTE': 'no label', 'CUL_DE_SAC': 'no label', 'MEDIAN': 'no label', 'LEFT_MUNIC': 'no label', 'RIGHT_MUNI': 'no label', 'OWNED_BY': 'no label', 'MANAGED_BY': 'no label', 'AADT': 'no label', 'AADT_DATE': 'no label', 'AADT_SOURC': 'no label', 'LENGTH_M': 'no label', });
lyr_Park_Buffer_400m_2.set('fieldLabels', {'PARK_NAME': 'no label', 'ADDRESS': 'no label', 'PARK_TYPE': 'no label', 'CLASS': 'no label', 'HECTARES': 'no label', 'PLAYGROUND': 'no label', 'TENNIS_CRT': 'no label', 'DIAMOND': 'no label', 'FIELDS': 'no label', 'BASKETBALL': 'no label', 'CRICKET': 'no label', 'RINKS': 'no label', 'TOBOGGAN': 'no label', 'WASHROOM': 'no label', 'NBHD_ASSN': 'no label', 'AREA_M': 'no label', });
lyr_Parks_Waterloo_3.set('fieldLabels', {'PARK_NAME': 'hidden field', 'ADDRESS': 'inline label - visible with data', 'PARK_TYPE': 'inline label - visible with data', 'CLASS': 'no label', 'HECTARES': 'no label', 'PLAYGROUND': 'inline label - visible with data', 'TENNIS_CRT': 'inline label - visible with data', 'DIAMOND': 'inline label - visible with data', 'FIELDS': 'inline label - visible with data', 'BASKETBALL': 'inline label - visible with data', 'CRICKET': 'inline label - visible with data', 'RINKS': 'inline label - visible with data', 'TOBOGGAN': 'inline label - visible with data', 'WASHROOM': 'inline label - visible with data', 'NBHD_ASSN': 'hidden field', 'AREA_M': 'hidden field', });
lyr_Residence_Park_Access82_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'addr_subur': 'no label', 'addr_provi': 'no label', 'phone': 'no label', 'natural': 'no label', 'social_fac': 'no label', 'social_f_1': 'no label', 'short_name': 'no label', 'leisure': 'no label', 'addr_city': 'no label', 'developer': 'no label', 'addr_postc': 'no label', 'website': 'no label', 'residentia': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'amenity': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'Area': 'no label', 'PARK_NAME': 'no label', 'ADDRESS': 'no label', 'PARK_TYPE': 'no label', 'CLASS': 'no label', 'HECTARES': 'no label', 'PLAYGROUND': 'no label', 'TENNIS_CRT': 'no label', 'DIAMOND': 'no label', 'FIELDS': 'no label', 'BASKETBALL': 'no label', 'CRICKET': 'no label', 'RINKS': 'no label', 'TOBOGGAN': 'no label', 'WASHROOM': 'no label', 'NBHD_ASSN': 'no label', 'AREA_M': 'no label', });
lyr_CityBoundary_Waterloo_5.set('fieldLabels', {'OBJECTID': 'no label', 'YEAR_CHANG': 'no label', 'NOTES': 'no label', 'SOURCE': 'no label', 'AREA_M2': 'no label', });
lyr_Not_under_400_WalkToPark18_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'addr_subur': 'no label', 'addr_provi': 'no label', 'phone': 'no label', 'natural': 'no label', 'social_fac': 'no label', 'social_f_1': 'no label', 'short_name': 'no label', 'leisure': 'no label', 'addr_city': 'no label', 'developer': 'no label', 'addr_postc': 'no label', 'website': 'no label', 'residentia': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'amenity': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'Area': 'no label', });
lyr_Not_under_400_WalkToPark18_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});