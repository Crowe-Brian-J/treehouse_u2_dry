const fruits = [
  { name: 'grapes', price: '2.50' },
  { name: 'oranges', price: '1.50' },
  { name: 'apples', price: '2.75' }
]

const vegetables = [
  { name: 'carrots', price: '2.25' },
  { name: 'celery', price: '1.75' },
  { name: 'red peppers', price: '3.00' }
]

//function to change price from string to float, add location
const arrPropChange = (arr) => {
  const location = 'produce section'

  for (let i = 0; i < arr.length; i++) {
    arr[i]['price'] = parseFloat(arr[i]['price'])
    arr[i]['location'] = location
  }
}

//call functions on both fruits and vegetables
arrPropChange(fruits)
arrPropChange(vegetables)

console.log(fruits)
console.log(vegetables)
