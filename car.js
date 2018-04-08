function Car(carName) {
    this.carName = carName || 'Unfwef name';

}
Car.prototype.logName = function () {
    console.log('Название машины: ', this.carName);
};

module.exports = {
    Car: Car
}
