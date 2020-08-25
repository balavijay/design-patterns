/*  Singleton design pattern
The Singleton pattern allows you to limit the number of instances of a particular object to one. This single instance is called the singleton.

Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.
*/
 const SingleTon = (function() {

    function processManager() {
        this.processCount = 0;
    }

    let pManager;

    return {
        getProcessmanager() {
            if(!pManager)
                pManager = new processManager();
            return pManager;
        }
    }

 })();

 const p1 = SingleTon.getProcessmanager();
 const p2 = SingleTon.getProcessmanager();

 console.log(p1 === p2);