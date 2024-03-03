//creating a telephone package
//telephonr class should have 3 methods
//add phone number method
// remove phone number method
//Dial phone number method

// maintain list of observers( notifies observer whenever a phone number is dialed)
//create observer class
//observer class should have a method to notify observer whenever a phone number is dialed
// add two observers to telephone class
//first one should print phone number
// second one should print 'now dialing 2347023232'
// Subject (Observable)

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