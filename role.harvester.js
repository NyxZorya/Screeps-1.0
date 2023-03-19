var HOMEROOM = require('constants.homeroom');
var roleMule = require('role.mule');

var roleHarvester = 
{

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        var muleCount = _(Game.creeps).filter( { memory: { role: 'mule' } } ).size();
        
        if(creep.ticksToLive < 10) 
        {
            creep.drop(RESOURCE_ENERGY, creep.store.getUsedCapacity(RESOURCE_ENERGY));
            creep.say("☠");
            creep.suicide();
            return;
        }
        else if((creep.memory.muling || muleCount == 0) && creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0)
        {
            roleMule.run(creep);
        }
        else 
        {
            if(creep.harvest(HOMEROOM.getEnergySource(creep.memory.source)) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(HOMEROOM.getEnergySource(creep.memory.source));
            }

            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) 
            {
                creep.memory.harvesting = false;
                creep.drop(RESOURCE_ENERGY, creep.store.getCapacity(RESOURCE_ENERGY));
            }
        }
    }

};

module.exports = roleHarvester;