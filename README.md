# phone-number
standardize phone numbers entries

The function is designed to produce a standardize string that represent US phone number in E.164 format.  When given a non-sensical data, it will return null.  I tried to right code so it only did one or two things.  I try to not mutate the data coming in.  I also tried to write code in a way that was easy to read.  I have included unit test which doubles as documentation for the code. To run the test:
1. go to the folder in the terminal
2. `npm install`
3. `npm test`

The following libraries were used:
  "babel-core": "^6.22.1",						- conversion to Javascript ES3
  "babel-loader": "^6.2.10",					- conversion to Javascript ES3
  "babel-preset-es2015": "^6.22.0",		- conversion to Javascript ES3
  "babel-preset-stage-0": "^6.24.1",	- conversion to Javascript ES3
  "babel-register": "^6.24.1",				- conversion to Javascript ES3
  "chai": "^4.1.2",										- testing library
  "jest": "^21.2.1"										- test runner

Assumptions: 
 	* mathematical operators and spaces in phone number are not 
 		neccessary, but users still might enter them. 
 	* there is no area code that starts with 1
 	* the function should only accept data of string data type

**non-sensical means the data is not a string or contains non-numeric characters, unless the characters are one of the following (+, ,-,(,))