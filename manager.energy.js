var HOMEROOM = require('constants.homeroom');

var managerEnergy = 
{

    nextAvailableEnergySource: function() 
    {
        var actualNumAtSource = 0;
        var sourceCap = 2;

        for(var name in Game.creeps) 
        {
            var creep = Game.creeps[name];

            if(creep.memory.source == 0) 
            {
                actualNumAtSource = actualNumAtSource + 1;
            }
        }

        if(actualNumAtSource < sourceCap) 
        {
            return 0;
        }
        else 
        {
            return 1;
        }
	},

    getEnergyCapacity: function()
    {
        return Game.rooms[HOMEROOM.getName()].energyCapacityAvailable;
    },

    getAvailableEnergy: function()
    {
        return Game.rooms[HOMEROOM.getName()].energyAvailable;
    },

    energyIsAtCapacity: function()
    {
        if((HOMEROOM.getNumOf("harvester")) == 0 || (HOMEROOM.getNumOf("mule") == 0))
        {
            if(this.getAvailableEnergy() >= 300)
            {
                return true;
            }
        }
        else
        {
            if(this.getEnergyCapacity() == this.getAvailableEnergy())
            {
                return true;
            }
        }

        return false;
    },
    
    moveEnergy: function()
    {
        var linkFrom = HOMEROOM.getObject("648fa97c499a6b1576c9d2e7");
        var linkTo = HOMEROOM.getObject("648f9b6e95641a28e7ed6099");
        
        if(linkFrom.store.getFreeCapacity(RESOURCE_ENERGY) <= 400)
        {
            linkFrom.transferEnergy(linkTo);
        }
    }
	
};

module.exports = managerEnergy;