// PaginationHelper
// https://www.codewars.com/kata/515bb423de843ea99400000a
// 5 kyu

/* Description */
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1
/* Function */

function PaginationHelper (items, itemsPerPage) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
    return this.items.length;
}

PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount() / this.itemsPerPage)
}
PaginationHelper.prototype.pageItemCount = function(pageNumber) {
    // adjust pageNumber to array index (page starts at 0)
    pageNumber++;
    return (    
        (pageNumber > this.pageCount()) ? -1 : (pageNumber === this.pageCount()) ? this.itemCount() % this.itemsPerPage : this.itemsPerPage
        );
}
PaginationHelper.prototype.pageIndex = function(itemNumber) {
    return (
        (itemNumber< 0 || itemNumber > this.itemCount() || this.itemCount() == 0 ) ? -1 : (itemNumber !== 0) ?  Math.ceil(itemNumber/this.itemsPerPage) -1 : 0
    );
}


/* export */
module.exports = PaginationHelper;

/* test cases */

helper = new PaginationHelper(['a','b','c','d','e','f'],4);
console.log(helper.items,['a','b','c','d','e','f'] );
console.log(helper.itemsPerPage, 4, 'items per page');
console.log(helper.itemCount(),6, 'total items');
console.log(helper.pageCount(), 2, 'page count');
console.log(helper.pageItemCount(0), 4, 'page 0, #1');
console.log(helper.pageItemCount(1), 2, 'page 1 #2');
console.log(helper.pageItemCount(2), -1, 'page 2 beyond last page, -1');
console.log(helper.pageIndex(4), 0, 'page is 0-based index');
console.log(helper.pageIndex(5), 1, 'page is 0-based index');
console.log(helper.pageIndex(-5), -1, 'beyond count range, -1');
console.log(helper.pageIndex(8), -1, 'beyond count range, -1');

