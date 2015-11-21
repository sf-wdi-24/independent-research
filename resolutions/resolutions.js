// creating "Resolutions" collection 
Resolutions = new Mongo.Collection('resolutions'); 

// Display database records into template 
if (Meteor.isClient) {
  // creating template helper - uses information from the html body
  Template.body.helpers({
    // calling the resolutions items from the collection 
      resolutions: function() {
        // finding all resolutions from the collection and searching the collection to find the varies records
        return Resolutions.find(); 
      }
  });  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
