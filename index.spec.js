import standardize, { removeExtraCharacters, rightLength } from './index';
import { expect } from 'chai';


describe('standardize phone number', () => {

	describe('standardize(){ }', () => {

		it('is a function', () => {
			expect(standardize).to.be.a('function');
		});

		it('only accept strings', () => {
			expect(standardize(true)).to.be.a('null');
			expect(standardize(false)).to.be.a('null');
			expect(standardize({})).to.be.a('null');
			expect(standardize([])).to.be.a('null');
			expect(standardize(1231231231)).to.be.a('null');
			expect(standardize()).to.be.a('null');
			expect(standardize('5231231234')).to.be.a('string');
		});

		it('for 10 digit phone numbers, returns a string', () => {
			expect(standardize('5231231234')).to.be.a('string');
			expect(standardize('5231231234')).to.be.a('string');
		});

		it('for 10 digit phone numbers plus US code (1), returns a string', () => {
			expect(standardize('15231231234')).to.be.a('string');
		});

		it('for 10 digit phone numbers plus US code (+1), returns a string', () => {
			expect(standardize('+15231231234')).to.be.a('string');
		});

		it('for correct phone numbers, returns a string in normalized format', () => {
			expect(standardize('5231231234')).to.be.equal('+15231231234');
		});

		it('for incorrect phone numbers, returns null', () => {
			expect(standardize('123123123a')).to.be.a('null');
			expect(standardize('123123123#')).to.be.a('null');
			expect(standardize('123123123%')).to.be.a('null');
			/* there is no area code that starts with 1 */
			expect(standardize('1231231234')).to.be.a('null');
		});

		describe('edge cases', () => {

			it('ignores spaces and these characters "+,-,(,)" ', () => {
				expect(standardize('+1(523)123-1234')).to.be.equal('+15231231234');
				expect(standardize('+1-523-123-1234')).to.be.equal('+15231231234');
				expect(standardize('+15231--()231234')).to.be.equal('+15231231234');
				expect(standardize('+152312312(34')).to.be.equal('+15231231234');
				expect(standardize('+15231231234)')).to.be.equal('+15231231234');
				expect(standardize('+152312 31234)')).to.be.equal('+15231231234');
			});

		});

	});

	describe('removeExtraCharacters(){ }', () => {

		it('removes spaces, and these characters "+,-,(,),1', () => {
				expect(removeExtraCharacters('+1(523)123-1234')).to.be.equal('5231231234');
				expect(removeExtraCharacters('+1-523-123-1234')).to.be.equal('5231231234');
				expect(removeExtraCharacters('+15231--()231234')).to.be.equal('5231231234');
				expect(removeExtraCharacters('+152312312(34')).to.be.equal('5231231234');
				expect(removeExtraCharacters('+15231231234)')).to.be.equal('5231231234');
				expect(removeExtraCharacters('+152312 31234)')).to.be.equal('5231231234');
		});

	});

	describe('rightLength(){ }', () => {

		it('return true for length of 10', () => {
				expect(rightLength('5231231234')).to.be.equal(true);
				expect(rightLength('a234asfasd')).to.be.equal(true);
				/* it only does one thing */
				expect(rightLength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.be.equal(true);
		});

		it('return true for length of 10 not equal to 10', () => {
				expect(rightLength('+1(523)123-1234')).to.be.equal(false);
				expect(rightLength()).to.be.equal(false);
				expect(rightLength('qlwjrlefjasldjflkr')).to.be.equal(false);
		});

	});


});
