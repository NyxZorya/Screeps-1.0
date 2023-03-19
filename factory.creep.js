var HOMEROOM = require('constants.homeroom');
var ROLETYPES = require('constants.roletypes');
var GamePhase = require('evaluator.gamephase');
var energyManager = require('manager.energy');

var creepFactory = 
{

    spawnHarvester: function()
    {
        var energyLocation = energyManager.nextAvailableEnergySource();
        var timeName = Game.time.toString().substring(Game.time.toString().length - 4, Game.time.toString().length - 1);

        var phase = GamePhase.evaluateEnergy();

        if(HOMEROOM.getNumOf("harvester") == 0) 
        {
            phase = 0;
        }

        switch(phase) {
            case 0:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,CARRY,MOVE], "H" + timeName, {memory: {role: ROLETYPES.Harvester(), unloading: "false", source: energyLocation}});
            break;
            
            case 1:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,MOVE], "H" + timeName, {memory: {role: ROLETYPES.Harvester(), unloading: "false", source: energyLocation}});
            break;

            case 2:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,CARRY,MOVE], "H" + timeName, {memory: {role: ROLETYPES.Harvester(), unloading: "false", source: energyLocation}});
            break;

            case 3:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], "H" + timeName, {memory: {role: ROLETYPES.Harvester(), unloading: "false", source: energyLocation}});
            break;

            case 4:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], "H" + timeName, {memory: {role: ROLETYPES.Harvester(), unloading: "false", source: energyLocation}});
            break;

            case 5:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], "H" + timeName, {memory: {role: ROLETYPES.Harvester(), unloading: "false", source: energyLocation}});
            break;

            case 6:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], "H" + timeName, {memory: {role: ROLETYPES.Harvester(), unloading: "false", source: energyLocation}});
            break;

            default:
              console.log("Unknown Energy Value - Unable to spawn creep");
          }
    },

    spawnMule: function()
    {
        var timeName = Game.time.toString().substring(Game.time.toString().length - 4, Game.time.toString().length - 1);

        var phase = GamePhase.evaluateEnergy();

        if(HOMEROOM.getNumOf("mule") == 0) 
        {
            phase = 0;
        }

        switch(phase) {
            case 0:
                HOMEROOM.getSpawn().spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], "M" + timeName, {memory: {role: ROLETYPES.Mule(), muling: "false"}});
            break;
            
            case 1:
                HOMEROOM.getSpawn().spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], "M" + timeName, {memory: {role: ROLETYPES.Mule(), muling: "false"}});
            break;

            case 2:
                HOMEROOM.getSpawn().spawnCreep([WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], "M" + timeName, {memory: {role: ROLETYPES.Mule(), muling: "false"}});
            break;

            case 3:
                HOMEROOM.getSpawn().spawnCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], "M" + timeName, {memory: {role: ROLETYPES.Mule(), muling: "false"}});
            break;

            case 4:
                HOMEROOM.getSpawn().spawnCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], "M" + timeName, {memory: {role: ROLETYPES.Mule(), muling: "false"}});
            break;

            case 5:
                HOMEROOM.getSpawn().spawnCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], "M" + timeName, {memory: {role: ROLETYPES.Mule(), muling: "false"}});
            break;

            case 6:
                HOMEROOM.getSpawn().spawnCreep([WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], "M" + timeName, {memory: {role: ROLETYPES.Mule(), muling: "false"}});
            break;

            default:
              console.log("Unknown Energy Value - Unable to spawn creep");
          }
    },

    spawnBuilder: function()
    {
        var timeName = Game.time.toString().substring(Game.time.toString().length - 4, Game.time.toString().length - 1);

        switch(GamePhase.evaluateEnergy()) {
            case 0:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,CARRY,MOVE], "B" + timeName, {memory: {role: ROLETYPES.Builder()}});
            break;
            
            case 1:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], "B" + timeName, {memory: {role: ROLETYPES.Builder()}});
            break;

            case 2:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], "B" + timeName, {memory: {role: ROLETYPES.Builder()}});
            break;

            case 3:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], "B" + timeName, {memory: {role: ROLETYPES.Builder()}});
            break;

            case 4:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], "B" + timeName, {memory: {role: ROLETYPES.Builder()}});
            break;

            case 5:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], "B" + timeName, {memory: {role: ROLETYPES.Builder()}});
            break;

            case 6:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], "B" + timeName, {memory: {role: ROLETYPES.Builder()}});
            break;

            default:
              console.log("Unknown Energy Value - Unable to spawn creep");
          }
    },

    spawnUpgrader: function()
    {
        var timeName = Game.time.toString().substring(Game.time.toString().length - 4, Game.time.toString().length - 1);

        switch(GamePhase.evaluateEnergy()) {
            case 0:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,CARRY,MOVE], "U" + timeName, {memory: {role: ROLETYPES.Upgrader(), upgrading: "false"}});
            break;
            
            case 1:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], "U" + timeName, {memory: {role: ROLETYPES.Upgrader(), upgrading: "false"}});
            break;

            case 2:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], "U" + timeName, {memory: {role: ROLETYPES.Upgrader(), upgrading: "false"}});
            break;

            case 3:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], "U" + timeName, {memory: {role: ROLETYPES.Upgrader(), upgrading: "false"}});
            break;

            case 4:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], "U" + timeName, {memory: {role: ROLETYPES.Upgrader(), upgrading: "false"}});
            break;

            case 5:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], "U" + timeName, {memory: {role: ROLETYPES.Upgrader(), upgrading: "false"}});
            break;

            case 6:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE], "U" + timeName, {memory: {role: ROLETYPES.Upgrader(), upgrading: "false"}});
            break;

            default:
              console.log("Unknown Energy Value - Unable to spawn creep");
          }
    },

    spawnRepairer: function()
    {
        var timeName = Game.time.toString().substring(Game.time.toString().length - 4, Game.time.toString().length - 1);

        switch(GamePhase.evaluateEnergy()) {
            case 0:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,CARRY,MOVE], "R" + timeName, {memory: {role: ROLETYPES.Repairer(), repairing: false}});
            break;
            
            case 1:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], "R" + timeName, {memory: {role: ROLETYPES.Repairer(), repairing: false}});
            break;

            case 2:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], "R" + timeName, {memory: {role: ROLETYPES.Repairer(), repairing: false}});
            break;

            case 3:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], "R" + timeName, {memory: {role: ROLETYPES.Repairer(), repairing: false}});
            break;

            case 4:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], "R" + timeName, {memory: {role: ROLETYPES.Repairer(), repairing: false}});
            break;

            case 5:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], "R" + timeName, {memory: {role: ROLETYPES.Repairer(), repairing: false}});
            break;

            case 6:
                HOMEROOM.getSpawn().spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], "R" + timeName, {memory: {role: ROLETYPES.Repairer(), repairing: false}});
            break;

            default:
              console.log("Unknown Energy Value - Unable to spawn creep");
          }
    },

    spawnSoldier: function(guardLocation)
    {
        var timeName = Game.time.toString().substring(Game.time.toString().length - 4, Game.time.toString().length - 1);

        switch(GamePhase.evaluateEnergy()) {
            case 0:
                HOMEROOM.getSpawn().spawnCreep([RANGED_ATTACK,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], "S" + timeName, {memory: {role: ROLETYPES.Soldier(), location: guardLocation}});
            break;
            
            case 1:
                HOMEROOM.getSpawn().spawnCreep([RANGED_ATTACK,RANGED_ATTACK,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], "S" + timeName, {memory: {role: ROLETYPES.Soldier(), location: guardLocation}});
            break;

            case 2:
                HOMEROOM.getSpawn().spawnCreep([RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], "S" + timeName, {memory: {role: ROLETYPES.Soldier(), location: guardLocation}});
            break;

            case 3:
                HOMEROOM.getSpawn().spawnCreep([RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], "S" + timeName, {memory: {role: ROLETYPES.Soldier(), location: guardLocation}});
            break;

            case 4:
                HOMEROOM.getSpawn().spawnCreep([RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], "S" + timeName, {memory: {role: ROLETYPES.Soldier(), location: guardLocation}});
            break;

            case 5:
                HOMEROOM.getSpawn().spawnCreep([RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], "S" + timeName, {memory: {role: ROLETYPES.Soldier(), location: guardLocation}});
            break;

            case 6:
                HOMEROOM.getSpawn().spawnCreep([RANGED_ATTACK,RANGED_ATTACK,MOVE,MOVE,MOVE,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH], "S" + timeName, {memory: {role: ROLETYPES.Soldier(), location: guardLocation}});
            break;

            default:
              console.log("Unknown Energy Value - Unable to spawn creep");
          }
    }
	
};

module.exports = creepFactory;