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
                var wall = rangeFinder.findNextWallToRepair(HOMEROOM.getSpawn());
	            var other = rangeFinder.findStructureBelow10PercentHits(HOMEROOM.getSpawn());
	    
	            var target = wall ? wall : other;
                
                tower.repair(target);
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