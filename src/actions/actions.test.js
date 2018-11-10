import {
    GENERATE_AURAL_UPDATE,
    generateAuralUpdate,
    RESTART_GAME,
    restartGame,
    MAKE_GUESS,
    makeGuess
};

describe('generateAuralUpdate', () => {
    it('should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('should return the action', () => {
        const action = restartGame();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('makeGuess', () => {
    it('should return the action', () => {
        expect.(action.type).toEqual(MAKE_GUESS);
    });
});
