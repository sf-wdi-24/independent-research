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

  // event from template inside the body html tag
  Template.body.events({ 
    'submit .new-resolution': function(event){
      // retrieving the title from the form 
      var title = event.target.title.value; 

      // create new resolution as an object
      // Resolution.insert saves resolution to database and updates view
      Resolutions.insert({
        // the title of the object is equal to the var title
        title : title, 
        // get time at which the resolution was created
        createdAt: new Date()
      });

      //clear form after resolution is submitted
      event.target.title.value = ""; 
      // prevents the page from refreshing when clearing the form
      return false; 
    }
  }); 
  // removing resolutions using the button 
  Template.resolution.events({
    // add toogle event 
    'click .toggle-checked': function(){
        // find current resolution 
        // create set object and including properties that will be modified
        // updates, saves in db and refreshes page
        Resolutions.update(this.id, {$set:{checked: !this.checked}});
    },
    // looking for the delete class 
    'click .delete': function(){
      // takes the id from a specific object and removes it
      Resolutions.remove(this._id);
    }
  }); 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
