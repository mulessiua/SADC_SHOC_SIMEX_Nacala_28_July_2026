var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                popuplayertitle: 'World Map',
                interactive: true,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });
var format_moz_admin0_1 = new ol.format.GeoJSON();
var features_moz_admin0_1 = format_moz_admin0_1.readFeatures(json_moz_admin0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moz_admin0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moz_admin0_1.addFeatures(features_moz_admin0_1);
var lyr_moz_admin0_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moz_admin0_1, 
                style: style_moz_admin0_1,
                popuplayertitle: 'moz_admin0',
                interactive: true,
                title: '<img src="styles/legend/moz_admin0_1.png" /> moz_admin0'
            });
var format_BoundariesMOZADM2_2 = new ol.format.GeoJSON();
var features_BoundariesMOZADM2_2 = format_BoundariesMOZADM2_2.readFeatures(json_BoundariesMOZADM2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundariesMOZADM2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundariesMOZADM2_2.addFeatures(features_BoundariesMOZADM2_2);
var lyr_BoundariesMOZADM2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundariesMOZADM2_2, 
                style: style_BoundariesMOZADM2_2,
                popuplayertitle: 'Boundaries-MOZ-ADM2',
                interactive: true,
    title: 'Boundaries-MOZ-ADM2<br />\
    <img src="styles/legend/BoundariesMOZADM2_2_0.png" /> <br />\
    <img src="styles/legend/BoundariesMOZADM2_2_1.png" /> Affected<br />\
    <img src="styles/legend/BoundariesMOZADM2_2_2.png" /> Most affected<br />\
    <img src="styles/legend/BoundariesMOZADM2_2_3.png" /> <br />' });
var format_BoundariesMOZADM1_3 = new ol.format.GeoJSON();
var features_BoundariesMOZADM1_3 = format_BoundariesMOZADM1_3.readFeatures(json_BoundariesMOZADM1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundariesMOZADM1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundariesMOZADM1_3.addFeatures(features_BoundariesMOZADM1_3);
var lyr_BoundariesMOZADM1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundariesMOZADM1_3, 
                style: style_BoundariesMOZADM1_3,
                popuplayertitle: 'Boundaries-MOZ-ADM1',
                interactive: true,
                title: '<img src="styles/legend/BoundariesMOZADM1_3.png" /> Boundaries-MOZ-ADM1'
            });
var format_tza_admbnda_adm0_20181019_4 = new ol.format.GeoJSON();
var features_tza_admbnda_adm0_20181019_4 = format_tza_admbnda_adm0_20181019_4.readFeatures(json_tza_admbnda_adm0_20181019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tza_admbnda_adm0_20181019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tza_admbnda_adm0_20181019_4.addFeatures(features_tza_admbnda_adm0_20181019_4);
var lyr_tza_admbnda_adm0_20181019_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tza_admbnda_adm0_20181019_4, 
                style: style_tza_admbnda_adm0_20181019_4,
                popuplayertitle: 'tza_admbnda_adm0_20181019',
                interactive: true,
                title: '<img src="styles/legend/tza_admbnda_adm0_20181019_4.png" /> tza_admbnda_adm0_20181019'
            });
var format_tza_admbnda_adm2_20181019_5 = new ol.format.GeoJSON();
var features_tza_admbnda_adm2_20181019_5 = format_tza_admbnda_adm2_20181019_5.readFeatures(json_tza_admbnda_adm2_20181019_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tza_admbnda_adm2_20181019_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tza_admbnda_adm2_20181019_5.addFeatures(features_tza_admbnda_adm2_20181019_5);
var lyr_tza_admbnda_adm2_20181019_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tza_admbnda_adm2_20181019_5, 
                style: style_tza_admbnda_adm2_20181019_5,
                popuplayertitle: 'tza_admbnda_adm2_20181019',
                interactive: true,
                title: '<img src="styles/legend/tza_admbnda_adm2_20181019_5.png" /> tza_admbnda_adm2_20181019'
            });
