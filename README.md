# WidgetNavigate
方便的创建网站的导航条，支持弹出菜单。  
Easily create Web site navigation, supports pop-up menus.  

```typescript
let wn: WidgetNavigate = new WidgetNavigate("#topNav", {
    width: "800px"
});
wn.addItem({
    text: "Demo page",
    url: "./demo.html"
});
```

可随时修改一些样式：  
Some styles can be modified at any time:  

```typescript
wn.height = 70;
```

## 如果是 SPA 的时候的操作办法 / How SPA

很简单，只要绑定 onClick 事件不指定 url 属性即可：  
Is very simple, only need to bind the onClick event:  

```typescript
wn.addItem({
    text: "AJAX",
    onClick: function(): void{
        // $.ajax({});
    }
});
```

也可以设置鼠标悬浮时弹出菜单：  
Can also be set when mouse popup menu:  

```typescript
wn.addItem({
    text: "Pop menu",
    menu: [{
        text: "first",
        onClick: function(): void {
            alert("the first");
        }
    }, {
        text: "Google.com",
        url: "http://www.google.com"
    }]
});
```

## SEO 以及 DOM 结构 / SEO & DOM
非常简单，在 HTML 代码当中，只需要排列好需要做 SEO 的 a 标签，像下面这样：  
Very simple, in the HTML code, you only need the a tag line needs to do SEO, like this:  

```html
<div id="topNav">
    <a href="http://www.maiyun.net">Maiyun.NET</a>
    <a href="http://www.google.com">Google.COM</a>
</div>
```

在组件被创建之后，其中的 a 标签会被程序自动替换掉，替换后的结构类似下面这样：  
n the component after it has been created, in which a label is automatically replaced, replacement structure similar to the following:  

```html
<div id="topNav">
    <div class="body">
        <a class="icon"></a>
        <div class="nav">
            <a href="./demo.html">
                <span class="text">first</span>
            </a>
            <span class="item">
                <span class="text"></span>
                <div class="menu">
                    <a class="item">menu first</a>
                </div>
            </span>
        </div>
    </div>
</div>
```

## 浏览器兼容 / Compatibility
我们仅兼容现代浏览器，正如我们在演示的时候使用了 jQuery 3.1.0 一样。  
We are only compatible with modern browsers, like we use jQuery 3.1.0.  

## API

```typescript
interface WidgetNavigateInstance {
    dom: JQuery;
    icon: boolean;
    iconUrl: string;
    position: WidgetNavigatePosition;
    height: number;
    width: string;
    selected: number;
    menuOffsetTop: number;

    addItem(o: WidgetNavigateItem): void;
}
```

## 关于 / About
本组件由迈云网络开发开源，欢迎各位PR。  
Powered by Maiyun.net, welcome to pull request.  
http://www.maiyun.net  
  
Translation is provided by Microsoft.