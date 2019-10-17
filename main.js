(function(){
    console.log("hi");

    function Traveler(name){
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    Traveler.prototype.hunt = function(){
        this.food = this.food + 2;
    };
    Traveler.prototype.eat = function(){
        if(this.food >= 1){
            this.food = this.food - 1;
        }
        else{
            this.isHealthy = false;
        }
    };

    

    function Wagon(capacity){
        this.capacity = capacity;
        this.passengers = [];

    }

    Wagon.prototype.getAvailableSeatCount = function(){
        return this.capacity - this.passengers.length;
    };
    Wagon.prototype.join = function(traveler){
        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(traveler);
        }
    };
    Wagon.prototype.shouldQuarantine = function(){
        let quarantine = false;
        for(let i = 0; i < this.passengers.length; i++){
            if(this.passengers[i].isHealthy == false){
                quarantine = true;
            }
        }
        return quarantine;
    };
    Wagon.prototype.totalFood = function(){
        let food = 0;
        for(let i = 0; i < this.passengers.length; i++){
            food = food + this.passengers[i].food;
        }
        return food;
    };

    // Create a wagon that can hold 2 people
    let wagon = new Wagon(2);
    // Create three travelers
    let henrietta = new Traveler('Henrietta');
    let juan = new Traveler('Juan');
    let maude = new Traveler('Maude');
    console.log(`${wagon.getAvailableSeatCount()} should be 2`);
    wagon.join(henrietta);
    console.log(`${wagon.getAvailableSeatCount()} should be 1`);
    wagon.join(juan);
    wagon.join(maude); // There isn't room for her!
    console.log(`${wagon.getAvailableSeatCount()} should be 0`);
    henrietta.hunt(); // get more food
    juan.eat();
    juan.eat(); // juan is now hungry (sick)
    console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
    console.log(`${wagon.totalFood()} should be 3`);



})();



