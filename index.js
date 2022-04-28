// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

const findMatching = (array, driverSearch) => {
    return array.filter(drivers => {
        return drivers.toLowerCase() === driverSearch.toLowerCase()
    })
}

const fuzzyMatch = (array, lettersSearch) => {
    return array.filter(drivers => {
        return drivers.startsWith(lettersSearch)
    })
}

const driversObjs = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const matchName = (drivers, driverSearch) => {
    return drivers.filter(driverObj => driverObj.name === driverSearch)
}

console.log(matchName(driversObjs, 'Bobby'))