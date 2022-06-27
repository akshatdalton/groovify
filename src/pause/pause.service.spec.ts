import { Test, TestingModule } from "@nestjs/testing";
import { PauseService } from "./pause.service";

describe("PauseService", () => {
    let service: PauseService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PauseService],
        }).compile();

        service = module.get<PauseService>(PauseService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
