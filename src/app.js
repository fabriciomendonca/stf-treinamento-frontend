import $ from 'jquery';
import style from './app.scss';

var root = 'https://jsonplaceholder.typicode.com';
let result, result1, result2;
async function loadPost(id) {
  try {
    result = await $.get(`${root}/posts/1`);
    result1 = await $.get(`${root}/posts/${result.id + 1}`);
    result2 = await $.get(`${root}/posts/${result1.id + 10}`);
  } catch(e) {
    throw(e);
  }
  console.log(result1);
  console.log(result);
  console.log(result2);
  /* $.get(`${root}/posts/1`)
    .then((data) => {
      result = data;
      return $.get(`${root}/posts/${data.id + 1}`);
    })
    .then((data) => {
      result1 = data;
      return $.get(`${root}/posts/${data.id + 10}`);
    })
    .then((data) => {
      result2 = data;
      console.log(result);
      console.lo(result1);
      console.log(result2);
    })
    .catch((e) => {
      throw('Deu pau');
    }); */
};

loadPost();