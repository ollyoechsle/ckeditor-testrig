describe('CKEditor Inline', function () {

    var editableElement, editorInstance;

    beforeEach(function (startTests) {

        editorInstance = CKEDITOR.inline(
            editableElement = CKEDITOR_UTILS.getContentEditable()
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


    xit("Should be able to manipulate the HTML inside the editable", function () {

        // TODO: This test currently fails because there is no valid selection

        // var selection = editorInstance.getSelection();
        // selection.selectElement(editableElement);
        // var range = editorInstance.createRange();
        // range.setStartAfter( editableElement );
        // range.collapse( true );

        editorInstance.insertHtml("Hello, World");

        expect(editorInstance.getData()).toContain("Hello, World");

    });

    it("Should be possible for frameworks listening on the 'change' event to stay updated", function () {

        var MockFramework = function() {
            var self = this;
            self.modelValue = "";
            self.init = function(editorInstance) {
                editorInstance.on('change', function() {
                    self.modelValue = editorInstance.getData();
                })
            };
        };

        var framework = new MockFramework();

        framework.init(editorInstance);

        // TODO: For the same reason as above, insertHtml() does not work
        editorInstance.setData("Hello, World");

        expect(framework.modelValue).toContain("<p>Hello, World</p>");

    });

    afterEach(CKEDITOR_UTILS.destroyAll);

});