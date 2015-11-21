$(function(){

  var new_data = {};
  var locations_array = [];
  var congressman_array = [];
  var z_array = [];
  var state = '';
  var vote = '';
  var lastname = '';

  $.get('https://www.govtrack.us/api/v2/vote_voter?vote=117985', function(dataobject){
        


        function setupArrays(){
          console.log('started setupArrays function');
          for(var i = 0; i<dataobject.objects.length; i++){
            state = dataobject.objects[i].person_role.state;
            vote = dataobject.objects[i].option.value;
            lastname = dataobject.objects[i].person_role.lastname;
            if(vote === "Aye"){
              new_data[state] = (new_data[state] || 0) + 1;
            } else if(vote === "No") {
              new_data[state] = (new_data[state] || 0) - 1;
            } else {
              new_data[state] = (new_data[state] || 0) + 0;
            }
          }
          console.log('end setupArrays function');
          createArrays();
        }

        function createArrays(){ 
          console.log('started createArrays function');
          for(var x = 0; x < new_data.length; x++){
            locations_array.push(new_data[x]);
            z_array.push(new_data[x]);
          }
          console.log('ended createArrays function');
          dataMap();
        }
        
        function dataMap(){
          console.log('started dataMap function');
          var data = [{
                  type: 'choropleth',
                  locationmode: 'USA-states',
                  locations: locations_array,
                  z: z_array,
                  //text: congressman_array,
                  autocolorscale: true
          }];

          console.log(data);

          var layout = {
              title: 'title',
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
        }

        setupArrays();
  });

  // Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_usa_states.csv', function(err, rows){
  //       function unpack(rows, key) {
  //           return rows.map(function(row) { return row[key]; });
  //       }

  //       var data = [{
  //               type: 'choropleth',
  //               locationmode: 'USA-states',
  //               locations: unpack(rows, 'postal'),
  //               z: unpack(rows, 'pop'),
  //               text: unpack(rows, 'state'),
  //               autocolorscale: true
  //       }];
  //       console.log(data);


  //       var layout = {
  //           title: '',
  //           geo:{
  //               scope: 'usa',
  //               countrycolor: 'rgb(255, 255, 255)',
  //               showland: true,
  //               landcolor: 'rgb(217, 217, 217)',
  //               showlakes: true,
  //               lakecolor: 'rgb(255, 255, 255)',
  //               subunitcolor: 'rgb(255, 255, 255)',
  //               lonaxis: {},
  //               lataxis: {}
  //           }
  //       };
  //       Plotly.plot(usMap, data, layout, {showLink: false});
  // });

});