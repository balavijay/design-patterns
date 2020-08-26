/* 
What is the Iterator design pattern?
The Iterator pattern is a pattern that allows you to effectively loop over a 
collection of objects. A common programming task is to traverse and manipulate a collection of 
objects. These collections may be stored as an array or perhaps something more complex, 
such as a tree or graph structure. In addition, you may need to access the items in the 
collection in a certain order, such as, front to back, back to front, depth first 
(as in tree searches), skip evenly numbered objects, etc.

The Iterator design pattern solves this problem by separating the collection of objects from 
the traversal of these objects by implementing a specialized 'iterator'!

*/

const items = [ 25, 3.26, "Coding King", false, undefined, null, NaN ];

function Iterator(items) {
    this.items = items;
    this.index = 0;
}

Iterator.prototype = {
    next : function() {
        return this.items[this.index++];
    },
    hasnext : function() {
        if(this.index < this.items.length)
            return true;
        else 
            return false;
    }
}

const iterator = new Iterator(items);
while(iterator.hasnext()) {
    console.log(iterator.next())
}
    
