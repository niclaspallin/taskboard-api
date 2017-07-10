export default {
  send: (response, promise) => {
    promise
    .then(result => { response.send(result); })
    .catch(err => {
      console.log(err);
      response.statusCode = 400;
      response.send(err);
    });
  }
};