var format_tza_admbnda_adm1_20181019_6 = new ol.format.GeoJSON();
var features_tza_admbnda_adm1_20181019_6 = format_tza_admbnda_adm1_20181019_6.readFeatures(json_tza_admbnda_adm1_20181019_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tza_admbnda_adm1_20181019_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tza_admbnda_adm1_20181019_6.addFeatures(features_tza_admbnda_adm1_20181019_6);
var lyr_tza_admbnda_adm1_20181019_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tza_admbnda_adm1_20181019_6, 
                style: style_tza_admbnda_adm1_20181019_6,
                popuplayertitle: 'tza_admbnda_adm1_20181019',
                interactive: true,
                title: '<img src="styles/legend/tza_admbnda_adm1_20181019_6.png" /> tza_admbnda_adm1_20181019'
            });
var format_mwi_admin0_7 = new ol.format.GeoJSON();
var features_mwi_admin0_7 = format_mwi_admin0_7.readFeatures(json_mwi_admin0_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mwi_admin0_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mwi_admin0_7.addFeatures(features_mwi_admin0_7);
var lyr_mwi_admin0_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mwi_admin0_7, 
                style: style_mwi_admin0_7,
                popuplayertitle: 'mwi_admin0',
                interactive: true,
                title: '<img src="styles/legend/mwi_admin0_7.png" /> mwi_admin0'
            });
var format_mwi_admin2_em_8 = new ol.format.GeoJSON();
var features_mwi_admin2_em_8 = format_mwi_admin2_em_8.readFeatures(json_mwi_admin2_em_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mwi_admin2_em_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mwi_admin2_em_8.addFeatures(features_mwi_admin2_em_8);
var lyr_mwi_admin2_em_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mwi_admin2_em_8, 
                style: style_mwi_admin2_em_8,
                popuplayertitle: 'mwi_admin2_em',
                interactive: true,
    title: 'mwi_admin2_em<br />\
    <img src="styles/legend/mwi_admin2_em_8_0.png" /> Affected<br />\
    <img src="styles/legend/mwi_admin2_em_8_1.png" /> <br />' });
var format_mwi_admin1_em_9 = new ol.format.GeoJSON();
var features_mwi_admin1_em_9 = format_mwi_admin1_em_9.readFeatures(json_mwi_admin1_em_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mwi_admin1_em_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mwi_admin1_em_9.addFeatures(features_mwi_admin1_em_9);
var lyr_mwi_admin1_em_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mwi_admin1_em_9, 
                style: style_mwi_admin1_em_9,
                popuplayertitle: 'mwi_admin1_em',
                interactive: true,
                title: '<img src="styles/legend/mwi_admin1_em_9.png" /> mwi_admin1_em'
            });
var format_zmb_admin0_10 = new ol.format.GeoJSON();
var features_zmb_admin0_10 = format_zmb_admin0_10.readFeatures(json_zmb_admin0_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zmb_admin0_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zmb_admin0_10.addFeatures(features_zmb_admin0_10);
var lyr_zmb_admin0_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zmb_admin0_10, 
                style: style_zmb_admin0_10,
                popuplayertitle: 'zmb_admin0',
                interactive: true,
                title: '<img src="styles/legend/zmb_admin0_10.png" /> zmb_admin0'
            });
var format_zmb_admin2_11 = new ol.format.GeoJSON();
var features_zmb_admin2_11 = format_zmb_admin2_11.readFeatures(json_zmb_admin2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zmb_admin2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zmb_admin2_11.addFeatures(features_zmb_admin2_11);
var lyr_zmb_admin2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zmb_admin2_11, 
                style: style_zmb_admin2_11,
                popuplayertitle: 'zmb_admin2',
                interactive: true,
    title: 'zmb_admin2<br />\
    <img src="styles/legend/zmb_admin2_11_0.png" /> Affected<br />\
    <img src="styles/legend/zmb_admin2_11_1.png" /> <br />' });
