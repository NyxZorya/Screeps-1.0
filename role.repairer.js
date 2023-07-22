var rangeFinder = require('helper.rangefinder');

var roleRepairer = 
{

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        var containerTarget = rangeFinder.findNextContainerToRepair(creep);
        const nonEmptyContainer = rangeFinder.findNextNonEmptyContainer(creep);
        var wallTarget = rangeFinder.findNextWallToRepair(creep);
        var roadTarget = rangeFinder.findNextRoadToRepair(creep);
        var energyTarget = rangeFinder.findDroppedEnergy(creep);
        
        if(creep.memory.repairing) 
        {
            if(!containerTarget && !wallTarget && !roadTarget)
            {
                try 
                {
                    creep.moveTo(Game.flags["3"]);    
                } 
                catch (error) 
                {
                    console.log("Place a flag named '3'");
                }
            }
            else
            {
                if(containerTarget) 
                {
                    if(creep.repair(containerTarget) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(containerTarget);
                    }
                }
                else if(roadTarget) 
                {
                    if(creep.repair(roadTarget) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(roadTarget);
                    }
                }
                else if(wallTarget) 
                {
                    if(creep.repair(wallTarget) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(wallTarget);
                    }
                }
                
                if(creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) 
                {
                    creep.memory.repairing = false;
                }
            }
        }
        else 
        {
            if(nonEmptyContainer)
            {
                if(creep.withdraw(nonEmptyContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(nonEmptyContainer);
                }
            }
            else
            {
                if(!energyTarget)
                {
                    creep.moveTo(Game.flags["2"]);
                }
                else
                {
                    if(creep.pickup(energyTarget) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(energyTarget);
                    }
                }
            }

            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) 
            {
                creep.memory.repairing = true;
            }
        }
	}
	
};

module.exports = roleRepairer;