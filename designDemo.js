// class Subject {
//     constructor() {
//       this.observers = [];
//     }
  
//     addObserver(observer) {
//       this.observers.push(observer);
//     }
  
//     removeObserver(observer) {
//       this.observers = this.observers.filter(obs => obs !== observer);
//     }
  
//     notify(context) {
//       for(let observer of this.observers){
//         observer.update(context)
//       }
//     }
    
//     // Other methods to manage state...
//   }
  
//   // Observer
//   class Observer {
//     constructor(name) {
//       this.name = name;
//     }
  
//     update() {
//       console.log(`${this.name} received an update.`);
//       // Perform actions based on the state change...
//     }
//   }
  
//   // Example usage
//   const subject = new Subject();
  
//   const observer1 = new Observer('Observer 1');
//   const observer2 = new Observer('Observer 2');
//   const observer3 = new Observer('Observer 3')
  
//   subject.addObserver(observer1);
//   subject.removeObserver(observer2);
//   subject.addObserver(observer3)
  
//   // State changes in the subject
//   subject.notify();
//   // Output:
//   // Observer 1 received an update.
//   // Observer 2 received an update.
  


///code
class telephone {
  constructor() {
      this.numbers = [];
      this.observers = [];
  }

  addObserver(observer) {
      this.observers.push(observer);
  }

  removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
  }

  addPhoneNumber(number) {
      this.numbers.push(number);
      this.notify(`Phone number ${number} added.`);
  }

  removePhoneNumber(number) {
      this.numbers = this.numbers.filter(num => num !== number);
      this.notify(`Phone number ${number} removed.`);
  }

  dialPhoneNumber(number) {
      // Validate the number here
      const numRegex = /^(0[0-9]{10}|\+[0-9]{3}[0-9]{10})$/;
      if (!numRegex.test(number)) {
          console.log("Invalid number");
      } else {
          console.log(`Now dialing ${number}`);
      }
  }

  notify(context) {
      for (let observer of this.observers) {
          observer.update(context);
      }
  }
}

class Observer {
  update(context) {
      console.log(context);
  }
}

const Telephone = new telephone();
const observer1 = new Observer();
const observer2 = new Observer();

Telephone.addObserver(observer1);
Telephone.addObserver(observer2);

Telephone.addPhoneNumber("09090859182");
Telephone.removePhoneNumber("09090859182");
Telephone.dialPhoneNumber("09090859182");