var format_zmb_admin1_12 = new ol.format.GeoJSON();
var features_zmb_admin1_12 = format_zmb_admin1_12.readFeatures(json_zmb_admin1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zmb_admin1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zmb_admin1_12.addFeatures(features_zmb_admin1_12);
var lyr_zmb_admin1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zmb_admin1_12, 
                style: style_zmb_admin1_12,
                popuplayertitle: 'zmb_admin1',
                interactive: true,
                title: '<img src="styles/legend/zmb_admin1_12.png" /> zmb_admin1'
            });
var format_zwe_admin0_13 = new ol.format.GeoJSON();
var features_zwe_admin0_13 = format_zwe_admin0_13.readFeatures(json_zwe_admin0_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zwe_admin0_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zwe_admin0_13.addFeatures(features_zwe_admin0_13);
var lyr_zwe_admin0_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zwe_admin0_13, 
                style: style_zwe_admin0_13,
                popuplayertitle: 'zwe_admin0',
                interactive: true,
                title: '<img src="styles/legend/zwe_admin0_13.png" /> zwe_admin0'
            });
var format_zwe_admin2_14 = new ol.format.GeoJSON();
var features_zwe_admin2_14 = format_zwe_admin2_14.readFeatures(json_zwe_admin2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zwe_admin2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zwe_admin2_14.addFeatures(features_zwe_admin2_14);
var lyr_zwe_admin2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zwe_admin2_14, 
                style: style_zwe_admin2_14,
                popuplayertitle: 'zwe_admin2',
                interactive: true,
                title: '<img src="styles/legend/zwe_admin2_14.png" /> zwe_admin2'
            });
var format_zwe_admin1_15 = new ol.format.GeoJSON();
var features_zwe_admin1_15 = format_zwe_admin1_15.readFeatures(json_zwe_admin1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zwe_admin1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zwe_admin1_15.addFeatures(features_zwe_admin1_15);
var lyr_zwe_admin1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zwe_admin1_15, 
                style: style_zwe_admin1_15,
                popuplayertitle: 'zwe_admin1',
                interactive: true,
                title: '<img src="styles/legend/zwe_admin1_15.png" /> zwe_admin1'
            });
var format_Lakes_16 = new ol.format.GeoJSON();
var features_Lakes_16 = format_Lakes_16.readFeatures(json_Lakes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lakes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lakes_16.addFeatures(features_Lakes_16);
var lyr_Lakes_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lakes_16, 
                style: style_Lakes_16,
                popuplayertitle: 'Lakes',
                interactive: true,
                title: '<img src="styles/legend/Lakes_16.png" /> Lakes'
            });
var format_ForecastTrack_17 = new ol.format.GeoJSON();
var features_ForecastTrack_17 = format_ForecastTrack_17.readFeatures(json_ForecastTrack_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ForecastTrack_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForecastTrack_17.addFeatures(features_ForecastTrack_17);
var lyr_ForecastTrack_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForecastTrack_17, 
                style: style_ForecastTrack_17,
                popuplayertitle: 'Forecast Track',
                interactive: true,
                title: '<img src="styles/legend/ForecastTrack_17.png" /> Forecast Track'
            });
var format_EKHOTO_Track_24Jul_Smooth_18 = new ol.format.GeoJSON();
var features_EKHOTO_Track_24Jul_Smooth_18 = format_EKHOTO_Track_24Jul_Smooth_18.readFeatures(json_EKHOTO_Track_24Jul_Smooth_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EKHOTO_Track_24Jul_Smooth_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EKHOTO_Track_24Jul_Smooth_18.addFeatures(features_EKHOTO_Track_24Jul_Smooth_18);
var lyr_EKHOTO_Track_24Jul_Smooth_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EKHOTO_Track_24Jul_Smooth_18, 
                style: style_EKHOTO_Track_24Jul_Smooth_18,
                popuplayertitle: 'EKHOTO_Track_24Jul_Smooth',
                interactive: true,
                title: '<img src="styles/legend/EKHOTO_Track_24Jul_Smooth_18.png" /> EKHOTO_Track_24Jul_Smooth'
            });
