var HOMEROOM = require('constants.homeroom');
var filter = require('helper.filters');
var STRUCTURES = require('constants.structures');

var helperRangeFinder = 
{
    
    findBase: function() 
    {
        return HOMEROOM.getSpawn();
    },

    findController: function() 
    {
        return HOMEROOM.getController();
    },

    findNearestEnergyResource: function(creep) 
    {
        return creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    },
    
    findMostRecentConstructionProject: function(creep) 
    {
        return creep.room.find(FIND_CONSTRUCTION_SITES)[0];
    },
    
    findNearestEnemy: function(creep) 
    {
        return creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    },
    
    findNearestEnergyResourceToBase: function() 
    {
        return Game.spawns[HOMEROOM.getSpawn()].findClosestByPath(FIND_SOURCES_ACTIVE);
    },
    
    findActiveEnergySource: function(creep) 
    {
        return creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    },
    
    findNearestSpawn: function(creep) 
    {
        return creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_SPAWN);
            }
        });
    },

    findDroppedEnergy: function(creep) 
    {
        return creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
    },
    
    findDroppedLemergium: function(creep)
    {
        // TODO: Change this to only look for Lemergium in homeroom
        return creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES);
    },
    
    findNextStructureToRepair: function(creep)
    {
        return creep.room.find(FIND_STRUCTURES, 
        {
            filter: object => object.hits < 5000
        })[0];
    },
    
    findStructureBelow10PercentHits: function(creep)
    {
        return creep.room.find(FIND_STRUCTURES,
        {
            filter: (structure) =>
            {
                return (structure.structureType != STRUCTURE_WALL) &&
                (structure.hits / structure.hitsMax) <= .25;
            }
        })[0];
    },
    
    findNextContainerToRepair: function(creep)
    {
        return filter.structureByHitsUnder(creep, STRUCTURES.Container(), 5000);
    },
    
    findNextNonEmptyContainer: function(creep) 
    {
        return creep.room.find(FIND_STRUCTURES, {
           filter: (structure) => 
           {
                return (structure.structureType == STRUCTURE_CONTAINER) &&
                structure.store.getUsedCapacity(RESOURCE_ENERGY) > 0;
           } 
        })[0];
    },
    
    findNextWallToRepair: function(creep)
    {
        return filter.structureByHitsUnder(creep, STRUCTURES.Wall(), 5000)[0];
    },
    
    findNextRoadToRepair: function(creep)
    {
        return filter.structureByHitsUnder(creep, STRUCTURES.Road(), 5000);  
    },
    
    findHomeSpawn: function() 
    {
        return HOMEROOM.getSpawn();
    },
    
    findNearestController: function(creep)
    {
        return creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_CONTROLLER);
            }
        });
    },
    
    findNearestControllerToBase: function() 
    {
        return HOMEROOM.getSpawn().findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_CONTROLLER);
            }
        });
    },
    
    findClosestLinkToBase: function()
    {
        return HOMEROOM.getSpawn().pos.findCLosestByPath(FIND_STRUCTURES, {
           filter: (structure) =>
           {
               return (structure.structureType == STRUCTURE_LINK);
           }
        });
    },
    
    findFurthestLinkFromBase: function()
    {
        var links = HOMEROOM.getSpawn().find(STRUCTURE_ROAD);
    },
    
    findNearestLink: function(obj)
    {
        return obj.pos.findClosestByPath(FIND_STRUCTURES, {
           filter: (structure) =>
           {
               return (structure.structureType == STRUCTURE_LINK);
           }
        });
    },
    
    findStorage: function(obj)
    {
        return obj.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_STORAGE)
            }
        });
    }
};

module.exports = helperRangeFinder;