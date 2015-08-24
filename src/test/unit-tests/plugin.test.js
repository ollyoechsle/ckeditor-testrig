describe('CKEditor Plugin', function () {

    var editableElement, editorInstance;

    beforeEach(function (startTests) {

        var options = {
            allowedContent: true,
            extraPlugins: 'counter'
        };

        CKEDITOR.basePath = "/base/src/main/webapp/bower_components/ckeditor/";
        CKEDITOR.plugins.addExternal('counter', '/base/src/main/webapp/ckeditor/plugins/counter/');

        editorInstance = CKEDITOR.replace(
            editableElement = CKEDITOR_UTILS.getEditableElement("Here's my plugin: <div class='counter' data-count='42'></div>"),
            options
        );

        /**
         * You cannot start tests until the editor instance returns an instance ready event
         */
        editorInstance.on('instanceReady', startTests);
    });

    it("Should be possible to see the widget's rendered markup", function (done) {

        expect(editorInstance.getSnapshot()).toContain("[[42]]");

    });

    afterEach(CKEDITOR_UTILS.destroyAll);

});