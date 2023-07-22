var soldier = require('role.soldier');
var builder = require('role.builder');
var upgrader = require('role.upgrader');
var repairer = require('role.repairer');
var harvester = require('role.harvester');
var mule = require('role.mule');
var towerRunner = require('role.tower');
var excavator = require('role.excavator');
var taunter = require('role.taunter');
var HOMEROOM = require('constants.homeroom');

var creepRunner = 
{
    
    run: function() 
    {
        for(var name in Game.creeps) 
        {
            var creep = Game.creeps[name];

            switch(creep.memory.role) 
            {
                case 'harvester':
                    harvester.run(creep);
                    break;
                case 'builder':
                    builder.run(creep);
                    break;
                case 'upgrader':
                    upgrader.run(creep);
                    break;
                case 'soldier':
                    soldier.run(creep);
                    break;
                case 'repairer':
                    repairer.run(creep);
                    break;
                case 'mule':
                    mule.run(creep);
                    break;
                case 'excavator':
                    excavator.run(creep);
                    break;
                case 'taunter':
                    taunter.run(creep);
                    break;
                default:
                    console.log("Unknown creep role: " + creep.memory.role);
            }
        }

        towerRunner.run(Game.getObjectById("649320c3a9652862c08bdf4d"));
        towerRunner.run(Game.getObjectById("64933967762a9ed3720f1aa5"));
        towerRunner.run(Game.getObjectById("64934d43e546fec427c3bc56"));
        towerRunner.run(Game.getObjectById("649c57238e2b1102205d8dc2"));
        towerRunner.run(Game.getObjectById("649c5c23e27ccbd284b63dc1"));
        towerRunner.run(Game.getObjectById("649c613eef81d083dc7e54b6"));
    }
    
};

module.exports = creepRunner;