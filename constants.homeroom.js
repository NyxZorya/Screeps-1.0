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
                return (structure.structureType == STRUCTURE_TOWER);
            }
        })[0];
    },
    
    getTowers: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_TOWER);
            }
        });
    },

    getNextUnfilledTower: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_TOWER
                     && structure.store.getFreeCapacity(RESOURCE_ENERGY) != 0);
            }
        })[0];
    },
    
    getStorage: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_STORAGE);
            }
        })[0];   
    },

    getExtensions: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_EXTENSION);
            }
        });
    },
    
    getNextUnfilledExtension: function() 
    {
        return this.getSpawn().room.find(FIND_MY_STRUCTURES, {
            filter: (structure) =>
            {
                return (structure.structureType == STRUCTURE_EXTENSION
                     && structure.store.getFreeCapacity(RESOURCE_ENERGY) != 0);
            }
        })[0];
    },

    getContainers: function() 
    {
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_CONTAINER
        });
    },
    
    findNextUnfilledContainer: function() 
    {
        return Game.rooms[this.getName()].find(FIND_STRUCTURES, {
            filter: (structure) => structure.structureType == STRUCTURE_CONTAINER
                                && structure.store.getFreeCapacity(RESOURCE_ENERGY) != 0
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
            case "harvester":
                return _(Game.creeps).filter( { memory: { role: 'harvester' } } ).size();
            case "mule":
                return _(Game.creeps).filter( { memory: { role: 'mule' } } ).size();
            case "builder":
                return _(Game.creeps).filter( { memory: { role: 'builder' } } ).size();
            case "repairer":
                return _(Game.creeps).filter( { memory: { role: 'repairer' } } ).size();
            case "soldier":
                return _(Game.creeps).filter( { memory: { role: 'soldier' } } ).size();
            case "upgrader":
                return _(Game.creeps).filter( { memory: { role: 'upgrader' } } ).size();
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
    }
};

module.exports = HOMEROOM;