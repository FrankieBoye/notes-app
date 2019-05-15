(function(exports){
  function NoteListView(){
  };

NoteListView.prototype.returnHTML = function(array) {
   return array.array
   .map(function(x) {
     return "<ul><li><div>" + x + "</div></li></ul>"
   }
 ).join("")
};

  exports.NoteListView = NoteListView;
})(this);
