---
title: StReport埋点上报
---
# StReport埋点上报

# 使用场景
有数据上报需求的所有项目

## 依赖
```javascript
    <script src="//zhcdn01.xoyo.com/xassets/lib/st-report-sdk/x.x.x/st-report-sdk.js"></script>
```
其中x.x.x是版本号，请询问官网负责对接的同学当前应使用什么版本。

## 使用方法
一般情况下，让西山居运营平台官网组的同学提供一个写有各种埋点实现方法的js文件，直接在引用st-report-sdk.js之后，引入这个统计js文件即可；
```javascript
    <head>
        <script src="//zhcdn01.xoyo.com/xassets/lib/st-report-sdk/0.2.4/st-report-sdk.min.js"></script>
        <script src="./tracker.js" type="text/javascript"></script>
    </head>
```

以下是生成的tracker.js文件的样例，可能会因为版本不同而不同。
特别要注意的是，和官网同学确认这个文件的语法是 es5 还是 es6 的。

```javascript
//初始化stReport时需要的参数
var config = {
  projectIdentifier: 'jx3',
  eventGroup: 'jx3_jiayuan_yuyue_pc_20200417',
  name: '家园预约专题pc端',
  identify: 'jx3',
  eventTags: ['pc','jiayuan'],
  debug: true,
};

//引入stReport
var stReortSdk = new StReportSdk024.getInstance(config);

//创建统计实现对象tracker
var tracker = createTracker(stReortSdk)

function createTracker(stReortSdk) {
  var trakcer = {
    loadPage: function() {
      stReortSdk.report({
        eventName: 'load_page',
        eventDescription: '页面加载(默认上报，页面全部加载完才上报)',
        eventDataValue: {
          td_pl: StReportSdk.getDiffRouteTime()
        },
        types: {
          td_pl: checkTypeHOF('int')
        }
      });
    },
    pageLeave: function() {
      stReortSdk.report({
        eventName: 'page_leave',
        eventDescription: '离开页面(默认上报)',
        eventDataValue: {
          td_pl: StReportSdk.getDiffRouteTime()
        },
        types: {
          td_pl: checkTypeHOF('int')
        }
      });
    },
    loadPageStart: function() {
      stReortSdk.report({
        eventName: 'load_page_start',
        eventDescription: '页面加载(默认上报，进入页面就上报)'
      });
    }
   Number.isInteger =
    Number.isInteger ||
    function(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
  }

  //检测参数类型，参数类型若不符合，则上报失败
  function checkTypeHOF(type) {
        switch (type) {
            case 'int':
            return Number.isInteger;
            case 'float':
            return value => typeof value === 'number' && !Number.isInteger(value);
            case 'boolean':
            return value => typeof value === 'boolean';
            case 'string':
            return value => typeof value === 'string';
            default:
            setTimeout(() => {
                throw new Error('st-report: invalid value type = ' + type);
            }, 0);
            return null;
        }
  }
}
```

具体需要埋点的位置和业务点，也让官网组同学一并提供；一般会是一张图，如 https://static-xsjgw.xoyo.com/data/data/event/77/af/77afe3d6753c785cfadc07b5aff55155?_r=0.3783992622516392&_r=0.1111605430483964

最后，在业务中，调用刚刚创建的 tracker 对象中的各种上报方法实现数据上报即可
```javascript
    $(".btn").on('click',function(){
        tracker.clickxxxx(arg1, arg2, ...argn)
        //业务代码
    })
```
## 数据核对
上报完成后，需要判断这个上报是否成功

方法如下：
打开控制台→选中network→选择image类型→过滤器中输入web? 

失败的请求则表示上报失败。

最后，让官网同学在埋点后台的对应专题中确认所有上报点都成功后，则数据埋点完成啦~。
