CLOCK TOWER BELL COUNTER

 *** There are some bugs in my code:
    1. front end input time validation not activated - not working completely yet
    2. time scenarios that do not end with :00 are not accounted for 
    3. may be some other time scenarios I have not though of



User Story

As a clock enthusiast, I want to know how many times a clock tower will ring its bell between two given times, so that I can plan to sing along.

Background
A clock tower will ring its bell every hour, on the hour, a number of times equal to the number indicated by the hours hand.

Example
At 3pm, the clock tower will ring the bell three times. At midnight, it will ring the bell 12 times.

Technical Specification
** I should be able to input a start time and end time into the browser. Both times will be in
   twenty-four hour notation, such as 12:00 for noon and 15:30 for half-past three in the afternoon.
** If a user enters a number that is not in the expected format, an error message should be
   displayed.
** The UI should display the total number of times the clock tower will ring its bell between the
   two provided times.

Notes
1. If either time is on the hour (ex. 14:00) then you should count the bell rings that would occur at that hour.
2. If both times are equal, treat it as if twenty-four hours will pass and not that the two times are the same time on the same day.

Test Cases
1. **INPUT** $startTime = '2:00'; $endTime = '3:00'; **OUTPUT** 5
2. **INPUT** $startTime = '14:00'; $endTime = '15:00'; **OUTPUT** 5
3. **INPUT** $startTime = '14:23'; $endTime = '15:42'; **OUTPUT** 3
4. **INPUT** $startTime = '23:00'; $endTime = '1:00'; **OUTPUT** 24