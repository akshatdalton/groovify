import { Test, TestingModule } from "@nestjs/testing";
import { SeekController } from "./seek.controller";

describe("SeekController", () => {
    let controller: SeekController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SeekController],
        }).compile();

        controller = module.get<SeekController>(SeekController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
