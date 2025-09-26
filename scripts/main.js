// 图表颜色配置
const chartColors = {
    blue: '#40a9f3',
    orange: '#ffa850',
    red: '#ff6b6b',
    yellow: '#ffd93d',
    green: '#66d9ef',
    purple: '#bd93f9',
    cyan: '#8be9fd'
};

// 初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    initDeviceClassChart();
    initTrendChart();
    initFailureRateChart();
    initChinaMap();
    initCompletionChart();
    initNavigationTabs();
    startDataUpdate();
});

// 巡检设备分类图表
function initDeviceClassChart() {
    const chart = echarts.init(document.getElementById('deviceClassChart'), 'dark');
    
    const option = {
        backgroundColor: 'transparent',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['气象站', '传感器', '控制器', '网络设备', '电子开关', '感子感器'],
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        series: [{
            name: '已运行',
            type: 'bar',
            stack: 'total',
            data: [80, 120, 100, 90, 110, 95],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: chartColors.blue },
                    { offset: 1, color: 'rgba(64, 169, 243, 0.3)' }
                ])
            },
            barWidth: '60%'
        }, {
            name: '待运行',
            type: 'bar',
            stack: 'total',
            data: [45, 60, 55, 40, 65, 50],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: chartColors.orange },
                    { offset: 1, color: 'rgba(255, 168, 80, 0.3)' }
                ])
            }
        }],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(15, 30, 45, 0.9)',
            borderColor: chartColors.blue,
            textStyle: {
                color: '#ffffff'
            }
        }
    };
    
    chart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 巡检趋势图表
function initTrendChart() {
    const chart = echarts.init(document.getElementById('trendChart'), 'dark');
    
    const option = {
        backgroundColor: 'transparent',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['2021-06', '2021-07', '2021-08', '2021-09', '2021-10'],
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 10
            }
        },
        yAxis: [{
            type: 'value',
            name: '数量',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        }],
        series: [{
            name: '总巡检量',
            type: 'bar',
            data: [90, 110, 100, 95, 120],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: chartColors.blue },
                    { offset: 1, color: 'rgba(64, 169, 243, 0.3)' }
                ])
            },
            barWidth: '50%'
        }, {
            name: '巡检均值',
            type: 'line',
            data: [70, 85, 80, 75, 90],
            itemStyle: {
                color: chartColors.red
            },
            lineStyle: {
                color: chartColors.red,
                width: 2
            },
            symbol: 'circle',
            symbolSize: 6
        }, {
            name: '未完成',
            type: 'line',
            data: [20, 25, 20, 20, 30],
            itemStyle: {
                color: chartColors.yellow
            },
            lineStyle: {
                color: chartColors.yellow,
                width: 2
            },
            symbol: 'circle',
            symbolSize: 6
        }],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(15, 30, 45, 0.9)',
            borderColor: chartColors.blue,
            textStyle: {
                color: '#ffffff'
            }
        }
    };
    
    chart.setOption(option);
    
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 厂家故障率图表
function initFailureRateChart() {
    const chart = echarts.init(document.getElementById('failureRateChart'), 'dark');
    
    const option = {
        backgroundColor: 'transparent',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['02-16', '02-17', '02-18', '02-19', '02-20', '02-19', '02-20'],
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            max: 200,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: 10
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.1)'
                }
            }
        },
        series: [{
            name: '厂家一',
            type: 'line',
            data: [50, 80, 70, 110, 90, 130, 150],
            itemStyle: {
                color: chartColors.blue
            },
            lineStyle: {
                color: chartColors.blue,
                width: 3
            },
            symbol: 'circle',
            symbolSize: 0,
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(64, 169, 243, 0.2)' },
                    { offset: 1, color: 'rgba(64, 169, 243, 0)' }
                ])
            }
        }, {
            name: '厂家二',
            type: 'line',
            data: [30, 60, 90, 70, 120, 110, 160],
            itemStyle: {
                color: chartColors.yellow
            },
            lineStyle: {
                color: chartColors.yellow,
                width: 3
            },
            symbol: 'circle',
            symbolSize: 0,
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(255, 211, 61, 0.2)' },
                    { offset: 1, color: 'rgba(255, 211, 61, 0)' }
                ])
            }
        }],
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(15, 30, 45, 0.9)',
            borderColor: chartColors.blue,
            textStyle: {
                color: '#ffffff'
            }
        }
    };
    
    chart.setOption(option);
    
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 3D中国地图
let chinaMapChart;
let is3DMode = true;
let selectedProvince = null;

