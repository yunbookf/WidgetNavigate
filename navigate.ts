/**
 * WidgetNavigate
 * Website: http://www.maiyun.net
 * Website: http://hanguoshuai.com
 */

class WidgetNavigate {

    public static version: string = "1.2";

}

// --- 右上角的点击伸缩 ---
$(document).ready(function(): void {
    ModuleTouch.tap(".navbar-wn .collapse-btn-wn", function(e: JQueryEventObject): any {
        let collapseNode: JQuery = $(this).parents(".navbar-wn:eq(0)").find(".collapse-wn");
        $("body").find(".show-wn").not(collapseNode).removeClass("show-wn");
        collapseNode.toggleClass("show-wn");
        e.preventDefault();
        return false;
    });
    ModuleTouch.tap(".navbar-wn .list-menu-wn > .list-item-wn", function(e: JQueryEventObject): any {
        $(this).next().toggleClass("show-wn");
        e.preventDefault();
        return false;
    });
    ModuleTouch.tap("body", function(e: JQueryEventObject): void {
        if ($(e.target).parents(".navbar-wn").length === 0)
            $(this).find(".show-wn").removeClass("show-wn");
    });

});

