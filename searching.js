//This program will search for a specific element from array and will return the index of that element as well
var inputs=[];
var numbers=parseInt(prompt("plz enter number of elements"));
for(var i=0;i<numbers;i++)
{
        inputs[i]=parseInt(prompt("plz enter the "+i+"th element"));
}
document.write("Elements were: ",inputs);
document.write("</br>")
document.write("</br>")
var find= prompt("Now Plz enter an element to search from the array from the given array",inputs);
var flag=0;
for(var j=0; j<inputs.length; j++)
{
        if(inputs[j]==find)
        {
                flag=1;
                document.write(find," Found at index= ",inputs.indexOf(inputs[j]));
                break;
        }
}
if(flag==0)
        {
                document.write("\n Element Not Found..!!");
        }

