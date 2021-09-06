'use strict'

const obj = {
    firstName: 'okasha',
    year: 1991,
    calcAge: function () {
      // console.log(this);
      console.log(2037 - this.year);
  
      // Solution 1
      // const self = this; // self or that
      // const isMillenial = function () {
      //   console.log(self);
      //   console.log(self.year >= 1981 && self.year <= 1996);
      // };
  
      // Solution 2
      const isMillenial = () => {
          //this -> obj
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial();
    },
  
    greet: () => {
        //this -> windows object
      console.log(this);
      console.log(`Hey ${this.firstName}`);
    },
  };

  obj.greet();
  obj.calcAge();