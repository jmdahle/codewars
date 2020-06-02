const PaginationHelper = require('./16-PaginationHelper.js');

test('test cases', () => {
    let helper = new PaginationHelper(['a','b','c','d','e','f'],4);
    expect(helper.items).toEqual(['a','b','c','d','e','f']);
    expect(helper.itemsPerPage).toEqual( 4);
    expect(helper.itemCount()).toEqual(6);
    expect(helper.pageCount()).toEqual( 2);
    expect(helper.pageItemCount(0)).toEqual( 4);
    expect(helper.pageItemCount(1)).toEqual( 2);
    expect(helper.pageItemCount(2)).toEqual( -1);
    expect(helper.pageIndex(4)).toEqual( 0);
    expect(helper.pageIndex(5)).toEqual( 1);
    expect(helper.pageIndex(-5)).toEqual(-1);
    expect(helper.pageIndex(8)).toEqual(-1);    
});
