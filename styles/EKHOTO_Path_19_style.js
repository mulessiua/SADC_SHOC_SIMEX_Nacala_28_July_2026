var size = 0;
var placement = 'point';

var style_EKHOTO_Path_19 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_EKHOTO_Path_19(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_EKHOTO_Path_19rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [5, 5],
                  scale: 7.6,
                  anchor: [2.5, 2.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cyclone icon black.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_EKHOTO_Path_19(feature, value);
        ;

    return style;
};
