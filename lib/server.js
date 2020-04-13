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
const http = require("http");
const EtoroSpider_1 = require("./spider/EtoroSpider");
const bzk_1 = require("bzk");
const port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
let c = new bzk_1.Config({});
let a = () => __awaiter(void 0, void 0, void 0, function* () {
    let es = new EtoroSpider_1.EtoroSpider();
    yield es.init(c);
    yield es.fetchMarket(EtoroSpider_1.MarketCategory.commodities);
});
a();
//# sourceMappingURL=server.js.map