/* 
What is the Observer design pattern?
The Observer pattern is a design pattern that offers a subscription model in which objects (known as 'observers') can subscribe to an event (known as a 'subject') and get notified when the event occurs (or when the subject sends a signal). This pattern is the cornerstone of event driven 
*/

function Subject() {
    this.observes = [];
}

Subject.prototype = {

    subscribe : function(fn) {
        this.observes.push(fn);
    },

    unsubscribe : function(removeFn) {
        this.observes = this.observes.filter((fn) => {
            if(removeFn != fn)
                return fn;
        })
    },

    trigger : function() {
        this.observes.forEach((fn) => {
            fn.call();
        })
    }
}

const subject = new Subject();

function ob1() {
    console.log("Observer 1");
}
function ob2() {
    console.log("Observer 2");
}
function ob3() {
    console.log("Observer 3");
}

subject.subscribe(ob1);
subject.subscribe(ob2);
subject.subscribe(ob3);

console.log("=========Trigger 1==========");
subject.trigger();

console.log("========Trigger 2==========");
subject.unsubscribe(ob2);
subject.trigger();


console.log("========Trigger 3==========");
subject.unsubscribe(ob3);
subject.trigger();