'use babel';

import Asian4dSlotGameView from './asian4d-slot-game-view';
import { CompositeDisposable } from 'atom';

export default {

  asian4dSlotGameView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.asian4dSlotGameView = new Asian4dSlotGameView(state.asian4dSlotGameViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.asian4dSlotGameView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'asian4d-slot-game:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.asian4dSlotGameView.destroy();
  },

  serialize() {
    return {
      asian4dSlotGameViewState: this.asian4dSlotGameView.serialize()
    };
  },

  toggle() {
    console.log('Asian4dSlotGame was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
