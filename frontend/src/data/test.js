const arr = [
    {
        id: 1,
        name: 'bilal',
        price: 0
    },
    {
        id: 2,
        name: 'anxy',
        price: 20
    },


]

// FUNCTION FOR CART HANDLING
let temp = [];
let obj = [];
// let obj = arr.filter(x => x.id === 1)

temp.push(arr.find(x => x.id === 1))

obj.push(temp[0])
// temp = []
// CLEAR EVERYTHING FROM THE TEMP ARRAY AFTER PUSHING


console.log(temp)
console.log(obj)

// FUNCTION FOR WISHLIST WILL BE THE SAME AND WHEN THE USER WANTS TO
// ADD THE WISHLIST TO THE CART, WE JUST COPY THE WISHLIST ARRAY TO THE
// CART ARRAY, ! BUT !
// THE PROBLEM ARISES IF THE CART ARRAY ALREADY HAS ITEMS



