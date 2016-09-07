/**
 * WidgetNavigate
 * Website: http://www.maiyun.net
 * Website: http://hanguoshuai.com
 */

class WidgetNavigate {

    public static version: string = "1.0";

}

// --- 右上角的点击伸缩 ---
$(document).ready(function(): void {
    ModuleTouch.tap(".navbar-wn .collapse-btn-wn", function(): void {
        let collapseNode: JQuery = $(this).parents(".navbar-wn:eq(0)").find(".collapse-wn");
        $("body").find(".show-wn").not(collapseNode).removeClass("show-wn");
        collapseNode.toggleClass("show-wn");
    });
    ModuleTouch.tap(".navbar-wn .list-menu-wn > .list-item-wn", function(e: JQueryEventObject): void {
        $(this).next().toggleClass("show-wn");
        e.preventDefault();
    });
    ModuleTouch.tap("body", function(e: JQueryEventObject): void {
        if ($(e.target).parents(".navbar-wn").length === 0)
            $(this).find(".show-wn").removeClass("show-wn");
    });
    $("head").prepend(`<style>
.navbar-wn{background-color: #f8f8f8; border-bottom: 1px solid #e7e7e7; color: #333; z-index: 1000;}
.navbar-wn *{box-sizing: border-box;}
.navbar-wn a{color: #333; text-decoration: none;}
.navbar-wn img{vertical-align: top;}
.navbar-wn .caret-wn{display: inline-block; width: 0; height: 0; margin-left: 4px; vertical-align: middle; border-top: 4px solid; border-right: 4px solid transparent; border-left: 4px solid transparent;}
.navbar-wn.position-wn{position: absolute; left: 0; top: 0; width: 100%;}

.navbar-wn .content-wn{margin: auto; display: flex; display: -webkit-box;}
.navbar-wn .collapse-wn{flex: 1; -webkit-box-flex: 1; width: 0; display: flex; display: -webkit-box;}
.navbar-wn .collapse-wn.right-wn{justify-content: flex-end; -webkit-box-pack: end;}
.navbar-wn .header-right-wn{flex: 1; display: flex; -webkit-box-flex: 1; display: -webkit-box; align-items: center; -webkit-box-align: center; justify-content: flex-end; -webkit-box-pack: end; width: 0;}
.navbar-wn .header-wn{display: flex; display: -webkit-box;}
.navbar-wn .header-wn > a, .navbar-wn .header-wn > span{padding: 10px; display: block;}
.navbar-wn .collapse-btn-wn{border: 1px solid #ddd; padding: 9px 10px; margin-right: 15px; border-radius: 4px; height: auto; display: none;}
.navbar-wn .collapse-btn-wn.hover{background-color: #e7e7e7;}
.navbar-wn .collapse-btn-wn .bar-wn{height: 2px; background-color: #888; width: 22px; border-radius: 1px; margin-top: 4px;}
.navbar-wn .collapse-btn-wn .bar-wn:first-child{margin-top: 0;}

.navbar-wn .list-wn{display: flex; display: -webkit-box;}
.navbar-wn .list-item-wn{display: flex; display: -webkit-box; align-items: center; -webkit-box-align: center; padding: 10px 20px; position: relative; cursor: pointer;}
.navbar-wn .list-item-wn:hover, .navbar-wn .list-item-wn.hover{background-color: #e7e7e7;}
.navbar-wn .list-menu-wn{display: flex; display: -webkit-box; position: relative;}

.navbar-wn .menu-wn{position: absolute; left: 0; top: 100%; background-color: #f8f8f8; border: 1px solid #e7e7e7; display: none;}
.navbar-wn .menu-wn.show-wn{display: block;}
.navbar-wn .menu-item-wn{padding: 10px 60px 10px 10px; white-space: nowrap; cursor: pointer; display: block;}
.navbar-wn .menu-item-wn:hover{background-color: #e7e7e7;}
.navbar-wn .list-wn > div:last-child > .menu-wn{left: initial; right: 0;}

@media (max-width: 800px) {
    .navbar-wn{border-bottom: none;}
    .navbar-wn .content-wn{flex-direction: row; -webkit-box-orient: vertical;}
    .navbar-wn .collapse-btn-wn{display: block;}
    .navbar-wn .collapse-wn{width: auto; display: none;}
    .navbar-wn .collapse-wn.show-wn{display: block;}
    .navbar-wn .header-wn, .navbar-wn .collapse-wn{border-bottom: 1px solid #e7e7e7;}

    .navbar-wn .list-wn, .navbar-wn .list-menu-wn{flex-direction: row; -webkit-box-orient: vertical;}
    .navbar-wn .list-item-wn{padding: 20px;}

    .navbar-wn .menu-wn{position: initial; top: 100%; border: 1px solid #e7e7e7; border: none;}
    .navbar-wn .menu-item-wn{padding: 20px 20px 20px 60px;}
}
</style>`);

});

