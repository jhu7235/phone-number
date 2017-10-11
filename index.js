/* please run test for documentation. I try to avoid redundant documenation */

export default function standardizes(phoneNumber) {
	if (typeof phoneNumber !== 'string') return null;
	let newNumber = phoneNumber;
  newNumber = removeExtraCharacters(newNumber);
  if (newNumber === null || isNaN(Number(newNumber))) return null;
  return '+1' + newNumber;
}

export function removeExtraCharacters(data) {
	/* standardizes data by reducing the data down to 10 digits */
	let newData = data;

	/* since the math symbols in phone numbers don't have any use
	 * we are going to ignore them*/
	newData = newData.replace(/[ ()+]/g, '').replace(/[-]/g, '');
	if (newData[0] === '1') newData = newData.substring(1);
  if (!rightLength(newData)) return null;
	return newData;
}

export function rightLength(number) {
	/* Checks if the number has the right length */
	if (!number) return false;
	if (!number.length) return false;
	return number.length === 10;
}
