# rock-paper-scissors
JavaScript Rock-Paper-Scissors exercise. Results are displayed in the Google Developer Tools console.
The program used to run automatically after saving changes or loading the page. So, I temporarily added a button to control it. After that, the program stopped working. I didn't have the knowledge to fix the issue myself. AI found the solution: the problem was the JavaScript code loading before the page itself. The recommendation was to add `defer`:
<script src="rps.js" defer></script>
Now the program works.
For the best solution, add to the Java script code:

document.addEventListener('DOMContentLoaded', () => { 
const btn = document.querySelector('button'); 
btn.addEventListener('click', playGame);
});