// 省份数据
const provinceData = {
    '北京': { devices: 145, online: 132, inspections: 89 },
    '上海': { devices: 98, online: 94, inspections: 76 },
    '天津': { devices: 76, online: 71, inspections: 45 },
    '重庆': { devices: 87, online: 82, inspections: 56 },
    '河北': { devices: 234, online: 221, inspections: 178 },
    '山西': { devices: 156, online: 142, inspections: 98 },
    '内蒙古': { devices: 198, online: 189, inspections: 134 },
    '辽宁': { devices: 187, online: 173, inspections: 123 },
    '吉林': { devices: 134, online: 128, inspections: 89 },
    '黑龙江': { devices: 167, online: 154, inspections: 112 },
    '江苏': { devices: 298, online: 284, inspections: 245 },
    '浙江': { devices: 267, online: 251, inspections: 198 },
    '安徽': { devices: 189, online: 176, inspections: 134 },
    '福建': { devices: 156, online: 148, inspections: 112 },
    '江西': { devices: 143, online: 136, inspections: 98 },
    '山东': { devices: 276, online: 263, inspections: 213 },
    '河南': { devices: 245, online: 232, inspections: 189 },
    '湖北': { devices: 198, online: 187, inspections: 145 },
    '湖南': { devices: 187, online: 176, inspections: 134 },
    '广东': { devices: 356, online: 341, inspections: 289 },
    '广西': { devices: 167, online: 154, inspections: 123 },
    '海南': { devices: 67, online: 63, inspections: 45 },
    '四川': { devices: 234, online: 221, inspections: 176 },
    '贵州': { devices: 123, online: 115, inspections: 87 },
    '云南': { devices: 178, online: 167, inspections: 134 },
    '西藏': { devices: 45, online: 42, inspections: 23 },
    '陕西': { devices: 156, online: 148, inspections: 112 },
    '甘肃': { devices: 134, online: 125, inspections: 89 },
    '青海': { devices: 78, online: 73, inspections: 45 },
    '宁夏': { devices: 67, online: 62, inspections: 34 },
    '新疆': { devices: 189, online: 176, inspections: 123 }
};

function initChinaMap() {
    const mapContainer = document.getElementById('chinaMap');
    mapContainer.classList.add('loading');
    
    try {
        chinaMapChart = echarts.init(mapContainer, 'dark');
        
        // 初始使用2D地图，更稳定
        setTimeout(() => {
            is3DMode = false;
            show2DMap();
            mapContainer.classList.remove('loading');
            console.log('中国地图初始化成功');
        }, 500);
        
    } catch (error) {
        console.error('地图初始化失败:', error);
        mapContainer.innerHTML = `
            <div style="
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100%; 
                color: #ff6b6b; 
                font-size: 16px;
                text-align: center;
                flex-direction: column;
            ">
                <div>地图加载失败</div>
                <div style="font-size: 12px; margin-top: 8px; color: rgba(255,255,255,0.6);">请检查网络连接</div>
            </div>
        `;
        mapContainer.classList.remove('loading');
    }
    
    // 绑定控制按钮事件
    document.getElementById('toggleMapView').addEventListener('click', toggleMapView);
    document.getElementById('resetMapView').addEventListener('click', resetMapView);
    
    window.addEventListener('resize', () => {
        if (chinaMapChart) {
            chinaMapChart.resize();
        }
    });
}

