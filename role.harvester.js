var HOMEROOM = require('constants.homeroom');
var roleMule = require('role.mule');

var roleHarvester = 
{

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        var muleCount = _(Game.creeps).filter( { memory: { role: 'mule' } } ).size();
        
        
        if(muleCount > 0)
        {
            creep.memory.muling = false;
        }
        
        if((creep.memory.muling || muleCount == 0) && creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0)
        {
            roleMule.run(creep);
        }
        else 
        {
            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) 
            {
                creep.memory.harvesting = false;
                
                if(HOMEROOM.getNumOfLinks() == 2)
                {
                    if(creep.transfer(HOMEROOM.getObject("648fa97c499a6b1576c9d2e7"), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(HOMEROOM.getObject("648fa97c499a6b1576c9d2e7"));
                    }
                }
                else
                {   
                    creep.drop(RESOURCE_ENERGY, creep.store.getCapacity(RESOURCE_ENERGY));
                }
            }
            else 
            {
                if(creep.harvest(HOMEROOM.getEnergySource(creep.memory.source)) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(HOMEROOM.getEnergySource(creep.memory.source));
                }
            }
        }
    }

};

module.exports = roleHarvester;