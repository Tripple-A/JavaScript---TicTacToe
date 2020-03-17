// import {
//   getDomEl,
//   renderNotice,
//   setMove,
//   clearState,
//   changePlayer,
//   myNotice,
//   checkIfWon,
//   launchGame,
// } from './index';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const testContent = '<div class="container">'
        + '<div class="row bg-dark text-light">'
           + ' <div class="col-12">'
               + ' <h1 class="text-center py-3">'
                   + '<span class="display-3">Tic Tac Toe</span><br>'
                    + '<small class="text-warning" id="declare"></small>'
                + '</h1>'
            + '</div>'
       + ' </div>'
        + '<div class="row">'
           + ' <div class="col-md"></div>'
            + '<div class="col-md-8">'
              + '  <h1 class="bg-warning text-center my-2" id="notice"></h1>'
               + ' <form class="my-5" id="ttt-form">'
               + '     <div class="form-group row">'
                     + '   <label for="player1" class="col-sm-3 col-form-label text-right">Player 1 </label>'
                      + '  <div class="col-sm-9">'
                        + '    <input type="text" class="form-control" name="player1" id="player1"'
                             + '   placeholder="Type Name Here ..">'
                        + '</div>'
                    + '</div>'
                   + ' <div class="form-group row">'
                       + ' <label for="player2" class="col-sm-3 col-form-label text-right">Player 2 </label>'
                       + ' <div class="col-sm-9">'
                           + ' <input type="text" class="form-control" name="player2" id="player2"'
                            + '    placeholder="Type Name Here ..">'
                       + ' </div>'
                   + ' </div>'
                   + ' <div class="form-group row">'
                   + '     <div class="offset-sm-3 col-sm-9">'
                   + '         <button type="submit" class="btn btn-outline-dark btn-block">Start Game</button>'
                    + '    </div>'
                   + ' </div>'
               + ' </form>'

               + ' <div id="gameboard" class="d-none"> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                    + '<div class="square"></div> '
                + '</div> '
                + '<button class="btn btn-outline-dark btn-block d-none" id="replay">Replay</button>'
            + '</div>'
            + '<div class="col-md"></div>'
        + '</div>'
    + '</div>';

const dom = new JSDOM(`<!DOCTYPE html>${testContent}`);


describe('Test That gameboard is rendered', () => {
  it('Document can be loaded', () => {
    expect(dom.window.document.body.children.length).toEqual(1);
  });

  it('Loaded doucment should have form with three children', () => {
    expect(dom.window.document.getElementById('ttt-form').children.length).toEqual(3);
  });

  it('Loaded doucment should have gameboard with 9 children', () => {
    expect(dom.window.document.getElementById('gameboard').children.length).toEqual(9);
  });
});