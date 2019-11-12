const lib = require('./lib')

test('stringArrayFromBuffer', () => {

})

test('unique', () => {
    let origin = ['a', 'b', 'c', 'c']
    let expected = ['a', 'b', 'c']

    expect(lib.unique(origin)).toMatchObject(expected)
})

test('readFile', () => {

})
