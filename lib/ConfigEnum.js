"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("bzk/lib/comm/config/Config");
class ConfigEnum {
}
exports.ConfigEnum = ConfigEnum;
ConfigEnum.seleniumWebdriver = new Config_1.CofGet("selenium.webdriver", "chrome");
ConfigEnum.seleniumTimeout = new Config_1.CofGet("selenium.timeout", 9000);
//# sourceMappingURL=ConfigEnum.js.map