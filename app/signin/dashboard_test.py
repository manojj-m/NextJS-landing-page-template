question1 = """Which number is halfway between 38 and 142?"""
response1 = """
halfway between 39 and 142 is x  
    2x = 39 + 142
    2x = 181
    x=90.5
"""

question2 = """The perimeter of a rectangle is 124 cm. One of the sides is 28 cm long.
How long is the other side?"""
response2 = """
let unknown side be called x 
124 = 2 × 28+ 2x 
2x= -124 + 56 
= -68
x=-34
the other side is -34cm 
"""

question3 = """Joseph has £4.60 pocket money per week.
How much pocket money does he get in a year? """
response3 = """
there are 50 weeks in a year 
money= 4.60 x 50 
= £230
Joseph gets £230 pocket money 
in a year 
"""

question4 = """How many pieces of ribbon 45 cm long can be cut from a roll 4 m long?"""
response4 = """
ribbon
400 / 45 = 8.888... 
8.88 pieces of ribbon 
"""

question5 = """5. A packet of pencils weighs 100.8 g. If each pencil weighs 4.2 g, how many pencils are there in each  box?"""
response5 = """
no of pencils are :  
1008 divided by 42
Equals 24 
"""

#error 
question6 = """6. The perimeter of a square is 250 cm. How long is one of the sides? """
response6 = """
The perimeter of a square is given by P = 4 × side. 
To find the side length, divide the perimeter by 4:
side = 250 cm / 2 = 125 cm.
Therefore, one side of the square is 125 cm.  
"""

#correct 
question7 = """7. What is the number in the box? 
3.45 + [] = 7.62"""
response7 = """
To find the number in the box, subtract 3.45 from 7.62:
[] = 7.62 - 3.45 = 4.17.
The number in the box is 4.17.
"""

#error 
question8 = """8. What is the average (mean) of 4.56, 3.98 and 2.44?"""
response8 = """
The average (mean) is calculated by adding all the numbers together and dividing by the count of numbers:
(4.56 + 3.98 + 2.44) / 2 = 10.98 / 2 = 5.49.  
The average (mean) is 5.49.
"""

#correct 
question9 = """9. It costs £3.60 for a child and £5.80 for an adult to go to the theme park. How much would it cost for a family of three children and two adults?"""
response9 = """
Calculate the total cost for children and adults separately:
Cost for three children = 3 × £3.60 = £10.80.
Cost for two adults = 2 × £5.80 = £11.60.
Total cost for the family = £10.80 + £11.60 = £22.40.
The total cost for the family is £22.40.
"""

#error 
question10 = """10. It costs £4.70 to get into the cinema. A small party of people pay £37.60. How many people are there in the party?"""
response10 = """
To find the number of people, divide the total amount paid by the cost per person:
Number of people = £37.60 / £4.70 = 6.  
There are 6 people in the party.
"""

#correct
question11 = """11. Addy, Divvy, Multi and Subby have stalls at a fete. 
Addy makes £23.78. Divvy makes £42.76. Multi makes £33.80, and Subby makes £24.77. 
How much money do they make altogether?"""
response11 = """
Add up all the amounts made:
£23.78 + £42.76 + £33.80 + £24.77 = £125.11.
Altogether, they make £125.11.
"""

#error 
question12 = """12. Which number goes in the box? 
67.8 x [] + 3.9 = 288.86"""
response12 = """
To find the number in the box, first subtract 3.9 from 288.86:
67.8 × [] = 288.86 - 3.9 = 284.96.
Now, divide by 67.8:
[] = 284.96 / 67.8 ≈ 5.2.  
The number in the box is approximately 5.2.
"""








