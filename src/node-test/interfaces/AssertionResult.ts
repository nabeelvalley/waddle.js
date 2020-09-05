import { AssertionError } from "assert";

/**
 * Result of an assertion
 */
interface AssertionResult<T = AssertionError> {
    /**
     * Did the assertion pass
     */
    passed: boolean
    /**
     * Message if an error was thrown
     */
    message?: string
    /**
     * Error thrown from assertion if any 
     */
    error?: T
}

export default AssertionResult