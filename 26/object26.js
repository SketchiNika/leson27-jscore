function show(date) {
    console.log(date);
};

var classCar = [{
        brandName: 'Mersades',
        model: 'E220',
        productionYear: 2006
},
    {
        brandName: 'Audi',
        model: 'Q7',
        productionYear: 2015
},
    {
        brandName: 'BMW',
        model: 'X7',
        productionYear: 2004
},
    {
        brandName: 'Volkswagen',
        model: 'B5',
        productionYear: 1999
},
    {
        brandName: 'Audi',
        model: 'A6',
        productionYear: 1998
}];

show(classCar);


function Car(brandName,model, productionYear ){
    this.brandName = name;
    this.model = model;
    this.productionYear = productionYear;
}

var createObject = _.create(Car.prototype, classCar);
show(createObject, false);

var invertObject = _.invert(classCar);
show(invertObject, false);

var pickeObject = _.pick(classCar, 'brandName', 'productionYear');
show(pickeObject, false);

var omiteObject = _.omit(classCar, 'model');
show(omiteObject, true);
