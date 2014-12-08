var board2 = new ChessBoard('board2', {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
});
$('#startBtn').on('click', board2.start);
$('#clearBtn').on('click', board2.clear);