var size = 0;
var placement = 'point';

var style_TorontoNeighborhoodParcel_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "6.5px \'Arial Narrow\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("AREA_NA2") !== null) {
        labelText = String(feature.get("AREA_NA2"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.43799999999999994)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.608}),fill: new ol.style.Fill({color: 'rgba(250,250,250,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
