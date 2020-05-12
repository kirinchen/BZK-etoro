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
const Config_1 = require("bzk/lib/comm/config/Config");
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
    get config() { return Config_1.Config.provide(); }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let we = this.config.get(ConfigEnum_1.ConfigEnum.seleniumWebdriver);
            console.log("we:" + we);
            yield this.spiderKit.init(we);
            yield this.spiderKit.driver.manage().window().setRect({ width: 1680, height: 1000, x: 0, y: 0 });
        });
    }
    fetchMarket(mc) {
        return __awaiter(this, void 0, void 0, function* () {
            let u = mc;
            console.log("u:" + u);
            yield this.spiderKit.driver.get(u);
            console.log("fetchMarket!!!");
            let to = this.config.get(ConfigEnum_1.ConfigEnum.seleniumTimeout);
            let firstResult = yield this.spiderKit.driver.wait(until.elementLocated(By.css('div.mode.sprite')), to);
            //console.log("firstResult:" + firstResult.getText());
            yield firstResult.click();
            let trs = yield this.spiderKit.driver.findElements(By.css('et-instrument-trading-row'));
            let ans = new Array();
            console.log("trs size:" + trs.length);
            for (let i = 0; i < trs.length; i++) {
                let v = yield this.parseRow(trs[i]);
                ans.push(v);
                console.log("v:" + JSON.stringify(v));
            }
            return ans;
        });
    }
    parseRow(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let s = yield e.getText();
            let sa = s.split('\n');
            let rpt = sa[2];
            var NUMERIC_REGEXP = /\d+\.\d{2}/g;
            let rptv = parseFloat(rpt.match(NUMERIC_REGEXP)[0]);
            let checkSe = sa[10];
            let bsv = checkSe == 'BUYING' ? parseFloat(sa[9]) : 1 - parseFloat(sa[9]);
            return {
                name: sa[0],
                riseDay: parseFloat(sa[1]),
                risePtg: rptv,
                sellQuote: parseFloat(sa[4]),
                buyQuote: parseFloat(sa[6]),
                minQuoteYear: parseFloat(sa[7]),
                maxQuoteYear: parseFloat(sa[8]),
                sentimentBuyPtg: bsv
            };
        });
    }
}
exports.EtoroSpider = EtoroSpider;
class MarketRow {
}
exports.MarketRow = MarketRow;
//# sourceMappingURL=EtoroSpider.js.map