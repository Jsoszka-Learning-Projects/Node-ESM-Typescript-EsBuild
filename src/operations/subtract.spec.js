import {describe, it, expect} from "vitest"

import { subtract } from "./subtract.js";

describe("Operation Subtract", () => {
    it("should mathematically subtract two numbers", () => {
        expect(subtract(6,3)).toEqual(3)
    })
})