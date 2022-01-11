//send file to folder..
const fs = require('fs');
const sendFile = filecont => {
  return new Promise((resolve,reject) => {
    fs.writeFile('.index.html', filecont, err =>{
      if(err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        massage: 'file created!'
      });
    });
  });
};
module.exports = {sendFile};