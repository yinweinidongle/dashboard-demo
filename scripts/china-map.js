// 简化的中国地图GeoJSON数据
const chinaMapData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "北京" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[116.0, 39.5], [117.0, 39.5], [117.0, 40.5], [116.0, 40.5], [116.0, 39.5]]]
      }
    },
    {
      "type": "Feature", 
      "properties": { "name": "上海" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[121.0, 30.8], [122.0, 30.8], [122.0, 31.8], [121.0, 31.8], [121.0, 30.8]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "天津" },
      "geometry": {
        "type": "Polygon", 
        "coordinates": [[[116.8, 38.8], [118.2, 38.8], [118.2, 40.2], [116.8, 40.2], [116.8, 38.8]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "重庆" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[105.5, 28.5], [110.5, 28.5], [110.5, 32.5], [105.5, 32.5], [105.5, 28.5]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "河北" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[113.5, 36.0], [119.8, 36.0], [119.8, 42.6], [113.5, 42.6], [113.5, 36.0]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "山西" },
      "geometry": {
        "type": "Polygon", 
        "coordinates": [[[110.2, 34.5], [114.6, 34.5], [114.6, 40.7], [110.2, 40.7], [110.2, 34.5]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "内蒙古" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[97.2, 37.2], [126.0, 37.2], [126.0, 53.3], [97.2, 53.3], [97.2, 37.2]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "辽宁" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[118.8, 38.7], [125.3, 38.7], [125.3, 43.4], [118.8, 43.4], [118.8, 38.7]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "吉林" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[121.6, 40.9], [131.2, 40.9], [131.2, 46.3], [121.6, 46.3], [121.6, 40.9]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "黑龙江" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[121.2, 43.8], [135.1, 43.8], [135.1, 53.6], [121.2, 53.6], [121.2, 43.8]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "江苏" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[116.4, 30.8], [121.9, 30.8], [121.9, 35.1], [116.4, 35.1], [116.4, 30.8]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "浙江" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[118.0, 27.1], [123.2, 27.1], [123.2, 31.6], [118.0, 31.6], [118.0, 27.1]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "安徽" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[114.9, 29.4], [119.3, 29.4], [119.3, 34.7], [114.9, 34.7], [114.9, 29.4]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "福建" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[115.8, 23.5], [120.7, 23.5], [120.7, 28.3], [115.8, 28.3], [115.8, 23.5]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "江西" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[113.6, 24.5], [118.5, 24.5], [118.5, 30.1], [113.6, 30.1], [113.6, 24.5]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "山东" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[114.8, 34.4], [122.7, 34.4], [122.7, 38.4], [114.8, 38.4], [114.8, 34.4]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "河南" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[110.4, 31.4], [116.6, 31.4], [116.6, 36.4], [110.4, 36.4], [110.4, 31.4]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "湖北" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[108.3, 29.0], [116.1, 29.0], [116.1, 33.3], [108.3, 33.3], [108.3, 29.0]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "湖南" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[108.8, 24.6], [114.3, 24.6], [114.3, 30.1], [108.8, 30.1], [108.8, 24.6]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "广东" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[109.7, 20.2], [117.2, 20.2], [117.2, 25.5], [109.7, 25.5], [109.7, 20.2]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "广西" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[104.3, 20.9], [112.1, 20.9], [112.1, 26.4], [104.3, 26.4], [104.3, 20.9]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "海南" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[108.6, 18.0], [111.0, 18.0], [111.0, 20.1], [108.6, 20.1], [108.6, 18.0]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "四川" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[97.3, 26.0], [108.5, 26.0], [108.5, 34.3], [97.3, 34.3], [97.3, 26.0]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "贵州" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[103.6, 24.6], [109.6, 24.6], [109.6, 29.2], [103.6, 29.2], [103.6, 24.6]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "云南" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[97.5, 21.1], [106.2, 21.1], [106.2, 29.2], [97.5, 29.2], [97.5, 21.1]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "西藏" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[78.4, 26.8], [99.1, 26.8], [99.1, 36.5], [78.4, 36.5], [78.4, 26.8]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "陕西" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[105.5, 31.4], [111.3, 31.4], [111.3, 39.6], [105.5, 39.6], [105.5, 31.4]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "甘肃" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[92.3, 32.1], [108.7, 32.1], [108.7, 42.8], [92.3, 42.8], [92.3, 32.1]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "青海" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[89.4, 31.6], [103.1, 31.6], [103.1, 39.2], [89.4, 39.2], [89.4, 31.6]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "宁夏" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[104.2, 35.2], [107.6, 35.2], [107.6, 39.4], [104.2, 39.4], [104.2, 35.2]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "name": "新疆" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[73.5, 34.3], [96.4, 34.3], [96.4, 49.2], [73.5, 49.2], [73.5, 34.3]]]
      }
    }
  ]
};

// 注册地图
if (typeof echarts !== 'undefined' && echarts.registerMap) {
  echarts.registerMap('china', chinaMapData);
}