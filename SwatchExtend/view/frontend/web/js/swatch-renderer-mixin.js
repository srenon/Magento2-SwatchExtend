define([
    'jquery'
], function ($) {
    'use strict';

    return function (widget) {
        console.log('Hello from SwatchExtend');

        $.widget('mage.SwatchRenderer', widget, {
            _Rebuild: function () {
                console.log('Hello from rebuild method');
                return this._super();
            }
        });

        return $.mage.SwatchRenderer;
    }
});