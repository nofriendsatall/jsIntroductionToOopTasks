// BEGIN
function make(numerator = 0,denominator = 0) {
    return {
    numerator : numerator,
    denominator : denominator,

    setNumer : function(number) {
        numerator = number
    },

    setDenom : function(number) {
        denominator = number
    },

    getNumer : function() {
        return numerator
    },

    getDenom : function() {
        return denominator
    },

    toString : function() {
        return `${numerator}/${denominator}`
    },

    add : function(other) {
        return make((numerator * other.getDenom() + denominator * other.getNumer()),(denominator * other.getDenom()))
    }
    }
}
// END

export default make
