var ROLETYPES = require('constants.roletypes');
var RESOURCES = require('constants.resources');
var STRUCTURES = require('constants.structures');

var HOMEROOM = 
{
    
    getName: function() 
    {
        return "W51N25";
    },

    getSpawn: function() 
    {
        return Game.rooms[this.getName()].find(FIND_MY_SPAWNS)[0];
    },

    getController: function() 
    {
        return Game.rooms[this.getName()].controller;
    },

    getTower: function()
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURES.Tower());
            }
        })[0];
    },
    
    getTowers: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURES.Tower());
            }
        });
    },

    getNextUnfilledTower: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURES.Tower()
                     && structure.store.getFreeCapacity(RESOURCES.Energy()) != 0);
            }
        })[0];
    },
    
    getStorage: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURES.Storage());
            }
        })[0];   
    },

    getExtensions: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURES.Extension());
            }
        });
    },
    
    getNextUnfilledExtension: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURES.Extension()
                     && structure.store.getFreeCapacity(RESOURCES.Energy()) != 0);
            }
        })[0];
    },

    getContainers: function() 
    {
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURES.Container()
        });
    },
    
    findNextUnfilledContainer: function() 
    {
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURES.Container()
                                && structure.store.getFreeCapacity(RESOURCES.Energy()) != 0
        })[0];
    },

    getEnergySource: function(index) 
    {
        return this.getSpawn().room.find(FIND_SOURCES_ACTIVE)[index];
    },
    
    getNumOf: function(role)
    {
        switch(role)
        {
            case ROLETYPES.Harvester():
                return _(Game.creeps).filter( { memory: { role: ROLETYPES.Harvester() } } ).size();
            case ROLETYPES.Mule():
                return _(Game.creeps).filter( { memory: { role: ROLETYPES.Mule() } } ).size();
            case ROLETYPES.Builder():
                return _(Game.creeps).filter( { memory: { role: ROLETYPES.Builder() } } ).size();
            case ROLETYPES.Repairer():
                return _(Game.creeps).filter( { memory: { role: ROLETYPES.Repairer() } } ).size();
            case ROLETYPES.Soldier():
                return _(Game.creeps).filter( { memory: { role: ROLETYPES.Soldier() } } ).size();
            case ROLETYPES.Upgrader():
                return _(Game.creeps).filter( { memory: { role: ROLETYPES.Upgrader() } } ).size();
        }
    },

    getSpawnHits: function() 
    {
        return this.getSpawn().hits;
    },

    setGamePhase: function(phase)
    {
        this.getSpawn().memory.phase = phase;
    },

    getPhase: function() 
    {
        return this.getSpawn().memory.phase;
    },

    invaded: function(status)
    {
        this.getSpawn().memory.invaded = status;
    },
    
    getNumberOfConstructionProjects: function()
    {
        return Game.rooms[this.getName()].find(FIND_CONSTRUCTION_SITES).length;
    },
    
    getNumOfLinks: function()
    {   
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure => structure.structureType == STRUCTURES.Link())
        }).length;
    },
    
    getNumOfTerminals: function()
    {
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure => structure.structureType == STRUCTURES.Terminal())
        }).length;
    },
    
    getTerminal: function()
    {
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure => structure.structureType == STRUCTURES.Terminal())
        })[0];
    },
    
    getStorage: function()
    {
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure => structure.structureType == STRUCTURES.Storage())
        })[0];
    },
    
    getObject: function(id)
    {
        return Game.getObjectById(id);
    }
    
};

module.exports = HOMEROOM;