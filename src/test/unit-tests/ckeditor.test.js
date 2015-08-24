describe('CK Editor Unit Test Approach ', function () {

    it("Should be possible to instantiate the editor in a unit test", function () {

        var editableElement = jQuery("<div contenteditable='true'>"),
            editorInstance = CKEDITOR.replace(editableElement[0]);

        expect(editorInstance).toBeDefined();

        expect(editorInstance.status).toBe("ready");

        expect(editorInstance.destroy).toBeDefined();

        editorInstance.destroy();

    });

});