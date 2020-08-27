/* 
What is a proxy object?
A proxy object is an object that acts as an interface (or placeholder) for something else. 
The proxy could be an interface to anything: an API, a network connection, 
a large object in memory, or some other resource that is expensive or impossible to duplicate.

A proxy is a 'stand-in' object that is used to access the 'real' object behind the scenes. 
In the proxy, extra functionality can be provided, for example caching when operations on 
the real object are resource intensive, or checking preconditions before operations on the 
real object are invoked.
*/

 function CurrencyAPI () {

    this.getValue = function(coin) {

        console.log("===== External API call =======");
        switch(coin) {
            case "Bitcoin":
                value = 5400;
                break;
            
            case "Litcoin":
                value = 50;
                break;
            case "Teriaum":
                value = 100;
                break;
    
        }
        return value;
    }

    
}

const CurrencyProxy = function () {

    this.cache = {};

    this.api = new CurrencyAPI();

    this.getValue = function(coin) {
        
        
        if(!this.cache[coin]) {
            this.cache[coin] = this.api.getValue(coin);
            
        } else 
        {
            console.log("From Cache" );
        }
        
        return this.cache[coin];

    }
}

const api = new CurrencyProxy();

console.log(api.getValue("Bitcoin"));
console.log(api.getValue("Litcoin"));
console.log(api.getValue("Teriaum"));


console.log(api.getValue("Bitcoin"));
console.log(api.getValue("Litcoin"));
console.log(api.getValue("Teriaum"));