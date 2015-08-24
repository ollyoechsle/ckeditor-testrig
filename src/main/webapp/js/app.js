(function() {

    console.log("[testrig]", "HELO");

    function loadCKEditor(editableElementID) {
        return function() {
            CKEDITOR.replace(editableElementID);
        }
    }

    jQuery(loadCKEditor("editor1"))

})();