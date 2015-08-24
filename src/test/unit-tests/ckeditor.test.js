describe('CKEditor in Jasmine/Karma Unit Test', function () {

    var editableElement, editorInstance;

    beforeEach(function (startTests) {

        editorInstance = CKEDITOR.replace(
            editableElement = CKEDITOR_UTILS.getEditableElement()
        );

        /**
         * You cannot start tests until the editor instance returns an instance ready event
         */
        editorInstance.on('instanceReady', startTests);
    });

    it("Should be possible to instantiate the CK Editor and get to the ready state", function () {

        expect(editorInstance).toBeDefined();

        expect(editorInstance.status).toBe("ready");

    });


    it("Should be able to manipulate the HTML inside the editable", function (done) {

        editorInstance.insertHtml("Hello, World");

        /**
         * CKEDITOR's amendments to the markup using insertHtml take place in a different
         * execution scope, so we cannot run our assertions right away.
         */
        setTimeout(function () {

            done();

            expect(jQuery(editableElement).text()).toContain("Hello, World");

        });

    });

    afterEach(CKEDITOR_UTILS.destroyAll);

});