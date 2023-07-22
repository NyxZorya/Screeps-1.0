var rangeFinder = require('helper.rangefinder');
var HOMEROOM = require('constants.homeroom');

var roleExcavator = {

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        var mineral = HOMEROOM.getObject("5bbcb13c40062e4259e92cb6");
        var _storage = HOMEROOM.getStorage();
        var droppedLem = rangeFinder.findDroppedLemergium(creep);
        
        if(!creep.memory.mining)
        {
            if(creep.transfer(HOMEROOM.getStorage(), RESOURCE_LEMERGIUM, creep.store.getUsedCapacity(RESOURCE_LEMERGIUM)) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(HOMEROOM.getStorage());
            }
            
            if(creep.store.getUsedCapacity(RESOURCE_LEMERGIUM) == 0)
            {
                creep.memory.mining = true;
            }
        }
        else
        {
            if(droppedLem)
            {
                if(creep.pickup(droppedLem) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(droppedLem);
                }
            }
            
            if(creep.harvest(mineral) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(mineral);
            }
            
            if(creep.store.getFreeCapacity(RESOURCE_LEMERGIUM) == 0)
            {
                creep.memory.mining = false;
            }
        }
	}
	
};

module.exports = roleExcavator;