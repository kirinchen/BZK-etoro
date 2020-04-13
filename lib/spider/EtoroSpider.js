"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_kit_1 = require("selenium-kit");
const ConfigEnum_1 = require("../ConfigEnum");
const { By, Key, until } = selenium_kit_1.SeleniumKit.getKit();
var MarketCategory;
(function (MarketCategory) {
    MarketCategory["commodities"] = "https://www.etoro.com/discover/markets/commodities";
    MarketCategory["indices"] = "https://www.etoro.com/discover/markets/indices";
})(MarketCategory = exports.MarketCategory || (exports.MarketCategory = {}));
class EtoroSpider {
    constructor() {
        this.spiderKit = new selenium_kit_1.SeleniumKit();
    }
    init(c) {
        return __awaiter(this, void 0, void 0, function* () {
            let we = c.get(ConfigEnum_1.ConfigEnum.seleniumWebdriver);
            console.log("we:" + we);
            yield this.spiderKit.init(we);
        });
    }
    fetchMarket(mc) {
        return __awaiter(this, void 0, void 0, function* () {
            let u = mc;
            console.log("u:" + u);
            yield this.spiderKit.driver.get(u);
            console.log("fetchMarket!!!");
        });
    }
}
exports.EtoroSpider = EtoroSpider;
//# sourceMappingURL=EtoroSpider.js.map