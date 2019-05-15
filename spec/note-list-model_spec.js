(function(exports) {
  function storeNotesArray() {
    var note = new Note('text');
    var noteList = new NoteList();

assert.isTrue(noteList.returnNote() === noteList.array);

    noteList.storeNote(note.text)

if (noteList.array[0] === "text") {
  console.log("storeNotesArray")
} else {
  console.log("Error")
  }
};

storeNotesArray();
})(this);
