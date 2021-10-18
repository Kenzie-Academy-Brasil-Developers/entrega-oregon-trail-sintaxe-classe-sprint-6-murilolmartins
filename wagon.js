class Wagon {
    constructor(capacity) {
        this._capacity = capacity
        this._passengers = []
    }
    set capacity(value) {
        this._capacity = value
    }
    get capacity() {
        return this._capacity

    }
    set passengers(value) {
        this._passengers = value
    }
    get passengers() {
        return this._passengers
    }

    getAvailableSeatCount() {

        let availableseats = this.capacity - this.passengers.length
        return availableseats
    }

    join(human) {

        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(human)
            return console.log(`${human.nome} is in the wagon now.`)
        }
        return console.log(`The wagon has no space for ${human.nome}`)
    }

    shouldQuarantine() {
        
        let sickpassanger = this.passengers.find(({_isHealthy}) => !_isHealthy)
        if (sickpassanger === undefined) {
            console.log(`Nobody is sick in the wagon`)
            return false
        }
         console.log(`You should do a quarentine.`)
        return true
    }

    totalFood() {

        let food = this.passengers.reduce((total,{_qtdFood}) => total + _qtdFood, 0)
        console.log(`The total amount of food in the wagon is ${food}. `)
        return food
    }


}