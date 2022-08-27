const { expect } = require("chai");
const carService = require("./03. Car service_Resources");

describe("Unit-Testing-Exam-Problem", () => {
  describe("isItExpensive ", () => {
//Normal passing test
    it("Engine", () => {
      expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
    });
    
    it("Engine", () => {
      expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
    });

    it("Engine", () => {
      expect(carService.isItExpensive('other')).to.equal('The overall price will be a bit cheaper');
    });

  });//first describe

  describe("isItExpensive (issue)", () => {
    //Normal passing test
        it("should work fine", () => {
          expect(carService.discount(2, 100)).to.equal('You cannot apply a discount');
        });

        it("should work fine", () => {
          expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
        });

        it("should work fine", () => {
          expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
        });

        it("should work fine", () => {
          expect(carService.discount(8, 100)).to.equal('Discount applied! You saved 30$');
        });

 
    //Throw Error function
        it("input is not valid number", () => {
          expect(() => carService.discount("", 100)).to.throw(
            "Invalid input" );
        });
        it("input is not valid number", () => {
          expect(() => carService.discount('a', 100)).to.throw(
            "Invalid input" );
        });it("input is not valid number", () => {
          expect(() => carService.discount([], 100)).to.throw(
            "Invalid input" );
        });it("input is not valid number", () => {
          expect(() => carService.discount({}, 100)).to.throw(
            "Invalid input" );
     
        });

        it("input is not valid number", () => {
          expect(() => carService.discount(8, '')).to.throw(
            "Invalid input" );
        });
        it("input is not valid number", () => {
          expect(() => carService.discount(8, 'a')).to.throw(
            "Invalid input" );
        });it("input is not valid number", () => {
          expect(() => carService.discount(8, [])).to.throw(
            "Invalid input" );
        });it("input is not valid number", () => {
          expect(() => carService.discount(8, {})).to.throw(
            "Invalid input" );

            

            it("input is not valid number", () => {
              expect(() => carService.discount(8 )).to.throw(
                "Invalid input" );
            });
            
            
            
        });
      });//second

      describe("isItExpensive (issue)", () => {
        //Normal passing test

            it("should work fine", () => {
              expect(carService.partsToBuy( [{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],
              ["blowoff valve", "injectors" ])).to.equal(145);
            });

            it("should work fine", () => {
              expect(carService.partsToBuy( [],
              ["blowoff valve", "injectors" ])).to.equal(0);
            });
            
        //Throw Error function

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy(12,12)).to.throw(
                "Invalid input" );
            });

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy(12,12)).to.throw(
                "Invalid input" );
            });

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy('ggg',12)).to.throw(
                "Invalid input" );
            });

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy(12,'ggg')).to.throw(
                "Invalid input" );
            });

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy({},12)).to.throw(
                "Invalid input" );
            });it("input is not valid number", () => {
              expect(() => carService.partsToBuy(12,{})).to.throw(
                "Invalid input" );
            });

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy(12,false)).to.throw(
                "Invalid input" );
            });

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy(true,12)).to.throw(
                "Invalid input" );
            });

            it("input is not valid number", () => {
              expect(() => carService.partsToBuy(NaN,12)).to.throw(
                "Invalid input" );
            });it("input is not valid number", () => {
              expect(() => carService.partsToBuy(null,12)).to.throw(
                "Invalid input" );
            });

          });//third

});//main describe

