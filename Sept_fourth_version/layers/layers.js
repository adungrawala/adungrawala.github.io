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
var format_Residence_Park_Access82_1 = new ol.format.GeoJSON();
var features_Residence_Park_Access82_1 = format_Residence_Park_Access82_1.readFeatures(json_Residence_Park_Access82_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residence_Park_Access82_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residence_Park_Access82_1.addFeatures(features_Residence_Park_Access82_1);
var lyr_Residence_Park_Access82_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Residence_Park_Access82_1, 
                style: style_Residence_Park_Access82_1,
                popuplayertitle: "Residence_Park_Access (82%)",
                interactive: false,
                title: '<img src="styles/legend/Residence_Park_Access82_1.png" /> Residence_Park_Access (82%)'
            });
var format_CityBoundary_Waterloo_2 = new ol.format.GeoJSON();
var features_CityBoundary_Waterloo_2 = format_CityBoundary_Waterloo_2.readFeatures(json_CityBoundary_Waterloo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityBoundary_Waterloo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityBoundary_Waterloo_2.addFeatures(features_CityBoundary_Waterloo_2);
var lyr_CityBoundary_Waterloo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityBoundary_Waterloo_2, 
                style: style_CityBoundary_Waterloo_2,
                popuplayertitle: "CityBoundary_Waterloo",
                interactive: false,
                title: '<img src="styles/legend/CityBoundary_Waterloo_2.png" /> CityBoundary_Waterloo'
            });
var format_Not_under_400_WalkToPark18_3 = new ol.format.GeoJSON();
var features_Not_under_400_WalkToPark18_3 = format_Not_under_400_WalkToPark18_3.readFeatures(json_Not_under_400_WalkToPark18_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Not_under_400_WalkToPark18_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Not_under_400_WalkToPark18_3.addFeatures(features_Not_under_400_WalkToPark18_3);
var lyr_Not_under_400_WalkToPark18_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Not_under_400_WalkToPark18_3, 
                style: style_Not_under_400_WalkToPark18_3,
                popuplayertitle: "Not_under_400_WalkToPark (18%)",
                interactive: false,
                title: '<img src="styles/legend/Not_under_400_WalkToPark18_3.png" /> Not_under_400_WalkToPark (18%)'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Residence_Park_Access82_1.setVisible(true);lyr_CityBoundary_Waterloo_2.setVisible(true);lyr_Not_under_400_WalkToPark18_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Residence_Park_Access82_1,lyr_CityBoundary_Waterloo_2,lyr_Not_under_400_WalkToPark18_3];
