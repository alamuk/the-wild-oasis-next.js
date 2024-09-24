# The Wild Oasis—Next.js

[JSON placeholder](https://jsonplaceholder.typicode.com/)



### Project Task:
---------------
1. Users of the App are `potential guests` and `actual guests`. 
2. Guests should be able to `learn all about` the Wild Oasis Hotel
3. Guests should be able to `get information` about each `cabin` and see booked `dates`
4. Guests should be able to `filter cabins` by their maximum guest capacity
5. Guests should be able to `reserve a cabin` for a certain date range 
6. Reservations are `not paid online`. Payments will be made at the property upon arrival. 
7. therefore, new reservation should be set to `uncofirmed`(booked but not yet checked in)
8. Guests should be able to `view` all their `past and future reservations` 
9. Guests should be able to `update or delete a reservation` 
10. Guests need to `sign up and login` before they can reserve a cabin and perform any operation
11. On signup, each guest should `get a profile in the DB`
12. Guests should be able to `set and update basic data` about their `profile` to make check-in at the hotel faster




### project Pages:
-----------------
1. `About page` for task-2
2. `Cabin page` for task -3 and 4
3. `Reservations page` for task - 5, 6, 7, 8, 9
4. `Authentication page` for task — 10, 11
5. `profile page` for task - 12


Route: 
--------
/
/cabin
/about
/account
/account/reservations
/account/profile


### Technology Decision: 
-----------------------
1. Framework - `NEXT.js` 
2. UI state management- `React Context API`
3. DB / API - `supabase` 
4. Styling - `tailwindcss`


### Libraries used
-------------------
- npm i @heroicons/react
- npm i date-fns


### Folders structures: 
------------------------
1. 




### any layout: 
should have ({children}) property. 

---------------------------------------------------------------------------------------------------------





## Theories of the Projects 
-------------------------

Theory for folder 
- _ underscore makes the folder private
- @/ represent root folder



### SSR Model
- first = UI = f(data) = serverside rendering
- second = UI = f(state) = client side rendering
- hydrate means—adding back HTML interaction ability
- React server-means React Own Server site. NOt the real server sites `not the Web Server` 
- React Client-means React Own client site. NOt the real browser sites `not the HTML/ DOM` 
- Both `client` and `server` `components` are `initially rendered` on the `real server` when SSR is used 
- `after that` - `server component run only on the actual server site` and `client component run only actual client site`. 



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

----------------------------------------------------------------------------
How rendering works: 
- Tree of[]() component instances
- components tree 
- virtual Dom 
- DOM elements (HTML)

with server 
- `Component Three`
- server components instances (sc)
- clients components instances (cc)
- use clients 
- render
- placeholder
- serialized "" props passed from SC to CC
- Url to script with component code
- RSc Payload
- React-describes the `UI` as `data` not the finished HTML. 
- server will run first, then client
- first = UI = f(data) 
- second = UI = f(state)



### Meta Data: 
--------------
- meta data can be for individual pages 
```jsx
export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    template: '%s -  The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  
  description: 'Generated by Next.js',
};
```


### Font
- for font, we don't need to download any font from outside. 
- Next.js has built in `google font` to connect with any font. 
- just need to import the font name wit {} this bracket
`import { Josefin_Sans } from 'next/font/google';`
- this is a function. now we need to call this function with arguments to use it 
``` 
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
subsets: ['latin'], 
display: 'swap',

})

```

- for using it, we need to put in the specific elements
  ---------------------------------------
```
<body className={`${josefin.className} bg-primary-950 `}>
</body>
```

### Optimised Images
--------------------
- use: Image component from next 
1. it automatically makes the image format as a web format and currently sizes. 
2. it stays exact height and with 
3. it is also lazy-load the images 
- we need to add: src, height and width with the Image component. 
- src can be from direct `image import or path`
```jsx
  <Image
  src={logo}
  quality={100}
  height="60"
  width="60"
  alt="The Wild Oasis logo"
/>
{/*<Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />*/}
```
Q. How make image responsive in next JS
```
<div className="relative col-span-2 aspect-square">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>
```
