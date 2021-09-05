// Write your tests here!
const expect = require("chai").expect;
const findStudentScoreByName = require("../src/solution.js")
describe("findStudentScoreByName", () => {
    it("score of student if found", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
            ];
            const expected = 7.4
            const actual = findStudentScoreByName(students, "Morgan Sutton");
            expect(actual).to.equal(expected);
    })
    it("return null if no student name is found", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
            ];
                const actual = findStudentScoreByName(students, "Leilani Lopez");
                expect(actual).to.be.null;   
    })
})