// creating "Resolutions" collection 
Resolutions = new Mongo.Collection('resolutions'); 

// Display database records into template 
if (Meteor.isClient) {
  // creating template helper - uses information from the html body
  Template.body.helpers({
    // calling the resolutions items from the collection 
      resolutions: function() {
        // only getting resolutions that are checked
        if (Session.get('hideFinished')){
          // $ne in mongodb selects the documents where the value of the field is not equal to the specified value
          return Resolutions.find({checked: {$ne: true}}); 
        } else {
          // returning all resolutions
          return Resolutions.find(); 
      }
    }, 
    // defining hideFinished as a helper
    hideFinished: function() {
      // retrieving Session variable
      return Session.get('hideFinished'); 
    }
  });  

  // event from template inside the body html tag
  Template.body.events({ 
    'submit .new-resolution': function(event){
      // retrieving the title from the form 
      var title = event.target.title.value; 

      // using method to call a meteor method
      Meteor.call("addResolution, title"); 
    
      //clear form after resolution is submitted
      event.target.title.value = ""; 

      // prevents the page from refreshing when clearing the form
      return false; 
    },
    // triggering the hide
    'change .hide-finished': function(event){
    // setting session variable and assigning the value for session
    Session.set('hideFinished', event.target.checked);
    }
  }); 
  // removing resolutions using the button 
  Template.resolution.events({
    // add toogle event 
    'click .toggle-checked': function(){
        // calling updateResolutions and sending id
        Meteor.call("updateResolution", this._id, !this.checked);
    },
    // looking for the delete class 
    'click .delete': function(){
      // takes the id from a specific object and removes it
      Meteor.call("deleteResolution",this._id);
    }
  }); 

  // modifying ui config so that a user only requires a username and not an email and a password, as set by default.
  // by default the password must be at least 6 characters long
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  }); 

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
// methods that application can have access to on the client side 
Meteor.methods({
  // sending title to function and it will be used in title
  addResolution: function(title){
      // Resolution.insert saves resolution to database and updates view
      Resolutions.insert({
        // the title of the object is equal to the variable title
        title : title, 
        // get time at which the resolution was created
        createdAt: new Date()
    }); 
  }, 
  // update resolutions
  updateResolution: function(id, checked) {
    Resolutions.update(id, {$set: {checked: checked}}); 
  },
  // delete resolutions 
  deleteResolution: function(id) {
    Resolutions.remove(id); 

  }
}); 





}
