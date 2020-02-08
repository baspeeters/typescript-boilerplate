import {expect} from "chai";
import {Entity} from "../../src/Entity";

describe("Running tests", () => {
    describe("Entity from library dir", () => {
        it("should instantiate an entity", () => {
            const entity = new Entity("Boilerplate");

            expect(entity).to.be.an.instanceof(Entity);
            expect(entity.getName()).to.equal("Boilerplate");
        });
    });
});
