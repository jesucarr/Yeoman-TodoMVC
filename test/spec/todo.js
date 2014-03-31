define([
  'models/todo'
], function (TodoModel) {
  'use strict';
  describe('Todo', function(){
    beforeEach(function(){
      this.todo = new TodoModel();
    }); 

    it('should have correct default values', function(){
      expect(this.todo.get('title')).to.equal('');
    });

  });
});
