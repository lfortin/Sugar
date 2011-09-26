test('Dates - Japanese', function () {

  var now = new Date();

  dateEqual(Date.create('2011年5月15日', 'ja'), new Date(2011, 4, 15), 'Date#create | basic Japanese date');

  dateEqual(Date.create('2011年5月15日'), new Date(2011, 4, 15), 'Date#create | once a language has been initialized it will always be recognized');

  dateEqual(Date.create('2011年5月'), new Date(2011, 4), 'Date#create | Japanese | year and month');
  dateEqual(Date.create('5月15日'), new Date(now.getFullYear(), 4, 15), 'Date#create | Japanese | month and date');
  dateEqual(Date.create('2011年'), new Date(2011, 0), 'Date#create | Japanese | year');
  dateEqual(Date.create('5月'), new Date(now.getFullYear(), 4), 'Date#create | Japanese | month');
  dateEqual(Date.create('15日'), new Date(now.getFullYear(), now.getMonth(), 15), 'Date#create | Japanese | date');
  dateEqual(Date.create('月曜日'), getDateWithWeekdayAndOffset(1), 'Date#create | Japanese | Monday');



  dateEqual(Date.create('一ミリ秒前'), getRelativeDate(null, null, null, null, null, null,-1), 'Date#create | Japanese | one millisecond ago');
  dateEqual(Date.create('一秒前'), getRelativeDate(null, null, null, null, null, -1), 'Date#create | Japanese | one second ago');
  dateEqual(Date.create('一分前'), getRelativeDate(null, null, null, null, -1), 'Date#create | Japanese | one minute ago');
  dateEqual(Date.create('一時間前'), getRelativeDate(null, null, null, -1), 'Date#create | Japanese | one hour ago');
  dateEqual(Date.create('一日前'), getRelativeDate(null, null, -1), 'Date#create | Japanese | one day ago');
  dateEqual(Date.create('一ヶ月前'), getRelativeDate(null, -1), 'Date#create | Japanese | one month ago ヵ');
  dateEqual(Date.create('一ヵ月前'), getRelativeDate(null, -1), 'Date#create | Japanese | one month ago ヶ');
  dateEqual(Date.create('一年前'), getRelativeDate(-1), 'Date#create | Japanese | one year ago');


  dateEqual(Date.create('2ミリ秒前'), getRelativeDate(null, null, null, null, null, null,-2), 'Date#create | Japanese | two millisecond ago');
  dateEqual(Date.create('2秒前'), getRelativeDate(null, null, null, null, null, -2), 'Date#create | Japanese | two second ago');
  dateEqual(Date.create('2分前'), getRelativeDate(null, null, null, null, -2), 'Date#create | Japanese | two minute ago');
  dateEqual(Date.create('2時間前'), getRelativeDate(null, null, null, -2), 'Date#create | Japanese | two hour ago');
  dateEqual(Date.create('2日前'), getRelativeDate(null, null, -2), 'Date#create | Japanese | two day ago');
  dateEqual(Date.create('2ヶ月前'), getRelativeDate(null, -2), 'Date#create | Japanese | two month ago ヵ');
  dateEqual(Date.create('2ヵ月前'), getRelativeDate(null, -2), 'Date#create | Japanese | two month ago ヶ');
  dateEqual(Date.create('2年前'), getRelativeDate(-2), 'Date#create | Japanese | two years ago');

  dateEqual(Date.create('5ミリ秒後'), getRelativeDate(null, null, null, null, null, null, 5), 'Date#create | Japanese | five millisecond from now');
  dateEqual(Date.create('5秒後'), getRelativeDate(null, null, null, null, null, 5), 'Date#create | Japanese | five second from now');
  dateEqual(Date.create('5分後'), getRelativeDate(null, null, null, null, 5), 'Date#create | Japanese | five minute from now');
  dateEqual(Date.create('5時間後'), getRelativeDate(null, null, null, 5), 'Date#create | Japanese | five hour from now');
  dateEqual(Date.create('5日後'), getRelativeDate(null, null, 5), 'Date#create | Japanese | five day from now');
  dateEqual(Date.create('5ヶ月後'), getRelativeDate(null, 5), 'Date#create | Japanese | five month from now ヵ');
  dateEqual(Date.create('5ヵ月後'), getRelativeDate(null, 5), 'Date#create | Japanese | five month from now ヶ');
  dateEqual(Date.create('5年後'), getRelativeDate(5), 'Date#create | Japanese | five years from now');

  dateEqual(Date.create('２０１１年'), new Date(2011, 0), 'Date#create | Japanese | full-width year');

  dateEqual(Date.create('５ミリ秒後'), getRelativeDate(null, null, null, null, null, null, 5), 'Date#create | Japanese full-width | five millisecond from now');
  dateEqual(Date.create('５秒後'), getRelativeDate(null, null, null, null, null, 5), 'Date#create | Japanese full-width | five second from now');
  dateEqual(Date.create('５分後'), getRelativeDate(null, null, null, null, 5), 'Date#create | Japanese full-width | five minute from now');
  dateEqual(Date.create('５時間後'), getRelativeDate(null, null, null, 5), 'Date#create | Japanese full-width | five hour from now');
  dateEqual(Date.create('５日後'), getRelativeDate(null, null, 5), 'Date#create | Japanese full-width | five day from now');
  dateEqual(Date.create('５ヶ月後'), getRelativeDate(null, 5), 'Date#create | Japanese full-width | five month from now ヵ');
  dateEqual(Date.create('５ヵ月後'), getRelativeDate(null, 5), 'Date#create | Japanese full-width | five month from now ヶ');
  dateEqual(Date.create('５年後'), getRelativeDate(5), 'Date#create | Japanese full-width | five years from now');


  dateEqual(Date.create('一昨日'), getRelativeDate(null, null, -2).resetTime(), 'Date#create | Japanese | 一昨日');
  dateEqual(Date.create('昨日'), getRelativeDate(null, null, -1).resetTime(), 'Date#create | Japanese | yesterday');
  dateEqual(Date.create('今日'), getRelativeDate(null, null, 0).resetTime(), 'Date#create | Japanese | today');
  dateEqual(Date.create('明日'), getRelativeDate(null, null, 1).resetTime(), 'Date#create | Japanese | tomorrow');
  dateEqual(Date.create('明後日'), getRelativeDate(null, null, 2).resetTime(), 'Date#create | Japanese | 明後日');

  dateEqual(Date.create('先週'), getRelativeDate(null, null, -7), 'Date#create | Japanese | Last week');
  dateEqual(Date.create('来週'), getRelativeDate(null, null, 7), 'Date#create | Japanese | Next week');

  dateEqual(Date.create('先月'), getRelativeDate(null, -1), 'Date#create | Japanese | Next month');
  dateEqual(Date.create('来月'), getRelativeDate(null, 1), 'Date#create | Japanese | Next month');

  dateEqual(Date.create('去年'), getRelativeDate(-1), 'Date#create | Japanese | Last year');
  dateEqual(Date.create('来年'), getRelativeDate(1), 'Date#create | Japanese | Next year');








  //equal(Date.create('5 de enero de 2012', 'es').isValid(), true, 'Date#create | handles a language code');


});