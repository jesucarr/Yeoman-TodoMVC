define(['../../../app/scripts/models/todo'], function(TodoModel) {

	describe('Todo', function(){
		// var todo = 't';
		// console.log(todo);
	  beforeEach(function(done) {
	    // var that = this;
	    this.todo = new TodoModel();
	    done();
	  });
	  
		afterEach(function(done){
			// var that = this;
			// this.todos.fetch({
			//   success: function(c) {
			//     c.each(function(m){
			//       m.destroy();
			//     });
			//     that.todo.destroy();
			//     done();
			//   }
			// });
			done();
		});

		it('should have correct default values', function(){
		  expect(this.todo.get('title')).to.equal('');
		  expect(this.todo.get('completed')).to.equal(false);
		  // expect(todo.get('title')).to.equal(false);
		});
	});
});