var format_EKHOTO_Path_19 = new ol.format.GeoJSON();
var features_EKHOTO_Path_19 = format_EKHOTO_Path_19.readFeatures(json_EKHOTO_Path_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EKHOTO_Path_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EKHOTO_Path_19.addFeatures(features_EKHOTO_Path_19);
var lyr_EKHOTO_Path_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EKHOTO_Path_19, 
                style: style_EKHOTO_Path_19,
                popuplayertitle: 'EKHOTO_Path',
                interactive: true,
    title: 'EKHOTO_Path<br />\
    <img src="styles/legend/EKHOTO_Path_19_0.png" /> <br />' });
var format_Convexhulls_20 = new ol.format.GeoJSON();
var features_Convexhulls_20 = format_Convexhulls_20.readFeatures(json_Convexhulls_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Convexhulls_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Convexhulls_20.addFeatures(features_Convexhulls_20);
var lyr_Convexhulls_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Convexhulls_20, 
                style: style_Convexhulls_20,
                popuplayertitle: 'Convex hulls',
                interactive: true,
                title: '<img src="styles/legend/Convexhulls_20.png" /> Convex hulls'
            });
var format_EKHOTO_Forecast_24Jul_21 = new ol.format.GeoJSON();
var features_EKHOTO_Forecast_24Jul_21 = format_EKHOTO_Forecast_24Jul_21.readFeatures(json_EKHOTO_Forecast_24Jul_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EKHOTO_Forecast_24Jul_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EKHOTO_Forecast_24Jul_21.addFeatures(features_EKHOTO_Forecast_24Jul_21);
var lyr_EKHOTO_Forecast_24Jul_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EKHOTO_Forecast_24Jul_21, 
                style: style_EKHOTO_Forecast_24Jul_21,
                popuplayertitle: 'EKHOTO_Forecast_24Jul',
                interactive: true,
    title: 'EKHOTO_Forecast_24Jul<br />\
    <img src="styles/legend/EKHOTO_Forecast_24Jul_21_0.png" /> <br />\
    <img src="styles/legend/EKHOTO_Forecast_24Jul_21_1.png" /> <br />\
    <img src="styles/legend/EKHOTO_Forecast_24Jul_21_2.png" /> <br />\
    <img src="styles/legend/EKHOTO_Forecast_24Jul_21_3.png" /> <br />\
    <img src="styles/legend/EKHOTO_Forecast_24Jul_21_4.png" /> <br />\
    <img src="styles/legend/EKHOTO_Forecast_24Jul_21_5.png" /> <br />' });

