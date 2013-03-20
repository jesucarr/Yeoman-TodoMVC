describe('Todo', function(){
console.log('asd');
  beforeEach(function(){
    todo = new TodoModel();
      
  }); 

   

   it('should have correct default values', function(){
      expect(todo.get('title')).to.equal('');
      expect(todo.get('title')).to.equal(false);
   });

});