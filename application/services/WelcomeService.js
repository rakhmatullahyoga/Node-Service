/**
 * Created by rakhmatullahyoga on 28/07/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES) {
    return {
        hello: function (cb) {
            cb(null, "Hello world!");
        }
    };
};