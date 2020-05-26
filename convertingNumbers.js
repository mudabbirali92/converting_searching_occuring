//This program will convert digit 23 to twenty three

var num=prompt("plz enter a number 23");

var dg = ['zero','one','two','three','four','five','six','seven','eight','nine']; 
var tn =['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
var tw = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; 
var found;
var bool=false;

for(var i=0;i<num.length;i++)
{
if (num[i]=="2" && num[i+1]=="3")
{
   bool=true;
   found2=tw[0]
   found3=dg[3];
break;

}
else
{
bool=false;    
}
}

if (bool==true)
{
    console.log( found2," ",found3);
}
else{
    console.log("Sorry I cant perform");

}
