var Chess = function() {
	this.x = 0;
	this.y = 0;
	this.A_count1 = 0;
	this.A_count2 = 0;
	this.A_count3 = 0;
	this.A_count4 = 0;
	this.B_count1 = 0;
	this.B_count2 = 0;
	this.B_count3 = 0;
	this.B_count4 = 0;
	this.person = "甲";
	this.longness = 15;
	this.game = document.getElementById("game");
	this.start();
}
Chess.prototype = {
	start: function() {
		this.map();
		this.toclick();
	},
	toclick: function() {
		var self = this;
		$("td").click(function() {
			switch (self.person) {
				case "甲":
					$(this).attr("type", "A_chess").unbind("click").find("span").css("background", "#fff");
					self.x = Number($(this).attr("x"));
					self.y = Number($(this).attr("y"));
					self.count(self.x, self.y);
					self.A_judge();
					self.clear();
					self.person = "乙";
					break;
				case "乙":
					$(this).attr("type", "B_chess").unbind("click").find("span").css("background", "#000");
					self.x = Number($(this).attr("x"));
					self.y = Number($(this).attr("y"));
					self.count(self.x, self.y);
					self.B_judge();
					self.clear();
					self.person = "甲";
					break;
			}
		});
	},
	map: function() {
		var sum = "<table>";
		for (var i = 0; i < this.longness; i++) {
			sum += "<tr>";
			for (var j = 0; j < this.longness; j++) {
				sum += "<td id='x" + i + "y" + j + "' x=" + i + " y=" + j + "><span></span></td>";
			}
			sum += "</tr>";
		}
		sum += "</table>";
		this.game.innerHTML = sum;
	},
	count: function(x, y) {
		//左右
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + (x + i) + "y" + y + "").attr("type");
			if (s == "A_chess") {
				this.A_count1 += 1;
			} else if (s == "B_chess") {
				this.B_count1 += 1;
			} else {
				break;
			}
		}
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + (x - i) + "y" + y + "").attr("type");
			if (s == "A_chess") {
				this.A_count1 += 1;
			} else if (s == "B_chess") {
				this.B_count1 += 1;
			} else {
				break;
			}
		}
		//上下
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + x + "y" + (y + i) + "").attr("type");
			if (s == "A_chess") {
				this.A_count2 += 1;
			} else if (s == "B_chess") {
				this.B_count2 += 1;
			} else {
				break;
			}
		}
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + x + "y" + (y - i) + "").attr("type");
			if (s == "A_chess") {
				this.A_count2 += 1;
			} else if (s == "B_chess") {
				this.B_count2 += 1;
			} else {
				break;
			}
		}
		//左上右下
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + (x - i) + "y" + (y + i) + "").attr("type");
			if (s == "A_chess") {
				this.A_count3 += 1;
			} else if (s == "B_chess") {
				this.B_count3 += 1;
			} else {
				break;
			}
		}
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + (x + i) + "y" + (y - i) + "").attr("type");
			if (s == "A_chess") {
				this.A_count3 += 1;
			} else if (s == "B_chess") {
				this.B_count3 += 1;
			} else {
				break;
			}
		}
		//左下右上
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + (x + i) + "y" + (y + i) + "").attr("type");
			if (s == "A_chess") {
				this.A_count4 += 1;
			} else if (s == "B_chess") {
				this.B_count4 += 1;
			} else {
				break;
			}
		}
		for (var i = 1; i < 5; i++) {
			var s = $("#x" + (x - i) + "y" + (y - i) + "").attr("type");
			if (s == "A_chess") {
				this.A_count4 += 1;
			} else if (s == "B_chess") {
				this.B_count4 += 1;
			} else {
				break;
			}
		}
	},
	A_judge: function() {
		if (this.A_count1 > 3 || this.A_count2 > 3 || this.A_count3 > 3 || this.A_count4 > 3) {
			alert("白方赢");
		}
	},
	B_judge: function() {
		if (this.B_count1 > 3 || this.B_count2 > 3 || this.B_count3 > 3 || this.B_count4 > 3) {
			alert("黑方赢");
		}
	},
	clear: function() {
		this.A_count1 = 0;
		this.A_count2 = 0;
		this.A_count3 = 0;
		this.A_count4 = 0;
		this.B_count1 = 0;
		this.B_count2 = 0;
		this.B_count3 = 0;
		this.B_count4 = 0;
	}
}
var a = new Chess();