import _ from 'lodash';

// BEGIN
export default class Cart{
    constructor(){
        this.itemArray = []
    }
    addItem(item,count){
        this.itemArray.push({item,count})

    }

    getItems(){
        return this.itemArray
    }

    getCost(){
        let totalCost = 0

        this.itemArray.forEach((item)=>{totalCost += item.item.price * item.count})

        return totalCost
    }

    getCount(){
        let totalCount = 0

        this.itemArray.forEach((item)=>{totalCount += item.count;})

        return totalCount
    }
}
// END
