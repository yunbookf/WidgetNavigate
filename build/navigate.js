var WidgetNavigate = (function () {
    function WidgetNavigate(d, opts) {
        this._icon = true;
        this._iconUrl = "javascript:void(0);";
        this._position = "absolute";
        this._height = 60;
        this._width = "auto";
        this._selected = -1;
        this._menuOffsetTop = -1;
        var dom = $(d);
        dom.addClass("widgetNavigate position").html("<div class=\"body\"><a class=\"icon\" href=\"javascript:void(0);\" style=\"height: " + this._height + "px;\"></a><div class=\"nav\"></div></div>").css({ "height": this._height.toString() + "px", "position": this._position });
        this.dom = dom;
        if (opts) {
            if (opts.icon !== undefined)
                this.icon = opts.icon;
            if (opts.position !== undefined)
                this.position = opts.position;
            if (opts.height !== undefined)
                this.height = opts.height;
            if (opts.width !== undefined)
                this.width = opts.width;
            if (opts.iconUrl !== undefined)
                this.iconUrl = opts.iconUrl;
        }
    }
    Object.defineProperty(WidgetNavigate.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (val) {
            if (val !== this._icon) {
                this._icon = val;
                if (val) {
                    this.dom.children(".body").prepend("<a class=\"icon\" href=\"javascript:void(0);\" style=\"height: " + this._height + "px;\"></a>");
                }
                else {
                    this.dom.find("> .body > .icon").remove();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetNavigate.prototype, "iconUrl", {
        get: function () {
            return this._iconUrl;
        },
        set: function (val) {
            if (val !== this._iconUrl) {
                this._iconUrl = val;
                if (this._icon)
                    this.dom.find("> .body > .icon").attr("href", val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetNavigate.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (val) {
            if (val !== this._position) {
                this._position = val;
                if (val === "static") {
                    this.dom.removeClass("position");
                }
                else {
                    this.dom.addClass("position");
                }
                this.dom.css({ "position": val });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetNavigate.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            if (val !== this._height) {
                this._height = val;
                this.dom.css({ "height": this._height.toString() + "px" }).find("> .body > .nav > .item").css({ "line-height": this._height.toString() + "px", "height": this._height.toString() + "px" });
                if (this._icon)
                    this.dom.find("> .body > .icon").css({ "height": this._height.toString() + "px" });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetNavigate.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            if (val !== this._width) {
                this._width = val;
                this.dom.children(".body").css({ "max-width": this._width });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetNavigate.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            if (val !== this._selected) {
                this._selected = val;
                this.dom.find("> .body > .nav > .item:eq(" + val + ")").addClass("selected").siblings(".selected").removeClass("selected");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetNavigate.prototype, "menuOffsetTop", {
        get: function () {
            return this._menuOffsetTop;
        },
        set: function (val) {
            if (val !== this._menuOffsetTop) {
                this._menuOffsetTop = val;
                this.dom.find(".menu").css("top", (this._height + val).toString() + "px");
            }
        },
        enumerable: true,
        configurable: true
    });
    WidgetNavigate.prototype.addItem = function (o) {
        var item;
        if (o.menu && o.menu.length > 0) {
            item = $("<span class=\"item\"><span class=\"text\"></span></span>");
            var m = $("<div class=\"menu\"></div>");
            m.css("top", (this._height + this._menuOffsetTop).toString() + "px");
            item.append(m);
            for (var _i = 0, _a = o.menu; _i < _a.length; _i++) {
                var menu = _a[_i];
                var menuItem = $("<a class=\"item\">" + menu.text + "</a>");
                m.append(menuItem);
                if (menu.url !== undefined)
                    menuItem.attr("href", menu.url);
                if (menu.onClick !== undefined)
                    menuItem.on("click", menu.onClick);
            }
        }
        else {
            item = $("<a class=\"item\"><span class=\"text\"></span></a>");
            if (o.url)
                item.attr("href", o.url);
        }
        if (o.onClick !== undefined)
            item.on("click", o.onClick);
        item.css({ "line-height": this._height.toString() + "px", "height": this._height.toString() + "px" }).children(".text").text(o.text);
        this.dom.find("> .body > .nav").append(item);
    };
    WidgetNavigate.verison = "0.1";
    return WidgetNavigate;
}());
$("head").prepend("<style>\n.widgetNavigate{border-bottom: 1px solid #ff9000; box-sizing: border-box; font-size: 14px;}\n.widgetNavigate.position{left: 0; top: 0; width: 100%;}\n.widgetNavigate a{text-decoration: none;}\n.widgetNavigate > .body{margin: auto;}\n.widgetNavigate .icon{display: inline-block; background-repeat: no-repeat; background-position: left center;}\n.widgetNavigate .nav{float: right;}\n.widgetNavigate .nav > .item{display: inline-block; padding: 0 25px; color: #666; border-bottom: 3px solid transparent; box-sizing: border-box; position: relative;}\n.widgetNavigate .nav > .item:hover{border-bottom-color: #ff9000; color: #ff9000;}\n.widgetNavigate .nav > span.item{cursor: default;}\n.widgetNavigate .nav > a.item{cursor: pointer;}\n.widgetNavigate .nav > span.item:hover > .menu{display: block;}\n.widgetNavigate .nav > .selected{border-bottom-color: #ff9000; color: #ff9000; background-color: rgba(0, 0, 0, .03);}\n.widgetNavigate .menu{position: absolute; left: 0; border: solid 1px #ff9000; background-color: rgba(255,255,255,.95); line-height: 1.5; min-width: 120px; padding: 1px; display: none; box-sizing: border-box; z-index: 1000;}\n.widgetNavigate .menu > span.item{cursor: default;}\n.widgetNavigate .menu > a.item{cursor: pointer;}\n.widgetNavigate .menu > .item{display: block; padding: 10px; color: #666; white-space: nowrap;}\n.widgetNavigate .menu > .item:hover{background-color: #ff9000; color: #FFF;}\n\n@media (max-width: 700px) {\n    .widgetNavigate .icon{margin-left: 10px;}\n    .widgetNavigate .menu{left: initial; right: 0;}\n}\n</style>");
//# sourceMappingURL=navigate.js.map