'use babel';

import Asian4dSlotGame from '../lib/asian4d-slot-game';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Asian4dSlotGame', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('asian4d-slot-game');
  });

  describe('when the asian4d-slot-game:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.asian4d-slot-game')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'asian4d-slot-game:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.asian4d-slot-game')).toExist();

        let asian4dSlotGameElement = workspaceElement.querySelector('.asian4d-slot-game');
        expect(asian4dSlotGameElement).toExist();

        let asian4dSlotGamePanel = atom.workspace.panelForItem(asian4dSlotGameElement);
        expect(asian4dSlotGamePanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'asian4d-slot-game:toggle');
        expect(asian4dSlotGamePanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.asian4d-slot-game')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'asian4d-slot-game:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let asian4dSlotGameElement = workspaceElement.querySelector('.asian4d-slot-game');
        expect(asian4dSlotGameElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'asian4d-slot-game:toggle');
        expect(asian4dSlotGameElement).not.toBeVisible();
      });
    });
  });
});
