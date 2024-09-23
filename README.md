# The Wild Oasis—Next.js

[JSON placeholder](https://jsonplaceholder.typicode.com/)



### What does mean UI in React 
---------------------------
- UI = f(state)
- means - a function for keeping update the state — means re-rendering and showing different parts of the UI and layout.
- 100% clint-side
- interactive 
- Components - reusable 

drawbacks: 
----------
- require lots of js 
- client-server data waterfalls - fetching data problem. 


### Next.js- react server component—RSC architecture
---------------------------------------------------
- helps both data and state
- UI = f(data , state)
- interactive 
- components 
- react-server component
- server components
- fullstack app
- write code with backend and frontend together like regular React. 
- it is not default react app - like vite app
- it needs to be implemented by a framework like `nextjs (app router)`



## server component 
-------------------
- UI = f(data)
- components that are only rendered on server 
- don't make it into a bundle (0 kb)—means no Js at all `0 JavaScript` because to interactivity with clients. 
- No interactivity
- 0 JS 
- make be made with React 
- No `state/ hooks`
- no lifting state up
- has `Props`
- `data fetching` - preferably way to do it in server. by using `async/await` in the components and can `pass` a `Props` to `clients' components`. 
- `can import` - clients and server components 
- `can reander`- clients and server components everything
- when is re-rendered?: as they don't have a state - still they re-render- and it happened `everytime URL changes` by navigation it ties to routes
- - `Context Api` does NOT work here 
- decision?: should I fetch this data here or clients' components 
- doesn't need API for website to connect but need for mobile application 
- console.log() = show only in node `terminal` - `dont show in Browser` 



## Client Components
--------------------
- UI = f(State)
- Regular components 
- has js logic 
- has `state/ hooks`
- has—lifting state up
- has `Props`
- still we can data fetching in Clients components by using a `preferred third party library`. like `reactQuery` 
- Import—kind of components: 
- `only can import` - clients components-`not server components` 
- `can reander`- clients and server components `pass as props`
- when is re-rendered?: whenever `own state` or `parents state` changes 
- `Context Api` does work 
- decision?: should I fetch the data here or server components
- doesn't need API for website to connect but need for mobile application



### server components example for this project
----------------------------------------------
- pages all 
- sidebar component 
- navbar component
- main area component
- data needs to fetch from somewhere. 
- cabins data 
- cabins row 
- avatar 
- those are not interactive at all— those will be server components—high label components 
- But inside not the high label. 


### Clients Components example for this project
-----------------------------------------------
- toggle - Dark mode / we can click it to interacting 
- filter/ sort by components / user need to interactive with this `in order to work`



### Server Client Boundary 
--------------------------
- - toggle menu- `use client` and its options like -duplicate, edit, delete
- react server all out boundary because it is split for server and for clients 
- we use `"use client"` for creating boundary for clients and server 
- we use sub-tries for clients executed in `Browser`
- `Props` must be serializable-must convert to a format that can easily be transferred- 
- `Function, and classes are examples of data structures that not serialized`. 
- so we `cannot pass` those as a `Props` from `server components` to `clients components` 


#### importing: import
----------------------
- components `module` imports `another module` by using `import` syntax
- 
#### rendering: render
---------------------
- means—one `component` calls `another component` 
- it `uses` another component inside `its own JSX body `

