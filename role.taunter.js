var soldierRole = require('role.soldier');

var roleTaunter = {

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        creep.moveTo(Game.flags["Nate"]);
        
        if(Game.time % 5 == 0)
	    {
	        switch(Math.floor(Math.random() * 10))
	        {
	            case 0:
	                creep.say("Wanker..");
	                break;
	            case 1:
	                creep.say("Wanker!!");
	                break;
	            case 2:
	                creep.say("cjunt.");
	                break;
	            case 3:
	                creep.say("Ur done");
	                break;
	            case 4:
	                creep.say("Hey!...");
	                break;
	            case 5:
	                creep.say("Bitch!");
	                break;
	            case 6:
	                creep.say("Cheeky...");
	                break;
	            case 7:
	                creep.say("SOB");
	                break;
	            case 8:
	                creep.say("Dick Head!");
	                break;
	            case 9:
	                creep.say("Taxes Rock");
	                break;
	        }
	    }
	}
	
};

module.exports = roleTaunter;