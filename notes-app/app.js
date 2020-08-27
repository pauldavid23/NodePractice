const chalk = require('chalk'); 
const yargs = require('yargs'); 

const green = chalk.bold.inverse.green;
const red = chalk.red.inverse.red;  

//yargs version 
yargs.version("1.1.0"); 

//Adding commands: 

yargs.command ({ 
    command:'Add',
    describe: 'Add new notes to your list',
    handler: myfunction = () => {
        console.log(green('Adding new notes'));
    }

});

// Remove command

yargs.command ({
    command: 'Remove',
    describe: 'remove the notes you do not need',
    handler: thefunction = () => {
        console.log(red('Removing the notes...')); 
    }

})

// list 

yargs.command ({ 
    command: 'list', 
    describe: 'List your to do list', 
    handler: list = () => {
        console.log('Listing your to do list...'); 
    }
})


// read

yargs.command ({ 
    command: 'read', 
    describe: 'Read your to do list',
    handler: readFunction = () => {
        console.log('Read your to do list'); 
    }
})



console.log(yargs.argv); 
