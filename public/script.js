$(function(){

  var new_data = {};
  var congressman_data = {};
  var state_count_aye_data = {};
  var state_count_no_data = {};
  var state_count_obs_data = {};
  var state_count_tot_data = {};
  var state_count = [];
  var locations_array = [];
  var congressman_array = [];
  var z_array = [];
  var state = '';
  var vote = '';
  var lastname = '';
  var all_votes = [];

  // var source = $('#votes-template').html(); // loads the html from .hbs
  // var template = Handlebars.compile(source);

  $.get('https://www.govtrack.us/api/v2/vote_voter?vote=117985&limit=600', function(dataobject){
        
        function sum( obj ) {
          var summr = 0;
          for( var el in obj ) {
            if( obj.hasOwnProperty( el ) ) {
              summr += parseFloat( obj[el] );
            }
          }
          return summr;
        }


        function setupArrays(callback){
          console.log('started setupArrays function');
          for(var i = 0; i<dataobject.objects.length; i++){
            state = dataobject.objects[i].person_role.state;
            vote = dataobject.objects[i].option.value;
            lastname = dataobject.objects[i].person.lastname;
            test_arr = [];
            
            if(vote === "Aye"){
              state_count_tot_data[state] = (state_count_tot_data[state] || 0) + 1;
              state_count_aye_data[state] = (state_count_aye_data[state] || 0) + 1;
              new_data[state] = (new_data[state] || 0) + 1;
              congressman_data[state] = (congressman_data[state] || '') + lastname + ": " + vote + ", ";
            } else if(vote === "No") {
              state_count_tot_data[state] = (state_count_tot_data[state] || 0) + 1;
              state_count_no_data[state] = (state_count_no_data[state] || 0) + 1;
              new_data[state] = (new_data[state] || 0) - 1;
              congressman_data[state] = (congressman_data[state] || '') + lastname + ": " + vote + ", ";
            } else {
              state_count_tot_data[state] = (state_count_tot_data[state] || 0) + 1;
              state_count_obs_data[state] = (state_count_obs_data[state] || 0) + 1;
              new_data[state] = (new_data[state] || 0) + 0;
              congressman_data[state] = (congressman_data[state] || '') + lastname + ": " + vote + ", ";
            }

          }
          all_votes.push(sum(state_count_aye_data));
          all_votes.push(sum(state_count_no_data));
          all_votes.push(sum(state_count_obs_data));
          all_votes.push(sum(state_count_tot_data));

          console.log('end setupArrays function');
          callback();
        }

        function createArrays(callback){
          console.log('started createArrays function');
          for (var key in new_data) {
            if (new_data.hasOwnProperty(key)) {
              locations_array.push(key);
            }
          }
          for (var key2 in congressman_data) {
            if (congressman_data.hasOwnProperty(key2)) {
              congressman_array.push(congressman_data[key2]);
            }
          }
          for (var key3 in state_count_tot_data) {
            if (state_count_tot_data.hasOwnProperty(key3)) {
              if(state_count_aye_data.hasOwnProperty(key3)){
                x = (state_count_aye_data[key3] / state_count_tot_data[key3]).toFixed(2);
                if(state_count_obs_data.hasOwnProperty(key3)){
                  state_count.push(state_count_aye_data[key3] + "/" + state_count_tot_data[key3] + " aye votes" + " (" + state_count_obs_data[key3] + " no votes)");
                } else {
                  state_count.push(state_count_aye_data[key3] + "/" + state_count_tot_data[key3] + " aye votes");
                }
              } else {
                x = 0;
                if(state_count_obs_data.hasOwnProperty(key3)){
                  state_count.push(0 + "/" + state_count_tot_data[key3] + " aye votes" + " (" + state_count_obs_data[key3] + " no votes)");
                } else {
                  state_count.push(0 + "/" + state_count_tot_data[key3] + " aye votes");
                }
              }
              z_array.push(x);
            }
          }
          console.log('ended createArrays function');
          callback();
        }
        
        function dataMap(callback){
          console.log('started dataMap function');
          var data = [{
                  type: 'choropleth',
                  locationmode: 'USA-states',
                  locations: locations_array,
                  z: z_array,
                  zmin: 0,
                  zmax: 1,
                  text: state_count,
                  colorbar: {title: "% Voted Aye"},
                  hoverinfo: "text+location",
                  autocolorscale: true
          }];

          console.log(data);

          var layout = {
              title: '',
              geo:{
                  scope: 'usa',
                  countrycolor: 'rgb(255, 255, 255)',
                  showland: true,
                  landcolor: 'rgb(217, 217, 217)',
                  showlakes: true,
                  lakecolor: 'rgb(255, 255, 255)',
                  subunitcolor: 'rgb(255, 255, 255)',
                  lonaxis: {},
                  lataxis: {}
              }
          };
          Plotly.plot(usMap, data, layout, {showLink: false});
          console.log('ended mapData function');
          callback();
        }

        setupArrays(function(){
          createArrays(function(){
            dataMap(function(){
              //var votesHtml = template({vote: all_votes});
              //$('#votes_list').append(votesHtml);
              console.log(all_votes[0]);
              $('#votes_list_a').append(all_votes[0]);
              $('#votes_list_b').append(all_votes[1]);
              $('#votes_list_c').append(all_votes[2]);
              $('#votes_list_d').append(all_votes[3]);
            });
          });
        });
  });
  

});