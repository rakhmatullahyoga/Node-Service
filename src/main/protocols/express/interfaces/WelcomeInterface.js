'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let welcomeController = TOOLS.CONTROLLERS['WelcomeController'];

    return {
        /**
         * Says hello
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */
        welcome: function (previousData, req, res, next) {
            welcomeController.welcome(function (err, result) {
                next(err, result);
            });
        }
    };
};