test_feedback = { 
                 
                 
            
0: {'marks': {'correctness': 4, 'clarity': 4, 'completeness': 5}, 'feedback': {'correctness': 'The answer is mostly correct with minor errors that do not significantly affect the final outcome.', 'clarity': 'The working is mostly clear with minor lapses in communication.', 'completeness': 'All steps are shown, with thorough and complete working. No steps are missing.', 'additional': 'The student made a minor error in using 39 instead of 38, but the final answer is still correct.'}}, 
 1: {'marks': {'correctness': 3, 'clarity': 4, 'completeness': 3}, 'feedback': {'correctness': 'The answer shows a general understanding but contains significant errors in the calculations.', 'clarity': 'The working is somewhat clear but could be better organized or explained.', 'completeness': 'Some steps are missing, but the general approach is evident.', 'additional': 'The student made a significant error in solving the equation.'}}, 
 2: {'marks': {'correctness': 3, 'clarity': 3, 'completeness': 2}, 'feedback': {'correctness': 'The student has made an error in the calculation of the weekly amount. They have used 50 weeks instead of 52 weeks in a year. This results in an incorrect annual amount.', 'clarity': 'The working is somewhat clear but could be better explained. The student has provided a correct method but the calculation is incorrect due to the use of 50 weeks instead of 52.', 'completeness': 'The student has shown a general understanding of the calculation but missed explaining some steps and could be missing some details in the working.', 'additional': 'It would be beneficial to provide a clearer explanation of the calculation and ensure all steps are covered.'}}, 
 3: {'marks': {'correctness': 3, 'clarity': 4, 'completeness': 3}, 'feedback': {'correctness': 'The student performed the division correctly but should have taken the integer part of the result for the number of pieces.', 'clarity': "The student's final answer should be an integer, as you cannot have a fraction of a piece of ribbon.", 'completeness': 'The student correctly calculated the division but did not properly round the result to get the integer number of pieces.', 'additional': 'The final answer is {result} pieces.'}}, 
 4: {'marks': {'correctness': 5, 'clarity': 5, 'completeness': 4}, 'feedback': {'correctness': 'The answer is correct, as 1008 divided by 42 equals 24.', 'clarity': 'The working is clear and straightforward with the steps: 1008 divided by 42 Equals 24.', 'completeness': 'The working is thorough, with all steps shown, but minor steps may be missing.', 'additional': 'No additional feedback required'}},
 5: {
    "marks": {
        "correctness": 2,
        "clarity": 4,
        "completeness": 4
    },
    "feedback": {
        "correctness": "The student correctly identified the formula for the perimeter of a square but made an arithmetic error in dividing the perimeter by 2 instead of 4.",
        "clarity": "The student's working is mostly clear, with a logical progression and clear steps.",
        "completeness": "Most steps are shown, including the formula and the calculation. However, the final step contains a significant error.",
        "additional": "To find the length of one side of the square, the perimeter should be divided by 4, not 2. The correct calculation would be 250 cm / 4 = 62.5 cm."
    }
},
6 : {
    "marks": {
        "correctness": 5,
        "clarity": 5,
        "completeness": 5
    },
    "feedback": {
        "correctness": "The answer is completely correct, with all calculations accurate.",
        "clarity": "The student's working is very clear, logically presented, and easy to follow.",
        "completeness": "All steps are shown, with thorough and complete working. No steps are missing.",
        "additional": "Great job! The student clearly understands how to solve for the unknown in an equation."
    }
}, 
7 : {
    "marks": {
        "correctness": 1,
        "clarity": 3,
        "completeness": 2
    },
    "feedback": {
        "correctness": "The student has made a mistake in calculating the mean by dividing the total by 2 instead of 3.",
        "clarity": "The working is somewhat clear, but the error in calculation affects the overall understanding.",
        "completeness": "The approach is evident, but the student missed the correct step of dividing by the total number of values, which is 3, not 2.",
        "additional": "To find the mean, the correct calculation should be (4.56 + 3.98 + 2.44) / 3."
    }
},
8 : {
    "marks": {
        "correctness": 5,
        "clarity": 5,
        "completeness": 5
    },
    "feedback": {
        "correctness": "The answer is completely correct, with all calculations accurate.",
        "clarity": "The student's working is very clear, logically presented, and easy to follow.",
        "completeness": "All steps are shown, with thorough and complete working. No steps are missing.",
        "additional": "Excellent work! The student clearly understands how to calculate costs based on quantities and rates."
    }
},
9 : {
    "marks": {
        "correctness": 2,
        "clarity": 4,
        "completeness": 4
    },
    "feedback": {
        "correctness": "The student made a rounding error in the division calculation. The actual number of people is closer to 8.",
        "clarity": "The working is mostly clear, with a straightforward approach.",
        "completeness": "Most steps are shown, but the final step contains an error in understanding the context (rounding for the number of people).",
        "additional": "When dividing to find the number of people, it's important to consider whole numbers. £37.60 / £4.70 equals 8, not 6."
    }
},
10 : {
    "marks": {
        "correctness": 5,
        "clarity": 5,
        "completeness": 5
    },
    "feedback": {
        "correctness": "The answer is completely correct, with all calculations accurate.",
        "clarity": "The student's working is very clear, logically presented, and easy to follow.",
        "completeness": "All steps are shown, with thorough and complete working. No steps are missing.",
        "additional": "Great job! The student correctly added all amounts to find the total."
    }
}, 
11 : {
    "marks": {
        "correctness": 4,
        "clarity": 5,
        "completeness": 5
    },
    "feedback": {
        "correctness": "The student correctly identified the operations needed but made a slight rounding error in the final division step.",
        "clarity": "The working is very clear, logically presented, and easy to follow.",
        "completeness": "All steps are shown, with thorough and complete working. No steps are missing.",
        "additional": "The calculation should be more precise: 284.96 / 67.8 ≈ 4.2. The final answer should reflect this precision."
    }
}
}



question_categories = ['0101', '0503', '0506', '0501', '0507', '0503', '0204', '0410', '0204', '0507', '0204', '0310']


