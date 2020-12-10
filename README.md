# Third-Party APIs: Work Day Scheduler

## The Task
The purpose of this assingment was to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### User Story

The user story is as followed, "an employee with a busy schedule
wants to add important events to a daily planner so that they can manage their time effectively.

#### My Code

For this homework I was given html and css starter code and needed to add to the html code and create a javascript file. I hardcoded each time slot row using the initial row as my templete. I wrote the time in a 24 hour time convention and thus it starts at 09:00 and the planner ends at 17:00. This is a standard work schedule of 9am-5pm. One of the requirements of the project was to use javascript to make the planner interactive so that when viewed between those hours, the textareas will be grey when the time has past, read for the current hour and green for future hours. In order to complete this tast I used the library called [Luxon](https://moment.github.io/luxon/). 
Another important part of the usability of this page was that when a user saves text to the textare via clicking on the save icon on the righthand side, once the page is reloaded, the text remains where it was saved and once inspected, has remained in the local storage. All these functions work accordingly in my code. 

Images:
1. The planner



2. Proof of the ability to type text 


3. Proof that the input will remain in the local storage
