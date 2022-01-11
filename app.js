
const inquirer = require('inquirer');
const generateHTML = require('./src/pageTemp');
const {writeFile} = require('./utils/pageGen');

const markdownPromp = () => {
//console.log(markdownGen());
  return inquirer.prompt([
    {
     type:'input',
     name:'name',
     message:'What is your name? (Required)',
     validate: nameInput => {
         if (!nameInput) {
            console.log('Please enter your name!');
            return false;
         }else{
         return true;
         } 
      }
    },
    {
      type:'input',
      name:'appname',
      message:'What is the title of your application repo ? (Required)',
      validate: appName => {
        if(!appName) {
          console.log('please provide the information...');
          return false;
        } else {
        return true;
        }
      }
    },
    {
      type:'confirm',
      name:'confirmDescrip',
      message:'Would you like to add a description of your repo ? (Required)',
      default: true
    },
    {
      type:'input',
      name:'description',
      message:'Please describe your application ? (Required)',
      when:({confirmDescrip}) => confirmDescrip,
      validate: descInpt => {
          if(!descInpt) {
            console.log('please provide the information...');
            return false;
          } else {
          return true;
          }
        }
    },
    {
      type:'input',
      name:'instructions',
      message:'Please provide instructions for use of your application ?',
      validate: instruct => {
          if(!instruct) {
            console.log('please provide the information...');
            return false;
          } else {
          return true;
          }
        }
      },
      {
        type:'input',
        name:'contRinfo',
        message:'What are the contribution guidelines for your repo ? ',
        
      },
      {
        type:'input',
        name:'github',
        message:'What is your github user name ? (Required)',
        validate: descInpt => {
          if(!descInpt) {
            console.log('please provide the information...');
            return false;
          } else {
          return true;
          }
        }
      },
      {
        type:'input',
        name:'gitlink',
        message:'What is the link to your application repo ? (Required)',
        validate: linkage => {
          if(!linkage) {
            console.log('please provide the information...');
            return false;
          } else {
          return true;
          }
        }
      },
      {
        type:'confirm',
        name:'email',
        message:'Woul you like to provide an email? (Required)',
        default:true,
        validate: mailAdd => {
          if(!mailAdd) {
            console.log('please provide the information...');
            return false;
          } else {
          return true;
          }
        }
      },

  ]);
};
markdownPromp()
  .then(eHTML => {
    return(generateHTML(eHTML));
  })
  .then(sendHTML => {
    return writeFile(sendHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });














