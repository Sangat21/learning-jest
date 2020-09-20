const functions = require('./functions');

// to be
test('Adds 2 + 2 equal to 4', () => {
    expect(functions.add(2,2)).toBe(4);
})

// not to be
test('Adds 2 + 2 to not equal to 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

// to be null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// to be falsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

// to equal
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
})

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1+load2).toBeLessThanOrEqual(1600);
})

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
})

// Arrays
test('Admin should be in usernames', () => {
    usernames= ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// working with JSON data (AXIOS)

// Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     });
// })

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})