lyr_Residence_Park_Access82_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'addr_subur': 'addr_subur', 'addr_provi': 'addr_provi', 'phone': 'phone', 'natural': 'natural', 'social_fac': 'social_fac', 'social_f_1': 'social_f_1', 'short_name': 'short_name', 'leisure': 'leisure', 'addr_city': 'addr_city', 'developer': 'developer', 'addr_postc': 'addr_postc', 'website': 'website', 'residentia': 'residentia', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'amenity': 'amenity', 'operator': 'operator', 'name': 'name', 'type': 'type', 'Area': 'Area', 'PARK_NAME': 'PARK_NAME', 'ADDRESS': 'ADDRESS', 'PARK_TYPE': 'PARK_TYPE', 'CLASS': 'CLASS', 'HECTARES': 'HECTARES', 'PLAYGROUND': 'PLAYGROUND', 'TENNIS_CRT': 'TENNIS_CRT', 'DIAMOND': 'DIAMOND', 'FIELDS': 'FIELDS', 'BASKETBALL': 'BASKETBALL', 'CRICKET': 'CRICKET', 'RINKS': 'RINKS', 'TOBOGGAN': 'TOBOGGAN', 'WASHROOM': 'WASHROOM', 'NBHD_ASSN': 'NBHD_ASSN', 'AREA_M': 'AREA_M', });
lyr_CityBoundary_Waterloo_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_CHANG': 'YEAR_CHANG', 'NOTES': 'NOTES', 'SOURCE': 'SOURCE', 'AREA_M2': 'AREA_M2', });
lyr_Not_under_400_WalkToPark18_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'addr_subur': 'addr_subur', 'addr_provi': 'addr_provi', 'phone': 'phone', 'natural': 'natural', 'social_fac': 'social_fac', 'social_f_1': 'social_f_1', 'short_name': 'short_name', 'leisure': 'leisure', 'addr_city': 'addr_city', 'developer': 'developer', 'addr_postc': 'addr_postc', 'website': 'website', 'residentia': 'residentia', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'amenity': 'amenity', 'operator': 'operator', 'name': 'name', 'type': 'type', 'Area': 'Area', });
lyr_Residence_Park_Access82_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_provi': 'TextEdit', 'phone': 'TextEdit', 'natural': 'TextEdit', 'social_fac': 'TextEdit', 'social_f_1': 'TextEdit', 'short_name': 'TextEdit', 'leisure': 'TextEdit', 'addr_city': 'TextEdit', 'developer': 'TextEdit', 'addr_postc': 'TextEdit', 'website': 'TextEdit', 'residentia': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'amenity': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'Area': 'TextEdit', 'PARK_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'PARK_TYPE': 'TextEdit', 'CLASS': 'TextEdit', 'HECTARES': 'TextEdit', 'PLAYGROUND': 'TextEdit', 'TENNIS_CRT': 'Range', 'DIAMOND': 'Range', 'FIELDS': 'Range', 'BASKETBALL': 'Range', 'CRICKET': 'Range', 'RINKS': 'TextEdit', 'TOBOGGAN': 'Range', 'WASHROOM': 'Range', 'NBHD_ASSN': 'TextEdit', 'AREA_M': 'TextEdit', });
lyr_CityBoundary_Waterloo_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'YEAR_CHANG': 'TextEdit', 'NOTES': 'TextEdit', 'SOURCE': 'TextEdit', 'AREA_M2': 'TextEdit', });
lyr_Not_under_400_WalkToPark18_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_provi': 'TextEdit', 'phone': 'TextEdit', 'natural': 'TextEdit', 'social_fac': 'TextEdit', 'social_f_1': 'TextEdit', 'short_name': 'TextEdit', 'leisure': 'TextEdit', 'addr_city': 'TextEdit', 'developer': 'TextEdit', 'addr_postc': 'TextEdit', 'website': 'TextEdit', 'residentia': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'amenity': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'Area': 'TextEdit', });
lyr_Residence_Park_Access82_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'addr_subur': 'no label', 'addr_provi': 'no label', 'phone': 'no label', 'natural': 'no label', 'social_fac': 'no label', 'social_f_1': 'no label', 'short_name': 'no label', 'leisure': 'no label', 'addr_city': 'no label', 'developer': 'no label', 'addr_postc': 'no label', 'website': 'no label', 'residentia': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'amenity': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'Area': 'no label', 'PARK_NAME': 'no label', 'ADDRESS': 'no label', 'PARK_TYPE': 'no label', 'CLASS': 'no label', 'HECTARES': 'no label', 'PLAYGROUND': 'no label', 'TENNIS_CRT': 'no label', 'DIAMOND': 'no label', 'FIELDS': 'no label', 'BASKETBALL': 'no label', 'CRICKET': 'no label', 'RINKS': 'no label', 'TOBOGGAN': 'no label', 'WASHROOM': 'no label', 'NBHD_ASSN': 'no label', 'AREA_M': 'no label', });
lyr_CityBoundary_Waterloo_2.set('fieldLabels', {'OBJECTID': 'no label', 'YEAR_CHANG': 'no label', 'NOTES': 'no label', 'SOURCE': 'no label', 'AREA_M2': 'no label', });
lyr_Not_under_400_WalkToPark18_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'addr_subur': 'no label', 'addr_provi': 'no label', 'phone': 'no label', 'natural': 'no label', 'social_fac': 'no label', 'social_f_1': 'no label', 'short_name': 'no label', 'leisure': 'no label', 'addr_city': 'no label', 'developer': 'no label', 'addr_postc': 'no label', 'website': 'no label', 'residentia': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'amenity': 'no label', 'operator': 'no label', 'name': 'no label', 'type': 'no label', 'Area': 'no label', });
lyr_Not_under_400_WalkToPark18_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});