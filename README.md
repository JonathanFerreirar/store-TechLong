<h2>Project Title</h2>

<h3>TechLong</h3>

<h2>Description</h2>

This GitHub project is a web application for an store website. It provides a platform for users to browse and purchase products online. The website features a responsive design and utilizes popular web technologies such as HTML, CSS, typescript, react, mirage and Tailwind. The user interface includes a navigation bar, description section and a product section.
Features

<h2>Main difficulties</h2>

<h3>Add products to cart</h3>

<p>The real difficulty was using a modal for this, I was using the react-confirm-alert library to create this modal, the whole problem is this library creates my modal outside of the root div of React this makes the state changed by this modal , it was only accessible by it and no other component.</p>

<h3>How i solve</h3>
<p>
    
The best solution to this problem was not to depend on the library to create my modal, so I created my modal myself so my problems were solved, the hardest part of this challenge was understanding what was causing this bug, fixing it went well simple.

</p>
<h3>Display the respective product in the modal</h3>

<p>
  The problem was that I was using a single state to decide whether my modal would be open or closed, and this caused me to open my modal and open all other modals in the application, so the rendered model was never what I wanted.  
</p>

<h3>How i solve</h3>

<p>
    For this problem the solution was more complex and brought me new knowledge, good for this solution I changed the function that manipulated the state of my modal, leaving it dynamic by passing the specific mouse model to it, so each modal represented a function with a particular model , this solution take out me a few nights sleep, but I'm glad I did!
</p>


<h2>Installation </h2>

To run the project locally, follow these steps:

    Clone the repository: git clone [repository URL]
    Open the project folder in your preferred code editor.
    Use npm install.
    Use npm start.

<h2>Usage</h2>

Contributions are welcome! If you find any issues or have suggestions for improvement, please submit a pull request or open an issue in the GitHub repository.

<h2>License</h2>

This project is made by Jonathan Rodrigo

    
