  t=dialogs.input("请输入自动刷新的时间，只接受正整数")
  if(t==undefined) t=15//不起作用的方法
inDouyin = (function() {
    if (currentActivity() == "com.ss.android.ugc.aweme.main.MainActivity") {
        return true;
    } else {
        return false;
    }
})();
toast(inDouyin)
//启动抖音
function startDouYin() {
    app.launchPackage(app.getPackageName("抖音短视频"))
}
//线程 2 倒计时
var tip = threads.start(function() {
    //检查是否在抖音界面，否则就打开抖音
    if (currentActivity() != "com.ss.android.ugc.aweme.main.MainActivity") {
        startDouYin()
    }
    //初始化计数器
    m = t;
    i = 0
    setInterval(function() {
        m = m - 1;
        ui.run(function() {
            w.text.setText('还剩' + m + '秒');
        });
        if (m == 0) {

            //上划切换视频
            swipe(700, 1700, 800, 800, 100);
            //次数累计
            i += 1;
            ui.run(function() {
                w.text.setText('已经执行' + i + '次');
            });
            m = t;


        }
//监控是否在抖音界面
        if (currentActivity() != "com.ss.android.ug
