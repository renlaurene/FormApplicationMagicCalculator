<html>
<head>
<title>HTML Calculator</title>
DO YOUR CALCULATION HERE
</head><br>
<body bgcolor= "white" text= "MediumSeaGreen">
<form name="calculator" >
Your Solution is: 
<br><br>
<fieldset>
<legend>Magic Calculator</legend>
<input type="textfield" name="ans" value=""><br><br>
<input type="button" value="Clear">
<input type="button" value="=" onClick="document.calculator.ans.value=eval(document.calculator.ans.value)">
<input type="button" value="v" onClick="document.calculator.ans.value+='v'">
<input type="button" value="." onClick="document.calculator.ans.value+='.'">
<input type="button" value="x!" onClick="document.calculator.ans.value+='x!'">
<input type="button" value="ON" onClick="document.calculator.ans.value+='ON'">
<br><br>
<input type="button" value="*" onClick="document.calculator.ans.value+='*'">
<input type="button" value="/" onClick="document.calculator.ans.value+='/'">
<input type="button" value="-" onClick="document.calculator.ans.value+='-'">
<input type="button" value="+" onClick="document.calculator.ans.value+='+'">
<input type="button" value="^" onClick="document.calculator.ans.value+='^'">
<input type="button" value="%" onClick="document.calculator.ans.value+='%'">
<input type="button" value="exp" onClick="document.calculator.ans.value+='exp'">
<br><br>
<input type="button" value="7" onClick="document.calculator.ans.value+='7'">
<input type="button" value="8" onClick="document.calculator.ans.value+='8'">
<input type="button" value="9" onClick="document.calculator.ans.value+='9'">
<input type="button" value="Del" onClick="document.calculator.ans.value+='Del'">
<input type="button" value="hyp" onClick="document.calculator.ans.value+='hyp'">
<input type="button" value="sin" onClick="document.calculator.ans.value+='sin'">
<br><br>
<input type="button" value="4" onClick="document.calculator.ans.value+='4'">
<input type="button" value="5" onClick="document.calculator.ans.value+='5'">
<input type="button" value="6" onClick="document.calculator.ans.value+='6'">
<input type="button" value="Ans" onClick="document.calculator.ans.value+='Ans'">
<input type="button" value="tan" onClick="document.calculator.ans.value+='tan'">
<input type="button" value="cos" onClick="document.calculator.ans.value+='cos'">
<br><br>
<input type="button" value="3" onClick="document.calculator.ans.value+='3'">
<input type="button" value="2" onClick="document.calculator.ans.value+='2'">
<input type="button" value="1" onClick="document.calculator.ans.value+='1'">
<input type="button" value="0" onClick="document.calculator.ans.value+='0'">
<input type="button" value="(-) " onClick="document.calculator.ans.value+='(-)'">
<input type="button" value="ln" onClick="document.calculator.ans.value+='ln'">
<input type="button" value="log" onClick="document.calculator.ans.value+='log'">
<br><br>
</fieldset>
</form>
</body>
</html>