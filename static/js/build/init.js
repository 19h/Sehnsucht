(function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @param {Boolean} jumped
   * @api public
   */

  function require(name, jumped){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];

    fn.call(m.exports, function(req){
      var dep = modules[id][1][req];
      return require(dep ? dep : req);
    }, m, m.exports, outer, modules, cache, entries);

    // expose as `name`.
    if (name) cache[name] = cache[id];

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {
var a = document.getElementById("overlay").getContext("2d");
a.save();
a.save();
a.beginPath();
a.moveTo(112.4, 15.6);
a.bezierCurveTo(110, 14.1, 109.5, 10.7, 109.5, 10.7);
a.bezierCurveTo(107.7, 13.5, 108.8, 17.1, 108.8, 17.1);
a.bezierCurveTo(110.8, 17.1, 112.4, 15.6, 112.4, 15.6);
a.closePath();
a.save();
a.moveTo(91.2, 49.5);
a.bezierCurveTo(91.2, 49.5, 103.7, 56.7, 105.8, 68.4);
a.bezierCurveTo(105.8, 68.4, 107.9, 62.8, 105.5, 57.3);
a.bezierCurveTo(105.5, 57.3, 111.8, 61.4, 114.4, 70.3);
a.bezierCurveTo(114.4, 70.3, 117.6, 62.4, 115.3, 57.3);
a.bezierCurveTo(115.3, 57.3, 122.5, 59.5, 124, 65.3);
a.bezierCurveTo(124, 65.3, 126.2, 56.9, 121.1, 52.5);
a.bezierCurveTo(121.1, 52.5, 128.2, 52.3, 131.7, 57.9);
a.bezierCurveTo(131.7, 57.9, 132.2, 51.6, 125, 46.4);
a.bezierCurveTo(117.9, 41.1, 114.5, 31.9, 121, 26.7);
a.bezierCurveTo(127.4, 21.6, 129.4, 24.3, 130.8, 21.1);
a.bezierCurveTo(132.2, 18, 127.3, 14.7, 122.3, 17.3);
a.bezierCurveTo(122.3, 17.3, 121.9, 14.4, 118.7, 14.9);
a.bezierCurveTo(115.5, 15.5, 110.7, 19.3, 107.1, 18.2);
a.bezierCurveTo(107.1, 18.2, 109.9, 21.3, 108.1, 25.5);
a.bezierCurveTo(108.1, 25.5, 108, 21.1, 104.3, 18.3);
a.bezierCurveTo(100.7, 15.6, 99.6, 10, 99.6, 10);
a.bezierCurveTo(99.6, 10, 93.6, 17, 98.9, 26.7);
a.bezierCurveTo(98.9, 26.7, 89.9, 33.7, 91.2, 49.5);
a.closePath();
a.moveTo(119, 19.4);
a.bezierCurveTo(119, 19.4, 117.1, 23.4, 112.9, 22.9);
a.bezierCurveTo(112.9, 22.9, 111.7, 20.3, 119, 19.4);
a.closePath();
a.restore();
a.moveTo(85.4, 194.4);
a.bezierCurveTo(89.7, 199.6, 88, 205.4, 88, 205.4);
a.bezierCurveTo(91.6, 202.7, 92.1, 196.5, 92.1, 194.7);
a.bezierCurveTo(89.4, 195.1, 87.1, 194.8, 85.4, 194.4);
a.closePath();
a.moveTo(118.6, 33.3);
a.bezierCurveTo(118.7, 37, 121, 39, 127.1, 38.7);
a.bezierCurveTo(133.2, 38.5, 135.1, 35.2, 135.1, 35.2);
a.bezierCurveTo(135.1, 35.2, 132.6, 36.7, 127.8, 35.9);
a.bezierCurveTo(123.1, 35, 125.2, 30.9, 131.5, 28.1);
a.bezierCurveTo(137.8, 25.3, 143.5, 27.5, 143.5, 27.5);
a.bezierCurveTo(139.3, 20.7, 132.6, 20.6, 132.6, 20.6);
a.bezierCurveTo(131.6, 24.6, 131.1, 22.9, 124.7, 25.7);
a.bezierCurveTo(118.4, 28.4, 118.6, 33.3, 118.6, 33.3);
a.closePath();
a.moveTo(178.3, 54.8);
a.bezierCurveTo(177.7, 58, 175.6, 58.7, 175.6, 58.7);
a.bezierCurveTo(180.1, 58.3, 181.2, 61.8, 181.2, 61.8);
a.bezierCurveTo(181.9, 58.1, 178.3, 54.8, 178.3, 54.8);
a.closePath();
a.moveTo(95.5, 193.9);
a.bezierCurveTo(101.7, 196.6, 102.8, 202.5, 102.8, 202.5);
a.bezierCurveTo(104.9, 198.2, 102, 192, 101.4, 190.8);
a.bezierCurveTo(99.4, 192.3, 97.4, 193.3, 95.5, 193.9);
a.closePath();
a.moveTo(146.6, 84.5);
a.bezierCurveTo(148, 83.3, 149.5, 81.7, 151, 79.8);
a.bezierCurveTo(159.2, 69.3, 162.6, 72.8, 162.6, 72.8);
a.bezierCurveTo(162.6, 72.8, 162.7, 69.6, 159.5, 70.2);
a.bezierCurveTo(159.5, 70.2, 163.9, 65.5, 168.1, 66.7);
a.bezierCurveTo(168.1, 66.7, 167.6, 63, 164.3, 63.5);
a.bezierCurveTo(164.3, 63.5, 166.2, 59.7, 171.4, 59.9);
a.bezierCurveTo(171.4, 59.9, 170.3, 57.5, 167.3, 57.9);
a.bezierCurveTo(168.1, 57.3, 168.8, 56.7, 169.2, 56);
a.bezierCurveTo(169.2, 56, 169.2, 56, 169.2, 56);
a.bezierCurveTo(169.8, 57.1, 170.8, 58, 172, 58.3);
a.bezierCurveTo(174.5, 59, 176.9, 57.6, 177.6, 55.2);
a.bezierCurveTo(177.9, 54.1, 177.8, 53, 177.3, 52.1);
a.bezierCurveTo(177.3, 52, 177.2, 51.9, 177.2, 51.8);
a.bezierCurveTo(177.2, 51.7, 177.2, 51.7, 177.1, 51.7);
a.bezierCurveTo(176.5, 50.7, 175.6, 49.8, 174.3, 49.4);
a.bezierCurveTo(171.4, 48.5, 168.1, 49.8, 167.2, 50.2);
a.bezierCurveTo(167.2, 50.2, 167.2, 50.2, 167.2, 50.2);
a.bezierCurveTo(167.5, 49.4, 167.8, 48.8, 168.2, 48.3);
a.bezierCurveTo(169.5, 48.7, 171, 48.5, 172.2, 47.7);
a.bezierCurveTo(174.7, 46.3, 175.4, 43.1, 173.9, 40.7);
a.bezierCurveTo(173.3, 39.7, 172.3, 39, 171.2, 38.6);
a.bezierCurveTo(171, 38.5, 170.9, 38.5, 170.8, 38.5);
a.bezierCurveTo(170.7, 38.5, 170.7, 38.4, 170.6, 38.4);
a.bezierCurveTo(169.3, 38.1, 167.9, 38.3, 166.6, 39.1);
a.bezierCurveTo(164.9, 40, 163.7, 41.5, 163, 43);
a.bezierCurveTo(162.8, 42.6, 162.8, 42.2, 162.7, 41.8);
a.bezierCurveTo(162.7, 41.3, 162.8, 40.7, 162.9, 40.2);
a.bezierCurveTo(164.3, 40.1, 165.6, 39.4, 166.5, 38.2);
a.bezierCurveTo(168.2, 36, 167.7, 32.8, 165.4, 31.1);
a.bezierCurveTo(164.4, 30.3, 163.3, 30, 162.1, 30.1);
a.bezierCurveTo(162, 30.1, 161.8, 30.1, 161.7, 30.1);
a.bezierCurveTo(161.6, 30.1, 161.6, 30.1, 161.6, 30.1);
a.bezierCurveTo(160.3, 30.3, 159, 31, 158, 32.2);
a.bezierCurveTo(155.9, 34.8, 155.9, 38.7, 156, 39.9);
a.bezierCurveTo(154.8, 39, 153.5, 38.5, 153.5, 38.5);
a.bezierCurveTo(157.2, 43.9, 155.8, 50.7, 154.8, 54);
a.bezierCurveTo(153.5, 57.1, 151.2, 60.1, 147.8, 63.5);
a.bezierCurveTo(148, 62, 147.7, 61.1, 147.7, 61.1);
a.bezierCurveTo(146.5, 63, 145.3, 64.6, 144.2, 66);
a.bezierCurveTo(145.4, 68.7, 148.1, 75.7, 146.6, 84.5);
a.closePath();
a.moveTo(175.3, 45.1);
a.bezierCurveTo(178.4, 41, 182.2, 42.8, 182.2, 42.8);
a.bezierCurveTo(179.6, 39.4, 174.1, 39.8, 174.1, 39.8);
a.bezierCurveTo(176.4, 42.8, 175.3, 45.1, 175.3, 45.1);
a.closePath();
a.moveTo(168.3, 34.6);
a.bezierCurveTo(169.7, 29.7, 173.9, 30, 173.9, 30);
a.bezierCurveTo(170.3, 27.7, 165.3, 30.2, 165.3, 30.2);
a.bezierCurveTo(168.5, 32.1, 168.3, 34.6, 168.3, 34.6);
a.closePath();
a.moveTo(166.2, 160.3);
a.bezierCurveTo(166.2, 162.8, 165.8, 165, 165.2, 166.9);
a.bezierCurveTo(171, 163.4, 176.4, 166, 176.4, 166);
a.bezierCurveTo(174.2, 161.8, 167.5, 160.5, 166.2, 160.3);
a.closePath();
a.moveTo(176.3, 97.7);
a.bezierCurveTo(176.7, 99, 177.8, 100.1, 179.2, 100.7);
a.bezierCurveTo(181.8, 101.7, 184.7, 100.4, 185.8, 97.8);
a.bezierCurveTo(186.2, 96.7, 186.2, 95.4, 185.9, 94.4);
a.bezierCurveTo(185.8, 94.2, 185.8, 94.1, 185.7, 94);
a.bezierCurveTo(185.7, 93.9, 185.7, 93.9, 185.7, 93.8);
a.bezierCurveTo(185.1, 92.6, 184.2, 91.6, 182.7, 90.9);
a.bezierCurveTo(181, 90.1, 179.1, 90.1, 177.5, 90.4);
a.bezierCurveTo(177.7, 90.1, 177.9, 89.8, 178.2, 89.5);
a.bezierCurveTo(178.7, 89.1, 179.1, 88.9, 179.6, 88.7);
a.bezierCurveTo(180.5, 89.7, 181.9, 90.4, 183.4, 90.4);
a.bezierCurveTo(186.2, 90.4, 188.5, 88.1, 188.5, 85.3);
a.bezierCurveTo(188.5, 84, 188, 82.9, 187.3, 82);
a.bezierCurveTo(187.2, 81.9, 187.1, 81.8, 187, 81.7);
a.bezierCurveTo(187, 81.7, 186.9, 81.6, 186.9, 81.6);
a.bezierCurveTo(186, 80.7, 184.7, 80.1, 183.1, 80);
a.bezierCurveTo(179.8, 79.8, 176.7, 82.2, 175.7, 83);
a.bezierCurveTo(175.8, 81.4, 175.4, 80.1, 175.4, 80.1);
a.bezierCurveTo(173.3, 86.3, 166.9, 89.2, 163.7, 90.3);
a.bezierCurveTo(160.4, 91.2, 156.7, 91.2, 151.9, 90.5);
a.bezierCurveTo(153.2, 89.7, 153.8, 88.9, 153.8, 88.9);
a.bezierCurveTo(139.9, 90, 133.6, 85, 130.9, 81.4);
a.bezierCurveTo(129.8, 79.7, 129.6, 78.4, 129.6, 78.4);
a.bezierCurveTo(135.4, 85.7, 144, 86.5, 144, 86.5);
a.bezierCurveTo(148.8, 69.5, 133.1, 53.7, 133.1, 53.7);
a.bezierCurveTo(134.4, 58.6, 132.7, 63.5, 132.7, 63.5);
a.bezierCurveTo(130.7, 57.1, 125.8, 55.6, 125.8, 55.6);
a.bezierCurveTo(128.6, 64.1, 124.1, 70.7, 124.1, 70.7);
a.bezierCurveTo(123.5, 64, 118.1, 61.4, 118.1, 61.4);
a.bezierCurveTo(118.7, 69, 114, 75, 114, 75);
a.bezierCurveTo(113.6, 69.2, 108.5, 63.4, 108.5, 63.4);
a.bezierCurveTo(109.2, 68.5, 105.8, 71.8, 104.8, 72.7);
a.bezierCurveTo(104.7, 72.7, 104.7, 72.6, 104.6, 72.6);
a.bezierCurveTo(104.2, 68.8, 101.7, 58.5, 89.1, 51.5);
a.bezierCurveTo(73.2, 42.7, 21.7, 33.3, 1.9, 0);
a.bezierCurveTo(1.9, 0, 5.2, 27.3, 50.7, 45.9);
a.bezierCurveTo(68.1, 53.1, 79.4, 57.5, 87, 60.7);
a.bezierCurveTo(86.2, 62.9, 86.2, 67, 95.3, 70.8);
a.bezierCurveTo(95.3, 70.8, 90.4, 74.9, 100.9, 79.2);
a.bezierCurveTo(100.9, 79.2, 97.7, 83.1, 107.3, 86.7);
a.bezierCurveTo(107.3, 86.7, 112.7, 94.5, 107.8, 100.3);
a.bezierCurveTo(107.8, 100.3, 112.5, 99.6, 113.3, 96.6);
a.bezierCurveTo(113.3, 96.6, 116.8, 102, 112.9, 105.4);
a.bezierCurveTo(112.9, 105.4, 121.8, 106.4, 123.8, 97.2);
a.bezierCurveTo(125.9, 99.1, 131, 102.5, 140.7, 102.7);
a.bezierCurveTo(154, 103, 153.3, 107.9, 153.3, 107.9);
a.bezierCurveTo(153.3, 107.9, 156, 106, 153.5, 103.8);
a.bezierCurveTo(153.5, 103.8, 159.9, 104.5, 161.4, 108.6);
a.bezierCurveTo(161.4, 108.6, 164.1, 106, 161.7, 103.7);
a.bezierCurveTo(161.7, 103.7, 165.9, 102.9, 168.8, 107.2);
a.bezierCurveTo(168.8, 107.2, 170.2, 105, 168.1, 102.8);
a.bezierCurveTo(169, 103.1, 169.9, 103.2, 170.7, 103.2);
a.bezierCurveTo(170.7, 103.2, 170.7, 103.2, 170.7, 103.2);
a.bezierCurveTo(170.1, 104.3, 170, 105.6, 170.5, 106.8);
a.bezierCurveTo(171.4, 109.2, 174.1, 110.3, 176.4, 109.4);
a.bezierCurveTo(177.4, 109, 178.2, 108.3, 178.7, 107.4);
a.bezierCurveTo(178.8, 107.3, 178.8, 107.1, 178.9, 107);
a.bezierCurveTo(178.9, 107, 178.9, 107, 178.9, 106.9);
a.bezierCurveTo(179.4, 105.9, 179.5, 104.6, 179, 103.3);
a.bezierCurveTo(178.1, 100.5, 175.1, 98.6, 174.2, 98.1);
a.bezierCurveTo(174.2, 98.1, 174.2, 98.1, 174.2, 98.1);
a.bezierCurveTo(174.9, 97.8, 175.6, 97.7, 176.3, 97.7);
a.closePath();
a.moveTo(172.4, 109.9);
a.bezierCurveTo(175.4, 113.3, 173.2, 116.3, 173.2, 116.3);
a.bezierCurveTo(176.6, 114.6, 177.1, 109.8, 177.1, 109.8);
a.bezierCurveTo(174.1, 111.2, 172.4, 109.9, 172.4, 109.9);
a.closePath();
a.moveTo(189.1, 84.7);
a.bezierCurveTo(189.5, 88.4, 187.4, 89.7, 187.4, 89.7);
a.bezierCurveTo(192.1, 87.9, 194.4, 91.4, 194.4, 91.4);
a.bezierCurveTo(194.1, 87.2, 189.1, 84.7, 189.1, 84.7);
a.closePath();
a.moveTo(183.1, 101.5);
a.bezierCurveTo(188.2, 101.6, 189, 105.7, 189, 105.7);
a.bezierCurveTo(190.3, 101.6, 186.6, 97.5, 186.6, 97.5);
a.bezierCurveTo(185.6, 101.1, 183.1, 101.5, 183.1, 101.5);
a.closePath();
a.moveTo(163.9, 170.1);
a.bezierCurveTo(162.6, 172.6, 161, 174.3, 159.7, 175.4);
a.bezierCurveTo(166.5, 174.9, 170.2, 179.8, 170.2, 179.8);
a.bezierCurveTo(170.1, 175.2, 165.3, 171.2, 163.9, 170.1);
a.closePath();
a.moveTo(111.1, 119.7);
a.bezierCurveTo(111.1, 119.7, 118.5, 122.6, 120.5, 129.2);
a.bezierCurveTo(120.5, 129.2, 121.1, 120.3, 127.7, 114.4);
a.bezierCurveTo(134.3, 108.4, 136.7, 104.5, 136.7, 104.5);
a.bezierCurveTo(136.7, 104.5, 129.8, 104.9, 125.2, 101.8);
a.bezierCurveTo(125.2, 101.8, 120.5, 110.7, 107.1, 107.8);
a.bezierCurveTo(107.1, 107.8, 112.4, 105.3, 112.8, 100.7);
a.bezierCurveTo(112.8, 100.7, 107.6, 104.7, 103.1, 102);
a.bezierCurveTo(103.1, 102, 111, 96.6, 106, 88.8);
a.bezierCurveTo(106, 88.8, 103.1, 88.3, 102.8, 87.2);
a.bezierCurveTo(102.8, 87.2, 102.9, 113.2, 86.7, 121.3);
a.bezierCurveTo(70.4, 129.3, 69.4, 109.9, 69.4, 109.9);
a.bezierCurveTo(69.4, 109.9, 66.8, 113.7, 67.5, 118.3);
a.bezierCurveTo(63.8, 116, 58.1, 111.2, 52, 101.9);
a.bezierCurveTo(46, 92.7, 37.5, 88, 30.1, 88);
a.bezierCurveTo(26.5, 88, 23.1, 89.1, 20.6, 91.5);
a.bezierCurveTo(18, 94, 16.6, 97.6, 16.6, 101.7);
a.bezierCurveTo(16.6, 101.8, 16.6, 101.9, 16.6, 102);
a.bezierCurveTo(16.7, 106.6, 18.9, 110.5, 21.8, 113.6);
a.bezierCurveTo(26.2, 118.4, 32.4, 122.4, 37.9, 127.5);
a.bezierCurveTo(43.4, 132.6, 48.3, 138.6, 50.6, 147.2);
a.bezierCurveTo(51.3, 149.4, 51.5, 151.4, 51.5, 153.2);
a.bezierCurveTo(51.5, 157.2, 50.2, 159.8, 48.3, 161.7);
a.bezierCurveTo(46.6, 163.3, 44.3, 164.3, 41.6, 164.5);
a.bezierCurveTo(36.4, 164.1, 27.4, 161.9, 27.3, 150.9);
a.bezierCurveTo(27, 135.5, 20.4, 126.4, 20.4, 126.4);
a.bezierCurveTo(20.4, 126.4, 22.8, 133.9, 20, 140);
a.bezierCurveTo(20, 140, 15.9, 118.5, 0, 109.5);
a.bezierCurveTo(0, 109.5, 9.7, 125.1, 8.6, 138.9);
a.bezierCurveTo(8.6, 138.9, 5.4, 137.8, 5.4, 132.5);
a.bezierCurveTo(5.4, 132.5, -0.2, 144.7, 11.8, 155.4);
a.bezierCurveTo(11.8, 155.4, 7.3, 155.8, 4.1, 151.8);
a.bezierCurveTo(4.1, 151.8, 7.7, 167.2, 28.8, 171.1);
a.bezierCurveTo(41.9, 173.5, 50, 170.1, 53.9, 164);
a.bezierCurveTo(56.1, 161.2, 57.3, 157.5, 57.3, 153.2);
a.bezierCurveTo(57.3, 150.8, 57, 148.3, 56.3, 145.6);
a.bezierCurveTo(52.7, 132.3, 43.6, 124.4, 35.9, 118.2);
a.bezierCurveTo(32, 115.1, 28.5, 112.4, 26.1, 109.7);
a.bezierCurveTo(23.7, 107.1, 22.5, 104.7, 22.4, 101.9);
a.bezierCurveTo(22.4, 101.8, 22.4, 101.8, 22.4, 101.7);
a.bezierCurveTo(22.4, 98.8, 23.3, 96.9, 24.6, 95.7);
a.bezierCurveTo(25.8, 94.5, 27.7, 93.8, 30.1, 93.8);
a.bezierCurveTo(35, 93.7, 42, 97.2, 47.2, 105.1);
a.bezierCurveTo(52.6, 113.4, 57.9, 118.5, 62, 121.6);
a.bezierCurveTo(59.6, 122.2, 57, 123.8, 54.5, 127.3);
a.bezierCurveTo(54.5, 127.3, 59.3, 123.6, 70.9, 128.7);
a.bezierCurveTo(69.1, 129, 66.8, 129.7, 65.1, 131.4);
a.bezierCurveTo(65.1, 131.4, 78, 129, 88.3, 137.4);
a.bezierCurveTo(97.7, 145, 94.4, 152.9, 90, 153.3);
a.bezierCurveTo(89.5, 152.3, 87.8, 150, 83.6, 152.3);
a.bezierCurveTo(78.5, 155.3, 73.8, 163.8, 75.1, 178.1);
a.bezierCurveTo(75.1, 178.1, 76.2, 175.2, 77.6, 172.5);
a.bezierCurveTo(77.6, 172.6, 77.6, 172.8, 77.7, 173);
a.bezierCurveTo(79.3, 184.3, 80.2, 191.9, 87.3, 192.8);
a.bezierCurveTo(92.2, 193.8, 98, 191.3, 100, 189.9);
a.bezierCurveTo(104.1, 187, 106.5, 181.7, 100.8, 179.9);
a.bezierCurveTo(95.2, 178.1, 93.4, 181.5, 91.5, 181.5);
a.bezierCurveTo(91.2, 181.5, 91, 181.4, 90.8, 181.2);
a.bezierCurveTo(90.6, 180.6, 90.5, 179.9, 90.5, 179.1);
a.bezierCurveTo(90.7, 173.3, 88.9, 161.4, 100.2, 162);
a.bezierCurveTo(111.5, 162.7, 124.8, 151.1, 121, 138.4);
a.bezierCurveTo(117.1, 125.6, 111.1, 119.7, 111.1, 119.7);
a.closePath();
a.moveTo(106.7, 183.6);
a.bezierCurveTo(106.2, 185.6, 105.2, 187.5, 103.5, 189.1);
a.bezierCurveTo(103.2, 189.5, 103, 189.7, 103, 189.7);
a.bezierCurveTo(109.9, 187.6, 114.6, 191.8, 114.6, 191.8);
a.bezierCurveTo(113.7, 187.4, 108.3, 184.4, 106.7, 183.6);
a.closePath();
a.moveTo(166.2, 158.3);
a.bezierCurveTo(168.5, 151.6, 174.7, 150.2, 174.7, 150.2);
a.bezierCurveTo(170.6, 148.4, 165, 150.9, 163.3, 151.8);
a.bezierCurveTo(164.7, 153.4, 165.7, 155.3, 166, 157.6);
a.bezierCurveTo(166.1, 158, 166.2, 158.3, 166.2, 158.3);
a.closePath();
a.moveTo(156.9, 154.4);
a.bezierCurveTo(152.2, 157.9, 153.9, 161.4, 152.8, 162.9);
a.bezierCurveTo(152.7, 163.1, 152.4, 163.2, 152.1, 163.3);
a.bezierCurveTo(151.6, 163.1, 151, 162.8, 150.3, 162.3);
a.bezierCurveTo(145.7, 158.8, 135, 153.3, 142.1, 144.5);
a.bezierCurveTo(148.1, 137, 147.9, 123.2, 139.9, 116.6);
a.bezierCurveTo(138.5, 115.4, 136.9, 114.5, 135, 113.8);
a.bezierCurveTo(134.1, 113.5, 133.2, 113.2, 132.3, 113);
a.bezierCurveTo(130.2, 114.6, 122.3, 121.6, 122.3, 132.6);
a.bezierCurveTo(122.3, 135.6, 122.5, 137.7, 122.8, 139.2);
a.bezierCurveTo(128.7, 140.2, 130.7, 144.9, 129, 147.6);
a.bezierCurveTo(128, 147.5, 125.1, 147.6, 124.5, 152.3);
a.bezierCurveTo(123.9, 158.2, 128.1, 167, 140.5, 174.3);
a.bezierCurveTo(140.5, 174.3, 138.8, 171.6, 137.4, 169);
a.bezierCurveTo(137.5, 169, 137.6, 169.1, 137.8, 169.2);
a.bezierCurveTo(147.9, 174.4, 154.6, 178.2, 159.6, 173);
a.bezierCurveTo(163.2, 169.5, 164.6, 163.4, 164.6, 160.9);
a.bezierCurveTo(164.6, 155.9, 161.7, 150.9, 156.9, 154.4);
a.closePath();
a.moveTo(71.5, 56.5);
a.bezierCurveTo(67.1, 54.7, 61.9, 52.6, 55.9, 50.1);
a.bezierCurveTo(44.2, 46.1, 31.7, 41, 23.6, 35.6);
a.bezierCurveTo(23.6, 35.6, 29.8, 52.6, 62.3, 61.6);
a.bezierCurveTo(62.3, 61.6, 37.6, 57.5, 29.4, 50.9);
a.bezierCurveTo(29.4, 50.9, 38.2, 67.6, 64.6, 71.9);
a.bezierCurveTo(64.6, 71.9, 55.2, 73, 45.1, 68.7);
a.bezierCurveTo(45.1, 68.7, 47.4, 77.9, 63.8, 80.7);
a.bezierCurveTo(77.7, 83.1, 95.2, 90.7, 98.4, 102.6);
a.bezierCurveTo(100.8, 94.7, 100.8, 87.3, 100.8, 87.2);
a.lineTo(100.8, 85.3);
a.bezierCurveTo(99.6, 84.3, 98.9, 83.2, 98.6, 82);
a.bezierCurveTo(98.4, 81.4, 98.4, 80.8, 98.5, 80.3);
a.bezierCurveTo(94.7, 78.4, 92.6, 76.4, 92.3, 74);
a.bezierCurveTo(92.1, 73.1, 92.3, 72.3, 92.5, 71.7);
a.bezierCurveTo(85.7, 68.3, 84.5, 64.5, 84.8, 61.8);
a.bezierCurveTo(81.2, 60.3, 76.8, 58.6, 71.5, 56.5);
a.closePath();
a.fillStyle = "rgb(255, 255, 255)";
a.fill();
a.restore();

var ltx = document.getElementById("linkedin").getContext("2d");

ltx.save();
ltx.save();
ltx.beginPath();
ltx.moveTo(0.0, 33.3);
ltx.bezierCurveTo(0.0, 22.9, 0.0, 12.6, 0.0, 2.3);
ltx.bezierCurveTo(0.0, 2.2, 0.0, 2.2, 0.0, 2.1);
ltx.bezierCurveTo(0.2, 1.1, 0.9, 0.4, 1.8, 0.1);
ltx.bezierCurveTo(2.0, 0.1, 2.1, 0.1, 2.2, 0.0);
ltx.bezierCurveTo(12.6, 0.0, 22.9, 0.0, 33.3, 0.0);
ltx.bezierCurveTo(33.3, 0.1, 33.4, 0.1, 33.4, 0.1);
ltx.bezierCurveTo(34.2, 0.3, 34.8, 0.7, 35.2, 1.5);
ltx.bezierCurveTo(35.3, 1.7, 35.4, 2.0, 35.4, 2.3);
ltx.bezierCurveTo(35.4, 12.6, 35.4, 22.9, 35.4, 33.1);
ltx.bezierCurveTo(35.4, 33.2, 35.4, 33.2, 35.4, 33.2);
ltx.bezierCurveTo(35.3, 34.1, 34.8, 34.7, 34.1, 35.1);
ltx.bezierCurveTo(33.8, 35.3, 33.4, 35.4, 33.1, 35.4);
ltx.bezierCurveTo(22.8, 35.4, 12.5, 35.4, 2.3, 35.4);
ltx.bezierCurveTo(2.2, 35.4, 2.2, 35.4, 2.2, 35.4);
ltx.bezierCurveTo(1.1, 35.2, 0.4, 34.6, 0.1, 33.6);
ltx.bezierCurveTo(0.1, 33.5, 0.1, 33.4, 0.0, 33.3);
ltx.closePath();
ltx.moveTo(13.8, 21.7);
ltx.bezierCurveTo(13.8, 21.7, 13.8, 21.7, 13.8, 21.7);
ltx.bezierCurveTo(13.8, 24.5, 13.8, 27.2, 13.8, 29.9);
ltx.bezierCurveTo(13.8, 30.2, 13.8, 30.2, 14.1, 30.2);
ltx.bezierCurveTo(15.7, 30.2, 17.3, 30.2, 18.9, 30.2);
ltx.bezierCurveTo(19.0, 30.2, 19.0, 30.1, 19.0, 30.0);
ltx.bezierCurveTo(19.0, 27.2, 19.0, 24.4, 19.0, 21.5);
ltx.bezierCurveTo(19.0, 20.8, 19.1, 20.2, 19.3, 19.5);
ltx.bezierCurveTo(19.5, 18.7, 20.0, 18.1, 20.7, 17.8);
ltx.bezierCurveTo(21.4, 17.5, 22.1, 17.4, 22.8, 17.6);
ltx.bezierCurveTo(23.8, 17.7, 24.3, 18.3, 24.6, 19.2);
ltx.bezierCurveTo(24.9, 19.9, 24.9, 20.7, 24.9, 21.5);
ltx.bezierCurveTo(24.9, 24.3, 24.9, 27.2, 24.9, 30.0);
ltx.bezierCurveTo(24.9, 30.2, 25.0, 30.2, 25.1, 30.2);
ltx.bezierCurveTo(26.7, 30.2, 28.4, 30.2, 30.0, 30.2);
ltx.bezierCurveTo(30.2, 30.2, 30.2, 30.1, 30.2, 30.0);
ltx.bezierCurveTo(30.2, 27.1, 30.2, 24.2, 30.2, 21.3);
ltx.bezierCurveTo(30.2, 20.3, 30.2, 19.3, 30.0, 18.3);
ltx.bezierCurveTo(29.9, 17.5, 29.7, 16.6, 29.4, 15.8);
ltx.bezierCurveTo(28.8, 14.7, 28.0, 13.8, 26.8, 13.4);
ltx.bezierCurveTo(26.1, 13.1, 25.4, 13.0, 24.7, 12.9);
ltx.bezierCurveTo(23.8, 12.8, 22.9, 12.9, 22.0, 13.1);
ltx.bezierCurveTo(20.7, 13.6, 19.7, 14.3, 19.0, 15.5);
ltx.bezierCurveTo(18.9, 15.5, 18.9, 15.6, 18.9, 15.6);
ltx.bezierCurveTo(18.8, 15.6, 18.8, 15.5, 18.8, 15.5);
ltx.bezierCurveTo(18.8, 14.8, 18.8, 14.1, 18.8, 13.4);
ltx.bezierCurveTo(18.8, 13.3, 18.8, 13.3, 18.7, 13.3);
ltx.bezierCurveTo(17.1, 13.3, 15.5, 13.3, 13.9, 13.3);
ltx.bezierCurveTo(13.8, 13.3, 13.8, 13.3, 13.8, 13.4);
ltx.bezierCurveTo(13.8, 16.2, 13.8, 19.0, 13.8, 21.7);
ltx.closePath();
ltx.moveTo(10.5, 21.8);
ltx.bezierCurveTo(10.5, 19.0, 10.5, 16.2, 10.5, 13.5);
ltx.bezierCurveTo(10.5, 13.3, 10.5, 13.3, 10.3, 13.3);
ltx.bezierCurveTo(8.7, 13.3, 7.0, 13.3, 5.4, 13.3);
ltx.bezierCurveTo(5.3, 13.3, 5.2, 13.3, 5.2, 13.4);
ltx.bezierCurveTo(5.3, 19.0, 5.3, 24.5, 5.2, 30.0);
ltx.bezierCurveTo(5.2, 30.2, 5.3, 30.2, 5.4, 30.2);
ltx.bezierCurveTo(7.0, 30.2, 8.7, 30.2, 10.3, 30.2);
ltx.bezierCurveTo(10.5, 30.2, 10.5, 30.2, 10.5, 30.0);
ltx.bezierCurveTo(10.5, 27.2, 10.5, 24.5, 10.5, 21.8);
ltx.closePath();
ltx.moveTo(7.9, 4.9);
ltx.bezierCurveTo(6.2, 4.9, 4.8, 6.3, 4.8, 7.9);
ltx.bezierCurveTo(4.8, 9.6, 6.2, 11.0, 7.8, 11.0);
ltx.bezierCurveTo(9.5, 11.0, 10.9, 9.7, 10.9, 7.9);
ltx.bezierCurveTo(10.9, 6.3, 9.6, 4.9, 7.9, 4.9);
ltx.closePath();
ltx.fillStyle = "rgb(255, 255, 255)";
ltx.fill();
ltx.restore();
ltx.restore();

var gtx = document.getElementById("github").getContext("2d");

gtx.save();
gtx.beginPath();
gtx.moveTo(18.2, 0.0);
gtx.bezierCurveTo(8.1, 0.0, 0.0, 8.1, 0.0, 18.2);
gtx.bezierCurveTo(0.0, 26.2, 5.2, 33.1, 12.4, 35.5);
gtx.bezierCurveTo(13.4, 35.6, 13.7, 35.1, 13.7, 34.6);
gtx.bezierCurveTo(13.7, 34.2, 13.7, 33.0, 13.7, 31.5);
gtx.bezierCurveTo(8.6, 32.6, 7.5, 29.1, 7.5, 29.1);
gtx.bezierCurveTo(6.7, 27.0, 5.5, 26.4, 5.5, 26.4);
gtx.bezierCurveTo(3.9, 25.3, 5.6, 25.3, 5.6, 25.3);
gtx.bezierCurveTo(7.5, 25.4, 8.4, 27.2, 8.4, 27.2);
gtx.bezierCurveTo(10.0, 29.9, 12.7, 29.1, 13.7, 28.7);
gtx.bezierCurveTo(13.9, 27.5, 14.4, 26.7, 14.9, 26.2);
gtx.bezierCurveTo(10.8, 25.8, 6.6, 24.2, 6.6, 17.2);
gtx.bezierCurveTo(6.6, 15.3, 7.3, 13.6, 8.5, 12.4);
gtx.bezierCurveTo(8.3, 11.9, 7.6, 10.1, 8.6, 7.5);
gtx.bezierCurveTo(8.6, 7.5, 10.2, 7.1, 13.6, 9.4);
gtx.bezierCurveTo(15.1, 9.0, 16.7, 8.8, 18.2, 8.8);
gtx.bezierCurveTo(19.7, 8.8, 21.3, 9.0, 22.8, 9.4);
gtx.bezierCurveTo(26.2, 7.1, 27.8, 7.5, 27.8, 7.5);
gtx.bezierCurveTo(28.7, 10.1, 28.1, 11.9, 27.9, 12.4);
gtx.bezierCurveTo(29.1, 13.6, 29.8, 15.3, 29.8, 17.2);
gtx.bezierCurveTo(29.8, 24.2, 25.6, 25.8, 21.5, 26.2);
gtx.bezierCurveTo(22.2, 26.8, 22.7, 27.9, 22.7, 29.6);
gtx.bezierCurveTo(22.7, 32.0, 22.7, 34.0, 22.7, 34.6);
gtx.bezierCurveTo(22.7, 35.1, 23.0, 35.6, 24.0, 35.5);
gtx.bezierCurveTo(31.2, 33.1, 36.4, 26.2, 36.4, 18.2);
gtx.bezierCurveTo(36.4, 8.1, 28.3, 0.0, 18.2, 0.0);
gtx.closePath();
gtx.fillStyle = "rgb(255, 255, 255)";
gtx.fill("evenodd");
gtx.restore();

var ftx = document.getElementById("facebook").getContext("2d");

ftx.save();
ftx.beginPath();
ftx.moveTo(30.4, 0.0);
ftx.lineTo(6.0, 0.0);
ftx.bezierCurveTo(2.8, 0.0, 0.0, 2.3, 0.0, 5.5);
ftx.lineTo(0.0, 29.9);
ftx.bezierCurveTo(0.0, 33.1, 2.8, 35.9, 6.0, 35.9);
ftx.lineTo(21.1, 35.9);
ftx.bezierCurveTo(21.1, 31.2, 21.1, 26.0, 21.1, 21.4);
ftx.bezierCurveTo(20.1, 21.4, 19.2, 21.4, 18.2, 21.3);
ftx.bezierCurveTo(18.2, 19.7, 18.2, 18.1, 18.2, 16.5);
ftx.bezierCurveTo(19.2, 16.5, 20.1, 16.5, 21.1, 16.5);
ftx.bezierCurveTo(21.1, 14.9, 21.1, 13.3, 21.1, 11.8);
ftx.bezierCurveTo(21.2, 10.5, 21.7, 9.3, 22.6, 8.4);
ftx.bezierCurveTo(23.7, 7.3, 25.3, 7.0, 26.8, 6.9);
ftx.bezierCurveTo(28.4, 6.9, 30.0, 6.9, 31.6, 6.9);
ftx.bezierCurveTo(31.6, 8.6, 31.6, 10.3, 31.6, 12.0);
ftx.bezierCurveTo(30.6, 12.0, 29.5, 12.0, 28.5, 12.0);
ftx.bezierCurveTo(27.9, 11.9, 27.2, 12.4, 27.1, 13.1);
ftx.bezierCurveTo(27.1, 14.2, 27.1, 15.3, 27.1, 16.4);
ftx.bezierCurveTo(28.6, 16.4, 30.1, 16.4, 31.6, 16.4);
ftx.bezierCurveTo(31.5, 18.1, 31.3, 19.7, 31.0, 21.3);
ftx.bezierCurveTo(29.7, 21.3, 28.4, 21.4, 27.1, 21.4);
ftx.bezierCurveTo(27.0, 26.0, 27.1, 31.2, 27.0, 35.9);
ftx.lineTo(30.4, 35.9);
ftx.bezierCurveTo(33.6, 35.9, 35.9, 33.1, 35.9, 29.9);
ftx.lineTo(35.9, 5.5);
ftx.bezierCurveTo(35.9, 2.3, 33.6, 0.0, 30.4, 0.0);
ftx.closePath();
ftx.fillStyle = "rgb(255, 255, 255)";
ftx.fill();
ftx.restore();

var xtx = document.getElementById("xing").getContext("2d");

xtx.save();
xtx.beginPath();

xtx.moveTo(2.8, 7.1);
xtx.bezierCurveTo(2.5, 7.1, 2.2, 7.2, 2.1, 7.4);
xtx.bezierCurveTo(1.9, 7.7, 2.0, 7.9, 2.1, 8.2);
xtx.lineTo(5.6, 14.3);
xtx.bezierCurveTo(5.6, 14.3, 5.6, 14.3, 5.6, 14.3);
xtx.lineTo(0.1, 24.1);
xtx.bezierCurveTo(-0.0, 24.3, -0.0, 24.6, 0.1, 24.9);
xtx.bezierCurveTo(0.2, 25.1, 0.5, 25.2, 0.8, 25.2);
xtx.lineTo(6.0, 25.2);
xtx.bezierCurveTo(6.7, 25.2, 7.1, 24.7, 7.4, 24.2);
xtx.bezierCurveTo(7.4, 24.2, 12.8, 14.7, 13.0, 14.3);
xtx.bezierCurveTo(13.0, 14.3, 9.4, 8.1, 9.4, 8.1);
xtx.bezierCurveTo(9.2, 7.6, 8.8, 7.1, 8.0, 7.1);
xtx.lineTo(2.8, 7.1);
xtx.closePath();
xtx.fillStyle = "rgb(255, 255, 255)";
xtx.fill();

xtx.beginPath();
xtx.moveTo(24.6, 0.0);
xtx.bezierCurveTo(23.8, 0.0, 23.5, 0.5, 23.2, 1.0);
xtx.bezierCurveTo(23.2, 1.0, 12.0, 20.8, 11.7, 21.5);
xtx.bezierCurveTo(11.7, 21.5, 19.0, 35.0, 19.0, 35.0);
xtx.bezierCurveTo(19.3, 35.5, 19.7, 36.0, 20.5, 36.0);
xtx.lineTo(25.7, 36.0);
xtx.bezierCurveTo(26.0, 36.0, 26.2, 35.9, 26.3, 35.6);
xtx.bezierCurveTo(26.5, 35.4, 26.5, 35.1, 26.3, 34.8);
xtx.lineTo(19.0, 21.5);
xtx.bezierCurveTo(19.0, 21.5, 19.0, 21.5, 19.0, 21.4);
xtx.lineTo(30.5, 1.1);
xtx.bezierCurveTo(30.7, 0.8, 30.7, 0.6, 30.5, 0.3);
xtx.bezierCurveTo(30.4, 0.1, 30.1, 0.0, 29.8, 0.0);
xtx.lineTo(24.6, 0.0);
xtx.closePath();
xtx.fill();
xtx.restore();

var ttx = document.getElementById("twitter").getContext("2d");

ttx.save();
ttx.beginPath();
ttx.moveTo(44.4, 4.3);
ttx.bezierCurveTo(42.8, 5.0, 41.0, 5.5, 39.2, 5.7);
ttx.bezierCurveTo(41.1, 4.6, 42.5, 2.8, 43.2, 0.7);
ttx.bezierCurveTo(41.4, 1.7, 39.5, 2.5, 37.4, 2.9);
ttx.bezierCurveTo(35.7, 1.1, 33.4, 0.0, 30.8, 0.0);
ttx.bezierCurveTo(25.7, 0.0, 21.6, 4.1, 21.6, 9.1);
ttx.bezierCurveTo(21.6, 9.8, 21.7, 10.5, 21.9, 11.2);
ttx.bezierCurveTo(14.3, 10.8, 7.6, 7.2, 3.1, 1.7);
ttx.bezierCurveTo(2.3, 3.0, 1.9, 4.6, 1.9, 6.3);
ttx.bezierCurveTo(1.9, 9.4, 3.5, 12.2, 5.9, 13.8);
ttx.bezierCurveTo(4.4, 13.8, 3.0, 13.4, 1.8, 12.7);
ttx.bezierCurveTo(1.8, 12.7, 1.8, 12.8, 1.8, 12.8);
ttx.bezierCurveTo(1.8, 17.2, 4.9, 20.9, 9.1, 21.7);
ttx.bezierCurveTo(8.3, 22.0, 7.5, 22.1, 6.7, 22.1);
ttx.bezierCurveTo(6.1, 22.1, 5.5, 22.0, 5.0, 21.9);
ttx.bezierCurveTo(6.1, 25.5, 9.5, 28.2, 13.5, 28.2);
ttx.bezierCurveTo(10.4, 30.7, 6.4, 32.1, 2.2, 32.1);
ttx.bezierCurveTo(1.4, 32.1, 0.7, 32.1, 0.0, 32.0);
ttx.bezierCurveTo(4.0, 34.6, 8.8, 36.1, 14.0, 36.1);
ttx.bezierCurveTo(30.7, 36.1, 39.9, 22.2, 39.9, 10.2);
ttx.bezierCurveTo(39.9, 9.8, 39.9, 9.4, 39.9, 9.0);
ttx.bezierCurveTo(41.7, 7.7, 43.2, 6.1, 44.4, 4.3);
ttx.closePath();
ttx.fillStyle = "rgb(255, 255, 255)";
ttx.fill();
ttx.restore();

require("./rtox.js")
}, {"./rtox.js":2}],
2: [function(require, module, exports) {
/*var Buffer = (function() {
    exports = {};

    function Buffer(t, e, r) {
        if (!(this instanceof Buffer)) return new Buffer(t, e, r);
        var n, i = typeof t;
        if ("number" === i) n = t > 0 ? t >>> 0 : 0;
        else if ("string" === i) "base64" === e && (t = base64clean(t)),
            n = Buffer.byteLength(t, e);
        else {
            if ("object" !== i || null === t) throw 0;
            "Buffer" === t.type && isArray(t.data) && (t = t.data), n = +t.length > 0 ? Math.floor(+t.length) : 0;
        }
        if (this.length > kMaxLength) throw 0;
        var f;
        Buffer.TYPED_ARRAY_SUPPORT ? f = Buffer._augment(new Uint8Array(n)) : (f = this,
            f.length = n, f._isBuffer = !0);
        var o;
        if (Buffer.TYPED_ARRAY_SUPPORT && "number" == typeof t.byteLength) f._set(t);
        else if (isArrayish(t))
            if (Buffer.isBuffer(t))
                for (o = 0; n > o; o++) f[o] = t.readUInt8(o);
            else
                for (o = 0; n > o; o++) f[o] = (t[o] % 256 + 256) % 256;
        else if ("string" === i) f.write(t, 0, e);
        else if ("number" === i && !Buffer.TYPED_ARRAY_SUPPORT && !r)
            for (o = 0; n > o; o++) f[o] = 0;
        return f;
    }

    function hexWrite(t, e, r, n) {
        r = Number(r) || 0;
        var i = t.length - r;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        var f = e.length;
        if (f % 2 !== 0) throw 0;
        n > f / 2 && (n = f / 2);
        for (var o = 0; n > o; o++) {
            var u = parseInt(e.substr(2 * o, 2), 16);
            if (isNaN(u)) throw 0;
            t[r + o] = u;
        }
        return o;
    }

    function utf8Write(t, e, r, n) {
        var i = blitBuffer(utf8ToBytes(e), t, r, n);
        return i;
    }

    function asciiWrite(t, e, r, n) {
        var i = blitBuffer(asciiToBytes(e), t, r, n);
        return i;
    }

    function binaryWrite(t, e, r, n) {
        return asciiWrite(t, e, r, n);
    }

    function base64Write(t, e, r, n) {
        var i = blitBuffer(base64ToBytes(e), t, r, n);
        return i;
    }

    function utf16leWrite(t, e, r, n) {
        var i = blitBuffer(utf16leToBytes(e), t, r, n);
        return i;
    }

    function base64Slice(t, e, r) {
        return base64.fromByteArray(0 === e && r === t.length ? t : t.slice(e, r));
    }

    function utf8Slice(t, e, r) {
        var n = "",
            i = "";
        r = Math.min(t.length, r);
        for (var f = e; r > f; f++) t[f] <= 127 ? (n += decodeUtf8Char(i) + String.fromCharCode(t[f]),
            i = "") : i += "%" + t[f].toString(16);
        return n + decodeUtf8Char(i);
    }

    function asciiSlice(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var i = e; r > i; i++) n += String.fromCharCode(t[i]);
        return n;
    }

    function binarySlice(t, e, r) {
        return asciiSlice(t, e, r);
    }

    function hexSlice(t, e, r) {
        var n = t.length;
        (!e || 0 > e) && (e = 0), (!r || 0 > r || r > n) && (r = n);
        for (var i = "", f = e; r > f; f++) i += toHex(t[f]);
        return i;
    }

    function utf16leSlice(t, e, r) {
        for (var n = t.slice(e, r), i = "", f = 0; f < n.length; f += 2) i += String.fromCharCode(n[f] + 256 * n[f + 1]);
        return i;
    }

    function checkOffset(t, e, r) {
        if (t % 1 !== 0 || 0 > t) throw 0;
        if (t + e > r) throw 0;
    }

    function checkInt(t, e, r, n, i, f) {
        if (!Buffer.isBuffer(t)) throw 0;
        if (e > i || f > e) throw 0;
        if (r + n > t.length) throw 0;
    }

    function objectWriteUInt16(t, e, r, n) {
        0 > e && (e = 65535 + e + 1);
        for (var i = 0, f = Math.min(t.length - r, 2); f > i; i++) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
    }

    function objectWriteUInt32(t, e, r, n) {
        0 > e && (e = 4294967295 + e + 1);
        for (var i = 0, f = Math.min(t.length - r, 4); f > i; i++) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255;
    }

    function checkIEEE754(t, e, r, n, i, f) {
        if (e > i || f > e) throw 0;
        if (r + n > t.length) throw 0;
    }

    function writeFloat(t, e, r, n, i) {
        return i || checkIEEE754(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38),
            ieee754.write(t, e, r, n, 23, 4), r + 4;
    }

    function writeDouble(t, e, r, n, i) {
        return i || checkIEEE754(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308),
            ieee754.write(t, e, r, n, 52, 8), r + 8;
    }

    function base64clean(t) {
        for (t = stringtrim(t).replace(INVALID_BASE64_RE, ""); t.length % 4 !== 0;) t += "=";
        return t;
    }

    function stringtrim(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }

    function isArrayish(t) {
        return isArray(t) || Buffer.isBuffer(t) || t && "object" == typeof t && "number" == typeof t.length;
    }

    function toHex(t) {
        return 16 > t ? "0" + t.toString(16) : t.toString(16);
    }

    function utf8ToBytes(t) {
        for (var e = [], r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r);
            if (127 >= n) e.push(n);
            else {
                var i = r;
                n >= 55296 && 57343 >= n && r++;
                for (var f = encodeURIComponent(t.slice(i, r + 1)).substr(1).split("%"), o = 0; o < f.length; o++) e.push(parseInt(f[o], 16));
            }
        }
        return e;
    }

    function asciiToBytes(t) {
        for (var e = [], r = 0; r < t.length; r++) e.push(255 & t.charCodeAt(r));
        return e;
    }

    function utf16leToBytes(t) {
        for (var e, r, n, i = [], f = 0; f < t.length; f++) e = t.charCodeAt(f), r = e >> 8,
            n = e % 256, i.push(n), i.push(r);
        return i;
    }

    function base64ToBytes(t) {
        return base64.toByteArray(t);
    }

    function blitBuffer(t, e, r, n) {
        for (var i = 0; n > i && !(i + r >= e.length || i >= t.length); i++) e[i + r] = t[i];
        return i;
    }

    function decodeUtf8Char(t) {
        try {
            return decodeURIComponent(t);
        } catch (e) {
            return String.fromCharCode(65533);
        }
    }

    var base64 = (function() {
            'use strict';
            var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array

            var PLUS = '+'.charCodeAt(0)
            var SLASH = '/'.charCodeAt(0)
            var NUMBER = '0'.charCodeAt(0)
            var LOWER = 'a'.charCodeAt(0)
            var UPPER = 'A'.charCodeAt(0)

            function decode(elt) {
                var code = elt.charCodeAt(0)
                if (code === PLUS)
                    return 62 // '+'
                if (code === SLASH)
                    return 63 // '/'
                if (code < NUMBER)
                    return -1 //no match
                if (code < NUMBER + 10)
                    return code - NUMBER + 26 + 26
                if (code < UPPER + 26)
                    return code - UPPER
                if (code < LOWER + 26)
                    return code - LOWER + 26
            }

            function b64ToByteArray(b64) {
                var i, j, l, tmp, placeHolders, arr

                if (b64.length % 4 > 0) {
                    throw 0;
                }

                // the number of equal signs (place holders)
                // if there are two placeholders, than the two characters before it
                // represent one byte
                // if there is only one, then the three characters before it represent 2 bytes
                // this is just a cheap hack to not do indexOf twice
                var len = b64.length
                placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

                // base64 is 4/3 + up to two characters of the original data
                arr = new Arr(b64.length * 3 / 4 - placeHolders)

                // if there are placeholders, only get up to the last complete 4 chars
                l = placeHolders > 0 ? b64.length - 4 : b64.length

                var L = 0

                function push(v) {
                    arr[L++] = v
                }

                for (i = 0, j = 0; i < l; i += 4, j += 3) {
                    tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
                    push((tmp & 0xFF0000) >> 16)
                    push((tmp & 0xFF00) >> 8)
                    push(tmp & 0xFF)
                }

                if (placeHolders === 2) {
                    tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
                    push(tmp & 0xFF)
                } else if (placeHolders === 1) {
                    tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
                    push((tmp >> 8) & 0xFF)
                    push(tmp & 0xFF)
                }

                return arr
            }

            function uint8ToBase64(uint8) {
                var i,
                    extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
                    output = "",
                    temp, length

                function encode(num) {
                    return lookup.charAt(num)
                }

                function tripletToBase64(num) {
                    return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
                }

                // go through the array every three bytes, we'll deal with trailing stuff later
                for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
                    temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
                    output += tripletToBase64(temp)
                }

                // pad the end with zeros, but make sure to not forget the extra bytes
                switch (extraBytes) {
                    case 1:
                        temp = uint8[uint8.length - 1]
                        output += encode(temp >> 2)
                        output += encode((temp << 4) & 0x3F)
                        output += '=='
                        break
                    case 2:
                        temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
                        output += encode(temp >> 10)
                        output += encode((temp >> 4) & 0x3F)
                        output += encode((temp << 2) & 0x3F)
                        output += '='
                        break
                }

                return output
            }

            return {
                toByteArray: b64ToByteArray,
                fromByteArray: uint8ToBase64
            }
        })(),
        ieee754 = (function() {
            return {
                read: function(buffer, offset, isLE, mLen, nBytes) {
                    var e, m,
                        eLen = nBytes * 8 - mLen - 1,
                        eMax = (1 << eLen) - 1,
                        eBias = eMax >> 1,
                        nBits = -7,
                        i = isLE ? (nBytes - 1) : 0,
                        d = isLE ? -1 : 1,
                        s = buffer[offset + i];

                    i += d;

                    e = s & ((1 << (-nBits)) - 1);
                    s >>= (-nBits);
                    nBits += eLen;
                    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

                    m = e & ((1 << (-nBits)) - 1);
                    e >>= (-nBits);
                    nBits += mLen;
                    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

                    if (e === 0) {
                        e = 1 - eBias;
                    } else if (e === eMax) {
                        return m ? NaN : ((s ? -1 : 1) * Infinity);
                    } else {
                        m = m + Math.pow(2, mLen);
                        e = e - eBias;
                    }
                    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
                },
                write: function(buffer, value, offset, isLE, mLen, nBytes) {
                    var e, m, c,
                        eLen = nBytes * 8 - mLen - 1,
                        eMax = (1 << eLen) - 1,
                        eBias = eMax >> 1,
                        rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
                        i = isLE ? 0 : (nBytes - 1),
                        d = isLE ? 1 : -1,
                        s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

                    value = Math.abs(value);

                    if (isNaN(value) || value === Infinity) {
                        m = isNaN(value) ? 1 : 0;
                        e = eMax;
                    } else {
                        e = Math.floor(Math.log(value) / Math.LN2);
                        if (value * (c = Math.pow(2, -e)) < 1) {
                            e--;
                            c *= 2;
                        }
                        if (e + eBias >= 1) {
                            value += rt / c;
                        } else {
                            value += rt * Math.pow(2, 1 - eBias);
                        }
                        if (value * c >= 2) {
                            e++;
                            c /= 2;
                        }

                        if (e + eBias >= eMax) {
                            m = 0;
                            e = eMax;
                        } else if (e + eBias >= 1) {
                            m = (value * c - 1) * Math.pow(2, mLen);
                            e = e + eBias;
                        } else {
                            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                            e = 0;
                        }
                    }

                    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

                    e = (e << mLen) | m;
                    eLen += mLen;
                    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

                    buffer[offset + i - d] |= s * 128;
                }
            }
        })(),
        isArray = function() {
            var isArray = Array.isArray;

            var str = Object.prototype.toString;

            return isArray || function(val) {
                return !!val && '[object Array]' == str.call(val);
            };
        };

    exports.INSPECT_MAX_BYTES = 50,
        Buffer.poolSize = 8192;

    var kMaxLength = 1073741823;

    Buffer.TYPED_ARRAY_SUPPORT = function() {
        try {
            var t = new ArrayBuffer(0),
                e = new Uint8Array(t);
            return e.foo = function() {
                return 42;
            }, 42 === e.foo() && "function" == typeof e.subarray && 0 === new Uint8Array(1).subarray(1, 1).byteLength;
        } catch (r) {
            return !1;
        }
    }(), Buffer.isBuffer = function(t) {
        return !(null == t || !t._isBuffer);
    }, Buffer.compare = function(t, e) {
        if (!Buffer.isBuffer(t) || !Buffer.isBuffer(e)) throw 0;
        for (var r = t.length, n = e.length, i = 0, f = Math.min(r, n); f > i && t[i] === e[i]; i++);
        return i !== f && (r = t[i], n = e[i]), n > r ? -1 : r > n ? 1 : 0;
    }, Buffer.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "raw":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;

            default:
                return !1;
        }
    }, Buffer.concat = function(t, e) {
        if (!isArray(t)) throw 0;
        if (0 === t.length) return new Buffer(0);
        if (1 === t.length) return t[0];
        var r;
        if (void 0 === e)
            for (e = 0, r = 0; r < t.length; r++) e += t[r].length;
        var n = new Buffer(e),
            i = 0;
        for (r = 0; r < t.length; r++) {
            var f = t[r];
            f.copy(n, i), i += f.length;
        }
        return n;
    }, Buffer.byteLength = function(t, e) {
        var r;
        switch (t += "", e || "utf8") {
            case "ascii":
            case "binary":
            case "raw":
                r = t.length;
                break;

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                r = 2 * t.length;
                break;

            case "hex":
                r = t.length >>> 1;
                break;

            case "utf8":
            case "utf-8":
                r = utf8ToBytes(t).length;
                break;

            case "base64":
                r = base64ToBytes(t).length;
                break;

            default:
                r = t.length;
        }
        return r;
    }, Buffer.prototype.length = void 0, Buffer.prototype.parent = void 0, Buffer.prototype.toString = function(t, e, r) {
        var n = !1;
        if (e >>>= 0, r = void 0 === r || 1 / 0 === r ? this.length : r >>> 0, t || (t = "utf8"),
            0 > e && (e = 0), r > this.length && (r = this.length), e >= r) return "";
        for (;;) switch (t) {
            case "hex":
                return hexSlice(this, e, r);

            case "utf8":
            case "utf-8":
                return utf8Slice(this, e, r);

            case "ascii":
                return asciiSlice(this, e, r);

            case "binary":
                return binarySlice(this, e, r);

            case "base64":
                return base64Slice(this, e, r);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return utf16leSlice(this, e, r);

            default:
                if (n) throw 0;
                t = (t + "").toLowerCase(), n = !0;
        }
    }, Buffer.prototype.equals = function(t) {
        if (!Buffer.isBuffer(t)) throw 0;
        return 0 === Buffer.compare(this, t);
    }, Buffer.prototype.inspect = function() {
        var t = "",
            e = exports.INSPECT_MAX_BYTES;
        return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "),
            this.length > e && (t += " ... ")), "<Buffer " + t + ">";
    }, Buffer.prototype.compare = function(t) {
        if (!Buffer.isBuffer(t)) throw 0;
        return Buffer.compare(this, t);
    }, Buffer.prototype.get = function(t) {
        return console.log(".get() is deprecated. Access using array indexes instead."),
            this.readUInt8(t);
    }, Buffer.prototype.set = function(t, e) {
        return console.log(".set() is deprecated. Access using array indexes instead."),
            this.writeUInt8(t, e);
    }, Buffer.prototype.write = function(t, e, r, n) {
        if (isFinite(e)) isFinite(r) || (n = r, r = void 0);
        else {
            var i = n;
            n = e, e = r, r = i;
        }
        e = Number(e) || 0;
        var f = this.length - e;
        r ? (r = Number(r), r > f && (r = f)) : r = f, n = String(n || "utf8").toLowerCase();
        var o;
        switch (n) {
            case "hex":
                o = hexWrite(this, t, e, r);
                break;

            case "utf8":
            case "utf-8":
                o = utf8Write(this, t, e, r);
                break;

            case "ascii":
                o = asciiWrite(this, t, e, r);
                break;

            case "binary":
                o = binaryWrite(this, t, e, r);
                break;

            case "base64":
                o = base64Write(this, t, e, r);
                break;

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                o = utf16leWrite(this, t, e, r);
                break;

            default:
                throw 0;
        }
        return o;
    }, Buffer.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    }, Buffer.prototype.slice = function(t, e) {
        var r = this.length;
        if (t = ~~t, e = void 0 === e ? r : ~~e, 0 > t ? (t += r, 0 > t && (t = 0)) : t > r && (t = r),
            0 > e ? (e += r, 0 > e && (e = 0)) : e > r && (e = r), t > e && (e = t), Buffer.TYPED_ARRAY_SUPPORT) return Buffer._augment(this.subarray(t, e));
        for (var n = e - t, i = new Buffer(n, void 0, !0), f = 0; n > f; f++) i[f] = this[f + t];
        return i;
    }, Buffer.prototype.readUInt8 = function(t, e) {
        return e || checkOffset(t, 1, this.length), this[t];
    }, Buffer.prototype.readUInt16LE = function(t, e) {
        return e || checkOffset(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, Buffer.prototype.readUInt16BE = function(t, e) {
        return e || checkOffset(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, Buffer.prototype.readUInt32LE = function(t, e) {
        return e || checkOffset(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, Buffer.prototype.readUInt32BE = function(t, e) {
        return e || checkOffset(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, Buffer.prototype.readInt8 = function(t, e) {
        return e || checkOffset(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, Buffer.prototype.readInt16LE = function(t, e) {
        e || checkOffset(t, 2, this.length);
        var r = this[t] | this[t + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, Buffer.prototype.readInt16BE = function(t, e) {
        e || checkOffset(t, 2, this.length);
        var r = this[t + 1] | this[t] << 8;
        return 32768 & r ? 4294901760 | r : r;
    }, Buffer.prototype.readInt32LE = function(t, e) {
        return e || checkOffset(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, Buffer.prototype.readInt32BE = function(t, e) {
        return e || checkOffset(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, Buffer.prototype.readFloatLE = function(t, e) {
        return e || checkOffset(t, 4, this.length), ieee754.read(this, t, !0, 23, 4);
    }, Buffer.prototype.readFloatBE = function(t, e) {
        return e || checkOffset(t, 4, this.length), ieee754.read(this, t, !1, 23, 4);
    }, Buffer.prototype.readDoubleLE = function(t, e) {
        return e || checkOffset(t, 8, this.length), ieee754.read(this, t, !0, 52, 8);
    }, Buffer.prototype.readDoubleBE = function(t, e) {
        return e || checkOffset(t, 8, this.length), ieee754.read(this, t, !1, 52, 8);
    }, Buffer.prototype.writeUInt8 = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 1, 255, 0), Buffer.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            this[e] = t, e + 1;
    }, Buffer.prototype.writeUInt16LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[e] = t,
            this[e + 1] = t >>> 8) : objectWriteUInt16(this, t, e, !0), e + 2;
    }, Buffer.prototype.writeUInt16BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 2, 65535, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
            this[e + 1] = t) : objectWriteUInt16(this, t, e, !1), e + 2;
    }, Buffer.prototype.writeUInt32LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24,
                this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t) : objectWriteUInt32(this, t, e, !0),
            e + 4;
    }, Buffer.prototype.writeUInt32BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 4, 4294967295, 0), Buffer.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t) : objectWriteUInt32(this, t, e, !1),
            e + 4;
    }, Buffer.prototype.writeInt8 = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 1, 127, -128), Buffer.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            0 > t && (t = 255 + t + 1), this[e] = t, e + 1;
    }, Buffer.prototype.writeInt16LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[e] = t,
            this[e + 1] = t >>> 8) : objectWriteUInt16(this, t, e, !0), e + 2;
    }, Buffer.prototype.writeInt16BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 2, 32767, -32768), Buffer.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8,
            this[e + 1] = t) : objectWriteUInt16(this, t, e, !1), e + 2;
    }, Buffer.prototype.writeInt32LE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 4, 2147483647, -2147483648),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[e] = t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16,
                this[e + 3] = t >>> 24) : objectWriteUInt32(this, t, e, !0), e + 4;
    }, Buffer.prototype.writeInt32BE = function(t, e, r) {
        return t = +t, e >>>= 0, r || checkInt(this, t, e, 4, 2147483647, -2147483648),
            0 > t && (t = 4294967295 + t + 1), Buffer.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24,
                this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t) : objectWriteUInt32(this, t, e, !1),
            e + 4;
    }, Buffer.prototype.writeFloatLE = function(t, e, r) {
        return writeFloat(this, t, e, !0, r);
    }, Buffer.prototype.writeFloatBE = function(t, e, r) {
        return writeFloat(this, t, e, !1, r);
    }, Buffer.prototype.writeDoubleLE = function(t, e, r) {
        return writeDouble(this, t, e, !0, r);
    }, Buffer.prototype.writeDoubleBE = function(t, e, r) {
        return writeDouble(this, t, e, !1, r);
    }, Buffer.prototype.copy = function(t, e, r, n) {
        var i = this;
        if (r || (r = 0), n || 0 === n || (n = this.length), e || (e = 0), n !== r && 0 !== t.length && 0 !== i.length) {
            if (r > n) throw 0;
            if (0 > e || e >= t.length) throw 0;
            if (0 > r || r >= i.length) throw 0;
            if (0 > n || n > i.length) throw 0;
            n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
            var f = n - r;
            if (1e3 > f || !Buffer.TYPED_ARRAY_SUPPORT)
                for (var o = 0; f > o; o++) t[o + e] = this[o + r];
            else t._set(this.subarray(r, r + f), e);
        }
    }, Buffer.prototype.fill = function(t, e, r) {
        if (t || (t = 0), e || (e = 0), r || (r = this.length), e > r) throw 0;
        if (r !== e && 0 !== this.length) {
            if (0 > e || e >= this.length) throw 0;
            if (0 > r || r > this.length) throw 0;
            var n;
            if ("number" == typeof t)
                for (n = e; r > n; n++) this[n] = t;
            else {
                var i = utf8ToBytes(t.toString()),
                    f = i.length;
                for (n = e; r > n; n++) this[n] = i[n % f];
            }
            return this;
        }
    }, Buffer.prototype.toArrayBuffer = function() {
        if ("undefined" != typeof Uint8Array) {
            if (Buffer.TYPED_ARRAY_SUPPORT) return new Buffer(this).buffer;
            for (var t = new Uint8Array(this.length), e = 0, r = t.length; r > e; e += 1) t[e] = this[e];
            return t.buffer;
        }
        throw 0;
    };

    var BP = Buffer.prototype;

    Buffer._augment = function(t) {
        return t.constructor = Buffer, t._isBuffer = !0, t._get = t.get, t._set = t.set,
            t.get = BP.get, t.set = BP.set, t.write = BP.write, t.toString = BP.toString, t.toLocaleString = BP.toString,
            t.toJSON = BP.toJSON, t.equals = BP.equals, t.compare = BP.compare, t.copy = BP.copy,
            t.slice = BP.slice, t.readUInt8 = BP.readUInt8, t.readUInt16LE = BP.readUInt16LE,
            t.readUInt16BE = BP.readUInt16BE, t.readUInt32LE = BP.readUInt32LE, t.readUInt32BE = BP.readUInt32BE,
            t.readInt8 = BP.readInt8, t.readInt16LE = BP.readInt16LE, t.readInt16BE = BP.readInt16BE,
            t.readInt32LE = BP.readInt32LE, t.readInt32BE = BP.readInt32BE, t.readFloatLE = BP.readFloatLE,
            t.readFloatBE = BP.readFloatBE, t.readDoubleLE = BP.readDoubleLE, t.readDoubleBE = BP.readDoubleBE,
            t.writeUInt8 = BP.writeUInt8, t.writeUInt16LE = BP.writeUInt16LE, t.writeUInt16BE = BP.writeUInt16BE,
            t.writeUInt32LE = BP.writeUInt32LE, t.writeUInt32BE = BP.writeUInt32BE, t.writeInt8 = BP.writeInt8,
            t.writeInt16LE = BP.writeInt16LE, t.writeInt16BE = BP.writeInt16BE, t.writeInt32LE = BP.writeInt32LE,
            t.writeInt32BE = BP.writeInt32BE, t.writeFloatLE = BP.writeFloatLE, t.writeFloatBE = BP.writeFloatBE,
            t.writeDoubleLE = BP.writeDoubleLE, t.writeDoubleBE = BP.writeDoubleBE, t.fill = BP.fill,
            t.inspect = BP.inspect, t.toArrayBuffer = BP.toArrayBuffer, t;
    };

    var INVALID_BASE64_RE = /[^+\/0-9A-z]/g;

    return Buffer
})();

var wx = new WebSocket((location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + ":8081");

wx.addEventListener("message", function (msg){
    msg = JSON.parse(msg.data);

    var q = document.body.querySelector("#thought");

    q.innerHTML = msg.slice(2).join("<br/>");
    q.style.marginLeft = -(q.offsetWidth/2) + "px"
});

wx.addEventListener("open", function (a) {
    setTimeout(function () {
        //wx.send("sqinterstellar")
    }, 15000);
})*/

var tarm = new EventSource("/tarm");

tarm.onmessage = function(e) {
    var data = JSON.parse(e.data);

    if (data.apx1) {
        // 1048576
        // 131072
        var a = (((data.apx1.bw[0] / 131072) * 1000) | 0) / 1000,
            b = (((data.apx1.bw[1] / 131072) * 1000) | 0) / 1000;

        document.querySelector("#r1tarm .rx").innerHTML = a.toFixed(3) + "m";
        document.querySelector("#r1tarm .tx").innerHTML = b.toFixed(3) + "m";
        document.querySelector("#r1tarm .rxtx").innerHTML = (a+b).toFixed(3) + "m";
        document.querySelector("#r1orconn").innerHTML = data.apx1.orconn;
    }

    if (data.apx2) {
        var a = (((data.apx2.bw[0] / 1048576) * 1000) | 0) / 1000,
            b = (((data.apx2.bw[1] / 1048576) * 1000) | 0) / 1000;

        document.querySelector("#r2tarm .rx").innerHTML = a.toFixed(3) + "m";
        document.querySelector("#r2tarm .tx").innerHTML = b.toFixed(3) + "m";
        document.querySelector("#r2tarm .rxtx").innerHTML = (a+b).toFixed(3) + "m";
        document.querySelector("#r2orconn").innerHTML = data.apx2.orconn;
    }
}

}, {}]}, {}, {"1":""})
