/**
 * Created by Administrator on 2016-06-12.
 */
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});
Template.error.onRendered(function() {
    var error = this.data;
    Meteor.setTimeout(function () {
        Errors.remove(error._id);
    }, 3000);
});