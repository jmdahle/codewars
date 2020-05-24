const isValidWalk = require('./09-tenMinuteWalk.js');

test( 'Test cases', ()=> {
    expect( isValidWalk(['n','n','n','n','n','s','s','s','s','s'])).toBe(true);
    expect( isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
    expect( isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
    expect( isValidWalk(['w'])).toBe(false);
    expect( isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
});


