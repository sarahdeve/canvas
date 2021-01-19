var a = document.getElementById('canvass');
		var b = a.getContext("2d");
		function up()
		 {
			var d = jan.value;
			b.fillStyle = "red";
			var dd = 400 - d;
			b.fillRect(10, dd, 49, d);			
		}

		function dw() 
		{
			var aa = feb.value;
			b.fillStyle = "";
		if (aa < 100) 
		{
			b.fillStyle = "red";
		}
		else if (aa >= 100) 
		{
			b.fillStyle = "yellow";
		}
		else if (aa > 200) 
		{
			b.fillStyle = "green";
		}
		
		var bb= 400-aa;
		b.fillRect(59, bb, 48, aa);
			

			var f= mar.value;
		b.fillStyle = "green";
			var ff = 400 - f;
		b.fillRect(109, ff, 48, f);

			var g= apr.value;
		b.fillStyle = "pink";
			var gg = 400 - g;
		b.fillRect(157, gg, 48, g);

			var h = may.value;
		b.fillStyle = "red";
			var hh = 400 - h;
		b.fillRect(205, hh, 48, h);

		var i = jun.value;
		b.fillStyle = "black";
			var ii = 400 - i;
		b.fillRect(253, ii, 48, i);

		var j = jly.value;
		b.fillStyle = "blue";
			var jj = 400 - j;
		b.fillRect(301, jj, 48, j);

		var k = aug.value;
		b.fillStyle = "orange";
			var kk  = 400 - k;
		b.fillRect(349, kk, 48, k);

		var l = sep.value;
		b.fillStyle = "indigo";
			var ll = 400 - l;
		b.fillRect(397, ll, 48, l);

		var m = oct.value;
		b.fillStyle = "purple";
			var mm = 400 - m;
		b.fillRect(445, mm, 48, m);

		var n = nov.value;
		b.fillStyle = "black";
		 	var nn = 400 - n;
		b.fillRect(493, nn, 48, n);

		var o = dec.value;
		b.fillStyle = "green";
			var oo = 400 - o;
		b.fillRect(540, oo, 48, o);

		}

		


		// b.moveTo(80, 40);
		// b.lineTo(80, 300);
		// b.stroke();

		// b.moveTo(80, 300);
		// b.lineTo(360, 300);
		// b.stroke();


		// function draw(a,b,c,d, color="blue")
		// {
		// 	b.beginPath();
		// 	b.fillStyle = color;
		// 	b.fillRect(200,30,40,300);
		// 	// b.fillReact(a,b,c,d);
		// 	b.closePath();
		// }

		// draw(100, 200, 100, 150, "pink");
		// draw(50, 100, 200, 150, "red");