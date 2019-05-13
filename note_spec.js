  function Text() {
    var note = new Note('text');

    if (note.returnText != 'text') {
      throw new Error("Not text");
  };

Text();
