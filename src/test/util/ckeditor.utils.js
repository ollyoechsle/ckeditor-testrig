(function () {

    window.CKEDITOR_UTILS = {

        /**
         * Returns an editable element that the CK editor can edit.
         * @returns {Element}
         */
        getEditableElement: function (content) {
            var editableElement = document.createElement("div");
            editableElement.innerHTML = content || '';
            editableElement.contenteditable = true;
            /**
             * The element must be attached to the document in order for CK Editor to work
             * (it uses document.getElementById internally)
             */
            document.body.appendChild(editableElement);
            return editableElement;
        },

        /**
         * Adapted from ```getWidgetByID``` from
         * https://github.com/ckeditor/ckeditor-dev/blob/master/tests/plugins/widget/_helpers/tools.js
         */
        getWidgetInstance: function (editor, id) {

            return editor.widgets.getByElement(editor.document.getById(id));

        },

        /**
         * Destroys all current instances of the CK Editor
         */
        destroyAll: function () {
            var instances = CKEDITOR.instances;

            for (var instanceId in instances) {
                instances[instanceId].destroy();
            }
        }
    }

})();