import { Assert, AssertionFunction, AssertionResult, Test } from './interfaces';
export declare const isAssertionResult: (result: AssertionResult | Test) => result is AssertionResult;
export declare const AssertPrototype: {
    equal: AssertionFunction;
    equals: (...args: any[]) => any;
    eq: (...args: any[]) => any;
    deepEqual: (...args: any[]) => any;
    notEqual: AssertionFunction;
    notEquals: (...args: any[]) => any;
    notEq: (...args: any[]) => any;
    notDeepEqual: (...args: any[]) => any;
    is: AssertionFunction;
    same: (...args: any[]) => any;
    isNot: AssertionFunction;
    notSame: (...args: any[]) => any;
    ok: AssertionFunction;
    truthy: (...args: any[]) => any;
    notOk: AssertionFunction;
    falsy: (...args: any[]) => any;
    fail: AssertionFunction;
    throws: AssertionFunction;
    doesNotThrow: AssertionFunction;
};
export declare const assert: (collect: any, offset: number, runOnly?: boolean) => Assert;
