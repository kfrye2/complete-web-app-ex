require("isomorphic-fetch");
import BPromise from "bluebird";

function getJson(url) {
  return fetch(url).then(function(resp) {
    console.log(url, resp);
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getCampground(name) {
  //return fetch(`http://localhost:8080/api/info?q=${name}`).then(function(resp) {
    return fetch(`http://35.245.126.165/api/info?q=${name}`).then(function(resp) {
    return resp.json();
  });
}

module.exports = {
  getInfo: function(player) {
    return getCampground(player).catch(handleError);
  }
};
