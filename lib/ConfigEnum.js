"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigEnum = void 0;
const Config_1 = require("bzk/lib/comm/config/Config");
let ConfigEnum = /** @class */ (() => {
    class ConfigEnum {
    }
    ConfigEnum.seleniumWebdriver = new Config_1.CofGet("selenium.webdriver", "chrome");
    ConfigEnum.seleniumTimeout = new Config_1.CofGet("selenium.timeout", 9000);
    return ConfigEnum;
})();
exports.ConfigEnum = ConfigEnum;
//# sourceMappingURL=ConfigEnum.js.map