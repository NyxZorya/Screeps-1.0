var roleSpawn = require('role.spawn');
var creeps = require('helper.creeprunner');
var systemManagement = require('system.management');
var security = require('helper.security');
var HOMEROOM = require('constants.homeroom');
var GAMEPHASE = require('evaluator.gamephase');
var energyManager = require('manager.energy');

module.exports.loop = function () 
{
    if(HOMEROOM.getPhase() == 0)
    {
        // Plan Roads

        // Spawn first creep
    }
    else
    {
        if(Game.time % 10 == 0)
        {
            security.checkForInvasion();
        }
        if(Game.time % 50 == 0)
        {
            GAMEPHASE.evaluate();
    
            if(energyManager.energyIsAtCapacity())
            {
                roleSpawn.fillEmptyRoles(); 
            }

            // Check which structures need to be replaced
    
            systemManagement.clearMemory();
        }
        else
        {
            creeps.run();
        }
    }
}