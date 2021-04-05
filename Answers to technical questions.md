###Questions:

1. How long did you spend on the coding assignment? What would you add to your solution if you had
   more time? If you didn't spend much time on the coding assignment then use this as an opportunity to
   explain what you would add.
2. What was the most useful feature that was added to the latest version of your language of choice?
   Please include a snippet of code that shows how you've used it.
3. How would you track down a performance issue in production? Have you ever had to do this?
4. What was the latest technical book you have read or tech conference you have been to? What did you
   learn?
5. What do you think about this technical assessment?
6. Please, describe yourself using JSON.

---

###Answers

1. It takes me 6 hours on the coding assignment. I would look for a better and simple UI solution
2. React Hooks
```javascript
import React, { useState } from 'react';
...
const [searchText, setSearchText] = useState<string>('');

const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchText(e.target.value);
```
3. As a Front-end developer I will use a mix of all these tools:
   1. React DevTools extension (https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
   2. Chrome DevTools -> Performance tab to record the runtime performance. 
   3. Also I could use the 'Lighthouse' option for generating a report. 
   4. Using using React's <Profiler /> component
  I did not face performance issues so far in Production.
4. I don't have time to read tech books. I prefer to read tech articles and improve my skills
   with online courses. So last tech thing that I read was about using lazy querying in GraphQL 
   (used in this task) 
5. It is a lovely assessment. Clear requirements and at the same time enough freedom to complete
   the task! Well done!
6. ```json
   {
   "name": "Ivaylo",
   "lastname": "Petrov",
   "age": 37,
   "nationality": "Bulgarian",
   "location": "Sofia",
   "life_roles": [
      "Father",
      "Husband",
      "Professional developer"
   ],
   "hobbies": [
      "Toddler's entertainment / education",
      "Taking care of my family",
      "Trying to help when I can, it costs nothing"
   ],
   "no_stress_activities": [
      "Swimming",
      "Walking in forests",
      "Beer"
   ],
   "passions": [
      "Programming",
      "Teaching others",
      "Repairing stuff at home"
    ],
   "dreams": [
      "To have time to sleep more"
   ],
   "believes": [
      "Focusing to be a better person and being a developer means being a student for life!"
   ]
   }
```
