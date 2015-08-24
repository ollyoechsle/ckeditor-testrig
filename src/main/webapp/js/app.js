(function () {

    function createEditableElement(content) {
        return jQuery("<div contenteditable='true'>")
            .html(content)
            .appendTo(document.body)[0];
    }

    function loadCKEditor(content) {
        var editableElement = createEditableElement(content);
        window.editableElement = editableElement;
        return CKEDITOR.inline(editableElement, {
            allowedContent: true,
            plugins: 'counter'
        });
    }

    jQuery(function () {
        var editorInstance = loadCKEditor("Hello, here's a counter <div class='counter' data-count='2'></div>");
        jQuery("#destroy-ckeditor").click(function () {
            editorInstance.destroy();
        });
        window.editorInstance = editorInstance;
    })

})();