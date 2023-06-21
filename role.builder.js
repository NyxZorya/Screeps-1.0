var rangeFinder = require('helper.rangefinder');
var repairer = require('role.repairer');
var HOMEROOM = require('constants.homeroom');

var roleBuilder = 
{

    /** @param {Creep} creep **/
    run: function(creep) {
        
        const buildTarget = rangeFinder.findMostRecentConstructionProject(creep);
        const nonEmptyContainer = rangeFinder.findNextNonEmptyContainer(creep);
        var energyTarget;
        
        var storageTarget = HOMEROOM.getStorage();
        var droppedEnergy = rangeFinder.findDroppedEnergy(creep);
        
        var withdrawal = false;

        if(creep.ticksToLive < 50) 
        {
            creep.suicide();
        }
        else if(!buildTarget) 
        {
            repairer.run(creep);
        }
        else 
        {
            if(!creep.memory.building) 
            {
                if(storageTarget)
                {
                    if(storageTarget.store.getUsedCapacity(RESOURCE_ENERGY) != 0)
                    {
                        energyTarget = storageTarget;
                        
                        withdrawal = true;
                    }
                    else
                    {
                        energyTarget = droppedEnergy;
                    }
                }
                else
                {
                    energyTarget = droppedEnergy;
                }
                
                // Harvest
                if(withdrawal)
                {
                    if(creep.withdraw(energyTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(energyTarget);
                    }
                }
                else
                {
                    if(!energyTarget)
                    {
                        creep.moveTo(Game.flags["Stage"]);
                    }
                    else
                    {
                        if(creep.pickup(energyTarget) == ERR_NOT_IN_RANGE) 
                        {
                            if(HOMEROOM.getController().level == 8)
                            {
                                creep.moveTo(Game.flags["Stage"]);
                            }
                            else
                            {
                                creep.moveTo(energyTarget);
                            }
                        }
                    }
                }
                
                if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) 
                {
                    creep.memory.building = true;
                }
            }
            else 
            {
                if(creep.build(buildTarget) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(buildTarget);
                }
                
                if(creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) 
                {
                    creep.memory.building = false;
                }
            }
        }
	}
	
};

module.exports = roleBuilder;