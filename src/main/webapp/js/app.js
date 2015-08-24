(function () {

    function createEditableElement() {
        return jQuery("<div contenteditable='true'>").appendTo(document.body)[0];
    }

    function loadCKEditor() {
        var editableElement = createEditableElement();
        window.editableElement = editableElement;
        return CKEDITOR.inline(editableElement, {});
    }

    jQuery(function () {
        var editorInstance = loadCKEditor();
        jQuery("#destroy-ckeditor").click(function () {
            editorInstance.destroy();
        });
        window.editorInstance = editorInstance;
    })

})();