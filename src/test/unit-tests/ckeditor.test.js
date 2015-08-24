describe('CKEditor in Jasmine/Karma Unit Test', function () {

    var editableElement, editorInstance;

    beforeEach(function (startTests) {

        editorInstance = CKEDITOR.replace(editableElement = CKEDITOR_UTILS.getEditableElement());

        /**
         * You cannot start tests until the editor instance returns an instance ready event
         */
        editorInstance.on('instanceReady', startTests);
    });

    it("Should be possible to instantiate the CK Editor inside a test", function () {

        expect(editorInstance).toBeDefined();

        expect(editorInstance.status).toBe("ready");

    });

    afterEach(CKEDITOR_UTILS.destroyAll);

});