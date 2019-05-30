const inquirer = require('inquirer')

async function main() {
    let qs = [
        {
            type: 'input',
            name: 'name',
            message: 'Please input the name:'
        },
        {
            type: 'input',
            name: 'url',
            message: 'Please input the url:'
        },
        {
            type: 'input',
            name: 'reason',
            message: 'Please input the reason:'
        }
    ]
    
    let answers = await inquirer.prompt(qs)

    console.log(JSON.stringify(answers, null, 4)) 
}

main()