// 显示3D地图
function show3DMap() {
    // 检查是否支持3D
    if (!window.echarts.registerMap || !window.echarts.graphic || !echarts.getInstanceByDom) {
        console.warn('3D地图功能不可用，回退到2D地图');
        show2DMap();
        return;
    }
    
    try {
        const option = {
            backgroundColor: 'transparent',
            geo3D: {
                map: 'china',
                regionHeight: 3,
                shading: 'lambert',
                light: {
                    main: {
                        color: '#40a9f3',
                        intensity: 1.0,
                        shadow: false,
                        alpha: 30,
                        beta: 40
                    },
                    ambient: {
                        color: '#1e3a5f',
                        intensity: 0.4
                    }
                },
                viewControl: {
                    alpha: 30,
                    beta: 0,
                    distance: 180,
                    minAlpha: 5,
                    maxAlpha: 90,
                    minBeta: -80,
                    maxBeta: 80,
                    minDistance: 100,
                    maxDistance: 400,
                    rotateSensitivity: 1,
                    zoomSensitivity: 1,
                    panSensitivity: 1,
                    autoRotate: false
                },
                itemStyle: {
                    color: function(params) {
                        const province = params.name;
                        if (selectedProvince === province) {
                            return '#ffa850';
                        }
                        const data = provinceData[province];
                        if (data) {
                            const ratio = data.online / data.devices;
                            if (ratio > 0.9) return '#40a9f3';
                            if (ratio > 0.8) return '#66d9ef';
                            if (ratio > 0.7) return '#8be9fd';
                            return '#bd93f9';
                        }
                        return '#40a9f3';
                    },
                    opacity: 0.8,
                    borderWidth: 1,
                    borderColor: 'rgba(64, 169, 243, 0.8)'
                },
                emphasis: {
                    itemStyle: {
                        color: '#ffa850',
                        opacity: 1,
                        borderWidth: 2,
                        borderColor: '#ffa850'
                    }
                },
                environment: 'auto'
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(15, 30, 45, 0.9)',
                borderColor: '#40a9f3',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                },
                formatter: function (params) {
                    const data = provinceData[params.name];
                    if (data) {
                        const onlineRate = ((data.online / data.devices) * 100).toFixed(1);
                        return `
                            <div style="padding: 8px;">
                                <div style="font-size: 16px; color: #40a9f3; margin-bottom: 8px;">${params.name}</div>
                                <div>设备总数：<span style="color: #ffa850;">${data.devices}</span></div>
                                <div>在线设备：<span style="color: #66d9ef;">${data.online}</span></div>
                                <div>在线率：<span style="color: #8be9fd;">${onlineRate}%</span></div>
                                <div>巡检次数：<span style="color: #bd93f9;">${data.inspections}</span></div>
                            </div>
                        `;
                    }
                    return params.name;
                }
            }
        };
        
        chinaMapChart.setOption(option, true);
        
        // 绑定点击事件
        chinaMapChart.off('click');
        chinaMapChart.on('click', function (params) {
            if (params.componentType === 'geo3D') {
                selectProvince(params.name);
            }
        });
        
    } catch (error) {
        console.error('3D地图初始化失败:', error);
        // 回退到2D地图
        show2DMap();
    }
}

// 显示2D地图
function show2DMap() {
    const option = {
        backgroundColor: 'transparent',
        geo: {
            map: 'china',
            roam: true,
            zoom: 1.2,
            center: [104.0, 37.5],
            layoutCenter: ['50%', '50%'],
            layoutSize: '80%',
            itemStyle: {
                areaColor: function(params) {
                    if (selectedProvince === params.name) {
                        return '#ffa850';
                    }
                    const data = provinceData[params.name];
                    if (data) {
                        const ratio = data.online / data.devices;
                        if (ratio > 0.9) return '#40a9f3';
                        if (ratio > 0.8) return '#66d9ef';
                        if (ratio > 0.7) return '#8be9fd';
                        return '#bd93f9';
                    }
                    return '#40a9f3';
                },
                borderColor: '#ffffff',
                borderWidth: 1,
                shadowColor: 'rgba(64, 169, 243, 0.3)',
                shadowBlur: 10
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#ffa850',
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    shadowColor: 'rgba(255, 168, 80, 0.8)',
                    shadowBlur: 20
                }
            },
            label: {
                show: false,
                color: '#ffffff',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            }
        },
        series: [{
            type: 'map',
            map: 'china',
            geoIndex: 0,
            data: Object.keys(provinceData).map(name => ({
                name: name,
                value: provinceData[name].devices,
                itemStyle: {
                    areaColor: function() {
                        if (selectedProvince === name) {
                            return '#ffa850';
                        }
                        const data = provinceData[name];
                        if (data) {
                            const ratio = data.online / data.devices;
                            if (ratio > 0.9) return '#40a9f3';
                            if (ratio > 0.8) return '#66d9ef';
                            if (ratio > 0.7) return '#8be9fd';
                            return '#bd93f9';
                        }
                        return '#40a9f3';
                    }
                }
            })),
            // 添加散点图显示设备位置
            markPoint: {
                symbol: 'circle',
                symbolSize: function(val) {
                    return Math.sqrt(val[2]) / 2 + 8;
                },
                itemStyle: {
                    color: '#ffa850',
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    shadowColor: 'rgba(255, 168, 80, 0.8)',
                    shadowBlur: 10
                },
                data: [
                    {name: '北京', coord: [116.46, 39.92]},
                    {name: '上海', coord: [121.48, 31.22]},
                    {name: '广州', coord: [113.23, 23.16]},
                    {name: '深圳', coord: [114.07, 22.62]},
                    {name: '杭州', coord: [120.19, 30.26]},
                    {name: '成都', coord: [104.06, 30.67]},
                    {name: '武汉', coord: [114.31, 30.52]},
                    {name: '西安', coord: [108.95, 34.27]}
                ]
            }
        }],
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(15, 30, 45, 0.95)',
            borderColor: '#40a9f3',
            borderWidth: 1,
            textStyle: {
                color: '#ffffff',
                fontSize: 13
            },
            formatter: function (params) {
                const data = provinceData[params.name];
                if (data) {
                    const onlineRate = ((data.online / data.devices) * 100).toFixed(1);
                    return `
                        <div style="padding: 6px;">
                            <div style="font-size: 14px; color: #40a9f3; margin-bottom: 6px; font-weight: bold;">${params.name}</div>
                            <div style="margin-bottom: 3px;">设备数量: <span style="color: #ffa850;">${data.devices}台</span></div>
                            <div style="margin-bottom: 3px;">在线设备: <span style="color: #66d9ef;">${data.online}台</span></div>
                            <div style="margin-bottom: 3px;">在线率: <span style="color: #8be9fd;">${onlineRate}%</span></div>
                            <div>巡检次数: <span style="color: #bd93f9;">${data.inspections}次</span></div>
                        </div>
                    `;
                }
                return params.name;
            }
        }
    };
    
    chinaMapChart.setOption(option, true);
    
    // 绑定点击事件
    chinaMapChart.off('click');
    chinaMapChart.on('click', function (params) {
        if (params.componentType === 'geo' || params.componentType === 'series') {
            selectProvince(params.name);
        }
    });
}

