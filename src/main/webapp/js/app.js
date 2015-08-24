(function() {

    console.log("[testrig]", "HELO");

    function loadCKEditor(editableElementID) {
        return function() {
            var editorInstance = CKEDITOR.inline(editableElementID);
            console.log("[testrig]", "Loaded editor", editorInstance);
            jQuery("#destroy-ckeditor").click(function() {
                editorInstance.destroy();
            });
        }
    }

    jQuery(loadCKEditor("editor1"))

})();