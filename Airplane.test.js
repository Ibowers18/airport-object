

const Airplane = request('./airplane')

describe('Airplane class # of passengers',() => {
    test('Needs a Name',() => {
        const testAirplane = new Airplane('Irene')
        expect(testAirplane.name).toBE('Irene')

    })
    test('Airplane class passengers',() => {
        const testAirplane = new Airplane([])
        expect(testAirplane.passengers).toStrictEqual([])

        })
        test('Airplane classflightNumber', () => {
            const testAirplane = new Airplane(null,null,2500)
            expect(testAirplane.flightNumber).toBe(2500)         
        
        
        })
    })
    
