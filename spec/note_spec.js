(function(exports) {
  function Text() {
    var note = new Note('text');

assert.isTrue(note.returnText() === 'text');
  };

Text();
})(this);

// if (note.returnText() !== 'text') {
//   throw new Error("Not text");
// }
