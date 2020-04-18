import { CofGet } from "bzk/lib/comm/config/Config";

export class ConfigEnum {

    public static seleniumWebdriver: CofGet = new CofGet("selenium.webdriver", "chrome");

    public static seleniumTimeout: CofGet = new CofGet("selenium.timeout", 9000);

}

