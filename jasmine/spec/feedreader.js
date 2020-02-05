/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('All RSS Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         describe("ensures allFeeds has a URL defined and that URL is not empty", () => {
                     for (let i = 0; i < allFeeds.length; i++) {
                         let item = allFeeds[i].url;
                         let itemname = allFeeds[i].name;
                         if (item != null && item != 'undefined' && item != '')
                         {
                           it(''+itemname+' url has defined and not empty', function() {
                             expect(item).toBeDefined();
                             expect(item).not.toEqual('');
                           });
                         }else{
                           it(''+itemname+' url has not defined and empty', function() {
                             expect(item).not.toBeUndefined();
                            expect(item).toEqual('');
                           });
                         }
                     }
             });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         describe("ensures allFeeds has a name defined and that name is not empty", () => {
                     for (let i = 0; i < allFeeds.length; i++) {
                         let itemname = allFeeds[i].name;
                         if (itemname != null && itemname != 'undefined' && itemname != '')
                         {
                           it(''+itemname+' name is defined and it is not empty', function() {
                             expect(itemname).toBeDefined();
                             expect(itemname).not.toEqual('');
                           });
                         }else{
                           let row = i + 1;
                           it(''+itemname+' name is undefined at row '+row+' and it is empty', function() {
                             expect(itemname).not.toBeUndefined();
                            expect(itemname).toEqual('');
                           });
                         }
                     }
             });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

             /* This is our first test suite - a test suite just contains
             * a related set of tests. This suite is all about the RSS
             * feeds definitions, the allFeeds variable in our application.
             */
             describe('The menu', function() {

            describe("ensures the menu element is hidden by default", () => {
              var condition = $('body').hasClass('menu-hidden');
         if (condition){
           it('menue is hidden by default', function() {
        expect(condition).toBe(true);
           });
         }else{
           it('menue is not hidden by default', function() {
        expect(condition).toBe(false);
           });


         }
                 });




         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          describe("ensures the menu changes visibility when the menu icon is clicked", () => {

            it('toggle result on click event of menue button', function () {
                $('.menu-icon-link').trigger('click'); //to click automaticly without user
                expect($('body').hasClass('menu-hidden')).toBe(false); // it should return false when the user click on first time as on to show menue
                $('.menu-icon-link').trigger('click');//to click automaticly without user
                expect($('body').hasClass('menu-hidden')).toBe(true); // it should return true when the user click on second time on the same button to hide menue
            });
               });

});//end of menue test
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('Initial Entries', function() {
var entriesStart;
var entriesEnd;
beforeEach(function (done) {
    $('.feed').empty();
    loadFeed(0, function () {    //this is as inintial load of the data
         entriesStart = $('.feed').find(allFeeds.url); //list all feeds div with their links
         //console.log(entriesStart);
        done();
    });
});
it('define if feed has at least a single entry and initiated', function () {
    expect($('.feed .entry').length).toBeGreaterThan(0); ///to see how many feed entry we have each entry has entrly  10 entries links to be displayed
});
});

/* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

describe('New Feed Selection', function() {
  var entriesStart;
  var entriesEnd;
  beforeEach(function(done) {
  loadFeed(1, function () { //this is after load as call the function again after loadFead(0)
       entriesEnd = $('.feed').find(allFeeds.url); //list all feeds div after load  with their links
       //console.log(entriesEnd);
      done();
  });
});
//here is to compare before load fead 0  and after load feed 1 list is it the same as initial one  or different
it('new feed is different to old one', function () {
expect(entriesStart).not.toBe(entriesEnd);
});
});





}());
