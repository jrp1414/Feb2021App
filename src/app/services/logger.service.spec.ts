import { LoggerService } from "./logger.service";

describe("Logger Service Test", () => {
    let logger = new LoggerService();
    it("Log Method should return undefined", () => {
        expect(logger.log("Sample Log")).toBeUndefined();
    }); 
});  