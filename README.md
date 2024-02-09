# :hammer: QUEUES :question:

- `Explanation:`:

- A queue  operates as a queue of persons in a market for example, following the FIFO principle (First in First out), basically it's a manner to order how you want to execute your data or functions, we can extend it using priorities to have higher priority tasks running before lower ones. 
- To work with this, it's necessary to understand that all methods will follow the FIFO principle, and if necessary as mentioned before, define which are the priorities for each task. So, when one task it's been executed, the others on the queue should wait until the task executed finish. When a task is finished it should be removed from the queue, and the next one should start to be executed. 
