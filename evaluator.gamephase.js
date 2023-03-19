var HOMEBASE = require('constants.homeroom');
var ROLETYPES = require('constants.roletypes');
var EnergyManager = require('manager.energy');

var GAMEPHASE = 
{
    
    evaluate: function()
    {
        // 0 = Fresh Spwan
        // 1 = Early
        // 2 = Middle
        // 3 = Late

        if(HOMEBASE.getController().level == 1 && HOMEROOM.getNumOf(ROLETYPES.Harvester()) == 0)
        {
            HOMEBASE.setGamePhase(0);
        }
        else if(HOMEBASE.getController().level >= 1 && HOMEBASE.getController().level <= 3)
        {
            HOMEBASE.setGamePhase(1);
        }
        else if(HOMEBASE.getController().level >= 4 && HOMEBASE.getController().level <= 6)
        {
            HOMEBASE.setGamePhase(2);
        }
        else
        {
            HOMEBASE.setGamePhase(3);
        }

        //this.evaluateEnergy();
    },

    evaluateEnergy: function() 
    {
        var totalEnergyCapacity = EnergyManager.getEnergyCapacity();

        if(totalEnergyCapacity < 400)
        {
            return 0;
        }
        else if(totalEnergyCapacity >= 400 && totalEnergyCapacity < 500)
        {
            return 1;
        }
        else if(totalEnergyCapacity >= 500 && totalEnergyCapacity < 600)
        {
            return 2;
        }
        else if(totalEnergyCapacity >= 600 && totalEnergyCapacity < 700)
        {
            return 3;
        }
        else if(totalEnergyCapacity >= 700 && totalEnergyCapacity < 800)
        {
            return 4;
        }
        else if(totalEnergyCapacity >= 800 && totalEnergyCapacity < 900)
        {
            return 5;
        }
        else if(totalEnergyCapacity >= 900)
        {
            return 6;
        }
    }
    
};

module.exports = GAMEPHASE;