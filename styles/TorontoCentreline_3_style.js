var size = 0;
var placement = 'point';
function categories_TorontoCentreline_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Access Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,25,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,71,49,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Collector Ramp':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(233,94,60,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Expressway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,1,185,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Expressway Ramp':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,163,92,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Laneway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,218,148,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Local':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,230,162,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Major Arterial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Major Arterial Ramp':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,191,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Minor Arterial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(239,6,130,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Minor Arterial Ramp':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,234,174,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_TorontoCentreline_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("FEATURE36");
    var labelText = "";
    size = 0;
    var labelFont = "14.3px \'Arial\', sans-serif";
    var labelFill = "#e31a1c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("LINEAR_4") !== null) {
        labelText = String(feature.get("LINEAR_4"));
    }
    
var style = categories_TorontoCentreline_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
