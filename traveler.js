class Traveler {
    constructor(nome) {
        this._nome = nome
        this._qtdFood = 1
        this._isHealthy = true 
    }
    set nome(value) {
        this._nome = value
    }
    get nome() {
        return this._nome
    }
    set qtdFood(value) {
        this._qtdFood = value
    }
    get qtdFood() {
        return this._qtdFood
    }
    set isHealthy(value) {
        this._isHealthy = value
    }
    get isHealthy() {
        return this._isHealthy
    }

    hunt() {
        this.qtdFood += 2
        return console.log(`Now the traveler ${this.nome} has ${this.qtdFood} of food`)
    }

    eat() {
        if (this.qtdFood > 0) {
            this.qtdFood -= 1
            this.isHealthy = true
           return console.log(`Now the traveler ${this.nome} has ${this.qtdFood} of food and is Healthy`)
        }
        if (this.qtdFood === 0) {
            this.isHealthy = false
           return console.log(`The traveler ${this.nome} has no food to eat and is Sick`)
        }
    }
}