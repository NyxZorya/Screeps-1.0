var soldier = require('role.soldier');
var builder = require('role.builder');
var upgrader = require('role.upgrader');
var repairer = require('role.repairer');
var harvester = require('role.harvester');
var mule = require('role.mule');
var towerRunner = require('role.tower');
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
                default:
                    console.log("Unknown creep role: " + creep.memory.role);
            }
        }

        towerRunner.run(Game.getObjectById("6417a708e02dfd7aab44eb6d"));
        towerRunner.run(Game.getObjectById("63f32ae83e03b7687998380e"));
        towerRunner.run(Game.getObjectById("6417b50a878b573e2308af4c"));
    }
    
};

module.exports = creepRunner;