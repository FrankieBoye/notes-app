(function(exports) {
  function returnHTML() {
    var html = "<ul><li><div>Favourite food: pesto</div></li></ul><ul><li><div>Favourite drink: seltzer</div></li></ul>"
    var noteList = new NoteList();
    var noteListView = new NoteListView();

    assert.isTrue(noteListView.returnHTML(noteList) === "");

    noteList.storeNote("Favourite food: pesto")

    assert.isTrue(noteListView.returnHTML(noteList) === "<ul><li><div>Favourite food: pesto</div></li></ul>");

    noteList.storeNote("Favourite drink: seltzer")

    assert.isTrue(noteListView.returnHTML(noteList) === html);
  };

  returnHTML();
})(this);
