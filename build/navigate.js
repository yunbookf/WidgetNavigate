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
                this.dom.children(".body").css({ "width": this._width });
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
//# sourceMappingURL=navigate.js.map