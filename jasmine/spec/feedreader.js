/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {

  describe('RSS Feeds', function() {
    it('All RSS Feeds are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
  });

  describe('RSS Feeds Properties', function() {

    describe("ensures allFeeds has a URL defined and that URL is not empty", () => {
      allFeeds.forEach(function(feed) {
        let item = feed.url;
        let itemname = feed.name;
        it('' + itemname + ' url has defined and not empty', function() {
          expect(item).toBeDefined();
          expect(item).not.toEqual('');
        });

      });
    });

    describe("ensures allFeeds has a name defined and that name is not empty", () => {
      allFeeds.forEach(function(feed) {
        let itemname = feed.name;
        it('' + itemname + ' name is defined and it is not empty', function() {
          expect(itemname).toBeDefined();
          expect(itemname).not.toEqual('');
        });
      });
    });
  });

  describe('The menu state', function() {

    describe("ensures the menu element is hidden by default", () => {
      var condition = $('body').hasClass('menu-hidden');
      if (condition) {
        it('menue is hidden by default', function() {
          expect(condition).toBe(true);
        });
      } else {
        it('menue is not hidden by default', function() {
          expect(condition).toBe(false);
        });


      }
    });

    describe("ensures the menu changes visibility when the menu icon is clicked", () => {

      it('toggle result on click event of menue button', function() {
        $('.menu-icon-link').trigger('click'); //to click automaticly without user
        expect($('body').hasClass('menu-hidden')).toBe(false); // it should return false when the user click on first time as on to show menue
        $('.menu-icon-link').trigger('click'); //to click automaticly without user
        expect($('body').hasClass('menu-hidden')).toBe(true); // it should return true when the user click on second time on the same button to hide menue
      });
    });

  }); //end of menue test

  describe('Initial Entries', function() {
    var entriesStart;
    var entriesEnd;
    beforeEach(function(done) {
      $('.feed').empty();
      loadFeed(0, function() { //this is as inintial load of the data
        $('.feed').find(allFeeds.url); //list all feeds div with their links
        //console.log(entriesStart);
        done();
      });
    });
    it('define if feed has at least a single entry and initiated', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0); ///to see how many feed entry we have each entry has entrly  10 entries links to be displayed
    });
  });

  describe('New Feed Selection', function() {
    var entriesStart;
    var entriesEnd;
    beforeEach(function(done) {
      loadFeed(1, function() { //this is after load as call the function again after loadFead(0)
        entriesStart = $('.feed').find(allFeeds.url); //list all feeds div after load  with their links
        //console.log(entriesEnd);
        done();
      });
      loadFeed(2, function() { //this is after load as call the function again after loadFead(0)
        entriesEnd = $('.feed').find(allFeeds.url); //list all feeds div after load  with their links
        //console.log(entriesEnd);
        done();
      });
    });
    //here is to compare before load fead 0  and after load feed 1 list is it the same as initial one  or different
    it('new feed is different to old one', function() {
      expect(entriesStart).not.toBe(entriesEnd);
    });
  });

}());
