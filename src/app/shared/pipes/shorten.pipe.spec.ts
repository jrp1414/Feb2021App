import { ShortenPipe } from "./shorten.pipe";

let shortenPipe: ShortenPipe;

describe("Shorten Pipe", () => {
    beforeEach(() => {
        shortenPipe = new ShortenPipe();
    });

    it("Length of the transform should be 33",()=>{
        let testData = "It's 1634 and Samuel Pipps, the world's greatest detective, is being transported from the Dutch East Indies to Amsterdam, where he is facing trial and execution for a crime he may, or may not, have committed. Travelling with him is his loyal bodyguard, Arent Hayes, who is determined to prove his friend innocent, while also on board are Sara Wessel, a noble woman with a secret, and her husband, the governor general of Batavia.";
        expect(shortenPipe.transform(testData).length).toBe(33);
    });
});