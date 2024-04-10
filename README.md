# NODEJS IS AN EVENT-DRIVEN ARCHITECTURE

How Web Works
1. Client => Request => Server => Response => Client

Program Lifecycle & Event Loop in Nodejs
1. Nodejs exists if no more work
2. createServer() event never finishes by default
3. Nodejs runs non-blocking JS code and uses and event-driven Code

Asynchronous Code
1. Js is non blocking
2. Uses callbacks and Events

Requests & Responses
1. Parse request data in chunks(Streams & Buffers)
2. Avoid "double response"

Nodejs & Core Modules
1. http, fs, path
2. Core modules can be imported into any file to be used there
3. import via require('module)

Node Module System
1. Import via require
2. Export via module exports or exports for multiple

ASSIGNMENT
1. Create a new Node Server 
2. Handle two routes -> / (Return a greeting) and /users (Show some users)
3. Add a form with a username <input/> on the / and submit a POST request to "/create-user" on button click(redirect)





## SINGLE THREAD
1. Uses a single js Thread in the OS and it handles multiple requests by.

## NODEJS PERFORMANCE

1. Uses the fs for (File Systems) module : It automatically starts the Event Loop when a Nodejs server has just started. It also handles the **EVENT CALLBACKS**.

2. The fs is sent to the **WORKER POOL** which is automatically started by NodeJs and it deals with all the different Threads, Once it is done it triggers the Callbacks for that and return into the event loop.

3. The **EVENT LOOP** handles all the call backs in a particular loop. 

(a). *Timers* - Execute setTimeout and setInterval Callbacks

(b). *Pending Callbacks* - Checks any awaiting callbacks that may be Input/Output callbacks

(c). *Poll* - Retrieve new I/O events and execute their callbacks or returns to the Pending call back. 

(d). *Check* - Execute setImmediate() callbacks immediately and it is faster than the Pending callbacks

(e). *Close Callbacks* - Execute any and all close callbacks

(f). process.exit - sets the refs to 0

## UTILIZE THE ROUTES TO CONTAIN ALL THE LOGIC

1. 