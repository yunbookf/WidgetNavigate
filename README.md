# WidgetNavigate
方便的创建网站的导航条，支持弹出菜单。  
Easily create Web site navigation, supports pop-up menus.  
  
自动自适应手机和PC，菜单会自动缩放到右上角的一个按钮。  
Automatic Adaptive Mobile and PC, the menu will automatically zoom into the top right corner of a button.  
  
本项目依赖 ModuleTouch，需要在引用 navigate.min.js、navigate.min.css 的同时引用 touch.min.js v0.4+。  
This project has a dependency on ModuleTouch, you need to reference navigate.min.js reference touch.min.js v0.4+.  
  
[ModuleTouch on Github](https://github.com/yunbookf/ModuleTouch)
  
之后需要在网页上创建 HTML 模板，类似如下：  
Then need to create HTML on the Web page template, similar to the following:  

```html
<div class="navbar-wn position-wn">
    <div class="content-wn">
        <div class="header-wn">
            <a href="javascript:void(0);"><img src="logo.jpg" width="60" height="45"></a>
            <div class="header-right-wn">
                <div class="collapse-btn-wn">
                    <div class="bar-wn"></div>
                    <div class="bar-wn"></div>
                    <div class="bar-wn"></div>
                </div>
            </div>
        </div>
        <div class="collapse-wn right-wn">
            <div class="list-wn">
                <a class="list-item-wn" href="./demo.html">index</a>
                <a class="list-item-wn" href="http://hanguoshuai.com" target="_blank">HGS's blog</a>
                <a class="list-item-wn" href="http://www.maiyun.net" target="_blank">Maiyun.NET</a>
                <div class="list-menu-wn">
                    <span class="list-item-wn">Pop menu<span class="caret-wn"></span></span>
                    <div class="menu-wn">
                        <a class="menu-item-wn" href="javascript:void(0);">one</a>
                        <a class="menu-item-wn" href="javascript:void(0);">two</a>
                        <a class="menu-item-wn" href="javascript:void(0);">three</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```
  
## API
  
与 navbar-wn 并列的 position-wn 可省略，则表示导航条不浮动。  
与 collapse-wn 并列的 right-wn 可省略，则表示菜单居左而不是居右。  
header-right-wn 所在的 DOM 不可省略，代表着手机浏览的时候右上角的菜单按钮。  
再引用 JS 文件后，系统会自动创建默认的 CSS，您可以引用您自己写的 CSS 来覆盖默认样式，参见 demo.html。  
  
And navbar-wn tie position-wn can be omitted, it means that the navigation bar is not floating.  
And collapse-Wn tie right-Wn can be omitted, it means that the menu left instead of right.  
header-right-wn DOM is not omitted, represents mobile phone browsing when on the upper right corner of the menu button.  
After you reference the JS file, the system will automatically create the default CSS, you can reference your own CSS to override default styles, see demo.html.  
  
## 浏览器兼容 / Compatibility
我们仅兼容现代浏览器，正如我们在演示的时候使用了 jQuery 3.1.0 一样。  
We are only compatible with modern browsers, like we use jQuery 3.1.0.  

## 关于 0.1 的升级 / About 0.1 upgrades
0.1 版本不可平滑升级，因为代码已经完全重写。  
Version 0.1 is not a smooth upgrade, since the code has been completely rewritten.  
  
## 关于 / About
本组件由韩国帅开发开源，欢迎各位PR。  
Powered by hanguoshuai.com, welcome to pull request.  
http://hanguoshuai.com  
  
Translation is provided by Microsoft.

## 更新日志 / ChangeLog

### v1.2 - 2016-09-18
[CHANGE]JS 文件与 CSS 内容分离，这样 JS 可以异步加载也能使界面的 UI 效果保证不闪烁。  
[UPDATE]ModuleTouch 的支持更新到 0.4+，解决了页面滚动的时候导航条消失的 BUG。  