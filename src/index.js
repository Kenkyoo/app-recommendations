import _ from 'lodash';
import axios from 'axios';
import $ from "jquery";
import lazySizes from 'lazysizes';
import Glide from '@glidejs/glide'
import { showInfo } from './info';
import { showResults } from './results';
import { slider } from './slider';

async function getRecommendations(searchTerm) {
  
axios.post('https://server-api-2p4x.onrender.com/search', {
    query: searchTerm
  })
  .then(function (response) {
    const data = response.data;
    const info = data.info;
    const results = data.results;
    showInfo(info)
    showResults(results)
  })
  .catch(function (error) {
    console.log(error);
  });
}

axios.get('https://server-api-2p4x.onrender.com/get', {
})
.then(function (response) {
  const data = response.data;
  console.log(data);
  slider(data)
})
.catch(function (error) {
  console.log(error);
});

$('#submit').on('click', function () {
  var searchTerm = $('#search').val();
  getRecommendations(searchTerm)
})

window.handleClick = function(name) {
  getRecommendations(name)
}

  new Glide('.glide').mount();
