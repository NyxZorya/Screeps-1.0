var RESOURCES = require('constants.resources');

var helperObj = 
{
    
    usedEnergyCapacity: function(obj)
    {
        return obj.store.getUsedCapacity(RESOURCES.Energy);
    }
    
};

module.exports = helperObj;