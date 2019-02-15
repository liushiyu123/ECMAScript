const EventEmmiter = require('events');

class Person extends EventEmmiter {

    constructor(name) {

        super();

        this.name = name;
        this.age = 0;

        this.growup();
        
    }

    growup() {
        setInterval(() => {
            this.age++;
            this.emit('growup');

        }, 1000);
    }

}

const p1 = new Person('童斌');

// p1.setMaxListeners(1);

p1.addListener('growup', function() {
    console.log('长大了一岁'+this.age);
});
// p1.prependListener('growup', function() {
//     console.log('...');
// });

// console.log(p1.eventNames());

// document.body.addEventListener('click')

// document.body = new HTMLBodyElement();
