var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400, WebGL);
        Laya.stage.bgColor = "#aaaaaa";
    }
    //初始化SeanHtmlString
    GameMain.prototype.initSean = function (htmlContent, confSrc) {
        var html_msg = new SeanHtmlString(htmlContent, confSrc);
        html_msg.pos(0, 100);
        Laya.stage.addChild(html_msg);
    };
    //初始化Laya自带HTMLDivElement
    GameMain.prototype.initLayaHtml = function (htmlContent) {
        var p = new Laya.HTMLDivElement();
        p.pos(20, 10);
        p.width = 500;
        Laya.stage.addChild(p);
        p.innerHTML = htmlContent;
    };
    //初始化Laya自带外部HTMLIframeElement
    GameMain.prototype.initLayaHtmlIframe = function (src) {
        var p = new Laya.HTMLIframeElement();
        p.pos(100, 250);
        Laya.stage.addChild(p);
        p.href = src;
    };
    return GameMain;
}());
var str_html = "<p style='text-indent: 2em;'><strong>用于测</strong><em><strong>试的Ht</strong>ml字符串</em><span style='text-decoration: underline;'>，用于测试的Html</span></p><p><span style='text-decoration: underline;'>字符</span><span style='color: #E36C09;'><span style='text-decoration: underline;'>串，用于测</span>试</span><span style='font-size: 24px;'><span style='color: #E36C09;'>的Htm</span>l字符串，用于测</span></p><p><span style='font-size: 24px;'>试的Html字</span><span style='font-family: 楷体, 楷体_GB2312, SimKai;'><span style='font-size: 24px;'>符串，用于测试</span>的Html字符串</span></p>";
var src_conf = "./conf/libhtml.json";
var src_test_html = "./assets/test.html";
var main = new GameMain();
main.initSean(str_html, src_conf);
main.initLayaHtml(str_html);
main.initLayaHtmlIframe(src_test_html);
//# sourceMappingURL=LayaSample.js.map