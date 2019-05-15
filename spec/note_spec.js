(function(exports) {
  function Text() {
    var note = new Note('text');

assert.isTrue(note.returnText() === 'text');
  };

Text();
})(this);
