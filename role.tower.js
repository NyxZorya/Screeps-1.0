var rangeFinder = require('helper.rangefinder');
var HOMEROOM = require('constants.homeroom');

var roleTower = {

    /** @param {Tower} tower **/
    run: function(tower) 
    {
        const TARGET = rangeFinder.findNearestEnemy(HOMEROOM.getSpawn());
        
        if(!TARGET) 
        {
            HOMEROOM.getSpawn().memory.invaded = false;

            if(HOMEROOM.getNumOf("repairer") == 0)
            {
                tower.repair(rangeFinder.findNextStructureToRepair(HOMEROOM.getSpawn()));
            }
        }
        else 
        {
            HOMEROOM.getSpawn().memory.invaded = true;

            tower.attack(TARGET);
        }
	}
	
};

module.exports = roleTower;