//print only duplicate elements 
export const printDuplicate = (arr) => {
  return arr.filter((currentValue, currentIndex) =>arr.indexOf(currentValue) !== currentIndex);

};

export default printDuplicate;
