Template.postSubmit.events({
  'submit #postForm': function(e){
    e.preventDefault();
    var post = {
      url: $('#postForm').find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }
    Meteor.call('postInsert',post,function(error,result){
      if(error)
        return alert(error.reason);
      if(result.postExists)
        return alert('this post already exists')
      
      Router.go('postPage',{_id: result._id});
    });
  }
})