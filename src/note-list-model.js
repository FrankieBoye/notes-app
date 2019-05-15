(function(exports){
  function NoteList(){
    this.array = []
  };

NoteList.prototype.storeNote = function(note) {
  this.array.push(note)
};

NoteList.prototype.returnNote = function() {
  return this.array
};

  exports.NoteList = NoteList;
})(this);
