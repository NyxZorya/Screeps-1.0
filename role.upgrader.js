var rangeFinder = require('helper.rangefinder');
var HOMEROOM = require('constants.homeroom');

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) 
    {
        const roomController = rangeFinder.findController();
        
        const nonEmptyContainer = rangeFinder.findNextNonEmptyContainer(creep);
        var energyTarget;
        
        var storageTarget = HOMEROOM.getStorage();
        var droppedEnergy = rangeFinder.findDroppedEnergy(creep);
        
        var withdrawal = false;
        
        if(creep.memory.upgrading) 
        {   
            if(HOMEROOM.getController().level == 8)
            {
                if(Game.time % 25 == 0)
                {
                    if(creep.upgradeController(roomController) == ERR_NOT_IN_RANGE) 
                    {
                        creep.moveTo(roomController);
                    }
                }
            }
            else
            {
                if(creep.upgradeController(roomController) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(roomController);
                }
            }
            
            if(creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) 
            {
                creep.memory.upgrading = false;
            }
        }
        else 
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
                        creep.moveTo(energyTarget);
                    }
                }
            }

            if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0) 
            {
                creep.memory.upgrading = true;
            }
        }
        
    }
};

module.exports = roleUpgrader;