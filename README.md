# CensusImplementaion
	The idea is to bring the manual census conduction process online in an effective way, reducing efforts of conduction team as well as general people.

	We have implemented the complete census form including all the required fields with their validations in JavaScript. We have used various HTML elements such as Form, Input, div, radio, Textfield, number box and select-option etc. to manage our input requirements.

	We have also used various Cascading Style Sheets and made an external .css file to keep styling apart from actual business logic. The styling properties such as background-color, border, margin, padding, font-family, font size, text transform, background-attachment etc. to give a professional look to our census form.

	For conduction of proper population census form we have included overall 31 fields in our form. The error message appears dynamically if the user enters invalid data or no data.

	we have applied dynamic validation to each and every Textfield and radio buttton. This is done by calling respective script code on keyup event of Textfield and onclick event of radio button. The complete form is also validated at submit button for the prevention of injection of error prone data in backend.

	There is one important logic for displaying the number of fields dynamically with respect to the value in the number box which in turn gives the number of members in family. The dynamic fields which are generated for each member of family are name, age, gender, occupation which are also validated on their respective events.

	When the user has entered all the details correctly and there are no warning messages displayed, then the form is ready to submit so, when the user clicks submit button the final confirmation box appears ¬¬¬for confirming the user that the data entered by him or her is correct and if the user confirms the form the data is submitted.
