var soldierRole = require('role.soldier');

var roleShrek = {

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        soldierRole.run(creep);
        
        if(Game.time % 10 == 0)
        {
            reciteQuote(creep);
        }
	}
	
	reciteQuote: function(creep)
	{
	    switch(Math.floor(Math.random() * 10))
	    {
	        case 0:
	            creep.say("What are you doing in my swamp?!");
	            break;
	        case 1:
	            creep.say("That'll do, Donkey. That'll do.");
	            break;
	        case 2:
	            creep.say("Ogres are like onions.");
	            break;
	        case 3:
	            creep.say("Onions have layers. Ogres have layers.");
	            break;
	        case 4:
	            creep.say("Hey!...");
	            break;
	        case 5:
	            creep.say("Roar!");
	            break;
	        case 6:
	            creep.say("I'm no one's messenger boy, all right? I am a delivery boy.");
	            break;
	        case 7:
	            creep.say("Donkey!");
	            break;
	        case 8:
	            creep.say("Onion love.");
	            break;
	        case 9:
	            creep.say("Shrek is love. Shrek is life.");
	            break;
	    }
	}
	
};

module.exports = roleShrek;