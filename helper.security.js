var rangeFinder = require('helper.rangefinder');
var HOMEROOM = require('constants.homeroom');

var helperSecurity = 
{

    checkForInvasion: function()
    {
        const TARGET = rangeFinder.findNearestEnemy(HOMEROOM.getSpawn());

        if(TARGET) 
        {
            HOMEROOM.invaded(true);
        }
        else
        {
            HOMEROOM.invaded(false);
        }
    }
	
};

module.exports = helperSecurity;