// 创建渐变纹理
function createGradientTexture() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;
    
    const gradient = ctx.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, 'rgba(64, 169, 243, 0.8)');
    gradient.addColorStop(0.5, 'rgba(102, 217, 239, 0.6)');
    gradient.addColorStop(1, 'rgba(15, 30, 45, 0.4)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    return canvas.toDataURL();
}

// 切换地图模式
function toggleMapView() {
    const toggleBtn = document.getElementById('toggleMapView');
    const mapContainer = document.getElementById('chinaMap');
    
    // 添加加载状态
    mapContainer.classList.add('loading');
    
    setTimeout(() => {
        is3DMode = !is3DMode;
        if (is3DMode) {
            show3DMap();
            toggleBtn.innerHTML = '🗺️';
            toggleBtn.classList.add('active');
        } else {
            show2DMap();
            toggleBtn.innerHTML = '🌍';
            toggleBtn.classList.remove('active');
        }
        mapContainer.classList.remove('loading');
    }, 500);
}

// 重置视角
function resetMapView() {
    if (is3DMode) {
        chinaMapChart.setOption({
            geo3D: {
                viewControl: {
                    alpha: 25,
                    beta: 35,
                    distance: 150
                }
            }
        });
    } else {
        chinaMapChart.setOption({
            geo: {
                center: [104.0, 37.5],
                zoom: 1.2
            }
        });
    }
}

// 选中省份
function selectProvince(provinceName) {
    selectedProvince = provinceName;
    const data = provinceData[provinceName];
    
    if (data) {
        // 显示省份信息面板
        const provinceInfo = document.getElementById('provinceInfo');
        const provinceName_el = document.getElementById('provinceName');
        const provinceDevices = document.getElementById('provinceDevices');
        const provinceOnline = document.getElementById('provinceOnline');
        const provinceInspections = document.getElementById('provinceInspections');
        
        provinceName_el.textContent = provinceName;
        provinceDevices.textContent = data.devices + '台';
        provinceOnline.textContent = data.online + '台';
        provinceInspections.textContent = data.inspections + '次';
        
        provinceInfo.classList.add('active');
        
        // 更新地图颜色
        if (is3DMode) {
            show3DMap();
        } else {
            show2DMap();
        }
        
        // 3秒后隐藏信息面板
        setTimeout(() => {
            provinceInfo.classList.remove('active');
            selectedProvince = null;
            if (is3DMode) {
                show3DMap();
            } else {
                show2DMap();
            }
        }, 3000);
    }
}

