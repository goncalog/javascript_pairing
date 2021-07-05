describe('FizzBuzz', function() {
    let fizzBuzz;

    beforeEach( function(){
        fizzBuzz = new FizzBuzz()
    })
    it("3 returns Fizz", function(){
        expect(fizzBuzz.play(3)).toEqual("Fizz")
    })
    it("5 returns Buzz", function(){
        expect(fizzBuzz.play(5)).toEqual("Buzz")
    })
    it("15 returns FizzBuzz", function(){
        expect(fizzBuzz.play(15)).toEqual("FizzBuzz")
    })
    it("19 returns 19", function(){
        expect(fizzBuzz.play(19)).toEqual(19)
    })
} )