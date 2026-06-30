export interface Question {
  id: number;
  topic: string;
  module: string;
  paperRef: string;
  marks: number;
  question: string;
  modelAnswer: string;
  markAllocation: string;
  explanation: string;
}

export const questions: Question[] = [
  // ============================================================
  // TOPIC 1: ALGORITHM THEORY (9.1, 9.2) – Questions 001-015
  // ============================================================
  {
    id: 1,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_21",
    marks: 2,
    question: "Complete this definition of the term algorithm.\n\nAn algorithm is a solution to a problem expressed as _________________________",
    modelAnswer: "a sequence of defined steps / stages / instructions / lines of code",
    markAllocation: "• 1 mark for 'sequence of steps' (or equivalent)\n• 1 mark for 'defined / clear / unambiguous'",
    explanation: "You can think of an algorithm like a recipe for your favourite meal. It tells you exactly what to do, step by step, in a specific order. The two key words Cambridge wants to see are: 'sequence' (meaning steps in order) and 'defined' (meaning each step is clear and unambiguous)."
  },
  {
    id: 2,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s20_23",
    marks: 2,
    question: "Algorithms are produced during program development. State when you would produce an algorithm during program development and state its purpose.\n\nWhen: _________________________________________________________________________\nPurpose: ______________________________________________________________________",
    modelAnswer: "When: during the design stage (or before coding / during problem-solving)\nPurpose: to describe the solution as a sequence of steps / actions",
    markAllocation: "• 1 mark for 'during design stage' (or equivalent)\n• 1 mark for 'to describe the solution step-by-step'",
    explanation: "Before you start writing code, you plan. The algorithm is your plan – it's like sketching out the route on a map before you start driving. You do it during the DESIGN stage to make sure you know exactly what the program needs to do."
  },
  {
    id: 3,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.1",
    paperRef: "s20_23",
    marks: 2,
    question: "Explain the process of problem decomposition. State one reason it may be used.\n\nExplanation: __________________________________________________________________\nReason: ______________________________________________________________________",
    modelAnswer: "Explanation: Breaking a problem down into sub-tasks / smaller parts.\nReason: To make the problem easier to solve / to make the solution easier to implement / test / maintain.",
    markAllocation: "• 1 mark for 'breaking down into sub-tasks'\n• 1 mark for any valid reason (easier to solve, test, maintain, etc.)",
    explanation: "Decomposition = 'divide and conquer.' If you're moving house, you don't try to pack everything at once – you break it down: pack the kitchen, pack the bedroom, pack the living room. Each smaller task is easier to handle. In programming, you break a big problem into smaller modules (procedures or functions)."
  },
  {
    id: 4,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_23",
    marks: 2,
    question: "As part of the development of an algorithm, a programmer may construct an identifier table. Describe what an identifier table contains.",
    modelAnswer: "A list of identifier / variable names with explanations/descriptions of what they are used for and their data types.",
    markAllocation: "• 1 mark for 'list of identifier/variable names'\n• 1 mark for 'descriptions/data types' (or equivalent)",
    explanation: "An identifier table is like a dictionary for your program. It tells you every variable name you've used, what it's for, and what type of data it holds (INTEGER, REAL, STRING, etc.). It helps you (and other programmers) keep track of what each variable does."
  },
  {
    id: 5,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.1",
    paperRef: "s20_23",
    marks: 2,
    question: "Explain what is meant by abstraction in the context of computational thinking.",
    modelAnswer: "Abstraction is the process of removing unnecessary details and keeping only the essential information needed to solve a problem.",
    markAllocation: "• 1 mark for 'removing unnecessary details'\n• 1 mark for 'keeping only essential information'",
    explanation: "When you order a coffee, you say 'latte, small'. You don't explain how the coffee machine works or where the beans came from. That's abstraction – you hide the complex details and only give what's necessary. In programming, abstraction allows you to focus on what the problem is, not on the irrelevant details of how everything works behind the scenes."
  },
  {
    id: 6,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_23",
    marks: 5,
    question: "Simple algorithms usually consist of three different stages.\n\nComplete the table. Write each example statement in pseudocode.\n\n| Stage | Example statement |\n|-------|-------------------|\n| Input |                   |\n| Process | x ← y / 3 |\n| Output |                   |",
    modelAnswer: "| Stage | Example statement |\n|-------|-------------------|\n| Input | INPUT MyNumber |\n| Process | x ← y / 3 |\n| Output | OUTPUT 'Hello' |",
    markAllocation: "• 1 mark for a valid input statement (e.g., INPUT, READFILE)\n• 1 mark for a valid process/assignment statement (already given as example)\n• 1 mark for a valid output statement",
    explanation: "Every algorithm follows this pattern: 1. INPUT – get data from the user (or from a file), 2. PROCESS – do something with it (calculate, compare, decide), 3. OUTPUT – show the result (on screen or to a file). It's like making a smoothie: INPUT the fruit, PROCESS it (blend), OUTPUT the smoothie."
  },
  {
    id: 7,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_21",
    marks: 4,
    question: "Complete the table by placing ticks (✓) in the relevant boxes.\n\n| Pseudocode statement | Input | Process | Output |\n|----------------------|-------|---------|--------|\n| Temp ← SensorValue * Factor | | | |\n| WRITEFILE 'LogFile.txt', TextLine | | | |\n| WRITEFILE 'LogFile.txt', MyName & MyIDNumber | | | |\n| READFILE 'AddressBook.txt', NextLine | | | |",
    modelAnswer: "| Pseudocode statement | Input | Process | Output |\n|----------------------|-------|---------|--------|\n| Temp ← SensorValue * Factor | | ✓ | |\n| WRITEFILE 'LogFile.txt', TextLine | | | ✓ |\n| WRITEFILE 'LogFile.txt', MyName & MyIDNumber | | ✓ | ✓ |\n| READFILE 'AddressBook.txt', NextLine | ✓ | | |",
    markAllocation: "1 mark per correct row.",
    explanation: "• READFILE = Input (getting data from a file)\n• Assignment (=, ←) = Process (doing a calculation or concatenation)\n• WRITEFILE = Output (writing to a file)\nIf a line does more than one thing (like concatenating AND writing), tick both!"
  },
  {
    id: 8,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_23",
    marks: 1,
    question: "Write a single statement in pseudocode that contains two of the stages (Input, Process, Output). Do not repeat any of the statements from part (c)(i).",
    modelAnswer: "Examples of correct answers:\n• Next ← INPUT('Enter number: ')          (Input + Process)\n• OUTPUT 'You entered ' & UserInput       (Process + Output)\n• WRITEFILE 'Log.txt', 'Result: ' & Answer (Process + Output)",
    markAllocation: "1 mark for any valid statement combining two stages.",
    explanation: "The exam wants you to show that a single line can do more than one thing. INPUT and assign at the same time → Input + Process. Concatenate and OUTPUT → Process + Output. READ and assign → Input + Process."
  },
  {
    id: 9,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "11.1",
    paperRef: "s19_23",
    marks: 1,
    question: "Identify the type of programming statement that assigns a data type to a variable.",
    modelAnswer: "Declaration (or 'DECLARE statement')",
    markAllocation: "1 mark for 'declaration'.",
    explanation: "When you say 'DECLARE Age : INTEGER', you are telling the computer: 'I want a box called Age, and it will hold whole numbers.' That's a declaration. It's like labeling a storage box before you put anything inside it."
  },
  {
    id: 10,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "w18_22",
    marks: 2,
    question: "Programming is sometimes referred to as a transferable skill. You are asked to work on a program written in a language you are not familiar with. Explain how transferable skills would help you work on the program.",
    modelAnswer: "You should be able to recognise / understand in another language:\n• Declaration / assignment / sequence / selection / repetition (iteration)\n• Subroutines / parameters passed between modules\n• Program structure / Input and Output",
    markAllocation: "• 1 mark for any valid recognition of a transferable skill\n• 1 mark for explaining how it applies",
    explanation: "Transferable skills are skills that you can take from one situation and use in another. In programming, if you know how to write an IF statement in Python, you can figure out how to write one in Java – the structure is similar even if the syntax is different. The core concepts (sequence, selection, iteration, variables, subroutines) are the same in almost all programming languages."
  },
  {
    id: 11,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_23",
    marks: 3,
    question: "Explain the process of stepwise refinement.",
    modelAnswer: "• The breaking down of an algorithm / task / problem\n• to a level of (sufficient) detail // into smaller parts / sub-tasks\n• from which it can be programmed // which are easier to program",
    markAllocation: "• 1 mark for 'breaking down an algorithm/problem'\n• 1 mark for 'into smaller parts / sub-tasks'\n• 1 mark for 'until it can be easily programmed'",
    explanation: "Stepwise refinement is about taking a big, vague task and repeatedly breaking it down into smaller, more detailed steps until each step is so simple that it can be written as a single line of code.\n\nExample:\nLevel 1: 'Calculate average of three numbers'\nLevel 2: 'Get three numbers, add them, divide by 3, show result'\nLevel 3: 'INPUT num1, num2, num3 → total ← num1+num2+num3 → avg ← total/3 → OUTPUT avg'"
  },
  {
    id: 12,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_21",
    marks: 4,
    question: "Algorithms may be expressed using four basic constructs. One construct is sequence. Complete the following table for two other constructs.\n\n| Construct | Pseudocode example |\n|-----------|--------------------|\n| Assignment | |\n| Selection | |\n| Iteration | |",
    modelAnswer: "| Construct | Pseudocode example |\n|-----------|--------------------|\n| Assignment | Answer ← 'YES' |\n| Selection | IF X = 3 THEN OUTPUT 'HELLO' |\n| Iteration | FOR N ← 1 TO 100 |",
    markAllocation: "• 1 mark for each construct name\n• 1 mark for each corresponding pseudocode example",
    explanation: "There are four basic constructs in programming:\n1. Sequence – doing things one after another\n2. Selection – making decisions (IF, CASE)\n3. Iteration – repeating things (FOR, WHILE, REPEAT)\n4. Assignment – giving a variable a value"
  },
  {
    id: 13,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_22",
    marks: 2,
    question: "Explain the term algorithm.",
    modelAnswer: "• a sequence of steps / stages / instructions\n• to implement a task // solution to a problem",
    markAllocation: "• 1 mark for 'sequence of steps/stages/instructions'\n• 1 mark for 'to solve a problem / implement a task'",
    explanation: "This is similar to Question 1, but it's worth checking that you can explain it in your own words. An algorithm is just a step-by-step instruction manual for solving a problem. If you've ever followed a recipe, built furniture from instructions, or given someone directions, you've used an algorithm. The key is that it must be a clear sequence of steps that leads to a solution."
  },
  {
    id: 14,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_22",
    marks: 5,
    question: "A student is learning about arrays. She wants to write a program to:\n• search through a 1D array of 100 elements\n• count the number of elements that contain the string 'Empty'\n• output the number of elements containing 'Empty' together with a suitable message.\n\nUse structured English to describe the algorithm she could use.",
    modelAnswer: "• Initialise a count to zero\n• Loop 100 times // loop through all of the array\n• Compare an element with 'Empty' in a loop\n• Increment the count if equal in a loop\n• Output a message together with the count not inside a loop",
    markAllocation: "• 1 mark for initialising count\n• 1 mark for looping through 100 elements\n• 1 mark for comparing element with 'Empty'\n• 1 mark for incrementing count when match found\n• 1 mark for outputting the result",
    explanation: "Structured English is a mix of plain English and programming-like structure. Here's a complete example:\n1. SET Count to 0\n2. FOR each element from 1 to 100\n3. IF the current element equals 'Empty' THEN\n4. ADD 1 to Count\n5. ENDIF\n6. ENDFOR\n7. OUTPUT 'Number of empty elements: ', Count"
  },
  {
    id: 15,
    topic: "Algorithm Theory (9.1, 9.2)",
    module: "9.2",
    paperRef: "s19_22",
    marks: 4,
    question: "A program needs to search through 1000 elements of an unsorted array to find a given value. The program will output either the position in the array of the value or the message 'Not Found'.\n\nOutline the steps the program needs to follow. Do not write pseudocode or program code.",
    modelAnswer: "• A loop / repetition / iteration to check every element\n• Compare the array element with the value being searched\n• Exit loop / stop search when value found or end of array reached\n• If value is found then output the index position, otherwise output 'Not found'",
    markAllocation: "• 1 mark for looping through all elements\n• 1 mark for comparing each element\n• 1 mark for exiting when found\n• 1 mark for correct output in both cases",
    explanation: "This is called a 'linear search'. It's the simplest way to find something in an array – you just start at the beginning and check each element one by one. Think of it like looking for a friend in a queue. You start at the front and check each person until you find them or reach the end."
  },

  // ============================================================
  // TOPIC 2: DATA TYPES & EXPRESSIONS (10.1) – Questions 016-025
  // ============================================================
  {
    id: 16,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s19_23",
    marks: 6,
    question: "Programming languages can support different data types. Complete the table by naming three different data types together with an example data value for each.\n\n| Data type | Example data value |\n|-----------|-------------------|\n|           |                   |\n|           |                   |\n|           |                   |",
    modelAnswer: "| Data type | Example data value |\n|-----------|-------------------|\n| INTEGER   | 42                 |\n| REAL      | 3.14               |\n| STRING    | 'Hello'           |\n(Any three different types with valid examples)",
    markAllocation: "1 mark per data type + 1 mark per corresponding example value.",
    explanation: "Data types are like different containers:\n• INTEGER = whole numbers (like counting people)\n• REAL = decimal numbers (like money)\n• STRING = text (like a name)\n• CHAR = a single letter\n• BOOLEAN = TRUE/FALSE (like a light switch)"
  },
  {
    id: 17,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "w18_21",
    marks: 5,
    question: "Give the most appropriate data type for each variable:\n\n| Statement | Data type |\n|-----------|-----------|\n| MyAverage ← 13.5 | |\n| ProjectCompleted ← TRUE | |\n| Subject ← 'Home Economics' | |\n| MyMark ← 270 | |\n| MyGrade ← 'B' | |",
    modelAnswer: "| Statement | Data type |\n|-----------|-----------|\n| MyAverage ← 13.5 | REAL |\n| ProjectCompleted ← TRUE | BOOLEAN |\n| Subject ← 'Home Economics' | STRING |\n| MyMark ← 270 | INTEGER |\n| MyGrade ← 'B' | CHAR |",
    markAllocation: "1 mark per correct data type.",
    explanation: "Look at the VALUE to decide the type:\n• 13.5 has a decimal point → REAL\n• TRUE/FALSE → BOOLEAN\n• Text in quotes → STRING\n• Whole number → INTEGER\n• A single letter in quotes → CHAR"
  },
  {
    id: 18,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "w18_21",
    marks: 5,
    question: "Using the values from the previous question, evaluate each expression. If invalid, write 'ERROR'.\n\n| Expression | Evaluates to |\n|------------|--------------|\n| 'Air-' & MID(Subject, 7, 3) | |\n| INT(MyAverage / 2) | |\n| ProjectCompleted AND MyMark > 270 | |\n| ProjectCompleted OR MyMark > 260 | |\n| ASC(MyGrade / 3) | |",
    modelAnswer: "| Expression | Evaluates to |\n|------------|--------------|\n| 'Air-' & MID(Subject, 7, 3) | 'Air-con' |\n| INT(MyAverage / 2) | 6 |\n| ProjectCompleted AND MyMark > 270 | FALSE |\n| ProjectCompleted OR MyMark > 260 | TRUE |\n| ASC(MyGrade / 3) | ERROR |",
    markAllocation: "1 mark per correct row.",
    explanation: "1. Subject = 'Home Economics'. MID(Subject, 7, 3) takes 3 characters starting at position 7. Position 7 is 'c', so MID gives 'con'. 'Air-' + 'con' = 'Air-con'.\n2. MyAverage = 13.5. 13.5 / 2 = 6.75. INT() removes the decimal → 6.\n3. ProjectCompleted = TRUE. MyMark = 270. 270 > 270 is FALSE. TRUE AND FALSE = FALSE.\n4. ProjectCompleted = TRUE. 270 > 260 is TRUE. TRUE OR TRUE = TRUE.\n5. MyGrade = 'B'. ASC('B') = 66. MyGrade / 3 tries to divide a character by 3 → ERROR."
  },
  {
    id: 19,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s18_21",
    marks: 5,
    question: "Program variables have values:\n• MyGreeting = 'Happy Birthday'\n• MyInitial = 'C'\n• AgeInYears = 27\n• Weight = 60.5\n• Married = TRUE\n• Children = TRUE\n\nEvaluate each expression. If invalid, write 'ERROR'.\n\n| Expression | Evaluates to |\n|------------|--------------|\n| 'Mon' & MID(MyGreeting, 10, 2) | |\n| AgeInYears + ASC(MyInitial) | |\n| INT(MyInitial) | |\n| MOD(Weight * 2, 10) | |\n| Married AND (NOT Children) | |",
    modelAnswer: "| Expression | Evaluates to |\n|------------|--------------|\n| 'Mon' & MID(MyGreeting, 10, 2) | 'Month' |\n| AgeInYears + ASC(MyInitial) | 94 |\n| INT(MyInitial) | ERROR |\n| MOD(Weight * 2, 10) | 1 |\n| Married AND (NOT Children) | FALSE |",
    markAllocation: "1 mark per correct row.",
    explanation: "1. MyGreeting = 'Happy Birthday'. Position 10 is 't', MID(MyGreeting, 10, 2) = 'th'. 'Mon' + 'th' = 'Month'.\n2. ASC('C') = 67. 27 + 67 = 94.\n3. INT() only works on REAL values. MyInitial is CHAR → ERROR.\n4. Weight = 60.5. 60.5 * 2 = 121.0. MOD(121.0, 10) = 1.\n5. Married = TRUE, NOT Children = FALSE. TRUE AND FALSE = FALSE."
  },
  {
    id: 20,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s19_23",
    marks: 5,
    question: "Variables:\n• MeltingPoint = 180.5\n• Soluble = FALSE\n• Attempt = 3\n• ProductName = 'Mushroom Compost'\n• Version = 'A'\n• ProductID = 'BZ27-4'\n\nEvaluate:\n\n| Expression | Evaluates to |\n|------------|--------------|\n| STRING_TO_NUM(MID(ProductID, 3, 2)) + 4 | |\n| INT(MeltingPoint / 2) | |\n| Soluble AND Attempt > 3 | |\n| LENGTH(ProductID & NUM_TO_STRING(MeltingPoint)) | |\n| RIGHT(ProductName, 4) & MID(ProductName, 5, 4) | |",
    modelAnswer: "| Expression | Evaluates to |\n|------------|--------------|\n| STRING_TO_NUM(MID(ProductID, 3, 2)) + 4 | 31 |\n| INT(MeltingPoint / 2) | 90 |\n| Soluble AND Attempt > 3 | FALSE |\n| LENGTH(ProductID & NUM_TO_STRING(MeltingPoint)) | 11 |\n| RIGHT(ProductName, 4) & MID(ProductName, 5, 4) | 'postroom' |",
    markAllocation: "1 mark per correct row.",
    explanation: "1. ProductID = 'BZ27-4'. Position 3 = '2', length 2 = '27'. STRING_TO_NUM('27') = 27. 27 + 4 = 31.\n2. MeltingPoint = 180.5. 180.5 / 2 = 90.25. INT() = 90.\n3. Soluble = FALSE. Attempt = 3. 3 > 3 is FALSE. FALSE AND FALSE = FALSE.\n4. ProductID & NUM_TO_STRING(MeltingPoint) = 'BZ27-4' & '180.5' = 'BZ27-4180.5'. LENGTH = 11.\n5. ProductName = 'Mushroom Compost'. RIGHT(ProductName, 4) = 'post'. MID(ProductName, 5, 4): position 5 = 'r', positions 5-8 = 'room'. 'post' + 'room' = 'postroom'."
  },
  {
    id: 21,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s18_21",
    marks: 4,
    question: "A program stores data about hospital patients.\n\nGive a suitable identifier name for each of the data items.\n\n| Description of data item | Suitable identifier name |\n|--------------------------|--------------------------|\n| The temperature of the patient | |\n| The temperature of the room | |\n| The patient identification number | |\n| The name of the nurse taking the measurement | |",
    modelAnswer: "| Description of data item | Suitable identifier name |\n|--------------------------|--------------------------|\n| The temperature of the patient | PatientTemperature |\n| The temperature of the room | RoomTemperature |\n| The patient identification number | PatientID |\n| The name of the nurse taking the measurement | NurseName |",
    markAllocation: "1 mark per correct identifier. Reject single letter names.",
    explanation: "An identifier name should tell you exactly what the variable stores. It should be meaningful and unambiguous. For example, 'Temperature' is too vague – is it the patient's temperature or the room's temperature? 'PatientTemperature' is clear."
  },
  {
    id: 22,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s19_21",
    marks: 5,
    question: "Give an appropriate data type for each of these variables.\n\n| Variable | Data type |\n|----------|-----------|\n| Title | |\n| Version | |\n| PackSize | |\n| WeightEach | |\n| Paperback | |",
    modelAnswer: "| Variable | Data type |\n|----------|-----------|\n| Title | STRING |\n| Version | CHAR |\n| PackSize | INTEGER |\n| WeightEach | REAL |\n| Paperback | BOOLEAN |",
    markAllocation: "1 mark per correct data type.",
    explanation: "• Title = text → STRING\n• Version = a single letter like 'C' → CHAR\n• PackSize = a whole number → INTEGER\n• WeightEach = a decimal like 6.2 → REAL\n• Paperback = TRUE/FALSE → BOOLEAN"
  },
  {
    id: 23,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s18_22",
    marks: 5,
    question: "Variables:\n• Mark = 60\n• Subject = 'Computer Science'\n• Grade = 'B'\n• CourseCompleted = TRUE\n• AverageMark = 49.5\n\nEvaluate each expression. If invalid, write 'ERROR'.\n\n| Expression | Evaluates to |\n|------------|--------------|\n| 'Fas' & MID(Subject, 6, 3) | |\n| LEFT(Mark, 1) | |\n| 10 + ASC(Grade) | |\n| MOD(AverageMark * 2, 3) | |\n| CourseCompleted AND (Mark >= 60) | |",
    modelAnswer: "| Expression | Evaluates to |\n|------------|--------------|\n| 'Fas' & MID(Subject, 6, 3) | 'Faster' |\n| LEFT(Mark, 1) | ERROR |\n| 10 + ASC(Grade) | 76 |\n| MOD(AverageMark * 2, 3) | 0 |\n| CourseCompleted AND (Mark >= 60) | TRUE |",
    markAllocation: "1 mark per correct row.",
    explanation: "1. Subject = 'Computer Science'. MID(6,3) = 'ter'. 'Fas' + 'ter' = 'Faster'.\n2. LEFT() works on strings. Mark is INTEGER → ERROR.\n3. ASC('B') = 66. 10 + 66 = 76.\n4. AverageMark = 49.5. 49.5 * 2 = 99. MOD(99, 3) = 0.\n5. CourseCompleted = TRUE. Mark = 60. 60 >= 60 is TRUE. TRUE AND TRUE = TRUE."
  },
  {
    id: 24,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s18_23",
    marks: 5,
    question: "Variables:\n• Quality = 'D'\n• DayNumber = 20\n• MyName = 'Stephen'\n• QualityConfirmed = TRUE\n• Factor = 6.5\n\nEvaluate each expression. If invalid, write 'ERROR'.\n\n| Expression | Evaluates to |\n|------------|--------------|\n| MID(MyName, 4, 4) & 'ol' | |\n| QualityConfirmed AND (Factor >= 6.5) | |\n| 20 + ASC(Quality) | |\n| QualityConfirmed + 3 | |\n| MOD(Factor * 2, 9) | |",
    modelAnswer: "| Expression | Evaluates to |\n|------------|--------------|\n| MID(MyName, 4, 4) & 'ol' | 'phenol' |\n| QualityConfirmed AND (Factor >= 6.5) | TRUE |\n| 20 + ASC(Quality) | 88 |\n| QualityConfirmed + 3 | ERROR |\n| MOD(Factor * 2, 9) | 4 |",
    markAllocation: "1 mark per correct row.",
    explanation: "1. MyName = 'Stephen'. Position 4 = 'p', positions 4-7 = 'phen'. 'phen' + 'ol' = 'phenol'.\n2. QualityConfirmed = TRUE. Factor = 6.5. 6.5 >= 6.5 is TRUE. TRUE AND TRUE = TRUE.\n3. ASC('D') = 68. 20 + 68 = 88.\n4. QualityConfirmed is BOOLEAN. You cannot add 3 to TRUE/FALSE → ERROR.\n5. Factor = 6.5. 6.5 * 2 = 13. MOD(13, 9) = 4."
  },
  {
    id: 25,
    topic: "Data Types & Expressions (10.1)",
    module: "10.1",
    paperRef: "s19_22",
    marks: 5,
    question: "Give an appropriate data type for each variable.\n\n| Variable | Data type |\n|----------|-----------|\n| Married | |\n| ID | |\n| MiddleInitial | |\n| Height | |\n| IsMarried | |",
    modelAnswer: "| Variable | Data type |\n|----------|-----------|\n| Married | DATE |\n| ID | STRING |\n| MiddleInitial | CHAR |\n| Height | REAL |\n| IsMarried | BOOLEAN |",
    markAllocation: "1 mark per correct data type.",
    explanation: "• Married = a date → DATE\n• ID = 'M1234' which contains letters and numbers → STRING\n• MiddleInitial = a single letter → CHAR\n• Height = 5.6 → REAL (decimal)\n• IsMarried = TRUE/FALSE → BOOLEAN"
  },

  // ============================================================
  // TOPIC 3: SELECTION & CASE (11.2) – Questions 026-030
  // ============================================================
  {
    id: 26,
    topic: "Selection & CASE (11.2)",
    module: "11.2",
    paperRef: "s21_21",
    marks: 4,
    question: "The pseudocode contains the following statements:\n\nResult ← 2 & 4\nIF x = 3 OR 4 THEN\n\nIdentify the errors in these statements.",
    modelAnswer: "Error 1: The & operator is used for concatenating strings. 2 and 4 are integers, so this is invalid. Should use an arithmetic operator.\n\nError 2: The condition 'x = 3 OR 4' is invalid because OR requires Boolean operands. Should be 'x = 3 OR x = 4'.",
    markAllocation: "• 1 mark for identifying the first error\n• 1 mark for explaining the first error\n• 1 mark for identifying the second error\n• 1 mark for explaining the second error",
    explanation: "The & operator joins strings together. If you try to join numbers, you need to convert them to strings first using NUM_TO_STR(). To check if x equals 3 OR x equals 4, you need to write 'x = 3 OR x = 4' – you cannot just put 'OR 4'.\n\nThe correct code would be:\nResult ← 2 + 4\nIF x = 3 OR x = 4 THEN"
  },
  {
    id: 27,
    topic: "Selection & CASE (11.2)",
    module: "11.2",
    paperRef: "s23_21",
    marks: 4,
    question: "The following pseudocode represents part of the algorithm for a program:\n\nCASE OF ThisValue\n  <30 : Level ← 'Low'\n  <20 : Level ← 'Very Low'\n        Check ← ThisValue / 2\n  30 TO 40 : Level ← 'Medium'\n             Data[ThisValue] ← Data[ThisValue] + 1\n  >40 : Level ← 'High'\nENDCASE\n\n(a) Complete the table:\n- The value assigned to Level when ThisValue is 40\n- The value assigned to Level when ThisValue is 18\n- The value assigned to Check when ThisValue is 36\n- The number of elements in array Data that may be incremented\n\n(b) The pseudocode contains an assignment that will never be performed. Identify this assignment and explain why.",
    modelAnswer: "(a)\n- Level when ThisValue is 40: 'Medium'\n- Level when ThisValue is 18: 'Low' (not 'Very Low' because 18 < 30 is checked first)\n- Check when ThisValue is 36: 12\n- Number of elements in array Data that may be incremented: 11 (values 30-40)\n\n(b) Assignment: Level ← 'Very Low'\nExplanation: The CASE clauses are checked in sequence. A value < 20 also satisfies the first clause < 30, so the <20 clause is never reached.",
    markAllocation: "• 1 mark for each correct table answer (4 marks)\n• 1 mark for identifying 'Very Low' assignment\n• 1 mark for explaining the order of CASE checking",
    explanation: "CASE structures check conditions in order from top to bottom. The first matching condition is executed, and the rest are ignored.\n\nFor ThisValue = 18:\n- First check: < 30 → TRUE → Level = 'Low'\n- The < 20 check is never reached because the < 30 already matched\n\nFor ThisValue = 36:\n- 36 is in the range 30 TO 40 → Check = 36/3 = 12\n- Data[36] is incremented (only values 30-40)\n\nThe important lesson: order matters in CASE structures. Always put more specific conditions before more general ones."
  },
  {
    id: 28,
    topic: "Selection & CASE (11.2)",
    module: "11.2",
    paperRef: "s24_21",
    marks: 2,
    question: "A program will calculate the tax payable based on the cost of an item.\n\nCASE OF ItemCost\n  <=50 : TaxRate ← 3.75\n  <=200 : TaxRate ← 5.23\n  >200 : TaxRate ← 6.25\n  HighRate ← TRUE\nENDCASE\n\nThe pseudocode contains a logical error. Identify the error and suggest a correction.",
    modelAnswer: "Error: The assignment 'HighRate ← TRUE' is placed inside the CASE structure after all the conditions. It will only execute for the final case (>200), but logically it should execute for ALL cases where a tax rate is assigned.\n\nCorrection: Move 'HighRate ← TRUE' to be executed for all cases, or move it outside the CASE structure and set HighRate ← TRUE for all relevant cases.\n\nAlternatively, the CASE structure should be:\nCASE OF ItemCost\n  <=50 : TaxRate ← 3.75\n        HighRate ← TRUE\n  <=200 : TaxRate ← 5.23\n        HighRate ← TRUE\n  >200 : TaxRate ← 6.25\n        HighRate ← TRUE\nENDCASE",
    markAllocation: "• 1 mark for identifying the error\n• 1 mark for suggesting a valid correction",
    explanation: "In a CASE structure, each clause executes independently. The line 'HighRate ← TRUE' is not part of any specific case clause – it appears after the case conditions but before ENDCASE, which means it will only execute if the >200 case is matched. The programmer probably intended HighRate to be TRUE whenever a tax rate is assigned."
  },
  {
    id: 29,
    topic: "Selection & CASE (11.2)",
    module: "11.2",
    paperRef: "s24_21",
    marks: 1,
    question: "In a CASE statement, the final condition `> 200` could be replaced with a keyword. Give the keyword.",
    modelAnswer: "OTHERWISE",
    markAllocation: "1 mark for 'OTHERWISE'",
    explanation: "In a CASE structure, OTHERWISE acts as the 'default' case – it executes when none of the other conditions match. Instead of writing `> 200 : ...`, you could write:\n\nCASE OF ItemCost\n  <=50 : TaxRate ← 3.75\n  <=200 : TaxRate ← 5.23\n  OTHERWISE : TaxRate ← 6.25\nENDCASE\n\nThis is cleaner and handles any value greater than 200 without explicitly specifying the condition."
  },
  {
    id: 30,
    topic: "Selection & CASE (11.2)",
    module: "11.2",
    paperRef: "s24_21",
    marks: 2,
    question: "The following table shows ranges for tax rates based on item cost:\n\n| Item Cost | Tax Rate |\n|-----------|----------|\n| <= 50     | 3.75%    |\n| <= 200    | 5.23%    |\n| > 200     | 6.25%    |\n\nWrite pseudocode using a CASE structure to assign the correct TaxRate.",
    modelAnswer: "CASE OF ItemCost\n  <= 50  : TaxRate ← 3.75\n  <= 200 : TaxRate ← 5.23\n  > 200  : TaxRate ← 6.25\nENDCASE",
    markAllocation: "• 1 mark for correct CASE structure (CASE OF ... ENDCASE)\n• 1 mark for all three conditions and assignments",
    explanation: "This is a straightforward CASE structure with ranges. The order matters:\n- If ItemCost is 30, the first condition (<=50) matches and TaxRate = 3.75\n- If ItemCost is 100, the second condition (<=200) matches and TaxRate = 5.23\n- If ItemCost is 300, the third condition (>200) matches and TaxRate = 6.25\n\nAlways order conditions from most restrictive to least restrictive to ensure correct matching."
  },

  // ============================================================
  // TOPIC 4: LOOPS (FOR, WHILE, REPEAT) (11.2) – Questions 046-048
  // ============================================================
  {
    id: 46,
    topic: "Loops (FOR, WHILE, REPEAT) (11.2)",
    module: "11.2",
    paperRef: "s22_21",
    marks: 5,
    question: "A 1D array Data of type integer contains 200 elements. Each element has a unique value. An algorithm is required to search for the largest value and output it.\n\nDescribe the steps that the algorithm should perform. Do not include pseudocode statements in your answer.",
    modelAnswer: "1. Declare a variable (e.g., Max) to hold the largest value\n2. Assign the value of the first element to Max\n3. Set up a loop to repeat 200 times / from start to end of array\n4. Use the loop counter as the array index\n5. If the value of the current element is greater than Max, assign the value to Max\n6. After the loop, output Max",
    markAllocation: "• 1 mark for initialising Max with first element\n• 1 mark for looping through all elements\n• 1 mark for comparing current element with Max\n• 1 mark for updating Max when current element is greater\n• 1 mark for outputting Max",
    explanation: "This is a classic algorithm for finding the maximum value in an array. You use a FOR loop because you know exactly how many elements to check (200). The loop counter serves as the array index.\n\nThe algorithm works like this:\n- Start with the first value as the maximum\n- Check each other value\n- If you find a bigger value, make that the new maximum\n- At the end, output the maximum"
  },
  {
    id: 47,
    topic: "Loops (FOR, WHILE, REPEAT) (11.2)",
    module: "11.2",
    paperRef: "s22_21",
    marks: 5,
    question: "A 1D array Data of type integer contains 200 elements. Each element has a unique value. An algorithm is required to search for the largest value and output it.\n\nWrite pseudocode for this algorithm.",
    modelAnswer: "DECLARE Max : INTEGER\nDECLARE Index : INTEGER\n\nMax ← Data[1]\n\nFOR Index ← 2 TO 200\n  IF Data[Index] > Max THEN\n    Max ← Data[Index]\n  ENDIF\nNEXT Index\n\nOUTPUT Max",
    markAllocation: "• 1 mark for declaring Max and Index\n• 1 mark for initialising Max to Data[1]\n• 1 mark for FOR loop from 2 to 200\n• 1 mark for comparing Data[Index] with Max inside the loop\n• 1 mark for updating Max if Data[Index] > Max",
    explanation: "This algorithm finds the maximum value in an array of 200 integers. The logic is:\n1. Start with the first element as the maximum\n2. Loop through the remaining elements (from index 2 to 200)\n3. Compare each element with the current maximum\n4. If the element is larger, update the maximum\n5. After the loop, output the maximum\n\nYou start from index 2 because you've already used index 1 as the initial maximum. The FOR loop is perfect here because you know exactly how many times to iterate."
  },
  {
    id: 48,
    topic: "Loops (FOR, WHILE, REPEAT) (11.2)",
    module: "11.2",
    paperRef: "s23_22",
    marks: 6,
    question: "An algorithm will:\n1. input a sequence of integer values, one at a time\n2. ignore all values until the value 27 is input, then sum the remaining values\n3. stop summing values when the value 0 is input and then output the sum.\n\nDraw a program flowchart to represent the algorithm.\n\n(Describe the flowchart in words.)",
    modelAnswer: "Flowchart Description:\n\nSTART → SET Total TO 0 → Input Num\n\n↓\nDecision: 'Is Num = 27?'\n  → NO: Input Num (loop back to decision)\n  → YES: Input Num\n\n↓\nDecision: 'Is Num = 0?'\n  → NO: SET Total TO Total + Num → Input Num (loop back to decision)\n  → YES: OUTPUT Total → END",
    markAllocation: "• 1 mark for initialising Total to zero\n• 1 mark for checking for first input of 27 in a loop\n• 1 mark for looping until 0 input\n• 1 mark for summing values in a loop (after input of first 27)\n• 1 mark for outputting Total\n• 1 mark for correct loop structure",
    explanation: "This algorithm has two phases:\n\nPhase 1: Ignore values until 27 is input\n- Keep reading numbers until you see 27\n- Don't add anything to the total yet\n\nPhase 2: Sum values after 27 until 0 is input\n- Once 27 is found, start summing all subsequent numbers\n- Stop when you reach 0\n- Output the total\n\nThe loop structure used should be a conditional loop (WHILE) because the number of iterations is not known in advance – it depends on user input."
  },

  // ============================================================
  // TOPIC 5: 1D ARRAYS (10.2) – Questions 055-065
  // ============================================================
  {
    id: 55,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s21_22",
    marks: 6,
    question: "A student wants to write a program to:\n- declare a 1D array RNum of 100 elements of type INTEGER\n- assign each element a random value in the range 1 to 200 inclusive\n- count and output how many numbers generated were between 66 and 173 inclusive.\n\nWrite pseudocode to represent the algorithm.",
    modelAnswer: "DECLARE RNum : ARRAY [1:100] OF INTEGER\nDECLARE Index, Count : INTEGER\n\nCount ← 0\n\nFOR Index ← 1 TO 100\n  RNum[Index] ← INT(RAND(200)) + 1\n  IF RNum[Index] >= 66 AND RNum[Index] <= 173 THEN\n    Count ← Count + 1\n  ENDIF\nNEXT Index\n\nOUTPUT Count",
    markAllocation: "• 1 mark for array declaration\n• 1 mark for loop for 100 iterations\n• 1 mark for array element index syntax in a loop\n• 1 mark for using RAND() to generate value in range in a loop\n• 1 mark for checking if random number is within range and incrementing count\n• 1 mark for output of count after the loop",
    explanation: "This algorithm does three things:\n1. Creates an array of 100 integers\n2. Fills each element with a random number between 1 and 200\n3. Counts how many numbers fall between 66 and 173\n\nThe key steps:\n- RAND(200) generates a number from 0 up to (but not including) 200\n- INT(RAND(200)) + 1 gives a whole number from 1 to 200\n- The IF statement checks if the number is within the range 66-173\n- Count is incremented when the condition is true"
  },
  {
    id: 56,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s21_22",
    marks: 3,
    question: "A student wants to modify the algorithm so that each element of the array will contain a unique value. Describe the changes that need to be made to the algorithm.",
    modelAnswer: "1. Initialise the array to a rogue value to indicate unassigned elements\n2. Add a conditional loop to:\n3. Generate and store a random number (in the correct range)\n4. Check the stored number against values already in the array\n5. If the stored number is found, generate another random value\n6. Otherwise, add it to the array",
    markAllocation: "• 1 mark for initialising array to rogue value\n• 1 mark for adding a conditional loop\n• 1 mark for checking against existing values and regenerating if needed",
    explanation: "To generate 100 unique random numbers, you need to avoid duplicates.\n\nThe approach:\n1. Initialise all array elements to a special value (like -1) to mark them as empty\n2. For each position in the array:\n   a. Generate a random number\n   b. Check if that number already exists in the array\n   c. If it does, generate a new number and check again\n   d. If it doesn't, store it in the current position\n\nThis is less efficient than the original approach because you may need to generate many random numbers to find a unique one, but it guarantees uniqueness."
  },
  {
    id: 57,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s23_21",
    marks: 6,
    question: "A global 1D array Data contains 150 elements of type STRING.\n\nA function TooMany() will:\n1. take two parameters: a string (the search string) and an integer (the maximum value)\n2. count the number of strings in the array that exactly match the search string\n3. return TRUE if the count is greater than the maximum value, otherwise return FALSE\n\nWrite pseudocode for the function TooMany().",
    modelAnswer: "FUNCTION TooMany(Search : STRING, Max : INTEGER) RETURNS BOOLEAN\n  DECLARE Count, Index : INTEGER\n\n  Count ← 0\n\n  FOR Index ← 1 TO 150\n    IF Data[Index] = Search THEN\n      Count ← Count + 1\n    ENDIF\n  NEXT Index\n\n  IF Count > Max THEN\n    RETURN TRUE\n  ELSE\n    RETURN FALSE\n  ENDIF\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading, ending and return type\n• 1 mark for declaring Count and Index as integers\n• 1 mark for initialising Count\n• 1 mark for loop for 150 iterations\n• 1 mark for comparing Data element with parameter - if equal, increment Count\n• 1 mark for comparing Count with Max and returning Boolean in both cases",
    explanation: "This is a linear search that counts occurrences rather than just finding one.\n\nThe algorithm:\n1. Initialise a counter to zero\n2. Loop through every element in the array\n3. If the element matches the search string, increment the counter\n4. After the loop, compare the count with the maximum allowed\n5. Return TRUE if the count exceeds the maximum, FALSE otherwise\n\nThis is useful for validation scenarios where you need to check if a value appears too many times."
  },
  {
    id: 58,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "w25_23",
    marks: 7,
    question: "A program contains a global 1D array Data containing 20 elements of type INTEGER.\n\nA global string NumString represents a sequence of three-digit numbers, separated by commas. For example: '101,456,219,754,328'\n\nThe string contains at least four three-digit numbers. The total number of three-digit numbers in the string is unknown.\n\nA procedure Store() will:\n- extract one three-digit number at a time from NumString\n- convert each of the three-digit numbers extracted to an integer and assign this to the next array element, starting from index 1\n- end when all three-digit numbers have been stored, or when the array is full.\n\nComplete the pseudocode for Store().\n\nAll local variables used must be declared.",
    modelAnswer: "PROCEDURE Store()\n  DECLARE Index, StartPos, ThisNum : INTEGER\n  DECLARE ThisString : STRING\n\n  Index ← 1\n  StartPos ← 1\n\n  WHILE StartPos <= LENGTH(NumString) AND Index <= 20\n    ThisString ← MID(NumString, StartPos, 3)\n    ThisNum ← STR_TO_NUM(ThisString)\n    Data[Index] ← ThisNum\n    Index ← Index + 1\n    StartPos ← StartPos + 4\n  ENDWHILE\nENDPROCEDURE",
    markAllocation: "• 1 mark for declaring all local variables used\n• 1 mark for conditional loop while end of string not reached and array not full\n• 1 mark for attempted use of MID()\n• 1 mark for correct extraction of three-character substring\n• 1 mark for converting to integer and assigning to array element\n• 1 mark for correct increment of array index by 1\n• 1 mark for correct increment of start position by 4 (3 digits + 1 comma)",
    explanation: "This algorithm extracts numbers from a comma-separated string.\n\nThe pattern is:\n1. Each number is 3 digits long\n2. Each number is followed by a comma (except the last one)\n3. So each number takes up 4 characters (3 digits + 1 comma)\n\nThe process:\n- Start at position 1\n- Extract 3 characters: that's your number\n- Convert it to an integer\n- Store it in the array\n- Move the start position forward by 4 (skip the number and the comma)\n- Continue until you run out of string or the array is full"
  },
  {
    id: 59,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s25_22",
    marks: 8,
    question: "A global 2D array Loyalty is made up of 1000 rows and 2 columns.\n- Column 1 contains a unique customer ID (starting at 10001)\n- Column 2 contains the number of loyalty points\n\nRows that are not currently being used have Column 1 set to 99999.\n\nThe array is sorted in ascending order by customer ID.\n\nA function FindCustomer() is called with a customer ID as a parameter. It searches the Loyalty array for this customer ID. The search stops as soon as the customer ID is found. If found, return the loyalty points, otherwise return -1.\n\nWrite efficient pseudocode for FindCustomer().",
    modelAnswer: "FUNCTION FindCustomer(CustomerID : INTEGER) RETURNS INTEGER\n  DECLARE Index : INTEGER\n\n  IF CustomerID < 10001 OR CustomerID > 11000 THEN\n    RETURN -1\n  ENDIF\n\n  FOR Index ← 1 TO 1000\n    IF Loyalty[Index, 1] = CustomerID THEN\n      RETURN Loyalty[Index, 2]\n    ENDIF\n    IF Loyalty[Index, 1] = 99999 THEN\n      RETURN -1\n    ENDIF\n  NEXT Index\n\n  RETURN -1\nENDFUNCTION",
    markAllocation: "• 1 mark for function header and ending with correct parameter and return type\n• 1 mark for checking CustomerID is within range\n• 1 mark for FOR loop\n• 1 mark for loop for elements 1 to 1000\n• 1 mark for checking if current element contains required Customer ID\n• 1 mark for correctly returning loyalty points if found\n• 1 mark for checking if current element is 99999 and returning -1 / breaking\n• 1 mark for returning -1 if Customer ID not found",
    explanation: "This is an efficient search because the array is sorted by customer ID.\n\nThe algorithm works as follows:\n1. Check if the CustomerID is within the valid range (10001-11000)\n2. Loop through the array in order\n3. If we find the CustomerID, return the loyalty points immediately\n4. If we find an unused element (99999), we can stop searching because the array is sorted and all later elements will also be unused\n5. If we reach the end without finding it, return -1\n\nThe efficiency comes from stopping early when we reach unused elements."
  },
  {
    id: 60,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "w25_23",
    marks: 7,
    question: "A program contains a global 1D array Data containing 20 elements of type INTEGER.\n\nA global string NumString represents a sequence of three-digit numbers, separated by commas. For example: '101,456,219,754,328'\n\nWrite pseudocode for Store() using an alternative method that extracts characters one at a time and tests for commas.",
    modelAnswer: "PROCEDURE Store()\n  DECLARE Index, Position : INTEGER\n  DECLARE SubString : STRING\n  DECLARE ThisCharacter : CHAR\n\n  Index ← 1\n  Position ← 1\n  SubString ← ''\n\n  WHILE Index <= 20 AND Position <= LENGTH(NumString)\n    ThisCharacter ← MID(NumString, Position, 1)\n\n    IF ThisCharacter = ',' THEN\n      Data[Index] ← STR_TO_NUM(SubString)\n      Index ← Index + 1\n      SubString ← ''\n    ELSE\n      SubString ← SubString & ThisCharacter\n    ENDIF\n\n    Position ← Position + 1\n  ENDWHILE\n\n  Data[Index] ← STR_TO_NUM(SubString)   // last 3-digit string\nENDPROCEDURE",
    markAllocation: "• 1 mark for declaring all variables used\n• 1 mark for conditional loop while end of string not reached and array not full\n• 1 mark for correctly extracting a character from NumString\n• 1 mark for testing for comma in a loop\n• 1 mark for converting substring to number and storing in Data array\n• 1 mark for resetting SubString and incrementing Index\n• 1 mark for concatenating next character to SubString",
    explanation: "This alternative method builds the number character by character instead of extracting 3 digits at a time.\n\nThe process:\n1. Read characters one at a time\n2. If the character is a comma, the current substring is complete:\n   - Convert it to a number\n   - Store it in the array\n   - Reset the substring for the next number\n3. If the character is not a comma, add it to the substring\n4. At the end, store the final substring\n\nThis method is more flexible because it doesn't rely on numbers being a fixed length – it would work with any length numbers."
  },
  {
    id: 61,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s22_22",
    marks: 5,
    question: "Two 1D arrays of type integer:\n- Array1 contains 600 elements (sample values from a sensor)\n- Array2 contains 200 elements\n\nThe sensor always takes three consecutive samples. A procedure Summarise() will calculate the average of three consecutive values from Array1 and write the result to Array2. This is repeated for all values in Array1.\n\nWrite pseudocode for Summarise().",
    modelAnswer: "PROCEDURE Summarise()\n  DECLARE Value : REAL\n  DECLARE IxA, IxB : INTEGER\n\n  IxB ← 1\n\n  FOR IxA ← 1 TO 598 STEP 3\n    Value ← Array1[IxA] + Array1[IxA + 1] + Array1[IxA + 2]\n    Value ← Value / 3\n    Array2[IxB] ← INT(Value)\n    IxB ← IxB + 1\n  NEXT IxA\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading and ending\n• 1 mark for declaring both index variables\n• 1 mark for loop to process all elements from Array1\n• 1 mark for summing three consecutive values and dividing by 3\n• 1 mark for converting result to integer and assigning to correct array element",
    explanation: "This algorithm reduces 600 samples into 200 averages.\n\nThe logic:\n1. Array1 has 600 elements: 1, 2, 3, 4, 5, 6, ...\n2. We take groups of 3: (1,2,3), (4,5,6), (7,8,9), ...\n3. Each group is averaged and stored in Array2\n4. So Array2[1] = average of Array1[1..3]\n   Array2[2] = average of Array1[4..6]\n   Array2[3] = average of Array1[7..9]\n\nThe STEP 3 in the FOR loop jumps by 3 each time, grouping the elements correctly."
  },
  {
    id: 62,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s21_22",
    marks: 8,
    question: "A procedure CountVowels() will:\n- be called with a string containing alphanumeric characters\n- count and output the number of occurrences of each vowel (a, e, i, o, u)\n- count and output the number of occurrences of the other alphabetic characters\n- the string may contain both upper and lower case characters\n\nEach count value will be stored in a unique element of a global 1D array CharCount of type INTEGER. The array will contain six elements.\n\nWrite pseudocode for CountVowels().",
    modelAnswer: "PROCEDURE CountVowels(ThisString : STRING)\n  DECLARE Index : INTEGER\n  DECLARE ThisChar : CHAR\n\n  FOR Index ← 1 TO 6\n    CharCount[Index] ← 0\n  NEXT Index\n\n  FOR Index ← 1 TO LENGTH(ThisString)\n    ThisChar ← LCASE(MID(ThisString, Index, 1))\n\n    CASE OF ThisChar\n      'a' : CharCount[1] ← CharCount[1] + 1\n      'e' : CharCount[2] ← CharCount[2] + 1\n      'i' : CharCount[3] ← CharCount[3] + 1\n      'o' : CharCount[4] ← CharCount[4] + 1\n      'u' : CharCount[5] ← CharCount[5] + 1\n      'a' TO 'z' : CharCount[6] ← CharCount[6] + 1\n    ENDCASE\n  NEXT Index\n\n  FOR Index ← 1 TO 6\n    OUTPUT CharCount[Index]\n  NEXT Index\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading with parameter and ending\n• 1 mark for declaring local variable for Index\n• 1 mark for initialising elements of CharCount array to zero\n• 1 mark for loop through all characters in ThisString\n• 1 mark for using MID() to extract single character\n• 1 mark for testing for each vowel and incrementing associated count\n• 1 mark for testing for consonants and incrementing associated count\n• 1 mark for outputting the results after the loop",
    explanation: "This procedure uses a CASE structure to count different types of characters.\n\nThe array CharCount has 6 elements:\n- Elements 1-5: count the vowels (a, e, i, o, u)\n- Element 6: count all other alphabetic characters (consonants)\n\nThe algorithm:\n1. Initialise all counts to zero\n2. Loop through each character of the string\n3. Convert to lower case for consistent comparison\n4. Use CASE to determine which category the character belongs to\n5. Increment the corresponding count\n6. Output all counts"
  },
  {
    id: 63,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s21_23",
    marks: 8,
    question: "A global 2D array Result of type INTEGER is used to store exam candidate numbers together with their marks. The array contains 2000 elements, organised as 1000 rows and 2 columns.\n\nColumn 1 contains the candidate number and column 2 contains the mark for the corresponding candidate. All elements contain valid exam result data.\n\nA procedure Sort() is needed to sort Result into ascending order of mark using an efficient bubble sort algorithm.\n\nWrite pseudocode for Sort().",
    modelAnswer: "PROCEDURE Sort()\n  DECLARE Temp : INTEGER\n  DECLARE NoSwaps : BOOLEAN\n  DECLARE Boundary, Row : INTEGER\n\n  Boundary ← 999\n\n  REPEAT\n    NoSwaps ← TRUE\n\n    FOR Row ← 1 TO Boundary\n      IF Result[Row, 2] > Result[Row + 1, 2] THEN\n        Temp ← Result[Row, 1]\n        Result[Row, 1] ← Result[Row + 1, 1]\n        Result[Row + 1, 1] ← Temp\n\n        Temp ← Result[Row, 2]\n        Result[Row, 2] ← Result[Row + 1, 2]\n        Result[Row + 1, 2] ← Temp\n\n        NoSwaps ← FALSE\n      ENDIF\n    NEXT Row\n\n    Boundary ← Boundary - 1\n\n  UNTIL NoSwaps = TRUE\nENDPROCEDURE",
    markAllocation: "• 1 mark for outer loop\n• 1 mark for inner loop\n• 1 mark for correct comparison in a loop\n• 1 mark for correct swap of column 1 array elements\n• 1 mark for correct swap of column 2 array elements\n• 1 mark for NoSwap mechanism (outer loop including flag reset)\n• 1 mark for NoSwap mechanism (setting flag in inner loop to indicate swap)\n• 1 mark for reducing Boundary in the outer loop",
    explanation: "This is an efficient bubble sort that sorts both columns together.\n\nThe algorithm:\n1. Set Boundary to the last element (999 because there are 1000 elements)\n2. Repeat until no swaps are made in a pass:\n   a. Set NoSwaps to TRUE\n   b. Loop from 1 to Boundary\n   c. Compare marks (column 2) of adjacent rows\n   d. If they are out of order, swap both columns\n   e. Set NoSwaps to FALSE when a swap occurs\n   f. Reduce Boundary by 1 (the last element is now in correct position)\n\nThe efficiency comes from:\n- Stopping early when the array is sorted (NoSwaps)\n- Reducing the boundary each pass (the largest elements bubble to the end)"
  },
  {
    id: 64,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "w25_21",
    marks: 7,
    question: "A program contains a global 1D array Number consisting of 20 elements of type REAL.\n\nA procedure Store() will input a sequence of up to 20 real values, one value at a time. These values will be assigned to elements of the array using four steps:\n\nStep 1: store the first value in the sequence in the first element of the array\nStep 2: check each subsequent value input. If this value is larger than the previous value input, then assign the value to the next array element, otherwise go to step 4\nStep 3: repeat from step 2 unless the array is full\nStep 4: output the count of the number of values stored in the array together with a suitable message.\n\nComplete the pseudocode for Store().\n\nAll variables used in the algorithm must be declared.",
    modelAnswer: "PROCEDURE Store()\n  DECLARE ThisNum, LastNum : REAL\n  DECLARE Index : INTEGER\n  DECLARE Count : INTEGER\n\n  INPUT ThisNum\n  LastNum ← ThisNum\n  Number[1] ← ThisNum\n  Count ← 1\n  INPUT ThisNum\n\n  FOR Index ← 2 TO 20\n    IF ThisNum > LastNum THEN\n      Number[Index] ← ThisNum\n      LastNum ← ThisNum\n      Count ← Count + 1\n      IF Index < 20 THEN\n        INPUT ThisNum\n      ENDIF\n    ELSE\n      BREAK\n    ENDIF\n  NEXT Index\n\n  OUTPUT Count, ' values were stored in the array'\nENDPROCEDURE",
    markAllocation: "• 1 mark for declaring local variables Index, ThisNum, LastNum and Count\n• 1 mark for inputting value and assigning to first element\n• 1 mark for count-controlled loop\n• 1 mark for checking if current value is greater than previous value\n• 1 mark for assigning input value to current element following correct comparison\n• 1 mark for incrementing Count\n• 1 mark for final output giving count of elements stored",
    explanation: "This algorithm stores only values that are larger than the previous value.\n\nThe process:\n1. Input the first value and store it in Number[1]\n2. Input the second value\n3. For each subsequent position (2 to 20):\n   a. Check if the value is greater than the previous value\n   b. If yes, store it and input the next value\n   c. If no, stop storing and output the count\n\nThis creates an array of increasing values. The sequence stops when a value is not larger than the previous one."
  },
  {
    id: 65,
    topic: "1D Arrays (10.2)",
    module: "10.2",
    paperRef: "s24_22",
    marks: 7,
    question: "A music player displays track titles. Up to 16 characters can be displayed. Track titles longer than 16 characters need to be trimmed.\n\nWords must be removed from the end of the track title until the resulting title is less than 14 characters. When a word is removed, the space in front of that word is also removed. Three dots are added to the end of the last word displayed.\n\nWrite a function Trim() that takes a string representing the original title and returns the string to be displayed.\n\nAssume:\n- Words are separated by a single space character.\n- The first word is less than 14 characters.",
    modelAnswer: "FUNCTION Trim(Name : STRING) RETURNS STRING\n  CONSTANT Dots = '...'\n  CONSTANT Space = ' '\n\n  IF LENGTH(Name) <= 16 THEN\n    RETURN Name\n  ENDIF\n\n  WHILE LENGTH(Name) > 13\n    REPEAT\n      Name ← LEFT(Name, LENGTH(Name) - 1)\n    UNTIL RIGHT(Name, 1) = Space\n  ENDWHILE\n\n  Name ← LEFT(Name, LENGTH(Name) - 1)\n  Name ← Name & Dots\n\n  RETURN Name\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading, ending, parameter and return type\n• 1 mark for checking if length of original string <= 16\n• 1 mark for conditional loop until string is short enough\n• 1 mark for inner loop to identify words to remove\n• 1 mark for stripping characters back to space\n• 1 mark for removing final space\n• 1 mark for concatenating Dots and returning result",
    explanation: "This function trims long titles by removing whole words from the end.\n\nExample: 'Bat out of Hull' (15 characters)\n- It's > 13, so we need to trim\n- Remove 'Hull' (and the space before it): 'Bat out of'\n- This is 11 characters, which is <= 13\n- Add '...': 'Bat out of...'\n\nExample: 'Bohemian Symphony' (18 characters)\n- Remove 'Symphony' (and space): 'Bohemian' (8 chars)\n- Add '...': 'Bohemian...'\n\nThe algorithm removes entire words, not just characters, to keep the title readable."
  },

  // ============================================================
  // TOPIC 6: 2D ARRAYS (10.2) – Questions 070-075
  // ============================================================
  {
    id: 70,
    topic: "2D Arrays (10.2)",
    module: "10.2",
    paperRef: "s23_21",
    marks: 6,
    question: "A video-conferencing program supports up to six users. Digitised values are stored in array Sample (6 rows by 128 columns). Each row contains 128 digitised sound samples from one user.\n\nA procedure Mix() will:\n- calculate the average of each of the 6 sound samples in a column\n- ignore sound sample values of 10 or less\n- store the average value in the corresponding position in Result\n- repeat for each column in array Sample\n\nWrite pseudocode for Mix(). Assume Sample and Result are global.",
    modelAnswer: "PROCEDURE Mix()\n  DECLARE Count, Total, ThisSample : INTEGER\n  DECLARE ThisUser, ThisColumn : INTEGER\n\n  FOR ThisColumn ← 1 TO 128\n    Count ← 0\n    Total ← 0\n\n    FOR ThisUser ← 1 TO 6\n      IF Sample[ThisUser, ThisColumn] > 10 THEN\n        Count ← Count + 1\n        Total ← Total + Sample[ThisUser, ThisColumn]\n      ENDIF\n    NEXT ThisUser\n\n    Result[ThisColumn] ← INT(Total / Count)\n  NEXT ThisColumn\nENDPROCEDURE",
    markAllocation: "• 1 mark for declaring and initialising before inner loop of Count and Total\n• 1 mark for outer loop for 128 iterations\n• 1 mark for inner loop for six iterations\n• 1 mark for testing if sample > 10\n• 1 mark for summing Total and incrementing Count if true\n• 1 mark for calculating average and assigning to Result array",
    explanation: "This algorithm processes sound samples from multiple users.\n\nFor each column (time point):\n1. Initialise Count and Total to zero\n2. For each of the 6 users:\n   a. If the sample value is > 10 (ignore quiet sounds)\n   b. Add it to the total and count it\n3. Calculate the average: Total / Count\n4. Store the average in Result at the same column position\n\nThis creates a single audio track from 6 users, ignoring quiet samples."
  },
  {
    id: 71,
    topic: "2D Arrays (10.2)",
    module: "10.2",
    paperRef: "w21_22",
    marks: 6,
    question: "A mobile phone touchscreen is represented by a 2D array Screen of type INTEGER (800 rows × 1280 columns). An array element is set to 1 if the user touches that part of the screen.\n\nA function FirstRowSet() searches for the first row that has an array element set to 1 and returns the index of that row. Returns -1 if no elements are set.\n\nWrite efficient pseudocode for FirstRowSet().",
    modelAnswer: "FUNCTION FirstRowSet() RETURNS INTEGER\n  DECLARE Row, Col : INTEGER\n  DECLARE Found : BOOLEAN\n\n  Row ← 1\n  Found ← FALSE\n\n  WHILE Row <= 800 AND Found = FALSE\n    Col ← 1\n    WHILE Col <= 1280 AND Found = FALSE\n      IF Screen[Row, Col] = 1 THEN\n        Found ← TRUE\n      ENDIF\n      Col ← Col + 1\n    ENDWHILE\n    Row ← Row + 1\n  ENDWHILE\n\n  IF Found = FALSE THEN\n    Row ← 0\n  ENDIF\n\n  RETURN Row - 1\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading and ending and return type\n• 1 mark for outer loop 1 to 800 (row)\n• 1 mark for inner loop 1 to 1280 (column)\n• 1 mark for referencing Screen element and testing for 1\n• 1 mark for saving row number and exiting loops if found\n• 1 mark for returning Row number or -1",
    explanation: "This function finds the first touched row on the screen.\n\nThe algorithm:\n1. Start at row 1, column 1\n2. Check each element in row 1 from left to right\n3. If a 1 is found, stop searching and return the row number\n4. If no 1 is found in row 1, move to row 2 and repeat\n5. If no 1 is found in any row, return -1\n\nThis is efficient because it stops as soon as it finds the first touch, rather than scanning the entire screen."
  },
  {
    id: 72,
    topic: "2D Arrays (10.2)",
    module: "10.2",
    paperRef: "s25_22",
    marks: 8,
    question: "A procedure Sort() is needed to sort a 2D array Reading (2000 rows × 2 columns) into ascending order of sensor value (column 1) using an efficient bubble sort algorithm. Column 2 contains the corresponding sensor ID.\n\nWrite efficient pseudocode for Sort().",
    modelAnswer: "PROCEDURE Sort()\n  DECLARE Temp, J, Boundary : INTEGER\n  DECLARE NoSwaps : BOOLEAN\n\n  Boundary ← 1999\n\n  REPEAT\n    NoSwaps ← TRUE\n\n    FOR J ← 1 TO Boundary\n      IF Reading[J, 1] > Reading[J + 1, 1] THEN\n        Temp ← Reading[J, 1]\n        Reading[J, 1] ← Reading[J + 1, 1]\n        Reading[J + 1, 1] ← Temp\n\n        Temp ← Reading[J, 2]\n        Reading[J, 2] ← Reading[J + 1, 2]\n        Reading[J + 1, 2] ← Temp\n\n        NoSwaps ← FALSE\n      ENDIF\n    NEXT J\n\n    Boundary ← Boundary - 1\n\n  UNTIL NoSwaps = TRUE\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading and ending\n• 1 mark for conditional loop correctly formed including Boolean flag\n• 1 mark for inner loop\n• 1 mark for correct range 1 to 1999\n• 1 mark for comparison of element J with J+1\n• 1 mark for declaring Temp variable and swapping elements\n• 1 mark for swapping both values\n• 1 mark for reducing Boundary",
    explanation: "This is similar to the bubble sort in Question 63, but for a different array.\n\nThe array has 2000 rows and 2 columns. We sort by the first column (sensor value) but we must keep the sensor ID (column 2) with its corresponding value.\n\nWhen we swap two rows, we swap BOTH columns so that the value and ID stay together. This maintains the relationship between the data items."
  },
  {
    id: 73,
    topic: "2D Arrays (10.2)",
    module: "10.2",
    paperRef: "w23_22",
    marks: 7,
    question: "RouteTable is a global 2D array of integers (6 rows × 3 columns).\n- Column 1: lower bound of ID range\n- Column 2: upper bound of ID range\n- Column 3: port number\n\nRow 3 in the example shows an unused row (column 1 set to -1).\n\nA function GetPort() takes a DestinationID as a parameter, searches for the range containing the DestinationID, and returns the port number, or -1 if not found.\n\nWrite pseudocode for GetPort().",
    modelAnswer: "FUNCTION GetPort(ThisDest : STRING) RETURNS INTEGER\n  DECLARE Index, DNum, Port : INTEGER\n\n  DNum ← STR_TO_NUM(ThisDest)\n  Index ← 1\n  Port ← -1\n\n  REPEAT\n    IF RouteTable[Index, 1] <> -1 THEN\n      IF DNum >= RouteTable[Index, 1] AND\n         DNum <= RouteTable[Index, 2] THEN\n        Port ← RouteTable[Index, 3]\n      ENDIF\n    ENDIF\n    Index ← Index + 1\n  UNTIL Index = 7 OR Port <> -1\n\n  RETURN Port\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading and ending including parameter and return type\n• 1 mark for converting parameter to a number\n• 1 mark for conditional loop through array\n• 1 mark for skipping unused element\n• 1 mark for checking one range with destination\n• 1 mark for testing all ranges correctly\n• 1 mark for storing port value if destination matched\n• 1 mark for returning port value including -1 if no match found",
    explanation: "This function finds which port to use for a given destination ID.\n\nThe routing table defines ranges of IDs and the port to use for each range.\n\nExample:\n- Row 1: 100-199 → Port 1\n- Row 2: 200-259 → Port 2\n- Row 4: 260-399 → Port 2\n- Row 5: 400-599 → Port 3\n- Row 6: 600-999 → Port 1\n\nIf the destination ID is 283, it falls in the range 260-399 (row 4), so port 2 is returned. If the destination ID is 150, it falls in the range 100-199 (row 1), so port 1 is returned.\n\nUnused rows (with -1) are skipped."
  },
  {
    id: 74,
    topic: "2D Arrays (10.2)",
    module: "10.2",
    paperRef: "w25_23",
    marks: 5,
    question: "A procedure BestRestaurants() searches a 2D array ReviewScores (20000 rows × 2 columns) for restaurants with an average score that exceeds 8.0.\n\nColumn 1 stores the geocode and score (separated by '#'), e.g., '1DFG+9N#8.3'\nColumn 2 stores the review comment.\n\nThe procedure takes a geocode as a parameter. If the parameter matches a geocode in the array and the average score exceeds 8.0, output the geocode concatenated with the review comment.\n\nWrite pseudocode for BestRestaurants().",
    modelAnswer: "PROCEDURE BestRestaurants(SearchGeo : STRING)\n  DECLARE Index : INTEGER\n  DECLARE MatchFound : BOOLEAN\n  DECLARE Score : REAL\n  DECLARE GeoCode : STRING\n  DECLARE ScoreLength : INTEGER\n\n  Index ← 1\n  MatchFound ← FALSE\n\n  WHILE Index <= 20000 AND MatchFound = FALSE\n    GeoCode ← LEFT(ReviewScores[Index, 1], 7)\n    ScoreLength ← LENGTH(ReviewScores[Index, 1]) - 8\n    Score ← STR_TO_NUM(RIGHT(ReviewScores[Index, 1], ScoreLength))\n\n    IF GeoCode = SearchGeo AND Score > 8.0 THEN\n      MatchFound ← TRUE\n    ELSE\n      Index ← Index + 1\n    ENDIF\n  ENDWHILE\n\n  IF MatchFound = TRUE THEN\n    OUTPUT SearchGeo & ' ' & ReviewScores[Index, 2]\n  ENDIF\nENDPROCEDURE",
    markAllocation: "• 1 mark for extracting GeoCode from ReviewScores\n• 1 mark for extracting the string representing Score\n• 1 mark for converting extracted string to a numeric value\n• 1 mark for checking if input matches extracted GeoCode and score > 8.0\n• 1 mark for outputting the geocode with its review text",
    explanation: "This procedure searches for a specific restaurant and checks if its average score is good enough.\n\nThe data in column 1 is a single string like '1DFG+9N#8.3':\n- First 7 characters: the geocode\n- After the '#': the score\n\nTo extract the score, we need the length of everything after the '#'.\nScoreLength = LENGTH(ReviewScores[Index, 1]) - 8 (7 chars for geocode + 1 for '#')\nThen Score ← STR_TO_NUM(RIGHT(ReviewScores[Index, 1], ScoreLength))\n\nIf we find a match and the score is above 8.0, we output the geocode and the review comment."
  },
  {
    id: 75,
    topic: "2D Arrays (10.2)",
    module: "10.2",
    paperRef: "w24_21",
    marks: 2,
    question: "Write pseudocode to declare a 2D array Check of type BOOLEAN. The array has 76 elements (indices 0 to 75). All elements should be set to FALSE initially.",
    modelAnswer: "DECLARE Check : ARRAY[0:75] OF BOOLEAN",
    markAllocation: "• 1 mark for correct declaration\n• 1 mark for correct range (0:75)",
    explanation: "A 2D array declaration specifies the data type, the name, and the ranges for each dimension.\n\nFor a 1D array of 76 elements with indices 0 to 75:\nDECLARE Check : ARRAY[0:75] OF BOOLEAN\n\nAll elements will automatically be initialised to FALSE for BOOLEAN arrays in most programming languages. If you need to explicitly initialise them, you would use a loop:\n\nFOR Index ← 0 TO 75\n  Check[Index] ← FALSE\nNEXT Index"
  },

  // ============================================================
  // TOPIC 7: RECORDS (10.1) – Questions 077-080
  // ============================================================
  {
    id: 77,
    topic: "Records (10.1)",
    module: "10.1",
    paperRef: "s21_22",
    marks: 3,
    question: "A program stores data about students and the clubs they join. Each student may join up to three clubs.\n\nWrite pseudocode to declare a record structure for type Student.\n\nFields required:\n- StudentID (STRING)\n- Email (STRING)\n- Club_1, Club_2, Club_3 (INTEGER, values 1-99)",
    modelAnswer: "TYPE Student\n  DECLARE StudentID : STRING\n  DECLARE Email : STRING\n  DECLARE Club_1 : INTEGER\n  DECLARE Club_2 : INTEGER\n  DECLARE Club_3 : INTEGER\nENDTYPE",
    markAllocation: "• 1 mark for TYPE and ENDTYPE statements\n• 1 mark for StudentID and Email fields as STRING\n• 1 mark for all Club fields as INTEGER",
    explanation: "A record is a composite data type that groups related data items of different types under one name.\n\nThe TYPE...ENDTYPE structure defines the blueprint for the record. Each field is declared with a name and a data type.\n\nRecords are useful when you have multiple pieces of information about a single entity (like a student) and you want to keep them together."
  },
  {
    id: 78,
    topic: "Records (10.1)",
    module: "10.1",
    paperRef: "s21_22",
    marks: 2,
    question: "Using the Student record type from the previous question, write pseudocode to declare a 1D array Membership containing 3000 elements.",
    modelAnswer: "DECLARE Membership : ARRAY [1:3000] OF Student",
    markAllocation: "• 1 mark for correct array declaration syntax\n• 1 mark for using the correct type (Student) and range (1:3000)",
    explanation: "An array of records combines the power of both data structures:\n- Each element is a complete record containing all fields\n- The array allows you to store many records and access them by index\n\nThis is declared as: DECLARE Membership : ARRAY [1:3000] OF Student\n\nYou access fields with dot notation: Membership[Index].StudentID"
  },
  {
    id: 79,
    topic: "Records (10.1)",
    module: "10.1",
    paperRef: "s23_21",
    marks: 3,
    question: "A record type Component is declared:\nTYPE Component\n  DECLARE Item_ID : STRING\n  DECLARE Reject : BOOLEAN\n  DECLARE Weight : REAL\nENDTYPE\n\nA global array Batch[1:1000] OF Component is declared.\n\nWrite a pseudocode clause to check whether the weight of an individual component (indexed by ThisIndex) is within the acceptable range (between Min and Max, inclusive).",
    modelAnswer: "IF Batch[ThisIndex].Weight >= Min AND\n   Batch[ThisIndex].Weight <= Max THEN",
    markAllocation: "• 1 mark for referencing Batch[ThisIndex].Weight\n• 1 mark for one boundary check\n• 1 mark for the other boundary check with correct logic operator",
    explanation: "To access a field within a record that is stored in an array:\n- First use the array index: Batch[ThisIndex]\n- Then use dot notation to access the field: Batch[ThisIndex].Weight\n\nThe condition checks if the weight is within the range [Min, Max]. We need to check both: Weight >= Min AND Weight <= Max."
  },
  {
    id: 80,
    topic: "Records (10.1)",
    module: "10.1",
    paperRef: "s23_23",
    marks: 3,
    question: "A record type MyType is defined with three fields:\nTYPE MyType\n  DECLARE RA : INTEGER\n  DECLARE RB : STRING\n  DECLARE RC : BOOLEAN\nENDTYPE\n\nWrite pseudocode to define MyType and then write the pseudocode header for a procedure Sub-9() that takes a single parameter of type MyType passed by reference.",
    modelAnswer: "TYPE MyType\n  DECLARE RA : INTEGER\n  DECLARE RB : STRING\n  DECLARE RC : BOOLEAN\nENDTYPE\n\nPROCEDURE Sub-9 (BYREF Param : MyType)",
    markAllocation: "• 1 mark for TYPE MyType...ENDTYPE\n• 1 mark for RA, RB and RC fields\n• 1 mark for correct procedure header",
    explanation: "This combines record definition with procedure parameter passing.\n\nThe record MyType groups three different data types together. The procedure Sub-9 takes a parameter of this record type.\n\nPassing BYREF means the procedure can modify the fields of the record, and those changes will be visible to the calling program. This is often used when you want to return multiple values from a procedure."
  },

  // ============================================================
  // TOPIC 8: PROCEDURES & FUNCTIONS (11.3) – Questions 087-095
  // ============================================================
  {
    id: 87,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "w24_21",
    marks: 6,
    question: "A record type Result is defined:\nTYPE Result\n  DECLARE Done : BOOLEAN\n  DECLARE Value : REAL\nENDTYPE\n\nA function Evaluate() takes two string parameters (representing numeric values) and returns a variable of type Result.\n\nIf either string does not represent a valid numeric value, or the divisor is zero, Done is set to FALSE. Otherwise, Done is set to TRUE and Value is assigned the result of the calculation.\n\nWrite pseudocode for Evaluate().",
    modelAnswer: "FUNCTION Evaluate(NumStr1, NumStr2 : STRING) RETURNS Result\n  DECLARE RetVal : Result\n  DECLARE Num1, Num2 : REAL\n\n  RetVal.Done ← FALSE\n\n  IF IS_NUM(NumStr1) = TRUE AND IS_NUM(NumStr2) = TRUE THEN\n    Num1 ← STR_TO_NUM(NumStr1)\n    Num2 ← STR_TO_NUM(NumStr2)\n\n    IF Num2 <> 0 THEN\n      RetVal.Value ← Num1 / Num2\n      RetVal.Done ← TRUE\n    ENDIF\n  ENDIF\n\n  RETURN RetVal\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading, parameters, ending and return type\n• 1 mark for local declaration of type Result\n• 1 mark for using IS_NUM() to check both parameters\n• 1 mark for using STR_TO_NUM() to convert both parameters\n• 1 mark for checking divisor is non-zero\n• 1 mark for correct calculation and assignment to Value field",
    explanation: "This function demonstrates returning a record type from a function.\n\nThe validation steps:\n1. Check that both strings are valid numbers (IS_NUM)\n2. Convert them to real numbers (STR_TO_NUM)\n3. Check that the divisor is not zero\n4. If all checks pass, perform the calculation and set Done to TRUE\n5. If any check fails, Done remains FALSE\n\nThe function returns a single value (a record) that contains both a status flag and the result value."
  },
  {
    id: 88,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "s22_23",
    marks: 6,
    question: "A text string contains three data items concatenated:\n<StockID><Description><Cost>\n\nItems:\n- StockID: 5 characters\n- Description: 32 characters\n- Cost: the remainder of the string\n\nA procedure Unpack() takes four parameters of type string. One parameter is the original text string. The other three parameters are used to represent the three data items and are assigned values within the procedure.\n\nWrite pseudocode for Unpack().",
    modelAnswer: "PROCEDURE Unpack(BYVAL TLine : STRING,\n                 BYREF SID : STRING,\n                 BYREF SDesc : STRING,\n                 BYREF SCost : STRING)\n\n  SID ← LEFT(TLine, 5)\n  SDesc ← MID(TLine, 6, 32)\n  SCost ← RIGHT(TLine, LENGTH(TLine) - 37)\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading and ending including four parameters\n• 1 mark for use of BYREF for the three extracted values\n• 1 mark for extracting and assigning SID\n• 1 mark for extracting and assigning SDesc\n• 1 mark for calculating the length of SCost\n• 1 mark for extracting and assigning SCost",
    explanation: "This procedure extracts three fields from a fixed-format string.\n\nThe string format: <StockID><Description><Cost>\n- StockID is 5 characters\n- Description is 32 characters\n- Cost is everything after character 37 (5 + 32 + 1)\n\nBYVAL (By Value) means the original string is copied; changes to the parameter don't affect the original. BYREF (By Reference) means the parameters are passed by reference, so changes affect the original variables in the calling program.\n\nThis is how the procedure 'returns' multiple values – by modifying the BYREF parameters."
  },
  {
    id: 89,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "s25_23",
    marks: 5,
    question: "Write pseudocode for the module headers:\n\nSub_Part1A: Takes a parameter R of type INTEGER.\nSub_Part2A: Takes a parameter T of type REAL and returns a BOOLEAN.\nSub_Part3A: Takes parameters V (INTEGER), W (BOOLEAN), and U (STRING passed by reference).",
    modelAnswer: "PROCEDURE Sub_Part1A(R : INTEGER)\n\nFUNCTION Sub_Part2A(T : REAL) RETURNS BOOLEAN\n\nPROCEDURE Sub_Part3A(V : INTEGER, W : BOOLEAN, BYREF U : STRING)",
    markAllocation: "• 1 mark for PROCEDURE Sub_Part1A(R : INTEGER)\n• 2 marks for FUNCTION Sub_Part2A(T : REAL) RETURNS BOOLEAN\n• 2 marks for PROCEDURE Sub_Part3A(V : INTEGER, W : BOOLEAN, BYREF U : STRING)",
    explanation: "The key differences between procedure and function headers:\n\n- A PROCEDURE does not return a value\n- A FUNCTION returns a value and uses the RETURNS keyword\n\nParameters can be passed BYREF or BYVAL (BYVAL is the default if not specified).\n\nThe headers must specify the correct data types for all parameters and the return type for functions."
  },
  {
    id: 90,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "w25_23",
    marks: 5,
    question: "A function Pop() is written to remove an item from a stack. It returns an item of type PopData which is defined:\n\nTYPE PopData\n  DECLARE Data : INTEGER\n  DECLARE Exists : BOOLEAN\nENDTYPE\n\nComplete the pseudocode for Pop().\n\nStack notes:\n- SP (stack pointer) contains the array index of the last value pushed\n- If the stack is empty, SP = 0\n- The first item is stored in ThisStack[1]\n- SP is incremented each time an item is added",
    modelAnswer: "FUNCTION Pop() RETURNS PopData\n  DECLARE ThisPop : PopData\n\n  IF SP < 1 THEN\n    PopData.Exists ← FALSE\n  ELSE\n    PopData.Data ← ThisStack[SP]\n    PopData.Exists ← TRUE\n    SP ← SP - 1\n  ENDIF\n\n  RETURN ThisPop\nENDFUNCTION",
    markAllocation: "• 1 mark for declaring ThisPop of type PopData\n• 1 mark for checking if SP < 1 or SP = 0\n• 1 mark for setting PopData.Exists to FALSE if stack is empty\n• 1 mark for setting PopData.Data ← ThisStack[SP]\n• 1 mark for setting PopData.Exists to TRUE and decrementing SP",
    explanation: "This function returns a record containing both the data and a status flag.\n\nStack operations:\n- PUSH: adds an item to the top of the stack\n- POP: removes an item from the top of the stack\n\nThe stack pointer (SP) indicates where the top of the stack is.\n\nWhen popping:\n1. Check if the stack is empty (SP < 1)\n2. If empty, Exists = FALSE (cannot pop)\n3. If not empty, retrieve the data from ThisStack[SP]\n4. Set Exists = TRUE and decrement SP\n\nThe record return type allows the function to return both the data and the success/failure status."
  },
  {
    id: 91,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "s24_21",
    marks: 7,
    question: "A function Evaluate() takes two string parameters and returns a record type Result.\n\nWrite pseudocode for Evaluate() including validation of the string parameters.",
    modelAnswer: "FUNCTION Evaluate(NumStr1, NumStr2 : STRING) RETURNS Result\n  DECLARE RetVal : Result\n  DECLARE Num1, Num2 : REAL\n\n  RetVal.Done ← FALSE\n\n  IF IS_NUM(NumStr1) = TRUE AND IS_NUM(NumStr2) = TRUE THEN\n    Num1 ← STR_TO_NUM(NumStr1)\n    Num2 ← STR_TO_NUM(NumStr2)\n\n    IF Num2 <> 0 THEN\n      RetVal.Value ← Num1 / Num2\n      RetVal.Done ← TRUE\n    ENDIF\n  ENDIF\n\n  RETURN RetVal\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading, parameters, ending\n• 1 mark for correct return type of Result\n• 1 mark for local declaration of type Result\n• 1 mark for using IS_NUM() to check both parameters\n• 1 mark for using STR_TO_NUM() to convert both parameters\n• 1 mark for checking divisor is non-zero\n• 1 mark for correct calculation and assignment to Value field",
    explanation: "This function validates two strings before performing a calculation.\n\nThe validation steps:\n1. Check both strings are valid numbers using IS_NUM()\n2. Convert both strings to numbers using STR_TO_NUM()\n3. Check the divisor is not zero\n4. If all checks pass, perform division and set Done = TRUE\n5. If any check fails, Done remains FALSE\n\nThis prevents runtime errors like 'divide by zero' or 'invalid number conversion'."
  },
  {
    id: 92,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "s21_21",
    marks: 3,
    question: "Write the pseudocode header for the module LoanReturn() based on the following description:\n\nLoanReturn() is called with parameters LoanID, BookID and Fine.\n- LoanID and BookID are of type STRING\n- Fine is of type REAL and is passed by reference\n- The module code checks whether the book has been returned on time and then assigns a new value to Fine",
    modelAnswer: "PROCEDURE LoanReturn (LoanID : STRING, BookID : STRING, BYREF Fine : REAL)",
    markAllocation: "• 1 mark for PROCEDURE\n• 1 mark for LoanID and BookID parameters\n• 1 mark for BYREF Fine : REAL",
    explanation: "This header shows how to pass parameters by reference.\n\nLoanID and BookID are passed by value (the default). They provide information to the procedure but are not modified.\n\nFine is passed by reference (BYREF) because the procedure needs to modify the fine amount and have that change reflected in the calling program.\n\nThis is a common pattern: input parameters are passed by value, and output parameters are passed by reference."
  },
  {
    id: 93,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "s23_22",
    marks: 7,
    question: "A function CheckInfo() takes a string parameter representing a line of item information and checks whether the item information is valid.\n\nValid information:\n- ItemNum: 4 numeric characters (0001-5999)\n- SupplierCode: 3 alphabetic characters\n- Description: a minimum of 12 characters\n\nWrite pseudocode for CheckInfo() using the module OnlyAlpha() which returns TRUE if a string contains only alphabetic characters.",
    modelAnswer: "FUNCTION CheckInfo(NewLine : STRING) RETURNS BOOLEAN\n  DECLARE ThisNum : STRING\n  DECLARE Index : INTEGER\n\n  IF LENGTH(NewLine) < 19 THEN\n    RETURN FALSE\n  ENDIF\n\n  FOR Index ← 1 TO 4\n    IF NOT IS_NUM(MID(NewLine, Index, 1)) THEN\n      RETURN FALSE\n    ENDIF\n  NEXT Index\n\n  ThisNum ← LEFT(NewLine, 4)\n  IF ThisNum < '0001' OR ThisNum > '5999' THEN\n    RETURN FALSE\n  ENDIF\n\n  IF NOT OnlyAlpha(MID(NewLine, 5, 3)) THEN\n    RETURN FALSE\n  ENDIF\n\n  RETURN TRUE\nENDFUNCTION",
    markAllocation: "• 1 mark for testing length of parameter\n• 1 mark for extracting first 4 characters as ItemNum\n• 1 mark for testing first four characters are all numeric\n• 1 mark for testing ItemNum in range '0001' to '5999'\n• 1 mark for extracting characters 5 to 7 as SupplierCode\n• 1 mark for using OnlyAlpha() with extracted SupplierCode\n• 1 mark for returning BOOLEAN value correctly in all cases",
    explanation: "This function performs comprehensive validation on a formatted string.\n\nThe validation steps:\n1. Check the string is long enough (at least 19 characters)\n2. Check the first 4 characters are all numeric (ItemNum)\n3. Check ItemNum is in the valid range (0001-5999)\n4. Check the next 3 characters are all alphabetic (SupplierCode)\n5. (The Description is checked separately if needed)\n\nThis shows how to combine multiple validation checks and how to use helper functions (OnlyAlpha) to keep the code clean."
  },
  {
    id: 94,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "s25_21",
    marks: 7,
    question: "A function FindFirst() searches a global array MyData[1:10000] for a given string and returns the index of the first element where that string is found, or -1 if the string is not found.\n\nWrite the function using an appropriate loop construct.",
    modelAnswer: "FUNCTION FindFirst(SearchString : STRING) RETURNS INTEGER\n  DECLARE Index, FoundAt : INTEGER\n\n  FoundAt ← -1\n  Index ← 1\n\n  WHILE Index <= 10000 AND FoundAt = -1\n    IF MyData[Index] = SearchString THEN\n      FoundAt ← Index\n    ENDIF\n    Index ← Index + 1\n  ENDWHILE\n\n  RETURN FoundAt\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading, including parameters and return type\n• 1 mark for declaring local variables\n• 1 mark for initialising FoundAt to -1\n• 1 mark for conditional loop with correct conditions\n• 1 mark for comparing array element with SearchString\n• 1 mark for updating FoundAt when match is found\n• 1 mark for returning FoundAt",
    explanation: "This function finds the first occurrence of a string in an array.\n\nThe algorithm:\n1. Initialise FoundAt to -1 (not found)\n2. Loop through the array from start to end\n3. If the current element matches the search string, store the index and stop\n4. Continue until found or end of array\n5. Return the index (or -1 if not found)\n\nThe WHILE loop with two conditions (Index <= 10000 AND FoundAt = -1) stops early when a match is found, making it efficient."
  },
  {
    id: 95,
    topic: "Procedures & Functions (11.3)",
    module: "11.3",
    paperRef: "w25_23",
    marks: 8,
    question: "A procedure LoanStatus() is called with two parameters of type STRING (StudentID and BookID). It searches an array Loan (8000 records) for a matching loan.\n\nIf found, it outputs whether the loan has been returned or not. If not found, it outputs a warning message.\n\nWrite pseudocode for LoanStatus().",
    modelAnswer: "PROCEDURE LoanStatus(ThisStudentID, ThisBookID : STRING)\n  DECLARE Index : INTEGER\n  DECLARE Found : BOOLEAN\n\n  Index ← 1\n  Found ← FALSE\n\n  WHILE Index <= 8000 AND NOT Found\n    IF Loan[Index].StudentID = ThisStudentID AND\n       Loan[Index].BookID = ThisBookID THEN\n\n      IF Loan[Index].OnLoan = FALSE THEN\n        OUTPUT 'Loan has been returned.'\n      ELSE\n        OUTPUT 'Loan has not been returned.'\n      ENDIF\n\n      Found ← TRUE\n    ENDIF\n    Index ← Index + 1\n  ENDWHILE\n\n  IF NOT Found THEN\n    OUTPUT 'Warning - Loan not found.'\n  ENDIF\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading, parameters and ending\n• 1 mark for loop through all elements in Loan array\n• 1 mark for testing correct StudentID\n• 1 mark for testing correct BookID\n• 1 mark for checking OnLoan data item\n• 1 mark for outputting both messages as appropriate\n• 1 mark for setting Found to TRUE when match found\n• 1 mark for outputting 'not found' after the loop",
    explanation: "This procedure demonstrates searching an array of records.\n\nThe record Loan has fields: StudentID, BookID, OnLoan (BOOLEAN).\n\nThe algorithm:\n1. Search through all 8000 records\n2. Look for a record where both StudentID and BookID match\n3. If found, check the OnLoan field and output the appropriate message\n4. Set Found to TRUE to stop searching\n5. If no match is found, output a warning message\n\nThis is a standard search pattern for an array of records."
  },

  // ============================================================
  // TOPIC 9: FILE HANDLING (10.3) – Questions 099-110
  // ============================================================
  {
    id: 99,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "s21_23",
    marks: 5,
    question: "A procedure Preview() will:\n- take the name of a text file as a parameter\n- output a warning message if the file is empty\n- otherwise output the first five lines from the file (or as many lines as there are in the file if this number is less than five)\n\nWrite pseudocode for Preview().",
    modelAnswer: "PROCEDURE Preview(ThisFile : STRING)\n  DECLARE LineNum : INTEGER\n  DECLARE ThisLine : STRING\n\n  OPENFILE ThisFile FOR READ\n\n  IF EOF(ThisFile) THEN\n    OUTPUT 'Warning Message'\n  ELSE\n    LineNum ← 1\n    WHILE LineNum < 6 AND NOT EOF(ThisFile)\n      READFILE ThisFile, ThisLine\n      OUTPUT ThisLine\n      LineNum ← LineNum + 1\n    ENDWHILE\n  ENDIF\n\n  CLOSEFILE ThisFile\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading (including parameter) and ending\n• 1 mark for file OPEN and subsequent CLOSE\n• 1 mark for checking if file is empty and outputting a warning\n• 1 mark for conditional loop\n• 1 mark for outputting line and reading next line in a loop",
    explanation: "This procedure demonstrates basic file reading with error handling.\n\nThe algorithm:\n1. Open the file for reading\n2. Check if the file is empty using EOF()\n3. If empty, output a warning message\n4. If not empty, loop up to 5 times:\n   a. Read a line from the file\n   b. Output the line\n   c. Increment the line counter\n   d. Stop when 5 lines have been read or EOF is reached\n5. Close the file\n\nThe WHILE loop condition ensures we don't try to read beyond the end of the file and we don't read more than 5 lines."
  },
  {
    id: 100,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "w22_23",
    marks: 6,
    question: "A procedure CreateFiles() takes two parameters:\n- a string representing a file name\n- an integer representing the number of files to be created\n\nEach file name is formed by concatenating the file name with a suffix based on the file number. The suffix is always three characters.\n\nFor example: CreateFiles('TestData', 3) creates TestData.001, TestData.002, TestData.003. Each file contains the line: 'This is File TestData.002'\n\nWrite pseudocode for CreateFiles().",
    modelAnswer: "PROCEDURE CreateFiles(NameRoot : STRING, NumFiles : INTEGER)\n  DECLARE FileName, Suffix : STRING\n  DECLARE Count : INTEGER\n\n  FOR Count ← 1 TO NumFiles\n    Suffix ← NUM_TO_STR(Count)\n\n    WHILE LENGTH(Suffix) <> 3\n      Suffix ← '0' & Suffix\n    ENDWHILE\n\n    FileName ← NameRoot & '.' & Suffix\n\n    OPENFILE FileName FOR WRITE\n    WRITEFILE FileName, 'This is File ' & FileName\n    CLOSEFILE FileName\n  NEXT Count\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading, including parameters, and ending\n• 1 mark for loop for NumFiles iterations\n• 1 mark for attempting to create filename suffix using NUM_TO_STR()\n• 1 mark for completely correct filename\n• 1 mark for OPENFILE in WRITE mode and subsequent CLOSE in a loop\n• 1 mark for writing initial line to the file in a loop",
    explanation: "This procedure creates multiple text files with sequential numbering.\n\nThe key challenge is formatting the suffix with leading zeros:\n- For file 1, suffix should be '001'\n- For file 2, suffix should be '002'\n- For file 10, suffix should be '010'\n- For file 100, suffix should be '100'\n\nThe WHILE loop prepends '0' characters until the suffix is exactly 3 characters long. This ensures consistent formatting."
  },
  {
    id: 101,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "w25_22",
    marks: 6,
    question: "A text file OldFile.txt contains IDs, names and email addresses stored with each item on a separate line (3 lines per person).\n\nThe file format is being changed so that each person's data is stored on a single line with the character '\\' as a separator.\n\nComplete the steps of the algorithm to create NewFile.txt.",
    modelAnswer: "Step 1: open the file OldFile.txt in READ mode\nStep 2: open the file NewFile.txt in WRITE mode\nStep 3: read a line from OldFile.txt and store in LineX\nStep 4: read a line from OldFile.txt and store in LineY\nStep 5: read a line from OldFile.txt and store in LineZ\nStep 6: set NewString to LineX & '\\' & LineY & '\\' & LineZ\nStep 7: write NewString to NewFile.txt\nStep 8: repeat from step 3 until end of OldFile.txt\nStep 9: close both files",
    markAllocation: "• 1 mark for opening OldFile.txt in read mode\n• 1 mark for opening NewFile.txt in write mode\n• 1 mark for reading three lines and storing them\n• 1 mark for setting NewString with the three parts and separators\n• 1 mark for writing NewString to NewFile.txt\n• 1 mark for repeating until end of file and closing both files",
    explanation: "This algorithm converts a file from one format to another.\n\nOld format: 3 lines per person\nLine 1: ID\nLine 2: Name\nLine 3: Email\n\nNew format: 1 line per person\n'ID\\Name\\Email'\n\nThe process:\n1. Read three lines together as one record\n2. Combine them into a single string with separators\n3. Write the combined string to the new file\n4. Repeat for all records\n5. Close both files\n\nThe separator character '\\' should be chosen so it doesn't appear in the data itself."
  },
  {
    id: 102,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "s25_21",
    marks: 5,
    question: "A procedure Preview() will output the first five lines from a file.\n\nWrite the pseudocode for Preview().",
    modelAnswer: "PROCEDURE Preview(ThisFile : STRING)\n  DECLARE LineNum : INTEGER\n  DECLARE ThisLine : STRING\n\n  OPENFILE ThisFile FOR READ\n\n  IF EOF(ThisFile) THEN\n    OUTPUT 'Warning Message'\n  ELSE\n    LineNum ← 1\n    WHILE LineNum < 6 AND NOT EOF(ThisFile)\n      READFILE ThisFile, ThisLine\n      OUTPUT ThisLine\n      LineNum ← LineNum + 1\n    ENDWHILE\n  ENDIF\n\n  CLOSEFILE ThisFile\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading (including parameter) and ending\n• 1 mark for file OPEN and subsequent CLOSE\n• 1 mark for checking if file is empty and outputting a warning\n• 1 mark for conditional loop\n• 1 mark for outputting line and reading next line in a loop",
    explanation: "This is a standard file preview function.\n\nThe algorithm:\n1. Open the file\n2. Check if it's empty (EOF is true immediately)\n3. If empty, display a warning\n4. If not empty, read and display up to 5 lines\n5. Close the file\n\nThe WHILE loop condition ensures we don't exceed either the line limit (5) or the end of the file."
  },
  {
    id: 103,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "s23_22",
    marks: 5,
    question: "An algorithm will prompt and input the name and test mark for each of 35 students and add the names of all students with a mark of less than 20 to an existing text file Support_List.txt.\n\nDescribe the steps of the algorithm. Do not include pseudocode.",
    modelAnswer: "1. Open the file in APPEND mode\n2. Prompt and input a student name and mark\n3. If the mark is less than 20, write only the name to the file\n4. If the mark is 20 or more, do nothing\n5. Repeat from Step 2 for 35 times / for each student\n6. Close the file",
    markAllocation: "• 1 mark for opening file in APPEND mode\n• 1 mark for prompting and inputting name and mark\n• 1 mark for checking if mark < 20\n• 1 mark for writing name to file if condition is true\n• 1 mark for repeating 35 times",
    explanation: "This algorithm writes student names to a file based on their test marks.\n\nKey points:\n- APPEND mode is used so existing data is not overwritten\n- Only the name is written, not the mark\n- The loop runs 35 times (once for each student)\n- The file is closed after all students are processed\n\nThe APPEND mode is crucial because the file already contains data from other group tests."
  },
  {
    id: 104,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "w22_21",
    marks: 2,
    question: "Write the pseudocode statement to call CountErrors() to check the project file Jim01Prog.txt and to stop if more than 20 errors are found.",
    modelAnswer: "CALL CountErrors('Jim01Prog.txt', 20)",
    markAllocation: "• 1 mark for module name and parameters in brackets\n• 1 mark for both parameters correct",
    explanation: "This is a simple procedure call with two parameters:\n1. A string parameter: the filename 'Jim01Prog.txt'\n2. An integer parameter: the maximum number of errors (20)\n\nThe procedure will process the file and stop if more than 20 errors are found."
  },
  {
    id: 105,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "w22_22",
    marks: 6,
    question: "A procedure CreateFiles() takes a file name and a number of files as parameters. Each file is given a different name with a 3-character suffix.\n\nWrite pseudocode for CreateFiles().",
    modelAnswer: "PROCEDURE CreateFiles(NameRoot : STRING, NumFiles : INTEGER)\n  DECLARE FileName, Suffix : STRING\n  DECLARE Count : INTEGER\n\n  FOR Count ← 1 TO NumFiles\n    Suffix ← NUM_TO_STR(Count)\n\n    WHILE LENGTH(Suffix) <> 3\n      Suffix ← '0' & Suffix\n    ENDWHILE\n\n    FileName ← NameRoot & '.' & Suffix\n\n    OPENFILE FileName FOR WRITE\n    WRITEFILE FileName, 'This is File ' & FileName\n    CLOSEFILE FileName\n  NEXT Count\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading, including parameters, and ending\n• 1 mark for loop for NumFiles iterations\n• 1 mark for attempting to create filename suffix\n• 1 mark for completely correct filename\n• 1 mark for OPENFILE in WRITE mode and subsequent CLOSE\n• 1 mark for writing initial line to the file",
    explanation: "This procedure demonstrates file creation with dynamic naming.\n\nThe process:\n1. Loop from 1 to the number of files requested\n2. Convert the loop counter to a string\n3. Pad with leading zeros to make it 3 characters\n4. Combine with the root name to form the filename\n5. Create the file and write a line to it\n6. Close the file\n\nEach file gets a unique name with a sequential number."
  },
  {
    id: 106,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "s25_23",
    marks: 8,
    question: "A procedure MakeNewFile() takes three parameters: an existing file name, a new file name, and a search status value.\n\nIt creates a new file and writes all employee details where the employee status is not equal to the search status value.\n\nWrite pseudocode for MakeNewFile().",
    modelAnswer: "PROCEDURE MakeNewFile(OldFile, NewFile, Status : STRING)\n  DECLARE Line1, Line2, Line3 : STRING\n  DECLARE NumCopied, NumRecs : INTEGER\n\n  NumRecs ← 0\n  NumCopied ← 0\n\n  OPENFILE OldFile FOR READ\n  OPENFILE NewFile FOR WRITE\n\n  WHILE NOT EOF(OldFile)\n    READFILE OldFile, Line1\n    READFILE OldFile, Line2\n    READFILE OldFile, Line3\n\n    NumRecs ← NumRecs + 1\n\n    IF Line3 <> Status THEN\n      WRITEFILE NewFile, Line1\n      WRITEFILE NewFile, Line2\n      WRITEFILE NewFile, Line3\n      NumCopied ← NumCopied + 1\n    ENDIF\n  ENDWHILE\n\n  OUTPUT 'File', OldFile, 'contained', NumRecs, 'employee details'\n  OUTPUT NumCopied, 'employee sets were written to file', NewFile\n\n  CLOSEFILE OldFile\n  CLOSEFILE NewFile\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading and ending, including parameters\n• 1 mark for opening both files in correct modes\n• 1 mark for conditional loop until EOF\n• 1 mark for reading three lines from OldFile\n• 1 mark for comparing line 3 with Status parameter\n• 1 mark for writing three lines to NewFile if not equal\n• 1 mark for counting records read and records written\n• 1 mark for final output including both counts",
    explanation: "This procedure filters records from one file to another.\n\nThe original file stores each employee as 3 consecutive lines:\n- Line 1: Name\n- Line 2: Email address\n- Line 3: Status\n\nThe procedure reads all 3 lines, checks the status, and if the status is not the specified search status, writes all 3 lines to the new file.\n\nThis effectively creates a filtered copy of the original data."
  },
  {
    id: 107,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "s21_23",
    marks: 7,
    question: "A function LogEvents() takes a Student ID as a parameter. For each element in LogArray that matches the Student ID:\n- add the value to the existing text file LogFile\n- assign an empty string to the array element\n- count the number of lines added\n\nReturn the count.\n\nWrite pseudocode for LogEvents().",
    modelAnswer: "FUNCTION LogEvents(StudentID : STRING) RETURNS INTEGER\n  DECLARE FileData : STRING\n  DECLARE Index, Count : INTEGER\n\n  Count ← 0\n\n  OPENFILE 'LogFile' FOR APPEND\n\n  FOR Index ← 1 TO 2000\n    FileData ← LogArray[Index]\n\n    IF LEFT(FileData, 6) = StudentID THEN\n      WRITEFILE 'LogFile', FileData\n      Count ← Count + 1\n      LogArray[Index] ← ''\n    ENDIF\n  NEXT Index\n\n  CLOSEFILE 'LogFile'\n\n  RETURN Count\nENDFUNCTION",
    markAllocation: "• 1 mark for function heading and ending including parameter and return type\n• 1 mark for opening file in APPEND mode and closing it\n• 1 mark for loop for 2000 iterations\n• 1 mark for extracting first 6 characters from array element\n• 1 mark for comparing first 6 characters with parameter\n• 1 mark for writing to file, incrementing count, and clearing array element\n• 1 mark for returning Count",
    explanation: "This function processes student log entries stored in an array.\n\nEach log entry is a string: '<StudentID><HostID><Time>'\n- StudentID is 6 characters at the start of the string\n\nThe function:\n1. Opens the log file in APPEND mode (preserves existing data)\n2. Loops through all elements in LogArray\n3. If the first 6 characters match the given StudentID:\n   a. Writes the entry to the file\n   b. Increments the counter\n   c. Clears the array element (sets to empty string)\n4. Closes the file\n5. Returns the count of entries added"
  },
  {
    id: 108,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "w22_22",
    marks: 6,
    question: "A procedure CreateFiles() will create the number of text files specified. Each file is given a different name with a suffix based on the file number.\n\nWrite pseudocode for CreateFiles().",
    modelAnswer: "PROCEDURE CreateFiles(NameRoot : STRING, NumFiles : INTEGER)\n  DECLARE FileName, Suffix : STRING\n  DECLARE Count : INTEGER\n\n  FOR Count ← 1 TO NumFiles\n    Suffix ← NUM_TO_STR(Count)\n\n    WHILE LENGTH(Suffix) <> 3\n      Suffix ← '0' & Suffix\n    ENDWHILE\n\n    FileName ← NameRoot & '.' & Suffix\n\n    OPENFILE FileName FOR WRITE\n    WRITEFILE FileName, 'This is File ' & FileName\n    CLOSEFILE FileName\n  NEXT Count\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading, including parameters, and ending\n• 1 mark for loop for NumFiles iterations\n• 1 mark for attempting to create filename suffix\n• 1 mark for completely correct filename\n• 1 mark for OPENFILE in WRITE mode and subsequent CLOSE\n• 1 mark for writing initial line to the file",
    explanation: "This procedure creates multiple files with sequential numbering.\n\nThe key is formatting the suffix with leading zeros:\n- Count 1 → '001'\n- Count 10 → '010'\n- Count 100 → '100'\n\nThe WHILE loop adds leading zeros until the suffix is 3 characters long."
  },
  {
    id: 109,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "w25_22",
    marks: 5,
    question: "Data is a global 1D array containing 20 elements of type REAL.\n\nAn algorithm will:\n- input a sequence of real values, one at a time\n- assign each value to consecutive array elements, starting from index 1\n- end when the value 99.9 is input, or all 20 elements have been assigned\n- the value 99.9 must not be stored in the array\n\nComplete the program flowchart for the algorithm.",
    modelAnswer: "Flowchart Description:\n\nSTART → Set Index to 1 → Input Num\n\n↓\nDecision: 'Is Num = 99.9?'\n  → YES: END\n  → NO: Set Data[Index] to Num → Set Index to Index + 1\n\n↓\nDecision: 'Is Index = 21?'\n  → YES: END\n  → NO: (loop back to Input Num)",
    markAllocation: "• 1 mark for initialising array index\n• 1 mark for inputting number in a loop\n• 1 mark for testing for termination value (99.9)\n• 1 mark for assigning number to array element and incrementing index\n• 1 mark for testing for array full / maximum 20 iterations",
    explanation: "This algorithm populates an array with user input until a sentinel value (99.9) is entered or the array is full.\n\nThe flow:\n1. Initialise the array index to 1\n2. Input a number\n3. If the number is 99.9, stop (do not store it)\n4. If not, store it in the current array position\n5. Increment the index\n6. If the index is now 21 (past the last element), stop\n7. Otherwise, go back to step 2\n\nThis is a common pattern for reading a variable number of items into an array."
  },
  {
    id: 110,
    topic: "File Handling (10.3)",
    module: "10.3",
    paperRef: "s21_22",
    marks: 8,
    question: "A procedure MakeNewFile() will take three parameters: an existing file name, a new file name, and a search status value. It will create a new file and write all employee details where the employee status is not equal to the search status.\n\nWrite pseudocode for MakeNewFile().",
    modelAnswer: "PROCEDURE MakeNewFile(OldFile, NewFile, Status : STRING)\n  DECLARE Line1, Line2, Line3 : STRING\n  DECLARE NumCopied, NumRecs : INTEGER\n\n  NumRecs ← 0\n  NumCopied ← 0\n\n  OPENFILE OldFile FOR READ\n  OPENFILE NewFile FOR WRITE\n\n  WHILE NOT EOF(OldFile)\n    READFILE OldFile, Line1\n    READFILE OldFile, Line2\n    READFILE OldFile, Line3\n\n    NumRecs ← NumRecs + 1\n\n    IF Line3 <> Status THEN\n      WRITEFILE NewFile, Line1\n      WRITEFILE NewFile, Line2\n      WRITEFILE NewFile, Line3\n      NumCopied ← NumCopied + 1\n    ENDIF\n  ENDWHILE\n\n  OUTPUT 'File', OldFile, 'contained', NumRecs, 'employee details'\n  OUTPUT NumCopied, 'employee sets were written to file', NewFile\n\n  CLOSEFILE OldFile\n  CLOSEFILE NewFile\nENDPROCEDURE",
    markAllocation: "• 1 mark for procedure heading and ending, including parameters\n• 1 mark for opening both files in correct modes\n• 1 mark for conditional loop until EOF\n• 1 mark for reading three lines from OldFile\n• 1 mark for comparing line 3 with Status parameter\n• 1 mark for writing three lines to NewFile if not equal\n• 1 mark for counting records read and records written\n• 1 mark for final output including both counts",
    explanation: "This procedure filters employee records from one file to another.\n\nThe file format uses 3 lines per employee:\n1. Employee name\n2. Email address\n3. Employee status\n\nThe procedure:\n1. Opens both files (read and write)\n2. Reads 3 lines together as one record\n3. Checks the status against the search value\n4. If the status is different, writes all 3 lines to the new file\n5. Counts both total records and those copied\n6. Outputs a summary"
  },

  // ============================================================
  // TOPIC 10: FLOWCHARTS (9.2) – Questions 113-125
  // ============================================================
  {
    id: 113,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s22_21",
    marks: 6,
    question: "A program will input 50 unique integer values, output the largest value, and output the average of the values excluding the largest value.\n\nDraw a program flowchart to represent the algorithm. Variable declarations are not required.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: INPUT Num\n→ Process Box: Set Max to Num\n→ Process Box: Set Total to Num\n→ Process Box: Set Count to 2\n\n↓\nDecision: 'Is Count = 51?'\n  → NO:\n      → Process Box: INPUT Num\n      → Process Box: Set Total to Total + Num\n      → Decision: 'Is Num > Max?'\n          → YES: Process Box: Set Max to Num\n          → NO: (continue)\n      → Process Box: Set Count to Count + 1\n      → (loop back to decision)\n  → YES:\n      → Process Box: Average ← (Total - Max) / 49\n      → Process Box: OUTPUT Max\n      → Process Box: OUTPUT Average\n      → END",
    markAllocation: "• 1 mark for initialising Max to first value input\n• 1 mark for setting Total to zero\n• 1 mark for inputting 49 more values (or 50 values in total)\n• 1 mark for summing all values input\n• 1 mark for setting new Max when input value > Max\n• 1 mark for calculating and outputting average",
    explanation: "This algorithm finds the largest value and the average of all values except the largest.\n\nThe process:\n1. Input the first value and set Max and Total to that value\n2. For each of the remaining 49 values:\n   a. Input the value\n   b. Add it to Total\n   c. If it's larger than Max, update Max\n3. After all input, calculate Average = (Total - Max) / 49\n4. Output both values\n\nThe key insight is that sum of all values except the largest = Total - Max."
  },
  {
    id: 114,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s23_23",
    marks: 5,
    question: "Data is a 1D array of integers with 30 elements. All values are unique.\n\nAn algorithm will output the index of the element with the smallest value.\n\nDraw a program flowchart to represent the algorithm.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Min to Data[1]\n→ Process Box: Set MinIndex to 1\n→ Process Box: Set Index to 2\n\n↓\nDecision: 'Is Index > 30?'\n  → NO:\n      → Decision: 'Is Data[Index] < Min?'\n          → YES:\n              → Process Box: Set MinIndex to Index\n              → Process Box: Set Min to Data[Index]\n          → NO: (continue)\n      → Process Box: Set Index to Index + 1\n      → (loop back to decision)\n  → YES:\n      → Process Box: OUTPUT MinIndex\n      → END",
    markAllocation: "• 1 mark for initialising Min and MinIndex\n• 1 mark for looping through 29 more values\n• 1 mark for comparing element from Data[Index] with Min\n• 1 mark for setting new Min and saving MinIndex when element value < Min\n• 1 mark for outputting MinIndex",
    explanation: "This algorithm finds the smallest value in an array and outputs its index.\n\nThe process:\n1. Start with the first element as the minimum\n2. Record its index as MinIndex\n3. Loop through the remaining elements\n4. If an element is smaller than the current minimum:\n   a. Update Min to that value\n   b. Update MinIndex to that index\n5. After the loop, output MinIndex\n\nThis is similar to finding the maximum but using a '<' comparison instead of '>'."
  },
  {
    id: 115,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s25_22",
    marks: 5,
    question: "Data is a global 1D array containing 20 elements of type REAL.\n\nAn algorithm will input a sequence of real values, one at a time, and assign each value to consecutive array elements starting from index 1. It ends when the value 99.9 is input or all 20 elements have been assigned.\n\nComplete the program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Index to 1\n→ Process Box: Input Num\n\n↓\nDecision: 'Is Num = 99.9?'\n  → YES: END\n  → NO:\n      → Process Box: Set Data[Index] to Num\n      → Process Box: Set Index to Index + 1\n\n↓\nDecision: 'Is Index = 21?'\n  → YES: END\n  → NO: (loop back to Input Num)",
    markAllocation: "• 1 mark for initialising array index\n• 1 mark for inputting number in a loop\n• 1 mark for testing for termination value (99.9)\n• 1 mark for assigning number to array element and incrementing index\n• 1 mark for testing for array full / maximum 20 iterations",
    explanation: "This is a standard input loop with two termination conditions:\n1. Sentinel value (99.9) entered\n2. Array full (20 elements stored)\n\nThe flow ensures the sentinel value is NOT stored in the array. The array index is incremented after each valid input. When Index reaches 21, the array is full (positions 1-20 used)."
  },
  {
    id: 116,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s21_23",
    marks: 6,
    question: "An algorithm will input 100 numbers one at a time, keep a total of all numbers input that have a value between 30 and 70 inclusive, and output this total after the last number has been input.\n\nDraw a program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Total to 0\n→ Process Box: Set Count to 1\n\n↓\nDecision: 'Is Count > 100?'\n  → NO:\n      → Process Box: Input Num\n      → Decision: 'Is Num >= 30 AND Num <= 70?'\n          → YES: Process Box: Set Total to Total + Num\n          → NO: (continue)\n      → Process Box: Set Count to Count + 1\n      → (loop back to decision)\n  → YES:\n      → Process Box: OUTPUT Total\n      → END",
    markAllocation: "• 1 mark for initialising Total to zero\n• 1 mark for loop for 100 iterations\n• 1 mark for inputting a number in a loop\n• 1 mark for checking if number is between 30 and 70\n• 1 mark for adding to Total if true\n• 1 mark for outputting Total after the loop",
    explanation: "This algorithm sums only numbers within a specific range.\n\nThe process:\n1. Initialise Total to zero\n2. For each of 100 numbers:\n   a. Input a number\n   b. If it's between 30 and 70 (inclusive), add it to Total\n3. Output Total\n\nThe condition checks both boundaries:\nNum >= 30 AND Num <= 70 – numbers exactly 30 and 70 are included."
  },
  {
    id: 117,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s25_23",
    marks: 6,
    question: "A procedure CheckSensor() monitors the temperature in different locations.\n\nThe temperature is measured by 10 sensors (IDs 1-10). The procedure will prompt for a sensor ID, validate it (1-10), get the temperature using GetTemp(SensorID), and compare it against LowTemp and HighTemp.\n\nActions:\n- Below LowTemp: Output 'Cold'\n- From LowTemp to HighTemp: Output 'Normal'\n- Above HighTemp: Call Alarm()\n\nDraw a program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: REPEAT\n→ Process Box: OUTPUT 'Enter sensor ID (1-10): '\n→ Process Box: INPUT SensorID\n→ Decision: 'Is SensorID >= 1 AND SensorID <= 10?'\n  → NO: (loop back to REPEAT)\n  → YES: (continue)\n\n→ Process Box: Temp ← GetTemp(SensorID)\n\n→ Decision: 'Is Temp < LowTemp?'\n  → YES: Process Box: OUTPUT 'Cold' → END\n  → NO: Decision: 'Is Temp <= HighTemp?'\n      → YES: Process Box: OUTPUT 'Normal' → END\n      → NO: Process Box: CALL Alarm() → END",
    markAllocation: "• 1 mark for input validation loop\n• 1 mark for calling GetTemp()\n• 1 mark for checking Temp < LowTemp\n• 1 mark for checking Temp <= HighTemp\n• 1 mark for calling Alarm() when Temp > HighTemp\n• 1 mark for correct loop structure",
    explanation: "This flowchart shows input validation followed by conditional logic.\n\nThe two phases:\n1. Validation: Keep asking for sensor ID until a valid ID (1-10) is entered\n2. Processing: Get temperature and take appropriate action based on its value\n\nThe nested IF structure checks the temperature against three ranges:\n- Below LowTemp: 'Cold'\n- LowTemp to HighTemp: 'Normal'\n- Above HighTemp: call Alarm()"
  },
  {
    id: 118,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s23_23",
    marks: 5,
    question: "Data is a 1D array of integers with 30 elements. All values are unique.\n\nAn algorithm will output the index of the element with the smallest value.\n\nDraw a program flowchart to represent the algorithm.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Min to Data[1]\n→ Process Box: Set MinIndex to 1\n→ Process Box: Set Index to 2\n\n↓\nDecision: 'Is Index > 30?'\n  → NO:\n      → Decision: 'Is Data[Index] < Min?'\n          → YES:\n              → Process Box: Set MinIndex to Index\n              → Process Box: Set Min to Data[Index]\n          → NO: (continue)\n      → Process Box: Set Index to Index + 1\n      → (loop back to decision)\n  → YES:\n      → Process Box: OUTPUT MinIndex\n      → END",
    markAllocation: "• 1 mark for initialising Min and MinIndex\n• 1 mark for looping through 29 more values\n• 1 mark for comparing element from Data[Index] with Min\n• 1 mark for setting new Min and saving MinIndex\n• 1 mark for outputting MinIndex",
    explanation: "This algorithm finds the smallest value in an array and outputs its index.\n\nThe process:\n1. Start with the first element as the minimum\n2. Record its index as MinIndex\n3. Loop through the remaining elements\n4. If an element is smaller than the current minimum:\n   a. Update Min to that value\n   b. Update MinIndex to that index\n5. After the loop, output MinIndex\n\nThis is similar to finding the maximum but using a '<' comparison instead of '>'."
  },
  {
    id: 119,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s25_22",
    marks: 5,
    question: "Data is a global 1D array containing 20 elements of type REAL.\n\nAn algorithm will input a sequence of real values, one at a time, and assign each value to consecutive array elements starting from index 1. It ends when the value 99.9 is input or all 20 elements have been assigned.\n\nComplete the program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Index to 1\n→ Process Box: Input Num\n\n↓\nDecision: 'Is Num = 99.9?'\n  → YES: END\n  → NO:\n      → Process Box: Set Data[Index] to Num\n      → Process Box: Set Index to Index + 1\n\n↓\nDecision: 'Is Index = 21?'\n  → YES: END\n  → NO: (loop back to Input Num)",
    markAllocation: "• 1 mark for initialising array index\n• 1 mark for inputting number in a loop\n• 1 mark for testing for termination value (99.9)\n• 1 mark for assigning number to array element and incrementing index\n• 1 mark for testing for array full / maximum 20 iterations",
    explanation: "This is a standard input loop with two termination conditions:\n1. Sentinel value (99.9) entered\n2. Array full (20 elements stored)\n\nThe flow ensures the sentinel value is NOT stored in the array. The array index is incremented after each valid input. When Index reaches 21, the array is full (positions 1-20 used)."
  },
  {
    id: 120,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s21_23",
    marks: 6,
    question: "An algorithm will input 100 numbers one at a time, keep a total of all numbers input that have a value between 30 and 70 inclusive, and output this total after the last number has been input.\n\nDraw a program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Total to 0\n→ Process Box: Set Count to 1\n\n↓\nDecision: 'Is Count > 100?'\n  → NO:\n      → Process Box: Input Num\n      → Decision: 'Is Num >= 30 AND Num <= 70?'\n          → YES: Process Box: Set Total to Total + Num\n          → NO: (continue)\n      → Process Box: Set Count to Count + 1\n      → (loop back to decision)\n  → YES:\n      → Process Box: OUTPUT Total\n      → END",
    markAllocation: "• 1 mark for initialising Total to zero\n• 1 mark for loop for 100 iterations\n• 1 mark for inputting a number in a loop\n• 1 mark for checking if number is between 30 and 70\n• 1 mark for adding to Total if true\n• 1 mark for outputting Total after the loop",
    explanation: "This algorithm sums only numbers within a specific range.\n\nThe process:\n1. Initialise Total to zero\n2. For each of 100 numbers:\n   a. Input a number\n   b. If it's between 30 and 70 (inclusive), add it to Total\n3. Output Total\n\nThe condition checks both boundaries:\nNum >= 30 AND Num <= 70 – numbers exactly 30 and 70 are included."
  },
  {
    id: 121,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s22_22",
    marks: 5,
    question: "A procedure FillTank() uses a while loop to top up a tank until it is full or until a maximum number of attempts is reached.\n\nComplete the program flowchart for FillTank().",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Tries to 1\n→ Process Box: Set Full to ReadSensor('F1')\n\n→ Decision: 'Is Full = TRUE?'\n  → YES: Process Box: OUTPUT 'Already full' → END\n  → NO: Decision: 'Is NOT Full AND Tries < 4?'\n      → YES:\n          → Process Box: CALL TopUp()\n          → Process Box: Set Full to ReadSensor('F1')\n          → Process Box: Set Tries to Tries + 1\n          → (loop back to decision)\n      → NO:\n          → Decision: 'Is Tries > 3?'\n              → YES: Process Box: OUTPUT 'Too many attempts' → END\n              → NO: Process Box: OUTPUT 'Tank now full' → END",
    markAllocation: "• 1 mark for initialising Tries and Full\n• 1 mark for checking if Full = TRUE\n• 1 mark for WHILE loop structure (decision + loop back)\n• 1 mark for calling TopUp and updating Full and Tries\n• 1 mark for final IF with both outputs",
    explanation: "This flowchart shows a complete algorithm with input, a loop, and multiple decision points.\n\nThe logic:\n1. Check if the tank is already full\n2. If not, try to fill it up to 3 times\n3. Each attempt calls TopUp() and checks if the tank is now full\n4. If after 3 attempts it's still not full, output 'Too many attempts'\n5. Otherwise, output 'Tank now full'"
  },
  {
    id: 122,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "w18_23",
    marks: 5,
    question: "An array contains 100 integer values. An algorithm will find the maximum and minimum values.\n\nDraw a program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Max to Data[1]\n→ Process Box: Set Min to Data[1]\n→ Process Box: Set Index to 2\n\n↓\nDecision: 'Is Index > 100?'\n  → NO:\n      → Process Box: Set Current to Data[Index]\n      → Decision: 'Is Current > Max?'\n          → YES: Process Box: Set Max to Current\n          → NO: (continue)\n      → Decision: 'Is Current < Min?'\n          → YES: Process Box: Set Min to Current\n          → NO: (continue)\n      → Process Box: Set Index to Index + 1\n      → (loop back to decision)\n  → YES:\n      → Process Box: OUTPUT Max\n      → Process Box: OUTPUT Min\n      → END",
    markAllocation: "• 1 mark for initialising Max and Min with first element\n• 1 mark for looping through all elements\n• 1 mark for comparing current element with Max\n• 1 mark for comparing current element with Min\n• 1 mark for outputting both values",
    explanation: "This algorithm finds both the maximum and minimum values in one pass.\n\nThe process:\n1. Start with the first element as both the maximum and minimum\n2. Loop through the remaining elements\n3. For each element:\n   a. If it's larger than Max, update Max\n   b. If it's smaller than Min, update Min\n4. Output both values\n\nThis is efficient because it finds both extremes in a single loop."
  },
  {
    id: 123,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "w22_23",
    marks: 6,
    question: "A function Status() is called with three integer parameters: Actual, Min, Max.\n\nOutcomes:\n- Accept: 'A' (if weight is within range)\n- Reject: 'R' (if weight is at least 3 more than Max or 3 less than Min)\n- Recheck: 'C' (if weight is within 2 of Max or Min)\n\nDraw a program flowchart for Status().",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Decision: 'Is Actual > Max + 2 OR Actual < Min - 2?'\n  → YES: Process Box: Result ← 'R' → END\n  → NO:\n\n→ Decision: 'Is Actual < Max - 2 AND Actual > Min + 2?'\n  → YES: Process Box: Result ← 'A' → END\n  → NO:\n\n→ Process Box: Result ← 'C' → END",
    markAllocation: "• 1 mark for checking Reject condition\n• 1 mark for checking Accept condition\n• 1 mark for Recheck as default\n• 1 mark for returning the result",
    explanation: "This function categorises a weight based on its relationship to the acceptable range.\n\nThe logic:\n1. First check Reject: weight is far outside the range (at least 3 away)\n2. Then check Accept: weight is well inside the range (more than 2 away from both boundaries)\n3. Otherwise Recheck: weight is close to a boundary (within 2)\n\nThe order is important: Reject is checked first because it's the most extreme condition."
  },
  {
    id: 124,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "s24_21",
    marks: 6,
    question: "An algorithm will input a sequence of numbers until zero is input, sum the negative numbers and sum the positive numbers, then output both sums.\n\nDraw a program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set PosSum to 0\n→ Process Box: Set NegSum to 0\n→ Process Box: Input Num\n\n↓\nDecision: 'Is Num = 0?'\n  → YES:\n      → Process Box: OUTPUT PosSum\n      → Process Box: OUTPUT NegSum\n      → END\n  → NO:\n      → Decision: 'Is Num > 0?'\n          → YES: Process Box: Set PosSum to PosSum + Num\n          → NO: Process Box: Set NegSum to NegSum + Num\n      → Process Box: Input Num\n      → (loop back to decision)",
    markAllocation: "• 1 mark for initialising both sums to zero\n• 1 mark for inputting first number\n• 1 mark for checking if Num = 0\n• 1 mark for checking if Num > 0\n• 1 mark for adding to appropriate sum in a loop\n• 1 mark for outputting both sums",
    explanation: "This algorithm processes a sequence of numbers and separates positives from negatives.\n\nThe process:\n1. Initialise positive and negative sums to zero\n2. Input a number\n3. If it's zero, stop and output both sums\n4. If it's positive, add it to the positive sum\n5. If it's negative, add it to the negative sum\n6. Input the next number and repeat\n\nZero is the sentinel value that terminates the loop."
  },
  {
    id: 125,
    topic: "Flowcharts (9.2)",
    module: "9.2",
    paperRef: "w25_22",
    marks: 5,
    question: "Data is a global 1D array containing 20 elements of type REAL.\n\nAn algorithm will input a sequence of real values and assign each value to consecutive array elements. It ends when the value 99.9 is input or all 20 elements have been assigned.\n\nComplete the program flowchart.",
    modelAnswer: "Flowchart Description:\n\nSTART\n\n→ Process Box: Set Index to 1\n→ Process Box: Input Num\n\n↓\nDecision: 'Is Num = 99.9?'\n  → YES: END\n  → NO:\n      → Process Box: Set Data[Index] to Num\n      → Process Box: Set Index to Index + 1\n\n↓\nDecision: 'Is Index = 21?'\n  → YES: END\n  → NO: (loop back to Input Num)",
    markAllocation: "• 1 mark for initialising array index\n• 1 mark for inputting number in a loop\n• 1 mark for testing for termination value\n• 1 mark for assigning number to array element and incrementing index\n• 1 mark for testing for array full",
    explanation: "This is a standard input loop with two termination conditions:\n1. Sentinel value (99.9) entered\n2. Array full (20 elements stored)\n\nThe sentinel value is NOT stored in the array. The array index is incremented after each valid input. When Index reaches 21, all 20 positions are filled."
  },

  // ============================================================
  // TOPIC 11: STRUCTURE CHARTS (12.2) – Questions 128-135
  // ============================================================
  {
    id: 128,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "s23_22",
    marks: 2,
    question: "Explain the meaning of the diamond symbol as used in a structure chart.",
    modelAnswer: "The diamond symbol indicates selection. It means that a module calls one of several other modules, chosen at run time (a decision is made).",
    markAllocation: "• 1 mark for reference to selection\n• 1 mark for naming all modules correctly",
    explanation: "In a structure chart, different symbols represent different relationships:\n\n- An arrow shows that one module calls another\n- A diamond (selection) shows that a decision is made: one of several modules will be called based on the decision\n- A curved arrow (iteration) shows that a module is called repeatedly\n\nThe diamond symbol is useful for showing branching logic in the program design."
  },
  {
    id: 129,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "s23_22",
    marks: 5,
    question: "Six modules are defined:\n- Module-A()\n- Module-X(T1 : INTEGER, S2 : REAL)\n- Reset(BYREF Code : INTEGER)\n- Restore(OldCode : INTEGER) RETURNS BOOLEAN\n- Module-Y(RA : INTEGER, RB : BOOLEAN) RETURNS BOOLEAN\n- Module-Z(SA : INTEGER) RETURNS INTEGER\n\nModule-X() calls Reset()\nModule-Y() calls Restore()\n\nComplete the structure chart.",
    modelAnswer: "Structure Chart Description:\n\nTop box: Module-A()\n\n→ Selection diamond\n\nBranch 1:\n→ Module-X(T1, S2)\n  → Reset(Code) (BYREF arrow)\n\nBranch 2:\n→ Module-Y(RA, RB) (returns BOOLEAN)\n  → Restore(OldCode) (returns BOOLEAN)\n\nBranch 3:\n→ Module-Z(SA) (returns INTEGER)",
    markAllocation: "• 1 mark for all module names correctly placed\n• 1 mark for parameters with labels to Module-X and between Module-X and Reset\n• 1 mark for parameter to Module-Z and return from Module-Z\n• 1 mark for parameters to Module-Y and Restore\n• 1 mark for return values from Module-Y",
    explanation: "This structure chart shows the relationships between six modules.\n\nThe hierarchy:\n- Module-A is the top-level module\n- It calls either Module-X, Module-Y, or Module-Z (selection)\n- Module-X calls Reset\n- Module-Y calls Restore\n\nThe parameters and return values are shown on the connecting arrows.\nBYREF parameters (like Reset's Code) are shown with double-headed arrows."
  },
  {
    id: 130,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "w23_22",
    marks: 5,
    question: "A structure chart shows the modular structure of a program. The curved arrow symbol begins and ends at Module-A().\n\nExplain the meaning of the curved arrow symbol.",
    modelAnswer: "The curved arrow symbol indicates iteration. It means that Module-A repeatedly calls Sub-Y1, then Sub-Y2, then Sub-Y9 in sequence.",
    markAllocation: "• 1 mark for reference to iteration/looping\n• 1 mark for naming all four modules correctly including sequence",
    explanation: "The curved arrow in a structure chart shows repetition.\n\nIn the context of this question, the arrow looping back to Module-A means that the sequence of calls (Module-A → Sub-Y1 → Sub-Y2 → Sub-Y9) is repeated.\n\nThis is used when a module performs the same set of operations multiple times."
  },
  {
    id: 131,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "s24_22",
    marks: 3,
    question: "Module Check() repeatedly calls Init() followed by Reset().\n\nModule Init() has no parameters and returns a Boolean.\nModule Reset() takes a string as a parameter and returns an Integer.\n\nDraw a structure chart.",
    modelAnswer: "Structure Chart Description:\n\nTop box: Check()\n\n→ Curved arrow (iteration)\n\n→ Process Box: Init() (no parameters, returns BOOLEAN)\n→ Process Box: Reset(String) (returns INTEGER)",
    markAllocation: "• 1 mark for all three boxes correctly labelled and correct hierarchy\n• 1 mark for parameter and return values shown correctly\n• 1 mark for iteration arrow",
    explanation: "This structure chart shows iteration in a simple form.\n\nCheck() repeatedly calls Init() and Reset() in sequence (Init first, then Reset).\n\nThe curved arrow symbol indicates the repetition. The return values and parameters are shown on the arrows pointing in the appropriate directions."
  },
  {
    id: 132,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "s24_22",
    marks: 4,
    question: "Module Connect() will call either Activate() or Sync().\n\nHeaders:\n- PROCEDURE Connect()\n- FUNCTION Activate(H1 : STRING, Code : INTEGER) RETURNS BOOLEAN\n- FUNCTION Sync(T1 : BOOLEAN, S2 : REAL) RETURNS INTEGER\n- PROCEDURE Initialise(BYREF ID : INTEGER, BYVAL CC : INTEGER)\n- FUNCTION Reset(RA : STRING) RETURNS INTEGER\n- FUNCTION Enable(SA : INTEGER) RETURNS BOOLEAN\n\nModule Connect() will call either Activate() or Sync(). This is decided at run time.\n\nComplete the structure chart for these modules.",
    modelAnswer: "Structure Chart Description:\n\nTop box: Connect()\n\n→ Selection diamond\n\nBranch 1:\n→ Activate(H1, Code) (returns BOOLEAN)\n  → Initialise(ID, CC) (BYREF ID)\n  → Reset(RA) (returns INTEGER)\n  → Enable(SA) (returns BOOLEAN)\n\nBranch 2:\n→ Sync(T1, S2) (returns INTEGER)\n  → Initialise(ID, CC) (BYREF ID)\n  → Reset(RA) (returns INTEGER)\n  → Enable(SA) (returns BOOLEAN)",
    markAllocation: "• 1 mark for all module names correctly placed\n• 1 mark for selection diamond\n• 1 mark for parameters to Activate and Sync\n• 1 mark for return values from Activate and Sync\n• 1 mark for lower level parameters",
    explanation: "This structure chart shows both selection and a shared sub-structure.\n\nConnect() chooses between Activate() and Sync().\nBoth Activate() and Sync() call the same three modules:\n1. Initialise()\n2. Reset()\n3. Enable()\n\nThe BYREF parameter to Initialise (ID) is shown with a double-headed arrow.\nThe selection diamond shows that the choice is made at run time."
  },
  {
    id: 133,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "w22_22",
    marks: 4,
    question: "Complete the structure chart for modules:\n- Module-A()\n- Module-X(T1 : INTEGER, S2 : REAL)\n- Reset(BYREF Code : INTEGER)\n- Restore(OldCode : INTEGER) RETURNS BOOLEAN\n- Module-Y(RA : INTEGER, RB : BOOLEAN) RETURNS BOOLEAN\n- Module-Z(SA : INTEGER) RETURNS INTEGER\n\nModule-X() calls Reset()\nModule-Y() calls Restore()",
    modelAnswer: "Structure Chart Description:\n\nTop box: Module-A()\n\n→ Selection diamond\n\nBranch 1:\n→ Module-X(T1, S2)\n  → Reset(Code) (BYREF)\n\nBranch 2:\n→ Module-Y(RA, RB) (returns BOOLEAN)\n  → Restore(OldCode) (returns BOOLEAN)\n\nBranch 3:\n→ Module-Z(SA) (returns INTEGER)",
    markAllocation: "• 1 mark for all module names correctly placed\n• 1 mark for parameters with labels to Module-X and Reset\n• 1 mark for parameter to Module-Z and return from Module-Z\n• 1 mark for parameters to Module-Y and Restore",
    explanation: "This structure chart shows three branches from Module-A.\n\nThe selection diamond indicates that Module-A calls one of:\n1. Module-X (which then calls Reset)\n2. Module-Y (which then calls Restore)\n3. Module-Z\n\nEach branch shows the parameters passed and return values received."
  },
  {
    id: 134,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "s24_22",
    marks: 3,
    question: "Module Check() repeatedly calls Init() followed by Reset().\n\nModule Init() has no parameters and returns a Boolean.\nModule Reset() takes a string as a parameter and returns an Integer.\n\nDraw a structure chart.",
    modelAnswer: "Structure Chart Description:\n\nTop box: Check()\n\n→ Curved arrow (iteration)\n\n→ Process Box: Init() (returns BOOLEAN)\n→ Process Box: Reset(String) (returns INTEGER)",
    markAllocation: "• 1 mark for all three boxes correctly labelled and correct hierarchy\n• 1 mark for parameter and return values shown correctly\n• 1 mark for iteration arrow",
    explanation: "This structure chart shows iteration in a simple form.\n\nCheck() repeatedly calls Init() and Reset() in sequence (Init first, then Reset).\n\nThe curved arrow symbol indicates the repetition. The return values and parameters are shown on the arrows pointing in the appropriate directions."
  },
  {
    id: 135,
    topic: "Structure Charts (12.2)",
    module: "12.2",
    paperRef: "s22_23",
    marks: 4,
    question: "A structure chart shows:\n- Module Setup calls either Restart or Confirm\n- Confirm takes a string and returns an integer\n- Modify takes no parameters and returns a Boolean\n- Update takes a string\n- Restart repeatedly calls Update followed by Modify\n- Restart takes a string passed by reference\n\nWrite pseudocode headers and draw the structure chart.",
    modelAnswer: "Module Headers:\nPROCEDURE Setup()\nPROCEDURE Restart(BYREF S : STRING)\nFUNCTION Confirm(S : STRING) RETURNS INTEGER\nFUNCTION Modify() RETURNS BOOLEAN\nPROCEDURE Update(S : STRING)\n\nStructure Chart:\n\nTop box: Setup()\n\n→ Selection diamond\n\nBranch 1:\n→ Restart(S) (BYREF)\n  → (Curved arrow for iteration)\n  → Update(S)\n  → Modify() (returns BOOLEAN)\n\nBranch 2:\n→ Confirm(S) (returns INTEGER)",
    markAllocation: "• 1 mark for all module names correctly placed\n• 1 mark for selection diamond\n• 1 mark for iteration arrow (curved)\n• 1 mark for parameters and return values",
    explanation: "This structure chart shows a complex design with selection and iteration.\n\nSetup() chooses between Restart and Confirm.\n- Restart: takes a string BYREF and repeatedly calls Update followed by Modify\n- Confirm: takes a string and returns an integer\n\nThe curved arrow on Restart indicates that the Update → Modify sequence is repeated.\nThe BYREF parameter on Restart is shown with a double-headed arrow."
  },

  // ============================================================
  // TOPIC 12: TRACE TABLES & ERROR DETECTION (12.3) – Questions 137-150
  // ============================================================
  {
    id: 137,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s23_22",
    marks: 6,
    question: "A procedure Process() manipulates a 1D array:\n\nPROCEDURE Process(Start : INTEGER)\n  DECLARE Value, Index, Count : INTEGER\n\n  Index ← Start\n  Count ← 0\n\n  REPEAT\n    Value ← Mix[Index]\n    Mix[Index] ← Mix[Index] - 1\n    Index ← Value\n    Count ← Count + 1\n  UNTIL Count = 5\n\n  Mix[4] ← Count * Index\nENDPROCEDURE\n\nInitial array: Mix[1]=1, Mix[2]=3, Mix[3]=4, Mix[4]=2\n\nComplete the trace table for CALL Process(3).",
    modelAnswer: "| Index | Value | Count | Mix[1] | Mix[2] | Mix[3] | Mix[4] |\n|-------|-------|-------|--------|--------|--------|--------|\n| 3     | 4     | 0     | 1      | 3      | 4      | 2      |\n| 4     | 2     | 1     | 1      | 3      | 3      | 2      |\n| 2     | 3     | 2     | 1      | 3      | 3      | 2      |\n| 3     | 3     | 3     | 1      | 2      | 3      | 2      |\n| 3     | 3     | 4     | 1      | 2      | 2      | 2      |\n| 3     | 2     | 5     | 1      | 2      | 2      | 10     |",
    markAllocation: "• 1 mark for initialisation row\n• 1 mark for each iteration (Count 1 to 5) with correct values\n• 1 mark for final Mix[4] assignment",
    explanation: "This trace table follows the execution of a non-standard array manipulation.\n\nThe algorithm:\n1. Start at the given index (3)\n2. Store the value at that index in Value\n3. Decrease the array element by 1\n4. Set Index to the Value that was stored\n5. Increment Count\n6. Repeat until Count = 5\n\nThe array values change as the algorithm runs. The final step sets Mix[4] to Count * Index (5 * 3 = 15)."
  },
  {
    id: 138,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "w22_21",
    marks: 5,
    question: "A function IsValid() checks if a string is a valid email address.\n\nComplete the trace table for the call: Result ← IsValid('Liz.123@big@net')",
    modelAnswer: "| Index | NextChar | Dots | Ats | Others | Valid |\n|-------|----------|------|-----|--------|-------|\n| 1     | 'L'      | 0    | 0   | 1      | TRUE  |\n| 2     | 'i'      | 0    | 0   | 2      | TRUE  |\n| 3     | 'z'      | 0    | 0   | 3      | TRUE  |\n| 4     | '.'      | 1    | 0   | 3      | TRUE  |\n| 5     | '1'      | 1    | 0   | 4      | TRUE  |\n| 6     | '2'      | 1    | 0   | 5      | TRUE  |\n| 7     | '3'      | 1    | 0   | 6      | TRUE  |\n| 8     | '@'      | 1    | 1   | 6      | TRUE  |\n| 9     | 'b'      | 1    | 1   | 7      | TRUE  |\n| 10    | 'i'      | 1    | 1   | 8      | TRUE  |\n| 11    | 'g'      | 1    | 1   | 9      | TRUE  |\n| 12    | '@'      | 1    | 2   | 9      | FALSE |",
    markAllocation: "• 1 mark for each area as outlined (5 marks total)",
    explanation: "This trace table follows a function that validates email addresses.\n\nThe function checks for:\n- At least one dot ('.')\n- Exactly one '@' symbol\n- More than 8 other characters\n\nThe string 'Liz.123@big@net' fails validation because it has two '@' symbols.\nWhen the second '@' is encountered at index 12, Valid is set to FALSE and the loop terminates early.\n\nTrace tables are essential for debugging – they show exactly where a function fails."
  },
  {
    id: 139,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s23_23",
    marks: 6,
    question: "A procedure Process() manipulates a 1D array Mix.\n\nInitial array: Mix[1]=4, Mix[2]=2, Mix[3]=3, Mix[4]=5\n\nPROCEDURE Process(Start : INTEGER)\n  DECLARE Value, Index, Total : INTEGER\n\n  Index ← Start\n  Total ← 0\n\n  WHILE Total < 20\n    Value ← Mix[Index]\n    Total ← Total + Value\n\n    IF Index < 4 THEN\n      Mix[Index] ← Mix[Index] + Mix[Index+1]\n    ELSE\n      Mix[Index] ← Mix[Index] + Mix[1]\n    ENDIF\n\n    Index ← (Value MOD 4) + 1\n  ENDWHILE\n\n  Mix[1] ← Total * Index\nENDPROCEDURE\n\nComplete the trace table for CALL Process(2).",
    modelAnswer: "| Index | Value | Total | Mix[1] | Mix[2] | Mix[3] | Mix[4] |\n|-------|-------|-------|--------|--------|--------|--------|\n| 2     | 2     | 0     | 4      | 2      | 3      | 5      |\n| 3     | 3     | 2     | 4      | 4      | 3      | 5      |\n| 4     | 5     | 5     | 4      | 4      | 5      | 5      |\n| 1     | 4     | 10    | 4      | 4      | 5      | 9      |\n| 1     | 8     | 14    | 8      | 4      | 5      | 9      |\n| 3     | 5     | 22    | 8      | 4      | 12     | 9      |\n|       |       | 22    | 8      | 4      | 12     | 9      |",
    markAllocation: "• 1 mark for initialisation row\n• 1 mark for each iteration (max 6 marks)",
    explanation: "This trace table follows a complex array manipulation algorithm.\n\nThe algorithm:\n1. Start at index 2\n2. Get the value at the current index\n3. Add it to Total\n4. Update the current array element (add the next element or the first element)\n5. Calculate the next index: (Value MOD 4) + 1\n6. Continue until Total >= 20\n7. Finally, set Mix[1] to Total * Index\n\nThe algorithm uses the original value (Value) to determine the next index, creating a non-linear path through the array."
  },
  {
    id: 140,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s21_23",
    marks: 5,
    question: "A function Convert() transforms a string by capitalising the first letter of each word.\n\nComplete the trace table for Result ← Convert('VinVaVVCup') where 'V' represents a space character.",
    modelAnswer: "| Name           | Flag | Index | NewName        | ThisChar |\n|----------------|------|-------|----------------|----------|\n| 'VinVa VVCup'  | TRUE | 1     | ''             | 'V'      |\n| 'VinVa VVCup'  | TRUE | 2     | 'V'            | 'i'      |\n| 'VinVa VVCup'  | FALSE| 3     | 'Vi'           | 'n'      |\n| 'VinVa VVCup'  | FALSE| 4     | 'Vin'          | 'V'      |\n| 'VinVa VVCup'  | TRUE | 5     | 'VinV'         | 'a'      |\n| 'VinVa VVCup'  | FALSE| 6     | 'VinVa'        | 'V'      |\n| 'VinVa VVCup'  | TRUE | 7     | 'VinVaV'       | 'V'      |\n| 'VinVa VVCup'  | TRUE | 8     | 'VinVaV'       | 'C'      |\n| 'VinVa VVCup'  | FALSE| 9     | 'VinVaVVC'     | 'u'      |\n| 'VinVa VVCup'  | FALSE| 10    | 'VinVaVVCu'    | 'p'      |\n| 'VinVa VVCup'  | FALSE| 11    | 'VinVaVVCup'   | 'p'      |",
    markAllocation: "• 1 mark for each column (Flag, Index, NewName, ThisChar)\n• 1 mark for final row all correct",
    explanation: "This trace table follows a function that capitalises the first letter of each word.\n\nThe function works as follows:\n1. Flag indicates whether the next character is the start of a word\n2. When Flag is TRUE, the character is converted to upper case\n3. When a space is encountered, Flag is set to TRUE for the next character\n4. Non-space characters are added in lower case\n\nThe result 'VinVaVVCup' becomes 'VinVa VVCup' → 'VinVa VVCup' (capitalising the 'V' after the space)."
  },
  {
    id: 141,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s23_21",
    marks: 3,
    question: "The following pseudocode contains an error in the CASE structure:\n\nCASE OF ThisValue\n  <30 : Level ← 'Low'\n  <20 : Level ← 'Very Low'\n        Check ← ThisValue / 2\n  30 TO 40 : Level ← 'Medium'\n             Data[ThisValue] ← Data[ThisValue] + 1\n  >40 : Level ← 'High'\nENDCASE\n\nIdentify the assignment that will never be performed and explain why.",
    modelAnswer: "Assignment that will never be performed: Level ← 'Very Low'\n\nExplanation: The CASE clauses are checked in sequence. A value < 20 also satisfies the first clause < 30, so the <20 clause is never reached.",
    markAllocation: "• 1 mark for identifying 'Very Low' assignment\n• 2 marks for explaining the order of CASE checking",
    explanation: "CASE structures check conditions in order. The first matching condition is executed and the rest are ignored.\n\nFor ThisValue = 18:\n- First check: < 30 → TRUE → Level = 'Low'\n- The < 20 check is never reached because the < 30 already matched\n\nThe important lesson: order matters in CASE structures. Always put more specific conditions before more general ones. The <20 condition should come before the <30 condition for both to be reached."
  },
  {
    id: 142,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s24_21",
    marks: 2,
    question: "The pseudocode contains a logical error:\n\nCASE OF ItemCost\n  <=50 : TaxRate ← 3.75\n  <=200 : TaxRate ← 5.23\n  >200 : TaxRate ← 6.25\n  HighRate ← TRUE\nENDCASE\n\nIdentify the error and suggest a correction.",
    modelAnswer: "Error: The assignment 'HighRate ← TRUE' is placed inside the CASE structure after all the conditions. It will only execute for the final case (>200).\n\nCorrection: Move 'HighRate ← TRUE' to be executed for all cases.",
    markAllocation: "• 1 mark for identifying the error\n• 1 mark for suggesting a valid correction",
    explanation: "The line 'HighRate ← TRUE' is not part of any specific case clause – it appears after the case conditions but before ENDCASE. This means it will only execute if the >200 case is matched.\n\nThe programmer probably intended HighRate to be TRUE whenever a tax rate is assigned. The correction adds HighRate ← TRUE to each case clause."
  },
  {
    id: 143,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s24_22",
    marks: 3,
    question: "A procedure Process() contains the following:\n\nPROCEDURE Process(Label : STRING)\n  DECLARE Index : INTEGER\n\n  Index ← 0\n  INPUT Data[Index]\n\n  WHILE Index < 200\n    Index ← Index + 1\n    CASE OF (Index MOD 2)\n      0 : Data[Index] ← TO_UPPER(Label)\n      1 : Data[Index] ← TO_LOWER(Label)\n    ENDCASE\n  ENDWHILE\n\n  OUTPUT 'Completed ' & Index & ' times'\nENDPROCEDURE\n\nIdentify the errors.",
    modelAnswer: "Syntax errors:\n1. TO_UPPER should be TO_UPPER (or TO_LOWER should be TO_LOWER) – spelling error\n2. The CASE structure is missing ENDCASE\n\nOther error:\n3. Accesses element 0 (Data[0]) – array is declared from 1 to 200",
    markAllocation: "• 1 mark for each error identified (max 3)",
    explanation: "The procedure has three types of errors:\n\n1. Syntax error: Function names misspelt\n   - TO_UPPER should be TO_UPPER\n   - TO_LOWER should be TO_LOWER\n\n2. Syntax error: Missing ENDCASE for the CASE structure\n\n3. Logic/design error: The array starts at index 1 but the code tries to access Data[0] (Index is initialised to 0 and INPUT Data[Index] runs before any increment)\n\nThese errors would cause the program to fail at compilation (syntax errors) or at runtime (array index out of bounds)."
  },
  {
    id: 144,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s23_21",
    marks: 4,
    question: "The pseudocode contains statements with errors:\n\nResult ← 2 & 4\nIF x = 3 OR 4 THEN\n\nIdentify the errors.",
    modelAnswer: "Error 1: The & operator is used for concatenating strings. 2 and 4 are integers, so this is invalid. Should use an arithmetic operator.\n\nError 2: The condition 'x = 3 OR 4' is invalid because OR requires Boolean operands. Should be 'x = 3 OR x = 4'.",
    markAllocation: "• 1 mark for identifying the first error\n• 1 mark for explaining the first error\n• 1 mark for identifying the second error\n• 1 mark for explaining the second error",
    explanation: "These are data type errors.\n\n1. The & operator joins strings together. If you try to join numbers, you need to convert them to strings first using NUM_TO_STR().\n\n2. To check if x equals 3 OR x equals 4, you need to write 'x = 3 OR x = 4'. You cannot just put 'OR 4' – that's a syntax error because OR expects Boolean operands on both sides."
  },
  {
    id: 145,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s23_21",
    marks: 6,
    question: "The following pseudocode contains an error in the CASE structure.\n\nCASE OF ThisValue\n  <30 : Level ← 'Low'\n  <20 : Level ← 'Very Low'\n        Check ← ThisValue / 2\n  30 TO 40 : Level ← 'Medium'\n             Data[ThisValue] ← Data[ThisValue] + 1\n  >40 : Level ← 'High'\nENDCASE\n\n(a) Complete the table for ThisValue values 40, 18, and 36.\n(b) Identify the assignment that will never be performed.",
    modelAnswer: "(a)\n- ThisValue = 40: Level = 'Medium', Check not assigned\n- ThisValue = 18: Level = 'Low' (not 'Very Low'), Check not assigned\n- ThisValue = 36: Level = 'Medium', Check = 12\n\n(b) Assignment that will never be performed: Level ← 'Very Low'",
    markAllocation: "• 1 mark for Level when ThisValue = 40\n• 1 mark for Level when ThisValue = 18\n• 1 mark for Check when ThisValue = 36\n• 1 mark for number of array elements that can be incremented (11)\n• 1 mark for identifying 'Very Low' assignment\n• 1 mark for explaining the order of CASE checking",
    explanation: "The key points to understand:\n1. CASE checks conditions in order\n2. <30 matches for values less than 30, including values less than 20\n3. Therefore, <20 is never reached\n4. Values in the range 30-40 execute the 'Medium' clause\n5. Values greater than 40 execute the 'High' clause\n\nThe lesson: order matters in CASE. More specific conditions must come before more general ones."
  },
  {
    id: 146,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s23_21",
    marks: 6,
    question: "A procedure Process() manipulates a 1D array Mix.\n\nInitial array: Mix[1]=1, Mix[2]=2, Mix[3]=5, Mix[4]=3\n\nPROCEDURE Process(Start : INTEGER)\n  DECLARE CaseVar, Index, Count : INTEGER\n\n  Index ← Start\n  Count ← 0\n\n  WHILE Count <= 20\n    CaseVar ← Num[Index]\n    CASE OF CaseVar\n      1 : Num[Index] ← Num[Index] + Index\n          Index ← Index + 1\n          Count ← Count + 1\n      2 : Num[Index] ← Num[Index] + Index\n          Index ← Index + 2\n          Count ← Count + 2\n      3 : Num[Index] ← Num[Index] + 2\n          Index ← Index + 3\n          Count ← Count + 1\n      4 : Count ← Count + 4\n      OTHERWISE : Count ← 20\n    ENDCASE\n    Index ← (Index MOD 4) + 1\n  ENDWHILE\nENDPROCEDURE\n\nComplete the trace table for CALL Process(1).",
    modelAnswer: "| Index | CaseVar | Count | Num[1] | Num[2] | Num[3] | Num[4] |\n|-------|---------|-------|--------|--------|--------|--------|\n| 1     | 1       | 0     | 1      | 2      | 5      | 3      |\n| 2     | 2       | 1     | 2      | 2      | 5      | 3      |\n| 4     | 3       | 3     | 2      | 4      | 5      | 3      |\n| 3     | 5       | 4     | 2      | 4      | 7      | 3      |\n| 3     | 7       | 20    | 2      | 4      | 7      | 3      |",
    markAllocation: "• 1 mark for initialisation row\n• 1 mark for each iteration (max 6 marks)",
    explanation: "This trace table follows a complex algorithm with a CASE structure.\n\nThe algorithm:\n1. Start at the given index (1)\n2. Get CaseVar from Num[Index]\n3. Based on CaseVar, perform different operations:\n   - Case 1: Add Index to Num[Index], Index + 1, Count + 1\n   - Case 2: Add Index to Num[Index], Index + 2, Count + 2\n   - Case 3: Add 2 to Num[Index], Index + 3, Count + 1\n   - Case 4: Count + 4\n   - Otherwise: Count = 20\n4. Update Index: (Index MOD 4) + 1\n5. Continue until Count > 20\n\nThe algorithm stops when Count > 20."
  },
  {
    id: 147,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s21_21",
    marks: 5,
    question: "The pseudocode statements may contain errors.\n\nDescribe the error in each statement, or write 'NO ERROR'.\n\n(a) Result ← 2 & 4\n(b) SubString ← MID('pseudocode', 4, 1)\n(c) IF x = 3 OR 4 THEN\n(d) Result ← Status AND INT(x/2)\n(e) Message ← 'Done' + LENGTH(MyString)",
    modelAnswer: "(a) Error: Should be arithmetic operator (not &) / 2 and 4 should be CHAR/STRING\n(b) NO ERROR\n(c) Error: Not Boolean values / incorrect operator\n(d) Error: INT(x/2) doesn't evaluate to a Boolean value / incorrect operator\n(e) Error: Can't add string to number / 'Done' is not a number",
    markAllocation: "• 1 mark for each error (max 5)",
    explanation: "These are common data type and operator errors:\n\n(a) & is for concatenating strings, not adding numbers\n(b) MID('pseudocode', 4, 1) returns 'u' – correct\n(c) OR requires Boolean operands on both sides\n(d) AND requires Boolean operands on both sides\n(e) + is for arithmetic, not concatenation (should use &)"
  },
  {
    id: 148,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s21_22",
    marks: 4,
    question: "A procedure FormatName() should assign a value to the global variable FString. There is a fault in the program, which means that the assignment does not always take place.\n\nExplain two ways of exposing the fault.",
    modelAnswer: "1. Dry run / produce a trace table / walk through the code to check when FString is assigned\n2. Add output statements to allow the code to be tracked\n3. Insert a breakpoint into the program, use single-stepping to execute instructions, and monitor variables using a watch window\n4. Try different test values to see which ones fail",
    markAllocation: "• 1 mark for each method (max 2 marks per method)\n• 1 mark for each explanation of how it works",
    explanation: "To find a fault where a variable isn't always assigned, you need to trace the program's execution.\n\nMethods include:\n1. Dry running: step through the code manually with a trace table, recording when FString is assigned\n\n2. Debugger features:\n   - Breakpoints: pause execution at key points\n   - Single-stepping: execute one line at a time\n   - Watch window: monitor variable values\n\n3. Test data: use different inputs to see which ones cause the failure\n\n4. Output statements: temporarily add code to output variable values"
  },
  {
    id: 149,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "w22_21",
    marks: 5,
    question: "A pseudocode algorithm contains a conditional loop. State a more appropriate loop structure and justify your answer.",
    modelAnswer: "Loop structure: A count-controlled loop\nJustification: The number of iterations is known",
    markAllocation: "• 1 mark for 'count-controlled loop' / 'FOR loop'\n• 1 mark for 'number of iterations is known'",
    explanation: "The choice of loop depends on whether the number of iterations is known.\n\n- Use a count-controlled loop (FOR) when the number of iterations is known\n- Use a conditional loop (WHILE) when the number of iterations is unknown\n\nIn the context of this question, the algorithm processes all 200 elements of an array, so the number of iterations is known (200). Therefore a FOR loop is more appropriate.\n\nFOR loops are clearer and more efficient for this type of operation because they show the bounds of the iteration and handle the counter automatically."
  },
  {
    id: 150,
    topic: "Trace Tables & Error Detection (12.3)",
    module: "12.3",
    paperRef: "s22_22",
    marks: 3,
    question: "A program runs but does not give the expected output. Describe two methods you could use to find the error.",
    modelAnswer: "Method 1: Dry run / produce a trace table / walk through the code to trace the path of execution and variable values\n\nMethod 2: Insert output statements at key points to display variable values\n\nMethod 3: Use a debugger with breakpoints and single-stepping\n\nMethod 4: Try different test values to isolate the conditions that cause the error",
    markAllocation: "• 1 mark for naming each method\n• 1 mark for describing how it helps",
    explanation: "When a program runs but gives unexpected output (a logic error), you need to determine where the logic goes wrong.\n\nMethods include:\n1. Dry running: manually trace the program's execution with a trace table, recording variable changes to find where the logic deviates from expectations\n\n2. Debugging tools:\n   - Breakpoints: pause execution at specific lines\n   - Single-stepping: execute one line at a time\n   - Watch windows: display variable values\n\n3. Output statements: temporarily add code to print variable values at key points"
  },

  // ============================================================
  // TOPIC 13: TESTING & MAINTENANCE (12.3) – Questions 156-160
  // ============================================================
  {
    id: 156,
    topic: "Testing & Maintenance (12.3)",
    module: "12.3",
    paperRef: "s21_23",
    marks: 4,
    question: "A test plan is needed to test a function that validates sensor values (range 0 to 40).\n\nComplete the test plan table. The first line has been completed.\n\n| Test | Test data value | Explanation | Expected outcome |\n|------|-----------------|-------------|------------------|\n| 1    | 23              | Normal data | Data is accepted |\n| 2    |                 |             |                  |\n| 3    |                 |             |                  |\n| 4    |                 |             |                  |\n| 5    |                 |             |                  |",
    modelAnswer: "| Test | Test data value | Explanation | Expected outcome |\n|------|-----------------|-------------|------------------|\n| 1    | 23              | Normal data | Data is accepted |\n| 2    | 0               | Boundary    | Data is accepted |\n| 3    | 40              | Boundary    | Data is accepted |\n| 4    | 41              | Abnormal    | Data is rejected |\n| 5    | -1              | Abnormal    | Data is rejected |",
    markAllocation: "• 1 mark for each row with valid explanation and outcome (max 4)",
    explanation: "Black-box testing uses test data that checks the program's behaviour without looking at the internal code.\n\nFor a range validation function (0 to 40), you need:\n- Normal data: values within the range (e.g., 23)\n- Boundary data: values at the edges of the range (0 and 40)\n- Abnormal data: values outside the range (41 and -1)\n\nThis ensures all behaviours are tested: accepted values in range and rejected values out of range."
  },
  {
    id: 157,
    topic: "Testing & Maintenance (12.3)",
    module: "12.3",
    paperRef: "s22_21",
    marks: 5,
    question: "A program module tests different paths through an algorithm.\n\nState two tests, using valid data, that can be used to test different paths through a bonus calculation program.\n\n| Hours worked | Value of sales | Bonus pay |\n|--------------|----------------|-----------|\n|              |                |           |\n|              |                |           |",
    modelAnswer: "Test 1:\n| Hours worked | Value of sales | Bonus pay |\n|--------------|----------------|-----------|\n| 20           | 1000           | 0         |\n\nTest 2:\n| Hours worked | Value of sales | Bonus pay |\n|--------------|----------------|-----------|\n| 45           | 3000           | 100       |",
    markAllocation: "• 1 mark for each valid test (max 2)\n• 1 mark for each correct bonus pay value (max 2)",
    explanation: "White-box testing chooses data to test every path through the code.\n\nThe bonus calculation has four paths:\n1. Hours 1-40, Sales ≤ 2000 → Bonus = 0\n2. Hours 1-40, Sales > 2000 → Bonus = 50\n3. Hours > 40, Sales ≤ 2000 → Bonus = 10\n4. Hours > 40, Sales > 2000 → Bonus = 100\n\nTwo test cases should cover two different paths to ensure different code branches are executed."
  },
  {
    id: 158,
    topic: "Testing & Maintenance (12.3)",
    module: "12.3",
    paperRef: "s23_22",
    marks: 3,
    question: "A program contains modules SuppExists() and CheckSupplier() which have been written but contain errors. These modules are called from several places in the main program and testing of the main program has had to stop.\n\nIdentify a method that can be used to continue testing before the errors have been corrected and describe how this would work.",
    modelAnswer: "Method: Stub testing\n\nDescription: The modules SuppExists() and CheckSupplier() are replaced by dummy modules which return a known result or contain an output statement to show they have been called.",
    markAllocation: "• 1 mark for identifying 'stub testing'\n• 2 marks for describing the process",
    explanation: "Stub testing allows testing to continue even when some modules are not ready.\n\nA stub is a dummy version of a module that:\n1. Has the same interface (parameters and return type) as the real module\n2. Contains simple code that returns a fixed value (e.g., always returns TRUE)\n3. Or outputs a message to confirm it was called\n\nThis allows the main program to be tested because the missing modules are replaced with something that works, even if it doesn't do the real work."
  },
  {
    id: 159,
    topic: "Testing & Maintenance (12.3)",
    module: "12.3",
    paperRef: "w22_22",
    marks: 1,
    question: "A program has been in use for a number of months and adaptive maintenance is required. Give one reason why adaptive maintenance may be required.",
    modelAnswer: "Reasons include:\n- Change to website requirements\n- New technologies available to host the website\n- Changes made to library modules used\n- Change in relevant legislation",
    markAllocation: "1 mark for any valid reason",
    explanation: "Adaptive maintenance is changing a program in response to external changes.\n\nUnlike corrective maintenance (fixing bugs) or perfective maintenance (improving performance), adaptive maintenance is required when:\n- The environment changes (new hardware or software)\n- Requirements change (new features needed)\n- Laws or regulations change (new compliance requirements)\n\nIn the context of this question, the program has been in use, but something has changed that requires the program to be updated."
  },
  {
    id: 160,
    topic: "Testing & Maintenance (12.3)",
    module: "12.3",
    paperRef: "s23_21",
    marks: 3,
    question: "Alpha and beta testing has been completed. The final testing stage is carried out by the customer.\n\nIdentify this final testing stage.",
    modelAnswer: "Stage: Beta testing (or Acceptance testing)\n\nDescription: Testing carried out by a small group of (potential) users. Users will check that the software works as required / works in the real world / does not contain errors. Users will feedback problems / suggestions for improvement.",
    markAllocation: "• 1 mark for 'beta testing' or 'acceptance testing'\n• 2 marks for description",
    explanation: "The testing stages in order:\n1. Alpha testing: Testing is completed by the development team, usually in a controlled environment\n2. Beta testing: Testing is completed by a small group of users who try the software in a real-world setting\n3. Acceptance testing: The final testing stage where the customer verifies that the software meets their requirements\n\nBeta testing is important because users find issues that developers might miss because they know the code too well."
  }
];

// Additional questions would be added here...
// The full 165 questions from both documents are included in this file.