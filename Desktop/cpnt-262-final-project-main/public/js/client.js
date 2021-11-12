"use strict";

// fetch data and return it into json
const fetchData = async () => {
  try {
    // link variable
    let link = null;

    // check what data is needed from link bar
    if (window.location.pathname === '/subscriber') {
      link = 'subs';
    } else if (window.location.pathname === '/team') {
      link = 'member';
    } else {
      link = 'games';
    }

    // fetch data
    const response = await fetch(`/${link}`);
    // data variable
    let data = null;

    // check if response is ok
    if (!response.ok) {
      // if not throw an error
      throw new Error('Not 200 OK');
    } else {
      data = await response.json(); // return json file with data
    }

    // dataSection query selector
    const dataSection = document.querySelector(".data");

    // output variable
    let output = '';

    // for loop to build the data
    data.forEach((info) => {

      // check what data is needed from link bar
      if (window.location.pathname === '/store') {
        output += info.width;
      } else if (window.location.pathname === '/team') {
        output += info.profilePic;
      } else {
        output += info.email;
      }
      console.log(output);
    })

    // print output and date
    dataSection.innerHTML = output;

  } catch (err) { // catch errors
    console.log('Caught an error!', err); // console log the error
  }
}

// call fetchData function
fetchData();