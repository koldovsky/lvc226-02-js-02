// // // for (var i = 100; i >= 1; i = i - 2) {
// // //     document.write(i);
// // //     document.write('<br>');
// // // }

// // // // Task 1: 
// // // // Print from 100 to 1

// // // // Task 2:
// // // // Print even numbers from 100 to 2

// // var cars = ['ZAZ Sens', 'Bugatti', 'Jeep Renegade'];
// // cars.push('Jaguar XJ');


// // // for (var i = 0; i < cars.length; i++) {
// // //     document.write(cars[i]);
// // //     document.write('<br>');
// // // }

// // cars.forEach(function (el) {
// //     document.write(el);
// //     document.write('<br>');
// // });


// var myCars = {
//     mostExpensive: 'Bugatti',
//     cheapest: 'ZAZ Sens',
//     favourite: 'Jeep Renegade',
//     newest: 'Jaguar XJ'
// }

// myCars['stolen'] = 'Toyota Land Cruiser';

// for (var key in myCars) {
//     document.write(myCars[key]);
//     document.write('<br>');
// }

// var counter = 0;
// for (key in myCars) {
//     counter++;
// }
// document.write(counter);

var oldCar = {
    make: 'Audi',
    model: 'TT',
    year: 2000,
    drive: function () {
        document.write('Car ' + this.model + ' is driving');
        document.write('<br>');
    }
}

var newCar = {
    make: 'Ferrari',
    model: 'La Ferrari',
    year: 2016,
    drive: function () {
        document.write('Car ' + this.model + ' is driving');
        document.write('<br>');
    }
}

oldCar.drive();
newCar.drive();



var anotherCar = new Car('Subaru', 'Forester', 2017);
anotherCar.drive();

var yetAnotherCar = new Car('BMW', 'X6', 2016);
yetAnotherCar.drive();

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function () {
        document.write(this.year + ' Car ' + this.model + ' is driving');
        document.write('<br>');
    }
    return this;
}