"use strict";
var identity = require("folke-identity");
var folke_core_1 = require("folke-core");
var defaultComponents = require("folke-default-components");
var defaultMenu = require("folke-default-menu");
var localization = require("folke-ko-localization");
function register(services) {
    localization.register({ identity: identity.fr });
    defaultMenu.register();
    identity.register(services, "Administrator");
    defaultComponents.register();
    return { folke: folke_core_1.default, defaultMenu: defaultMenu, localization: localization };
}
exports.register = register;
