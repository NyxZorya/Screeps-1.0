var soldierCounter = require('helper.soldiercounter');
var energyManager = require('manager.energy');
var HOMEROOM = require('constants.homeroom');
var ROLETYPES = require('constants.roletypes');
var CreepFactory = require('factory.creep');

var roleSpawn =
{

    fillEmptyRoles: function() 
    {
        var energyReserve = Game.rooms[HOMEROOM.getName()].energyAvailable;
        
        var timeName = Game.time.toString().substring(Game.time.toString().length - 4, Game.time.toString().length - 1);

        var harvesterCount  = HOMEROOM.getNumOf(ROLETYPES.Harvester());
        var upgraderCount   = HOMEROOM.getNumOf(ROLETYPES.Upgrader());
        var soldierCount    = HOMEROOM.getNumOf(ROLETYPES.Soldier());
        var builderCount    = HOMEROOM.getNumOf(ROLETYPES.Builder());
        var repairerCount   = HOMEROOM.getNumOf(ROLETYPES.Repairer());
        var muleCount       = HOMEROOM.getNumOf(ROLETYPES.Mule());
        var excavatorCount  = HOMEROOM.getNumOf(ROLETYPES.Excavator());
        var taunterCount    = HOMEROOM.getNumOf(ROLETYPES.Taunter());

        var harvesterCap = 3;
        var muleCap      = 4;
        var builderCap   = 0;
        var upgraderCap  = 5;
        var repairerCap  = 1;
        var soldierCap   = 2;
        var excavatorCap = 1;
        var taunterCap = 2;
        
        if(HOMEROOM.getSpawn().memory.invaded)
        {
            soldierCap = 5;
            
            if(soldierCount < soldierCap) 
            {
                var guardLocation = soldierCounter.countSoldiersAtFlags();
                        
                if(guardLocation != "nospawn") 
                {
                    console.log("Spawning Soldier");

                    CreepFactory.spawnSoldier(guardLocation);
                }
            }
        }
        else
        {
            if(harvesterCount == 1 && muleCount == 0)
            {
                harvesterCount = harvesterCap;
            }
            
            if(Game.rooms[HOMEROOM.getName()].find(FIND_CONSTRUCTION_SITES).length >= 1)
            {
                builderCap = 2;
                upgraderCap = 3;
            }
            
            if(HOMEROOM.getNumberOfConstructionProjects() > 10)
            {
                builderCap = 5;
                muleCap = 2;
                upgraderCap = 3;
            }
            
            if(HOMEROOM.getController().level == 8)
            {
                upgraderCap = 1;
                muleCap = 2;
            }

            if(harvesterCount < harvesterCap) 
            {
                console.log("Spawning Harvester");

                CreepFactory.spawnHarvester();
            }
            else if(muleCount < muleCap) 
            {
                console.log("Spawning Mule");

                CreepFactory.spawnMule();
            }
            else if(excavatorCount < excavatorCap)
            {
                console.log("Spawning Excavator");
                
                CreepFactory.spawnExcavator();
            }
            else if(builderCount < builderCap) 
            {
                console.log("Spawning Builder");

                CreepFactory.spawnBuilder();
            }
            else if(upgraderCount < upgraderCap) 
            {
                console.log("Spawning Upgrader");
            
                CreepFactory.spawnUpgrader();
            }
            //else if(repairerCount < repairerCap) 
            //{
                //console.log("Spawning Repairer");
            
                //CreepFactory.spawnRepairer();
            //}
            else if(soldierCount < soldierCap) 
            {
                var guardLocation = soldierCounter.countSoldiersAtFlags();
                        
                if(guardLocation != "nospawn") 
                {
                    console.log("Spawning Soldier");

                    CreepFactory.spawnSoldier(guardLocation);
                }
            }
            else if(taunterCount < taunterCap)
            {
                console.log("Spawning Taunter");
                
                CreepFactory.spawnTaunter();   
            }
            else 
            {
                console.log("No creep to spawn");
            }
        }
    }

}

module.exports = roleSpawn;