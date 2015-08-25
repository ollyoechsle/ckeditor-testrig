describe('CKEditor Plugin', function () {

    var editableElement, editorInstance, widgetID = "counter1";

    beforeEach(function (startTests) {

        var options = {
            allowedContent: true,
            extraPlugins: 'counter'
        };

        CKEDITOR.basePath = "/base/src/main/webapp/bower_components/ckeditor/";
        CKEDITOR.plugins.addExternal('counter', '/base/src/main/webapp/ckeditor/plugins/counter/');

        editorInstance = CKEDITOR.replace(
            editableElement = CKEDITOR_UTILS.getContentEditable(
                "Here's my plugin: <div class='counter' data-count='42' id='" + widgetID + "'></div>"
            ),
            options
        );

        /**
         * You cannot start tests until the editor instance returns an instance ready event
         */
        editorInstance.on('instanceReady', function () {
            console.log("Instance ready");
            startTests();
        });
    });

    it("Should be possible to see the widget's rendered markup", function () {

        expect(editorInstance.getSnapshot()).toContain("[[42]]");

    });

    it("Should be registered properly", function () {
        expect(editorInstance.widgets.registered["counter"]).toBeDefined();
    });

    it("Should be possible to access the widget instance and call methods on it (not that you should!)", function () {

        var widget = CKEDITOR_UTILS.getWidgetInstance(editorInstance, widgetID);

        expect(widget).not.toBeNull();

        widget._increment();

        expect(editorInstance.getSnapshot()).toContain("[[43]]");

    });

    it("Should be possible to interact with the widget", function () {

        var widget = CKEDITOR_UTILS.getWidgetInstance(editorInstance, widgetID);

        expect(widget.element).toBeDefined();

        expect(editorInstance.getSnapshot()).toContain("[[42]]");

        widget.element.fire("mousemove");

        expect(editorInstance.getSnapshot()).toContain("[[43]]");

    });

    afterEach(CKEDITOR_UTILS.destroyAll);

});