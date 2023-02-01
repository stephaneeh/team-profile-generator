// create Manager card
function generateManager (manager) {
    return `
    <section class="card">
        <h3 class="card-header text-white bg-primary ">Manager</h3>
        <div class="card-body text-dark">
            <h4 class="card-title">${manager.name}</h4>
            <p class="card-text">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a class="text-dark" href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
                </p>    
        </div>
    </section>
    `;
};

// create Engineer card
function generateEngineer (engineer) {
    return `
    <section class="card">
            <h3 class="card-header text-white bg-success ">Engineer</h3>
            <div class="card-body text-dark">
                <h4 class="card-title">${engineer.name}</h4>
                <p class="card-text">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a class="text-dark" href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a class="text-dark" href ="https://github.com/${engineer.github}">github.com/${engineer.github}</a></p>
                </p>    
            </div>
        </section>
    `;
};

// create Intern card 
function generateIntern (intern) {
    return `
    <section class="card">
            <h3 class="card-header text-white bg-warning ">Intern</h3>
            <div class="card-body text-dark">
                <h4 class="card-title">${intern.name}</h4>
                <p class="card-text">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email: <a class="text-dark" href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </p>    
            </div>
        </section>
    `;
};

renderHTML = (teamArray) => {
    const pageArray = [];

    for (let i = 0; i < teamArray.length; i++) {
        const employee = teamArray[i];
        const role = employee.getRole();

        //execute manager function
        if (role == 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        //execute engineer function
        if (role == 'Engineer') {
            const engineerCard = generateEngineer(employee);
        
            pageArray.push(engineerCard);
        }
        //execute intern function
        if (role == 'Intern') {
            const internCard = generateIntern(employee);
        
            pageArray.push(internCard);
        }
    }

        const teamCards = pageArray.join('');
        console.log(`This is the team cards - ${teamCards}`);
        const generateTeam = generateHTML(teamCards);
        return generateTeam;
    }

// generate html page 
const generateHTML = function (teamCards) {   
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Our Team Profile</title>
        <!-- bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="/src/style.css">
    </head>
    <body class="p-3 mb-2 bg-dark text-white">
        <header class="text-center">
            <h1 class="display-1">Our Team Profile</h1>
            <h5><small>With over 40,000 years experience, we've got you covered for all things digital!</small></h5>
            <hr class = "bg-primary">
        </header>
        <main>
            <section id = "team-cards">
            ${teamCards}
            </section>           
        </main>
        <footer id="footer" class="p-3 text-center fixed-bottom">
            <hr class = "bg-primary">
            <small>Webpage created by CLI application</small>
            <br>
            <small>Check out my Github page for more creations - 
                <a href =  "https://github.com/stephaneeh">
                    <svg width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                stephaneeh
                </a>
            </small>
        </footer>
    </body>
    `
};

module.exports = generateHTML;