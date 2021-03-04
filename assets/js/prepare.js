(function () {
  window.isMaster = function (indicator) {
    var isMaster = true;
    indicator.forEach(function (i) {
      if (location.href.indexOf(i) > -1) {
        isMaster = false;
      }
    });
    return isMaster;
  }(['test-zt.xoyo.com', 'localhost']);
}());

(function () {
  var StReportSdk = window.StReportSdk;

  var config = {
    projectIdentifier: 'test',
    eventGroup: 'test',
    eventTags: [/*'pc', 'jiayuan'*/],
    debug: true,
  };

  if (config.projectIdentifier === 'test') {
    // noinspection JSUnresolvedVariable
    var url = window.location.href;
    var identify = url.split('.')[0];
    var validIdentifierList = [
      'jx3',
      'jx3yq',
      'daily',
      'js3',
      'js2',
      'zjjh',
      'jxsj2',
      'jx',
      'jx2',
      'zzq',
      'gcg2',
      'cpol',
      'jx3wbl',
      'xoyo',
      'sx'
    ];
    config.projectIdentifier = validIdentifierList.indexOf(identify) > -1 ? identify : 'xishanju_com';
    var matches = url.match(/\/(\w+)\//);
    config.eventTags = matches ? [matches[1]] : [];
    // noinspection SpellCheckingInspection
    config.eventGroup = url
      .replace('.xoyo.com', '')
      .replace(/\/$/, '')
      .replace(/[./-]/g, '_');
  }

  var stReportSdk = new StReportSdk.getInstance(config);

  function createTracker(stReportSdk) {
    var trakcer = {
      loadPage: function () {
        stReportSdk.report({
          eventName: 'load_page',
          eventDescription: '页面加载(默认上报，页面全部加载完才上报)',
          eventDataValue: {
            td_pl: StReportSdk.getDiffRouteTime()
          },
        });
      },
    }
    return trakcer;
  }

  window.tracker = createTracker(stReportSdk);
}());
