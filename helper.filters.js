var RESOURCES = require('constants.resources');
var STRUCTURES = require('constants.structures');

var helperFilters = 
{
    
    closestStructure: function(obj, _structure)
    {
        try
        {
            return obj.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) =>
                {
                    return (structure.structureType = _structure);
                }
            });
        }
        catch
        {
            console.log("Error Filtering: " + _structure);
        }
    },
    
    structureByHitsUnder: function(obj, _structure, _hits)
    {
        try
        {
            return obj.room.find(FIND_STRUCTURES, {
                filter: (structure) =>
                {
                    return (structure.structureType == _structure) &&
                    structure.hits < _hits;
                }
            });
        }
        catch
        {
            console.log("Error Filtering: " + _structure);
        }
    }
    
};

module.exports = helperFilters;