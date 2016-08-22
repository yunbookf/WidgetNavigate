/**
 * WidgetNavigate
 * Website: http://www.maiyun.net
 */
class WidgetNavigate {

    public dom: JQuery;
    public static verison: string = "0.1";

    // --- 是否显示图标 ---
    private _icon: boolean = true;
    get icon(): boolean {
        return this._icon;
    }
    set icon(val: boolean) {
        if (val !== this._icon) {
            this._icon = val;
            if (val) {
                this.dom.children(".body").prepend(`<a class="icon" href="javascript:void(0);" style="height: ${this._height}px;"></a>`);
            } else {
                this.dom.find("> .body > .icon").remove();
            }
        }
    }

    // --- 图标点击的网址 ---
    private _iconUrl: string = "javascript:void(0);";
    get iconUrl(): string {
        return this._iconUrl;
    }
    set iconUrl(val: string) {
        if (val !== this._iconUrl) {
            this._iconUrl = val;
            if (this._icon)
                this.dom.find("> .body > .icon").attr("href", val);
        }
    }

    // --- 导航条是否浮动 ---
    private _position: WidgetNavigatePosition = "absolute";
    get position(): WidgetNavigatePosition {
        return this._position;
    }
    set position(val: WidgetNavigatePosition) {
        if (val !== this._position) {
            this._position = val;
            if (val === "static") {
                this.dom.removeClass("position");
            } else {
                this.dom.addClass("position");
            }
            this.dom.css({"position": val});
        }
    }

    // --- 高度 ---
    private _height: number = 60;
    get height(): number {
        return this._height;
    }
    set height(val: number) {
        if (val !== this._height) {
            this._height = val;
            this.dom.css({"height": this._height.toString() + "px"}).find("> .body > .nav > .item").css({"line-height": this._height.toString() + "px", "height": this._height.toString() + "px"});
            if (this._icon)
                this.dom.find("> .body > .icon").css({"height": this._height.toString() + "px"});
        }
    }

    // --- 内 body 宽度 ---
    private _width: string = "auto";
    get width(): string {
        return this._width;
    }
    set width(val: string) {
        if (val !== this._width) {
            this._width = val;
            this.dom.children(".body").css({"width": this._width});
        }
    }

    // --- 选中 ---
    private _selected: number = -1;
    get selected(): number {
        return this._selected;
    }
    set selected(val: number) {
        if (val !== this._selected) {
            this._selected = val;
            this.dom.find(`> .body > .nav > .item:eq(${val})`).addClass("selected").siblings(".selected").removeClass("selected");

        }
    }

    // --- menu 偏移 ---
    private _menuOffsetTop: number = -1;
    get menuOffsetTop(): number {
        return this._menuOffsetTop;
    }
    set menuOffsetTop(val: number) {
        if (val !== this._menuOffsetTop) {
            this._menuOffsetTop = val;
            this.dom.find(".menu").css("top", (this._height + val).toString() + "px");
        }
    }

    // --- 析构 ---
    constructor(d: any, opts?: WidgetNavigateOptions) {
        let dom: JQuery = $(d);
        dom.addClass("widgetNavigate position").html(`<div class="body"><a class="icon" href="javascript:void(0);" style="height: ${this._height}px;"></a><div class="nav"></div></div>`).css({"height": this._height.toString() + "px", "position": this._position});
        this.dom = dom;
        // --- 预设 ---
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

    // --- 方法 ---
    public addItem(o: WidgetNavigateItem): void {
        let item: JQuery;
        if (o.menu && o.menu.length > 0) {
            item = $(`<span class="item"><span class="text"></span></span>`);
            let m: JQuery = $(`<div class="menu"></div>`);
            m.css("top", (this._height + this._menuOffsetTop).toString() + "px");
            item.append(m);
            for (let menu of o.menu) {
                let menuItem: JQuery = $(`<a class="item">${menu.text}</a>`);
                m.append(menuItem);
                if (menu.url !== undefined)
                    menuItem.attr("href", menu.url);
                if (menu.onClick !== undefined)
                    menuItem.on("click", menu.onClick);
            }
        } else {
            item = $(`<a class="item"><span class="text"></span></a>`);
            if (o.url)
                item.attr("href", o.url);
        }
        // --- 绑定点击事件 ---
        if (o.onClick !== undefined)
            item.on("click", o.onClick);
        // --- 设置 CSS 样式 ---
        item.css({"line-height": this._height.toString() + "px", "height": this._height.toString() + "px"}).children(".text").text(o.text);
        this.dom.find("> .body > .nav").append(item);
    }

}

