var size = 0;
var placement = 'point';
function categories_Roadsshp_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Alleyway / Lane':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(87,105,223,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arterial':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,222,125,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Collector':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(88,223,21,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.128}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cul-de-Sac':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,159,51,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Expressway / Highway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(211,71,67,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Freeway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(83,83,83,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Local Street':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,32,77,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Private':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,102,98,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ramp':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(56,235,196,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Roundabout':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(98,16,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Roadsshp_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CARTO_CLAS");
    var labelText = "";
    size = 0;
    var labelFont = "9.1px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("STREET") !== null) {
        labelText = String(feature.get("STREET"));
    }
    
var style = categories_Roadsshp_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
