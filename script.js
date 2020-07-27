const Counter = function () {
    this.number = 0
}

Counter.prototype.inc = function () {
    this.number = this.number + 1
}

const DecreasingCounter = function () {
    Counter.call(this)
}

DecreasingCounter.prototype = Object.create(Counter.prototype)
DecreasingCounter.prototype.constructor = DecreasingCounter

DecreasingCounter.prototype.dec = function () {
    this.number = this.number - 1
}

const counter1 = new Counter()
counter1.inc()
counter1.inc()
console.log(counter1)
const counter2 = new DecreasingCounter()
counter2.inc()
counter2.inc()
counter2.dec()
console.log(counter2)

class CounterClass {
    constructor() {
        this.number = 0
    }

    inc() {
        this.number = this.number + 1
    }
}

class DecreasingCounterClass extends CounterClass {
    // in this simple case constructor can be omitted
    // and effect will be the same
    constructor(){
        super()
    }

    dec() {
        this.number = this.number - 1
    }
}

const counter3 = new CounterClass()
counter3.inc()
counter3.inc()
console.log(counter3)
const counter4 = new DecreasingCounterClass()
counter4.inc()
counter4.inc()
counter4.dec()
console.log(counter4)