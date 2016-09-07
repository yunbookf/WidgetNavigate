var WidgetNavigate = (function () {
    function WidgetNavigate() {
    }
    WidgetNavigate.version = "1.1";
    return WidgetNavigate;
}());
$(document).ready(function () {
    ModuleTouch.tap(".navbar-wn .collapse-btn-wn", function () {
        var collapseNode = $(this).parents(".navbar-wn:eq(0)").find(".collapse-wn");
        $("body").find(".show-wn").not(collapseNode).removeClass("show-wn");
        collapseNode.toggleClass("show-wn");
    });
    ModuleTouch.tap(".navbar-wn .list-menu-wn > .list-item-wn", function (e) {
        $(this).next().toggleClass("show-wn");
        e.preventDefault();
    });
    ModuleTouch.tap("body", function (e) {
        if ($(e.target).parents(".navbar-wn").length === 0)
            $(this).find(".show-wn").removeClass("show-wn");
    });
});
$("head").prepend("<style>\n.navbar-wn{background-color: #f8f8f8; border-bottom: 1px solid #e7e7e7; color: #333; z-index: 1000;}\n.navbar-wn *{box-sizing: border-box;}\n.navbar-wn a{color: #333; text-decoration: none;}\n.navbar-wn img{vertical-align: top;}\n.navbar-wn .caret-wn{display: inline-block; width: 0; height: 0; margin-left: 4px; vertical-align: middle; border-top: 4px solid; border-right: 4px solid transparent; border-left: 4px solid transparent;}\n.navbar-wn.position-wn{position: absolute; left: 0; top: 0; width: 100%;}\n\n.navbar-wn .content-wn{margin: auto; display: flex; display: -webkit-box;}\n.navbar-wn .collapse-wn{flex: 1; -webkit-box-flex: 1; width: 0; display: flex; display: -webkit-box;}\n.navbar-wn .collapse-wn.right-wn{justify-content: flex-end; -webkit-box-pack: end;}\n.navbar-wn .header-right-wn{flex: 1; display: flex; -webkit-box-flex: 1; display: -webkit-box; align-items: center; -webkit-box-align: center; justify-content: flex-end; -webkit-box-pack: end; width: 0;}\n.navbar-wn .header-wn{display: flex; display: -webkit-box;}\n.navbar-wn .header-wn > a, .navbar-wn .header-wn > span{padding: 10px; display: block;}\n.navbar-wn .collapse-btn-wn{border: 1px solid #ddd; padding: 9px 10px; margin-right: 15px; border-radius: 4px; height: auto; display: none;}\n.navbar-wn .collapse-btn-wn.hover-mt{background-color: #e7e7e7;}\n.navbar-wn .collapse-btn-wn .bar-wn{height: 2px; background-color: #888; width: 22px; border-radius: 1px; margin-top: 4px;}\n.navbar-wn .collapse-btn-wn .bar-wn:first-child{margin-top: 0;}\n\n.navbar-wn .list-wn{display: flex; display: -webkit-box;}\n.navbar-wn .list-item-wn{display: flex; display: -webkit-box; align-items: center; -webkit-box-align: center; padding: 10px 20px; position: relative; cursor: pointer;}\n.navbar-wn .list-item-wn:hover, .navbar-wn .list-item-wn.hover-mt{background-color: #e7e7e7;}\n.navbar-wn .list-menu-wn{display: flex; display: -webkit-box; position: relative;}\n\n.navbar-wn .menu-wn{position: absolute; left: 0; top: 100%; background-color: #f8f8f8; border: 1px solid #e7e7e7; display: none;}\n.navbar-wn .menu-wn.show-wn{display: block;}\n.navbar-wn .menu-item-wn{padding: 10px 60px 10px 10px; white-space: nowrap; cursor: pointer; display: block;}\n.navbar-wn .menu-item-wn:hover{background-color: #e7e7e7;}\n.navbar-wn .list-wn > div:last-child > .menu-wn{left: initial; right: 0;}\n\n@media (max-width: 800px) {\n    .navbar-wn{border-bottom: none;}\n    .navbar-wn .content-wn{flex-direction: row; -webkit-box-orient: vertical;}\n    .navbar-wn .collapse-btn-wn{display: block;}\n    .navbar-wn .collapse-wn{width: auto; display: none;}\n    .navbar-wn .collapse-wn.show-wn{display: block;}\n    .navbar-wn .header-wn, .navbar-wn .collapse-wn{border-bottom: 1px solid #e7e7e7;}\n\n    .navbar-wn .list-wn, .navbar-wn .list-menu-wn{flex-direction: row; -webkit-box-orient: vertical;}\n    .navbar-wn .list-item-wn{padding: 20px;}\n\n    .navbar-wn .menu-wn{position: initial; top: 100%; border: 1px solid #e7e7e7; border: none;}\n    .navbar-wn .menu-item-wn{padding: 20px 20px 20px 60px;}\n}\n</style>");
//# sourceMappingURL=navigate.js.map