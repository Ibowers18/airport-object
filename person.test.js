const Person = require('./person')
const Bag = require('./bag')

describe('Person', () => {
    const testperson = new Person("Joe")
    const testBag = new Bag(12)

    test('has a name', () => {
        expect(testPerson.name).toBe("Joe")

    })

    test('has a bag', () => {
        testPerson.addBag(testBag)
        expect(testPerson.bags.length).toBe(1)
        //expect (testBag.bags [0]).toBe(testBag)

    })
})
