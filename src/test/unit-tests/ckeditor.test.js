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


    it("Should be able to manipulate the HTML inside the editable", function () {

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

        editorInstance.insertHtml("Hello, World");

        editorInstance.fire('change');

        expect(framework.modelValue).toContain("<p>Hello, World</p>");

    });

    afterEach(CKEDITOR_UTILS.destroyAll);

});