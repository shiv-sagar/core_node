var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
// fs.readFile("./theory.md", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })

// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.

  // fs.readFile("./theory.md", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data.toString());
  //   }
  // })


// 3. Write script to read file Synchronously and console the output.
 
// var file = fs.readFileSync("./theory.md");
// console.log(file.toString());


// 4. Write script to create a file 'write.js' and write content of read.js in there.

// fs.readFile("./read.js", (err, data) => {
//     if(err) {
//       console.log('Error: ', err);
//     } else {
//         fs.writeFile('write.js', data.toString(), (err) => {
//           if(err) {
//             console.log('Error: ', err);
//           } else {
//               console.log('data written successfully');
//               return;
//           }
//         })
//     }
//   })

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

  //fs.open("./write.js", (err, fd) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     fs.truncate("./write.js", fd.length, (err) => {
  //       if(err) {
  //         console.log(err);
  //       } else {
  //         fs.writeFile("./theory.md", "file updated", (err) => {
  //           if(err) {
  //             console.log(err);
  //           } else {
  //             console.log("file updated")
  //           }
  //         })
  //       }
  //     })
  //   }
  // })

// 6. Delete the content of write.js using fs.unlink or unlinkSync method

fs.unlink("./write.js", (err) => {
  if(err) throw err;
})