log = function(it) {console.log(it);}

var elems = {"email":'#email', "phone":'#phone', "birthday":'#birthday', "accept":'#accept'};
var nums = '0123456789'.split(''); // ['0', '1', '2', ..., '9']

var problemsID = '#problems ol';

var invisLi = '<li class="hidden"></li>';

function scontains(haystack, needle)
{
  // log("Seeing if '"+haystack+"' has '"+needle+"' in it.")
  return (haystack.toString().indexOf(needle) !== -1);
}