var rangeFinder = require('helper.rangefinder');
var HOMEROOM = require('constants.homeroom');

var roleMule = {

    /** @param {Creep} creep **/
    run: function(creep) 
    {

        if(creep.memory.role == 'harvester' && !creep.memory.muling) 
        {
            creep.memory.taskToComplete = 'spawn';
            creep.memory.muling = true;
        }
        else if(!creep.memory.taskToComplete) 
        {
            creep.memory = {role: 'mule', muling: true, taskToComplete: 'spawn'};
        }

        if(creep.memory.muling) 
        {
            const spawn = HOMEROOM.getSpawn();

            switch(creep.memory.taskToComplete) 
            {
                case 'spawn':
                    this.spawnTask(creep);
                    break;
                case 'extension':
                    this.extensionTask(creep);
                    break;
                case 'container':
                    this.containerTask(creep);
                    break;
                case 'storage':
                    this.storageTask(creep);
                    break;
                case 'tower':
                    this.towerTask(creep);
                    break;
                case 'controller':
                    this.controllerTask(creep);
                    break;
                default:
                    console.log("Unknown Task: " + creep.memory.taskToComplete);
            }

            if(creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) 
            {
                creep.memory.muling = false;
            }
        }
        else 
        {
            var energyTarget;
            var withdrawl = false;
            
            var link = rangeFinder.findNearestLink(HOMEROOM.getSpawn());
            var term = HOMEROOM.getTerminal();
            
            if(HOMEROOM.getNumOfLinks() == 2 && link.store.getUsedCapacity(RESOURCE_ENERGY) > 0)
            {
                energyTarget = link;
                
                withdrawl = true;
            }
            else if(HOMEROOM.getNumOfTerminals() == 1 && term.store.getUsedCapacity(RESOURCE_ENERGY) > 0)
            {
                energyTarget = term;
                
                withdrawl = true;
            }
            else
            {
                energyTarget = rangeFinder.findDroppedEnergy(creep);
            }
            
            if(!energyTarget)
            {
                creep.moveTo(Game.flags["1"]);
            }
            else
            {
                if(withdrawl)
                {
                    if(creep.withdraw(energyTarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(energyTarget);
                    }
                }
                else
                {
                    if(creep.pickup(energyTarget) == ERR_NOT_IN_RANGE) 
                    {
                        if(HOMEROOM.getController().level == 8)
                        {
                            creep.moveTo(Game.flags["1"]);
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
                creep.memory.muling = true;
            }
        }
        
    },

    spawnTask: function(creep) 
    {
        const spawn = HOMEROOM.getSpawn();

        if(spawn.store.getFreeCapacity(RESOURCE_ENERGY) != 0) 
        {
            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(spawn);
            }
        }
        else 
        {
            if(HOMEROOM.getSpawn().memory.invaded) 
            {
                creep.memory.taskToComplete = 'tower';
            }
            else 
            {
                creep.memory.taskToComplete = 'extension';
            }
        }
    },

    extensionTask: function(creep) 
    {
        const EXTENSION = HOMEROOM.getNextUnfilledExtension();
        
        if(!EXTENSION) 
        {
            creep.memory.taskToComplete = "container";
        }
        else 
        {
            if(creep.store.getUsedCapacity(RESOURCE_ENERGY) != 0) 
            {
                if(creep.transfer(EXTENSION, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(EXTENSION);
                }
            }
            else
            {
                creep.memory.taskToComplete = 'spawn';
            }
        }
    },

    containerTask: function(creep) 
    {
        const CONTAINER = HOMEROOM.findNextUnfilledContainer();

        if(!CONTAINER) 
        {
            creep.memory.taskToComplete = "tower";
        }
        else 
        {
            if(creep.store.getUsedCapacity(RESOURCE_ENERGY) != 0) 
            {
                if(creep.transfer(CONTAINER, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(CONTAINER);
                }
            }
            else 
            {
                creep.memory.taskToComplete = 'spawn';
            }
        }
    },

    towerTask: function(creep) 
    {
        const TOWER = HOMEROOM.getNextUnfilledTower();

        if(!TOWER || TOWER.store.getFreeCapacity(RESOURCE_ENERGY) == 0) 
        {
            creep.memory.taskToComplete = "storage";
        }
        else 
        {
            if(creep.store.getUsedCapacity(RESOURCE_ENERGY) != 0) 
            {
                if(creep.transfer(TOWER, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(TOWER);
                }
            }
            else 
            {
                creep.memory.taskToComplete = 'spawn';
            }
        }
    },
    
    storageTask: function(creep) 
    {
        const STORAGE = HOMEROOM.getStorage();
        
        if(!STORAGE || STORAGE.store.getFreeCapacity(RESOURCE_ENERGY) == 0 || STORAGE.store.getUsedCapacity(RESOURCE_ENERGY) >= 500000)
        {
            if(HOMEROOM.getController().level == 8)
            {
                creep.memory.taskToComplete = "spawn";
            }
            else
            {
                creep.memory.taskToComplete = "controller";
            }
        }
        else
        {
            if(creep.store.getUsedCapacity(RESOURCE_ENERGY) != 0)
            {
                if(creep.transfer(STORAGE, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(STORAGE);
                }
            }
            else
            {
                creep.memory.taskToComplete = 'spawn';
            }
        }
    },

    controllerTask: function(creep) 
    {
        const controller = HOMEROOM.getController();

        if(creep.store.getUsedCapacity(RESOURCE_ENERGY) != 0) 
        {
            if(creep.transfer(controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(controller);
            }
        }
        else 
        {
            creep.memory.taskToComplete = 'spawn';
        }
    }

};

module.exports = roleMule;