import {describe, it, expect} from "vitest"

import { add } from "./add.js";

describe("Operation Add", () => {
    it("should mathematically add two numbers", () => {
        expect(add(1,2)).toEqual(3)
    })
})