(function () {
    'use strict';

    CKEDITOR.plugins.add('counter', {

        'requires': 'widget',

        init: function (editor) {


            editor.widgets.add("counter", {

                /**
                 * Initialises the widget. Initially it displays a loading indicator,
                 * then, when the CK editor has parsed the data in the oembed (fires the 'data' event)
                 * it renders the embed
                 */
                init: function () {

                    this._addClickHandler();

                    this.on('data', this._renderEmbed.bind(this));

                    this._loadDataFromTag();

                    console.log("Counter plugin init");

                },

                /**
                 * Delegates a click handler on the element
                 * (allows the content to be refreshed without having to restore handlers)
                 * @private
                 */
                _addClickHandler: function () {
                    this.element.on("mousemove", this._increment.bind(this));
                },

                _increment: function() {
                    console.log("Incrementing");
                    this.data.count++;
                    this.setData(this.data);
                    this._renderEmbed();
                },

                /**
                 * Loads data from the oembed tag. It is stored as URL encoded JSON in the
                 * embed-data attribute.
                 * @private
                 */
                _loadDataFromTag: function () {
                    var count = this.element.getAttribute("data-count") || 0;
                    this.setData({count: count});
                },

                /**
                 * Renders the embed using a template based on the options type.
                 * View model allows us to manipulate the data without necessarily
                 * persisting it.
                 * @private
                 */
                _renderEmbed: function () {
                    this.element.setHtml("[[" + this.data.count + "]]");
                    console.log("Rendering", this.data.count);
                },

                /**
                 * Converts the tag back to a blank oembed tag (this is what is actually returned
                 * when we get the CK editor content)
                 * @returns {CKEDITOR.htmlParser.element}
                 */
                downcast: function () {
                    var oembedTag = new CKEDITOR.htmlParser.element('div');
                    oembedTag.attributes['class'] = "counter";
                    oembedTag.attributes['data-count'] = this.data.count;
                    return oembedTag;
                },

                /**
                 * Recognise an element particular class.
                 * That element is then transformed into a living widget.
                 */
                upcast: function (element) {
                    return element.name == 'div' && element.hasClass("counter");
                }

            });

        }
    });

})();