// 巡检完成情况环形图
function initCompletionChart() {
    const chart = echarts.init(document.getElementById('completionChart'), 'dark');
    
    const option = {
        backgroundColor: 'transparent',
        series: [{
            name: '完成情况',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 199,
                name: '按时完成',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: chartColors.blue },
                        { offset: 1, color: chartColors.cyan }
                    ])
                }
            }, {
                value: 54,
                name: '未完成',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: chartColors.orange },
                        { offset: 1, color: chartColors.yellow }
                    ])
                }
            }]
        }, {
            // 中心显示总数
            type: 'pie',
            radius: [0, '35%'],
            center: ['50%', '50%'],
            silent: true,
            data: [{
                value: 261,
                itemStyle: {
                    color: 'transparent'
                },
                label: {
                    show: true,
                    position: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: chartColors.blue,
                    formatter: '261'
                }
            }]
        }],
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(15, 30, 45, 0.9)',
            borderColor: chartColors.blue,
            textStyle: {
                color: '#ffffff'
            },
            formatter: '{b}: {c} ({d}%)'
        }
    };
    
    chart.setOption(option);
    
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 导航标签页功能
function initNavigationTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有active类
            tabs.forEach(t => t.classList.remove('active'));
            // 添加active类到当前点击的标签
            this.classList.add('active');
            
            // 这里可以添加切换内容的逻辑
            console.log('切换到:', this.textContent);
        });
    });
}

// 数据更新功能
function startDataUpdate() {
    // 模拟实时数据更新
    setInterval(() => {
        updateStatCards();
        updateRecordsList();
    }, 5000);
}

// 更新统计卡片数据
function updateStatCards() {
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(value => {
        const currentValue = parseInt(value.textContent);
        // 随机增减1-3
        const change = Math.floor(Math.random() * 7) - 3;
        const newValue = Math.max(0, currentValue + change);
        
        // 添加更新动画
        value.style.transform = 'scale(1.1)';
        setTimeout(() => {
            value.textContent = newValue;
            value.style.transform = 'scale(1)';
        }, 200);
    });
}

// 更新记录列表
function updateRecordsList() {
    const recordsList = document.querySelector('.records-list');
    const firstRecord = recordsList.firstElementChild;
    
    // 创建新记录
    const newRecord = createNewRecord();
    
    // 添加淡入动画
    newRecord.style.opacity = '0';
    newRecord.style.transform = 'translateY(-20px)';
    
    recordsList.insertBefore(newRecord, firstRecord);
    
    // 动画显示新记录
    setTimeout(() => {
        newRecord.style.transition = 'all 0.5s ease';
        newRecord.style.opacity = '1';
        newRecord.style.transform = 'translateY(0)';
    }, 100);
    
    // 保持最多5条记录
    if (recordsList.children.length > 5) {
        const lastRecord = recordsList.lastElementChild;
        lastRecord.style.transition = 'all 0.5s ease';
        lastRecord.style.opacity = '0';
        lastRecord.style.transform = 'translateY(20px)';
        setTimeout(() => {
            recordsList.removeChild(lastRecord);
        }, 500);
    }
}

// 创建新记录
function createNewRecord() {
    const records = [
        '【实时监控】智能传感器节点异常检测',
        '【设备维护】网络通信模块升级完成',
        '【数据采集】环境监测站点校准',
        '【系统优化】数据传输速率提升',
        '【安全检查】设备安全状态验证'
    ];
    
    const locations = ['北京站点', '上海中心', '深圳节点', '广州基站', '杭州终端'];
    const operators = ['张工', '李工', '王工', '刘工', '陈工'];
    
    const record = document.createElement('div');
    record.className = 'record-item';
    
    const now = new Date();
    const timeStr = now.getFullYear() + '-' + 
                   String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                   String(now.getDate()).padStart(2, '0');
    
    record.innerHTML = `
        <div class="record-status active"></div>
        <div class="record-content">
            <div class="record-title">${records[Math.floor(Math.random() * records.length)]}</div>
            <div class="record-info">
                <span>操作人：${operators[Math.floor(Math.random() * operators.length)]}</span>
                <span>时间：${timeStr}</span>
            </div>
            <div class="record-location">位置：${locations[Math.floor(Math.random() * locations.length)]}</div>
            <div class="record-time">更新时间：${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}</div>
        </div>
    `;
    
    return record;
}

// 添加统计卡片点击效果
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// 添加图表容器悬停效果
document.querySelectorAll('.chart-container').forEach(container => {
    container.addEventListener('mouseenter', function() {
        this.style.borderColor = 'rgba(64, 169, 243, 0.8)';
        this.style.boxShadow = '0 8px 32px rgba(64, 169, 243, 0.4)';
    });
    
    container.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(64, 169, 243, 0.3)';
        this.style.boxShadow = 'none';
    });
});