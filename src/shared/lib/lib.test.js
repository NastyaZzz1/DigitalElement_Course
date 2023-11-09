import { sum, commonComponentProps } from "../lib/index.js"
import { expect, test } from "@jest/globals" 

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});


test("getCN", () => {
    const { getCN } = commonComponentProps
    const baseClass = "button"
    const extraClasses = {
        isHidden : true,
        isDisabled : false,
    }

    const getClassName = (elen, mod) => getCN(baseClass, elen, mod)
    expect(getClassName( "label", extraClasses)).toBe("button__label button__label--isHidden")
})


// test('My first test', () => {
//     expect(Math.max(1, 5, 10)).toBe(10);
// });