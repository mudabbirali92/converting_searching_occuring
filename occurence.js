//This prgram will detect that how many times the specific alphabet has occured in a string
var strings="To be hello test to be work be or not be";
var searchs="b";
var found=0;
for (var i=0; i<strings.length;i++)
{
    if(searchs==strings[i])
    {
        found++;
            }
    }
document.write("letter 'b' has occured for ",found," times")