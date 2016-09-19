var WidgetNavigate = (function () {
    function WidgetNavigate() {
    }
    WidgetNavigate.version = "1.2";
    return WidgetNavigate;
}());
$(document).ready(function () {
    ModuleTouch.tap(".navbar-wn .collapse-btn-wn", function (e) {
        var collapseNode = $(this).parents(".navbar-wn:eq(0)").find(".collapse-wn");
        $("body").find(".show-wn").not(collapseNode).removeClass("show-wn");
        collapseNode.toggleClass("show-wn");
        e.preventDefault();
        return false;
    });
    ModuleTouch.tap(".navbar-wn .list-menu-wn > .list-item-wn", function (e) {
        $(this).next().toggleClass("show-wn");
        e.preventDefault();
        return false;
    });
    ModuleTouch.tap("body", function (e) {
        if ($(e.target).parents(".navbar-wn").length === 0)
            $(this).find(".show-wn").removeClass("show-wn");
    });
});
//# sourceMappingURL=navigate.js.map