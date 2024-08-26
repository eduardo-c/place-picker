<h1>Web App to create personal collection of places</h1>

<h2>This demo project includes the following React concepts</h1>
<ul>
    <li>Custom Hooks - useFetch is a custom hook which makes use of useState and useEffect inside to fetch user places</li>
    <li><b>useRef</b> - For handling the reference of the place when it´s picked from the user's and available places to be removed</li>
    <li><b>useState</b> - For state management of state variables</li>
    <li><b>useEffect</b> - For async function execution such as fetch places from backend server. Also to execute the showModal or close dialog methods</li>
    <li><b>useCallback</b> - For async function execution to remove a place from the selected places</li>
    <li>dialog <b>onCancel</b> attribute - set this attribute to avoid a bug when closing the modal with ESC key and keep the UI synced with the state</li>
    <li>Use of <b>fech</b> method - http communication</li>
</ul>

<h2>To run the app, run below commands</h2>
<ul>
    <li>cd backend</li>
    <li>npm install</li>
    <li>node app.js</li>
    <li>cd frontend</li>
    <li>npm install</li>
    <li>npm run dev</li>
</ul>

![alt text](https://github.com/eduardo-c/place-picker/blob/main/src/assets/image.png?raw=true)