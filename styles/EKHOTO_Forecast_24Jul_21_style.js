var size = 0;
var placement = 'point';

var style_EKHOTO_Forecast_24Jul_21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("forecast_h") !== null) {
        labelText = String(feature.get("forecast_h"));
    }
    
        function rules_EKHOTO_Forecast_24Jul_21(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_EKHOTO_Forecast_24Jul_21rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 6.0,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cyclone icon black white fill.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_EKHOTO_Forecast_24Jul_21rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 6.0,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cyclone icon black white fill_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_EKHOTO_Forecast_24Jul_21rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 6.0,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cyclone icon orange white fill.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_EKHOTO_Forecast_24Jul_21rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 6.0,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cyclone icon yellow.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_EKHOTO_Forecast_24Jul_21rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 6.0,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cyclone icon yellow white fill.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_EKHOTO_Forecast_24Jul_21rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_EKHOTO_Forecast_24Jul_21(feature, value);
        ;

    return style;
};
