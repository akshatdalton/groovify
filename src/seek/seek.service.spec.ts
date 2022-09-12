import { Test, TestingModule } from "@nestjs/testing";
import { SeekService } from "./seek.service";

describe("SeekService", () => {
    let service: SeekService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SeekService],
        }).compile();

        service = module.get<SeekService>(SeekService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
