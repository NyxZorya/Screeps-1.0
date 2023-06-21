var roleSpawn = require('role.spawn');
var creeps = require('helper.creeprunner');
var systemManagement = require('system.management');
var security = require('helper.security');
var HOMEROOM = require('constants.homeroom');
var GAMEPHASE = require('evaluator.gamephase');
var energyManager = require('manager.energy');
var rangeFinder = require('helper.rangefinder');
var objHelper = require('helper.obj');
var ROLETYPES = require('constants.roletypes');

module.exports.loop = function () 
{
    energyManager.moveEnergy();
    
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
    
            roleSpawn.fillEmptyRoles(); 

            // Check which structures need to be replaced
            
            systemManagement.clearMemory();
        }
        else
        {
            console.log("Storage: " + HOMEROOM.getStorage());
            
            creeps.run();
        }
    }
}