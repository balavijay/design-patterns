/* 
Mediator pattern
The Mediator pattern provides central authority over a group of objects by controlling 
how these objects interact with each other. The "central" object is known as the 'mediator'. 
The mediator pattern is useful in scenarios where every object needs to be aware of any state 
change in any other object in the group.
*/
 function Member(name) {
    this.name = name;
    this.chatroomRef = null;
 }

 Member.prototype = {
     send : function(message, toMember) {
         this.chatroomRef.send(message, this, toMember);
     }, 

     receive : function(message, fromMember ) {
         console.log(`'${fromMember.name} to ${this.name}': ${message}`);
     }
 }

 function Chatroom() {
     this.members = {};
 }

 Chatroom.prototype = {
     addMembers : function(member) {
         this.members[member.name] = member;
         member.chatroomRef = this;
     },
     send : function (message, fromMember, toMember) {
         toMember.receive(message, fromMember);
     }
 }

 const chatroom = new Chatroom();

 const alpha = new Member("Alpha");
 const charlie = new Member("Charlie");

 chatroom.addMembers(alpha);
 chatroom.addMembers(charlie);

 alpha.send("Come in Charlie", charlie);
 charlie.send("Waiting for you instruction Alpha", alpha);
 alpha.send("Be Alert!! Over and Out.", charlie);