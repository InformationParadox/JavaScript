<script>

// Dynamic Programming Java implementation of LCS problem

function max(a, b)
{
	if (a > b)
		return a;
	else
		return b;
}

function lcs(X, Y, m, n)
{
	var L = new Array(m + 1);
	for(var i = 0; i < L.length; i++)
	{
		L[i] = new Array(n + 1);
	}
	var i, j;
	
	for(i = 0; i <= m; i++)
	{
		for(j = 0; j <= n; j++)
		{
			if (i == 0 || j == 0)
				L[i][j] = 0;
			else if (X[i - 1] == Y[j - 1])
				L[i][j] = L[i - 1][j - 1] + 1;
			else
				L[i][j] = max(L[i - 1][j], L[i][j - 1]);
		}
	}
	
	return L[m][n];
}

// Driver code
var x = "Hacktobergib";
var y = "hackgit";

var m = x.length;
var n = y.length;

document.write("Length of LCS is " + lcs(x, y, m, n));


</script>

