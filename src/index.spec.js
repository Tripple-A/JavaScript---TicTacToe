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

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

jest.dontMock('fs');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(html.toString());


describe('Test That gameboard is rendered', () => {
  it('Document can be loaded', () => {
    expect(dom.window.document.body.children.length).toEqual(2);
  });

  it('Loaded doucment should have form with three children', () => {
    expect(dom.window.document.getElementById('ttt-form').children.length).toEqual(3);
  });

  it('Loaded doucment should have gameboard with 9 children', () => {
    expect(dom.window.document.getElementById('gameboard').children.length).toEqual(9);
  });
});