lyr_WorldMap_0.setVisible(true);lyr_moz_admin0_1.setVisible(true);lyr_BoundariesMOZADM2_2.setVisible(true);lyr_BoundariesMOZADM1_3.setVisible(true);lyr_tza_admbnda_adm0_20181019_4.setVisible(true);lyr_tza_admbnda_adm2_20181019_5.setVisible(true);lyr_tza_admbnda_adm1_20181019_6.setVisible(true);lyr_mwi_admin0_7.setVisible(true);lyr_mwi_admin2_em_8.setVisible(true);lyr_mwi_admin1_em_9.setVisible(true);lyr_zmb_admin0_10.setVisible(true);lyr_zmb_admin2_11.setVisible(true);lyr_zmb_admin1_12.setVisible(true);lyr_zwe_admin0_13.setVisible(true);lyr_zwe_admin2_14.setVisible(true);lyr_zwe_admin1_15.setVisible(true);lyr_Lakes_16.setVisible(true);lyr_ForecastTrack_17.setVisible(true);lyr_EKHOTO_Track_24Jul_Smooth_18.setVisible(true);lyr_EKHOTO_Path_19.setVisible(true);lyr_Convexhulls_20.setVisible(true);lyr_EKHOTO_Forecast_24Jul_21.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_moz_admin0_1,lyr_BoundariesMOZADM2_2,lyr_BoundariesMOZADM1_3,lyr_tza_admbnda_adm0_20181019_4,lyr_tza_admbnda_adm2_20181019_5,lyr_tza_admbnda_adm1_20181019_6,lyr_mwi_admin0_7,lyr_mwi_admin2_em_8,lyr_mwi_admin1_em_9,lyr_zmb_admin0_10,lyr_zmb_admin2_11,lyr_zmb_admin1_12,lyr_zwe_admin0_13,lyr_zwe_admin2_14,lyr_zwe_admin1_15,lyr_Lakes_16,lyr_ForecastTrack_17,lyr_EKHOTO_Track_24Jul_Smooth_18,lyr_EKHOTO_Path_19,lyr_Convexhulls_20,lyr_EKHOTO_Forecast_24Jul_21];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_moz_admin0_1.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'cod_version': 'cod_version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_name1': 'adm0_ref_name1', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_BoundariesMOZADM2_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'status': 'status', });
lyr_BoundariesMOZADM1_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_tza_admbnda_adm0_20181019_4.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'ADM0_SW': 'ADM0_SW', 'ADM0_PCODE': 'ADM0_PCODE', });
lyr_tza_admbnda_adm2_20181019_5.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'ADM0_SW': 'ADM0_SW', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', });
lyr_tza_admbnda_adm1_20181019_6.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'ADM0_SW': 'ADM0_SW', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', });
lyr_mwi_admin0_7.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_mwi_admin2_em_8.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'status': 'status', });
lyr_mwi_admin1_em_9.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_zmb_admin0_10.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_zmb_admin2_11.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'status': 'status', });
lyr_zmb_admin1_12.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_zwe_admin0_13.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_name': 'adm0_ref_name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_zwe_admin2_14.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_name': 'adm2_ref_name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_zwe_admin1_15.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm1_ref_name': 'adm1_ref_name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Lakes_16.set('fieldAliases', {'AF_WTR_ID': 'AF_WTR_ID', 'SQKM': 'SQKM', 'NAME_OF_WA': 'NAME_OF_WA', 'TYPE_OF_WA': 'TYPE_OF_WA', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', });
lyr_ForecastTrack_17.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_EKHOTO_Track_24Jul_Smooth_18.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', });
lyr_EKHOTO_Path_19.set('fieldAliases', {'id': 'id', });
lyr_Convexhulls_20.set('fieldAliases', {'fid': 'fid', 'order_id': 'order_id', 'intensity': 'intensity', 'forecast_h': 'forecast_h', 'buffer_km': 'buffer_km', 'area': 'area', 'perimeter': 'perimeter', });
lyr_EKHOTO_Forecast_24Jul_21.set('fieldAliases', {'order_id': 'order_id', 'intensity': 'intensity', 'forecast_h': 'forecast_h', 'buffer_km': 'buffer_km', });
lyr_WorldMap_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_moz_admin0_1.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'TextEdit', 'cod_version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_name1': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_BoundariesMOZADM2_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'status': 'TextEdit', });
lyr_BoundariesMOZADM1_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_tza_admbnda_adm0_20181019_4.set('fieldImages', {'ADM0_EN': 'TextEdit', 'ADM0_SW': 'TextEdit', 'ADM0_PCODE': 'TextEdit', });
lyr_tza_admbnda_adm2_20181019_5.set('fieldImages', {'ADM0_EN': 'TextEdit', 'ADM0_SW': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', });
lyr_tza_admbnda_adm1_20181019_6.set('fieldImages', {'ADM0_EN': 'TextEdit', 'ADM0_SW': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', });
lyr_mwi_admin0_7.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'TextEdit', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_mwi_admin2_em_8.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'TextEdit', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'status': 'TextEdit', });
lyr_mwi_admin1_em_9.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'TextEdit', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_zmb_admin0_10.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_zmb_admin2_11.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'status': 'TextEdit', });
lyr_zmb_admin1_12.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_zwe_admin0_13.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'TextEdit', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_zwe_admin2_14.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'TextEdit', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_zwe_admin1_15.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'TextEdit', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm1_ref_name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Lakes_16.set('fieldImages', {'AF_WTR_ID': 'TextEdit', 'SQKM': 'TextEdit', 'NAME_OF_WA': 'TextEdit', 'TYPE_OF_WA': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', });
lyr_ForecastTrack_17.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_EKHOTO_Track_24Jul_Smooth_18.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_EKHOTO_Path_19.set('fieldImages', {'id': 'TextEdit', });
lyr_Convexhulls_20.set('fieldImages', {'fid': 'TextEdit', 'order_id': 'TextEdit', 'intensity': 'TextEdit', 'forecast_h': 'TextEdit', 'buffer_km': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_EKHOTO_Forecast_24Jul_21.set('fieldImages', {'order_id': 'TextEdit', 'intensity': 'TextEdit', 'forecast_h': 'TextEdit', 'buffer_km': 'TextEdit', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_moz_admin0_1.set('fieldLabels', {'iso2': 'no label', 'iso3': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'cod_version': 'no label', 'area_sqkm': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm0_ref_name1': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_BoundariesMOZADM2_2.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', 'status': 'no label', });
lyr_BoundariesMOZADM1_3.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_tza_admbnda_adm0_20181019_4.set('fieldLabels', {'ADM0_EN': 'no label', 'ADM0_SW': 'no label', 'ADM0_PCODE': 'no label', });
lyr_tza_admbnda_adm2_20181019_5.set('fieldLabels', {'ADM0_EN': 'no label', 'ADM0_SW': 'no label', 'ADM0_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', });
lyr_tza_admbnda_adm1_20181019_6.set('fieldLabels', {'ADM0_EN': 'no label', 'ADM0_SW': 'no label', 'ADM0_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', });
lyr_mwi_admin0_7.set('fieldLabels', {'iso2': 'no label', 'iso3': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'version': 'no label', 'area_sqkm': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_mwi_admin2_em_8.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'status': 'no label', });
lyr_mwi_admin1_em_9.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_zmb_admin0_10.set('fieldLabels', {'iso2': 'no label', 'iso3': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'version': 'no label', 'area_sqkm': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_zmb_admin2_11.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'status': 'no label', });
lyr_zmb_admin1_12.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_zwe_admin0_13.set('fieldLabels', {'iso2': 'no label', 'iso3': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'version': 'no label', 'area_sqkm': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm0_ref_name': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_zwe_admin2_14.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_name': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_zwe_admin1_15.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm1_ref_name': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Lakes_16.set('fieldLabels', {'AF_WTR_ID': 'no label', 'SQKM': 'no label', 'NAME_OF_WA': 'no label', 'TYPE_OF_WA': 'no label', 'Shape_area': 'no label', 'Shape_len': 'no label', });
lyr_ForecastTrack_17.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_EKHOTO_Track_24Jul_Smooth_18.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_EKHOTO_Path_19.set('fieldLabels', {'id': 'no label', });
lyr_Convexhulls_20.set('fieldLabels', {'fid': 'no label', 'order_id': 'no label', 'intensity': 'no label', 'forecast_h': 'no label', 'buffer_km': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_EKHOTO_Forecast_24Jul_21.set('fieldLabels', {'order_id': 'no label', 'intensity': 'no label', 'forecast_h': 'inline label - visible with data', 'buffer_km': 'no label', });
lyr_EKHOTO_Forecast_24Jul_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});