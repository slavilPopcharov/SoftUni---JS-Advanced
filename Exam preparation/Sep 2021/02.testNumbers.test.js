
const { expect } = require('chai')
const testNumbers = require('./testNumbers')

describe('must work again', () =>{
  describe('sumNumbers tests', ()=>{
    it('should be OK', ()=>{
  expect(testNumbers.sumNumbers(5,2)).to.equal('7.00')//(5+2).toFixed(2)
  })
  it('one negative number', ()=>{
    expect(testNumbers.sumNumbers(-5,2)).to.equal('-3.00')
    })
    it('return undefined', ()=>{
      expect(testNumbers.sumNumbers('a', 2)).to.equal(undefined) //more tests?
      })

})

describe('numberChecker tests', ()=>{

  it('odd number test', ()=>{
expect(testNumbers.numberChecker(1)).to.equal('The number is odd!')
})
it('even number test', ()=>{
  expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
  })
  it('input is not valid number', ()=>{
    expect(()=> testNumbers.numberChecker('a')).to.throw('The input is not a number!')
    })

})

describe('averageSumArray tests', ()=>{
  it('should work fine', ()=>{
expect(testNumbers.averageSumArray([4,5,6])).to.equal(5)
})
it('result NaN if an element is NaN', ()=>{
  expect(testNumbers.averageSumArray([4,5,'a'])).not.to.equal(NaN)
  })
  it('result NaN if an element is number as a string', ()=>{
    expect(testNumbers.averageSumArray([4,5,'6'])).to.equal(32)
    })
})


})