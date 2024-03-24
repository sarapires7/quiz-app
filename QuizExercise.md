# Develop a little frontend for a quiz application

Imagine a company that wants to build an quiz app for their employees. A quiz consists of an amount
of questions. Each employee of the company can answer the questions. Every week it is possible to define
a new quiz and to evaluate the answers.
The task is to develop the employee frontend for this app where the employees see the questions and
can provide an answer. Instead of creating a backend for reading questions and saving answers, simply
use appropriate data structures in the app itself to maintain the dummy questions and answers as state
in memory. Also the currently logged-in user can be kept in the app as dummy data.

There are two use cases to be implemented:

1. After a simulated login the app displays the questions of the currently active quiz. To
each question I can provide an answer. At the end an overview is shown that lists all
questions and the answers I have given. No sophisticated navigation is required.

2. As an administrator, I can create a new quiz by extending the dummy data directly in
the code of the app. The new questions and answers should not collide with the previous ones
(even though the answers of course disappear when the app is started again with the new questions
and no persistency) nor with those of other users.

Try to come up with a reasonable data model for the quiz app that can handle multiple quizzes and
knows which employee has given which answer.
