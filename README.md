# UI-regression-testing

UI testing by using Casperjs, Phantomcss and Slimerjs.

#Code workflow for First time.
Step 1. Read CSV file
Step 2. Find URL and Title column
Step 3. Try to read URL one by one
Step 4. Open URL in headless browser
Step 5. Read title of the page.
Step 6. Take a screenshot of the page and store in rood folder.
Step 7. End of Loop.

If user is running the test second time  
Same Step 1 to 5
Step 6. It will compare the page screen changes and create diff file.
Step 7. Fail/Diffrences stored in diffrent location of root folder.
Step 8. End of loop
