(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 700,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Path_1_2.png", id:"Path_1_2"},
		{src:"images/Path_1_3.png", id:"Path_1_3"},
		{src:"images/Path_1_4.png", id:"Path_1_4"},
		{src:"images/Path_27.png", id:"Path_27"},
		{src:"images/Path_28.png", id:"Path_28"},
		{src:"images/Path_29.png", id:"Path_29"},
		{src:"images/Path_2_3.png", id:"Path_2_3"},
		{src:"images/Path_2_4.png", id:"Path_2_4"},
		{src:"images/Path_2_5.png", id:"Path_2_5"},
		{src:"images/Path_3_1.png", id:"Path_3_1"},
		{src:"images/Path_3_2.png", id:"Path_3_2"},
		{src:"images/Path_3_3.png", id:"Path_3_3"},
		{src:"images/Path_4_2.png", id:"Path_4_2"},
		{src:"images/Path_4_3.png", id:"Path_4_3"},
		{src:"images/Path_4_4.png", id:"Path_4_4"},
		{src:"images/Path_5_1.png", id:"Path_5_1"},
		{src:"images/Path_5_2.png", id:"Path_5_2"},
		{src:"images/Path_5_3.png", id:"Path_5_3"},
		{src:"images/Path_6_2.png", id:"Path_6_2"},
		{src:"images/Path_7_1.png", id:"Path_7_1"},
		{src:"images/Path_8_1.png", id:"Path_8_1"},
		{src:"images/Path_9_1.png", id:"Path_9_1"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Path_1_2 = function() {
	this.initialize(img.Path_1_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_1_3 = function() {
	this.initialize(img.Path_1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,69);


(lib.Path_1_4 = function() {
	this.initialize(img.Path_1_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,1);


(lib.Path_27 = function() {
	this.initialize(img.Path_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_28 = function() {
	this.initialize(img.Path_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,69);


(lib.Path_29 = function() {
	this.initialize(img.Path_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,1);


(lib.Path_2_3 = function() {
	this.initialize(img.Path_2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_2_4 = function() {
	this.initialize(img.Path_2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,69);


(lib.Path_2_5 = function() {
	this.initialize(img.Path_2_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,1);


(lib.Path_3_1 = function() {
	this.initialize(img.Path_3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_3_2 = function() {
	this.initialize(img.Path_3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_3_3 = function() {
	this.initialize(img.Path_3_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,69);


(lib.Path_4_2 = function() {
	this.initialize(img.Path_4_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_4_3 = function() {
	this.initialize(img.Path_4_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_4_4 = function() {
	this.initialize(img.Path_4_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,69);


(lib.Path_5_1 = function() {
	this.initialize(img.Path_5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_5_2 = function() {
	this.initialize(img.Path_5_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_5_3 = function() {
	this.initialize(img.Path_5_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,69);


(lib.Path_6_2 = function() {
	this.initialize(img.Path_6_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_7_1 = function() {
	this.initialize(img.Path_7_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_8_1 = function() {
	this.initialize(img.Path_8_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,214);


(lib.Path_9_1 = function() {
	this.initialize(img.Path_9_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,1);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgFADIAAgBQAAgCACgCQACgDABgBQADAAACACQABACgBACIAAAAIgBACIgBACIgCABIAAABIgBAAIgBABQgBAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape.setTransform(0.6,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.3,1.5);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAHQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIADgJIABgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQACADgCACQgBAEgCACIgBABIgBAAg");
	this.shape.setTransform(0.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,1.6);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAFQgBgFACgDIABgCQAAgBABAAQAAAAAAABQABAAAAAAQAAAAAAABQACADgCAEQAAAAAAABQAAAAgBAAQAAABgBAAQAAABAAAAIAAABQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape.setTransform(0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,1.4);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAGIgBAAQAAgBgBgBQAAgBAAAAQAAgBAAAAQABgBAAAAIADgDQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAABQAAAAABABQAAAAAAABQgBAFgEAEIAAABIgCgBg");
	this.shape.setTransform(0.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.4);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgBAGQAAgFgCgBQgCgDAEgCQABgDACACQAEAFgDAGQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape.setTransform(0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1,1.7);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgEAFQABgHADgEQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAgBABQgBACAAADQgBAEgCABIgCABQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape.setTransform(0.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.7);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAKQgEgCAEgFQADgEABgFQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAFgFAJQgBADgBAAIgCAAg");
	this.shape.setTransform(0.6,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.3,2.1);


(lib.Path_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AAAAKIgBgJQgCgDgEgCQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQACgDACAAQAKAEACALQABADgFADIgDACQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape.setTransform(1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.5);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202622").s().p("AgmAMQgQgFgBgHQABgGAQgFQAQgFAWAAQAXAAAQAFQAQAFAAAGQAAAHgQAFQgQAFgXAAQgVAAgRgFg");
	this.shape.setTransform(5.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.2,3.6);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AABAIIgCgGIgFgFQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABIAHAKQABADgDACIgDACIgBgCg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAGIABgIQAAgDACgCQAEgBAAAEIgBAIQgBADgCABIgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape.setTransform(0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,1.8);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgEADIACgDQABgGADAAQAFAAgBAFIgEAFQgBADgDAAQgEAAACgEg");
	this.shape.setTransform(0.6,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.3,1.6);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAHQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQACgDAAgCQAAgDACgCQAEgBAAAEQgBAIgEAEIgCAAIgBgBg");
	this.shape.setTransform(0.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.8);


(lib.Path_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgHADQACgDAFgHIAEgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQACADgFADIgDADQgBAFgEABIgBAAQgEAAABgGg");
	this.shape.setTransform(0.8,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,1.9);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98C74C").s().p("AjfEoQghAAgXgXQgYgYAAghIAAmvQAAghAYgYQAXgXAhAAIG/AAQAhAAAXAXQAYAYAAAhIAAGvQAAAhgYAYQgXAXghAAg");
	this.shape.setTransform(30.4,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.9,59.3);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAIQAAgBgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAIAEgFQADgGADAEQAEAFgGADIAAAAQgDAFgCAAIgBAAg");
	this.shape.setTransform(0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.6);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAFIgCgFQAAgEAEgCQADgCAAAEIACAEQABADgEADIgCABQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.6);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AAAAGQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgCgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAABQAEAEAAABIgBADQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIAAAAg");
	this.shape.setTransform(0.4,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,1.3);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgEALQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAEgNQAAgEADgBQAFgBgBAEIgDAMQgBAFgCABIgCAAIgCAAg");
	this.shape.setTransform(0.6,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,1.3,2.4);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#689B40").s().p("AjVABIAAgBIGrAAIAAABg");
	this.shape.setTransform(21.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.8,0.4);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgFAGQgCgFADgCQACgFADgBQAHgBgCAHQgBADgDACIAAAAQgBACgBABIgCABQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape.setTransform(0.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.7);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape.setTransform(2.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,9.9);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQACgDAAAEIADAGQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98C74C").s().p("AjfEoQghAAgXgXQgYgYAAghIAAmvQAAghAYgYQAXgXAhAAIG/AAQAhAAAXAXQAYAYAAAhIAAGvQAAAhgYAYQgXAXghAAg");
	this.shape.setTransform(30.4,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.9,59.3);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape.setTransform(2.2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,9.9);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98C74C").s().p("AjfEoQghAAgXgXQgYgYAAghIAAmvQAAghAYgYQAXgXAhAAIG/AAQAhAAAXAXQAYAYAAAhIAAGvQAAAhgYAYQgXAXghAAg");
	this.shape.setTransform(30.4,29.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.9,59.3);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA93A").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAKQgEgGAAgHQAAgFAGgCQADgCAAAGQAAAFADACQADAEgGAEQgCACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape.setTransform(2.2,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,9.9);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA93A").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEADQAAABABAAQAAABAAABQABAAAAABQAAAAgBABQAAADgCABIgCADIgEAGQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA93A").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgBAFQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgBIACgEQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAABQABADgCACQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape.setTransform(0.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,1.2);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape.setTransform(2.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.3,9.9);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202622").s().p("AiLAbQg6gLAAgQQAAgPA6gLQA6gMBRAAQBSAAA6AMQA6ALAAAPQAAAQg6ALQg6AMhSAAQhRAAg6gMg");
	this.shape.setTransform(19.9,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.8,7.9);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA93A").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAEIABgFQABgDABgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIABADQgBAFgDABIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape.setTransform(0.5,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.9,1.4);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202622").s().p("AhEAWQgdgJAAgNQAAgLAdgKQAdgJAnAAQAoAAAdAJQAcAKABALQgBANgcAJQgdAJgoAAQgnAAgdgJg");
	this.shape.setTransform(9.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.6,6.3);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA93A").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA93A").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA93A").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEADQAEAEgFAFIgCADQgCAEgCACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDACgEQAEgGADgDQADgFAEADQAEADgFAFIgCADIgEAGIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D456").s().p("AgGAKQgDgDADgEQADgGADgDQAEgGADADQAEAEgFAFIgCADIgEAGIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQAEgGADADQAEAEgFAFIgCADIgEAGIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAJQgDgCADgEQADgGADgDQADgGAEADQAAABABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCADQgCAEgCACIgDACIgDgCg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.2);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQAEgFADADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEAEQAAAAABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCAEQgCADgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEACQAEAEgFAFIgCADIgEAGIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEADQAEAEgFAFIgCADQgCAEgCACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDACgEQAEgGADgDQADgFAEADQAEADgFAFIgCADIgEAGIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEAEQAAAAABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCAEQgCADgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAJQgDgCADgEQADgGADgEQAEgEADADQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQgBAAgBADQgCAEgCACIgDABIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.2);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEAEQAAAAABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCAEQgCADgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Group_3_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgEQABgCAEgCQABgBAAAAQAAAAAAAAQAAAAABABQAAAAAAABQAAADADADQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,1.4,1.9);


(lib.Group_3_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D456").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgDABAEIADAGQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgDABAEQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQACgCAAAEQAAACADADQADABAAADQAAACgEADIgCAAQgCAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQACgDAAAEIADAGQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQAAgDAEgCQADgCAAAEQAAACADADQADABAAADQAAACgEADIgCAAQgCAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgDABAEIADAGQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgEQABgCAEgCQABgBAAAAQAAAAAAAAQAAAAABABQAAAAAAABQAAADADADQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,1.4,1.9);


(lib.Group_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQAAgDAEgCQADgCAAAEQAAACADADQADABAAADQAAACgEADIgCAAQgCAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQAAgDAEgCQADgCAAAEQAAACADADQADABAAADQAAACgEADIgCAAQgCAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_2_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAFACACQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQADgCAAAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3D456").s().p("AgDAJQgDgGAAgGQAAgFAGgCQADgCAAAGQAAAEADADQADAEgGAEQgCADgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCgBAGQAAADADAEQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgFgFABgHQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQADgCAAAGQAAAEADADQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAFACACQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQADgCAAAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgFgFABgHQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,1.5,2.4);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgFgFABgHQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,1.5,2.4);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCgBAGQAAAEADADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAJQgDgCADgEQADgGADgEQAEgEADADQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAQgBAAgBADQgCAEgCACIgDABIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.2);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQAEgFADADQAAAAABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.2);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxBnQhZgsAzhiQAEgKAJgLQgHgMABgQQABgPAJgMIAAgBIAWAUIAHAIQAXgMAbACQAQACAIADIAGgVIAFAIIgFAPQALAEAJAFIAuBNQADATgFAWQgJAsgmAXQgXAOgbAAQgZAAgegOgAA7hSIgPgYIACgGIA2BBIgIABQgMgXgVgNgAAshqg");
	mask.setTransform(10.6,11.7);

	// 레이어 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAwQgUgFgMgSQgLgSADgSQAEgUARgLQASgKASAFQAUAFAMASQALASgEASQgDAUgRALQgMAHgNAAQgEAAgHgCg");
	this.shape.setTransform(18.8,19.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.8,14.7,7.5,8.8);


(lib.block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AphJhIAAzBITDAAIAATBg");
	this.shape.setTransform(-2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-62.9,122,122);


(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F1F").s().p("AgJgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAFAIAJACIABAAIAAABIgDADQgKgCgGgKg");
	this.shape.setTransform(15.2,11.7,1.934,1.934);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F37C71").s().p("AgDAAQAAgEADAAQAEAAAAAEQAAAFgEAAQgDAAAAgFg");
	this.shape_1.setTransform(20.9,2.1,1.934,1.934);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#162617").s().p("AgCAaQgPgEADgZQAAgEACgFQADgJAGgDIADgBQAGAAAFAHQAEAHABALQABAOgIAIQgEAEgFAAgAgBgUQgIADAAAOIAAABQgCAUAKADIABAAQACABADgDQAHgGgBgNQgBgIgDgGQgDgGgEAAg");
	this.shape_2.setTransform(20.7,2.2,1.934,1.934);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5DD27").s().p("AgBAYQgFgDgCgCQgFgIABgOIACgIQADgJAFgCQAFgDAFAHQAEAHABALQABAIgEAIQgEAIgGAAIgBAAg");
	this.shape_3.setTransform(20.7,2.2,1.934,1.934);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#162617").s().p("AgCAaQgPgDADgaQAAgEACgGQADgIAGgDIADgBQAGAAAFAHQAEAHABALQABAOgIAIQgEAEgFAAgAgBgUQgIAEAAANQgCAVALADQACABADgDQAHgGgBgNQgBgIgDgGQgDgHgEAAg");
	this.shape_4.setTransform(19.2,2.1,1.934,1.934);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D5DD27").s().p("AgCAYQgMgDACgXIACgIQACgJAGgDQAFgDAEAHQAFAHABALQABAJgEAHQgEAIgGAAIgCAAg");
	this.shape_5.setTransform(19.2,2,1.934,1.934);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#172719").s().p("AgfAkIgCgCQgFgFgBgHQgBgHAEgGQARgaAUgQIABgBIAAAAIACgBIABAAQAHgEAHAAQAIABAGAGQAGAGABAJQAAAJgGAHIgBABQgQATgaARIAAAAQgFAEgFAAQgGAAgGgEgAAGggIAAAAIgBABIgCABQgUASgQAXQgDAFABAFQAAAGAEAEQAEAEAGABQAFAAAFgDIAAAAQAZgQAQgTIABgCIABAAQAEgGAAgHQgBgHgFgFQgFgFgGgBIgDAAQgFAAgFADg");
	this.shape_6.setTransform(-10.8,7.1,1.934,1.934);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#162617").s().p("AgaAnQgEgCgDgDQgFgFgBgHQgBgHAEgGQAPgYAWgSIABgBIABgBIABgBIABAAQAHgEAIABQAIABAGAFQAGAHABAJQAAAJgGAHIgBABQgQATgaASIAAAAQgFADgGAAIgHgBgAAHggIAAABIgBAAIAAABIgCABQgUARgQAYQgGAJAIAKQAJAIAKgGIAAgBQAZgQAQgTIACgBQAEgGAAgHQgBgHgFgFQgFgFgGAAIgDAAQgFAAgEACg");
	this.shape_7.setTransform(-10.9,7.1,1.934,1.934);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5DD26").s().p("AgVAlQgGAAgFgFQgKgKAIgMQAPgXAVgSIACgCIABgBIABAAQAGgEAHABQAIABAFAFQAGAGAAAIQABAIgGAHIAAgBIgBACQgOARgcATQgEADgEAAIgDgBg");
	this.shape_8.setTransform(-10.9,7.1,1.934,1.934);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-3.6,-8,1.935,1.935,0,0,0,9.6,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgMAEQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAFgDAHgBQAGgBAGADQABAAAAABQABAAAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAgBQgFgBgFAAQgEABgDADIgCABIgDgBg");
	this.shape_9.setTransform(5,-6.6,1.934,1.934);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DFBF80").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAIAAAAIAAAAg");
	this.shape_10.setTransform(2,6.8,1.934,1.934);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DFBF80").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBABIAAgBg");
	this.shape_11.setTransform(2.1,6.8,1.934,1.934);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DFBF7F").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgBAAIAAgBg");
	this.shape_12.setTransform(2,6.8,1.934,1.934);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DFC07F").s().p("AgBAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBABIgBAAIgBgBg");
	this.shape_13.setTransform(2,6.8,1.934,1.934);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DFC07D").s().p("AgBAAIAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAAAIgBABIgBABQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_14.setTransform(2,6.8,1.934,1.934);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DFC07C").s().p("AgCAAIAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_15.setTransform(2,6.8,1.934,1.934);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DFC07B").s().p("AgCAAIAAAAQAAAAAAgBQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIgCABQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(2,6.8,1.934,1.934);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DFC07B").s().p("AgCAAIAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgCABQAAAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBg");
	this.shape_17.setTransform(2.1,6.8,1.934,1.934);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DFC07A").s().p("AgDABIAAgBQABgCACAAQAEAAAAACQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgCAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_18.setTransform(2.1,6.8,1.934,1.934);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DFC07A").s().p("AgDABIAAgBQAAgCADgBQAEAAABADQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgCABQgBAAgCgDg");
	this.shape_19.setTransform(2.1,6.8,1.934,1.934);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0C278").s().p("AgEABIAAgBQABgDADAAQAFAAAAADQAAACgCABIgDABQgCAAgCgDg");
	this.shape_20.setTransform(2.1,6.8,1.934,1.934);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E0C277").s().p("AgEABIAAgBQAAgDAEAAQAFgBAAAEQABACgDACIgDABQgCAAgCgEg");
	this.shape_21.setTransform(2,6.8,1.934,1.934);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E0C277").s().p("AgFABIAAgBQABgEAEAAQAGAAAAAEQAAACgDACIgDABQgCAAgDgEg");
	this.shape_22.setTransform(2.1,6.7,1.934,1.934);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0C376").s().p("AgFABIAAgBQABgEAEAAQAGAAAAAEQAAACgDACIgDABQgDAAgCgEg");
	this.shape_23.setTransform(2,6.8,1.934,1.934);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0C375").s().p("AgFABIAAgCQABgDAEgBQAGAAABAFQAAACgDACIgEACQgDAAgCgFg");
	this.shape_24.setTransform(2.1,6.8,1.934,1.934);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E0C375").s().p("AgGABIAAgCQABgEAFAAQAHgBAAAGQAAACgDACIgEACQgDAAgDgFg");
	this.shape_25.setTransform(2,6.8,1.934,1.934);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E0C373").s().p("AgGABQAAgBgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQACgEAFgBQAHAAABAFQAAADgEACQgDADgBAAQgDAAgDgGg");
	this.shape_26.setTransform(2,6.8,1.934,1.934);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E0C573").s().p("AgHABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgEAGgBQAIAAAAAGQAAADgDACQgDACgCAAQgDAAgEgGg");
	this.shape_27.setTransform(2,6.8,1.934,1.934);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0C573").s().p("AgHACQAAgBAAgBQgBAAAAAAQAAAAABAAQAAgBAAAAQABgFAGAAQAIAAAAAGQABADgEADIgFABQgEAAgDgFg");
	this.shape_28.setTransform(2,6.8,1.934,1.934);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0C572").s().p("AgIACQAAgBAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQACgFAGAAQAJgBAAAHQAAADgEADQgDABgCAAQgEAAgEgFg");
	this.shape_29.setTransform(2,6.8,1.934,1.934);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DFC570").s().p("AgIACIAAgDQABgFAHgBQAJAAAAAHQABAEgFACQgDACgCAAQgEAAgEgGg");
	this.shape_30.setTransform(2,6.8,1.934,1.934);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DFC570").s().p("AgIACQgBgCAAgCQACgFAHAAQAJgBABAHQAAAFgEACQgEACgCAAQgEAAgEgGg");
	this.shape_31.setTransform(2,6.8,1.934,1.934);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DFC570").s().p("AgJACQgBgCABgCQABgFAIgBQAKAAAAAHQABAFgFADQgEACgCAAQgEAAgFgHg");
	this.shape_32.setTransform(2,6.8,1.934,1.934);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E1C66E").s().p("AgJACQgBgCAAgCQACgFAIgBQAKAAABAHQAAAFgFADQgDACgDAAQgFAAgEgHg");
	this.shape_33.setTransform(2,6.8,1.934,1.934);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1C66D").s().p("AgKACQgBgCABgCQACgGAIAAQALgBAAAIQABAFgGADQgEACgCAAQgFAAgFgHg");
	this.shape_34.setTransform(2,6.8,1.934,1.934);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E1C66C").s().p("AgKACQgBgCAAgCQACgGAJgBQALAAABAIQAAAFgFAEQgEACgDAAQgGAAgEgIg");
	this.shape_35.setTransform(2,6.8,1.934,1.934);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E1C66B").s().p("AgLACQgBgCABgCQACgHAJAAQAMgBAAAJQAAAGgFADQgEACgDAAQgGAAgFgIg");
	this.shape_36.setTransform(2,6.8,1.934,1.934);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E1C769").s().p("AgLACQgBgCABgDQACgGAJgBQAMAAABAIQAAAGgGAEQgEADgDAAQgGAAgFgJg");
	this.shape_37.setTransform(2,6.8,1.934,1.934);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E1C769").s().p("AgLACQgCgCABgDQACgHAKAAQAMgBABAJQAAAGgGAEQgEADgDAAQgGAAgFgJg");
	this.shape_38.setTransform(2,6.8,1.934,1.934);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E1C769").s().p("AgMADQgBgDABgDQACgHAKAAQANgBAAAKQABAGgGAEQgFACgDAAQgGAAgGgIg");
	this.shape_39.setTransform(2,6.8,1.934,1.934);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DFC868").s().p("AgMADQgCgDABgDQACgHALgBQANAAABAKQAAAGgGAEQgFADgDAAQgHAAgFgJg");
	this.shape_40.setTransform(2,6.8,1.934,1.934);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DFC867").s().p("AgNADQgBgDABgDQACgIALAAQAOgBAAAKQABAHgHAEQgFADgDAAQgHAAgGgJg");
	this.shape_41.setTransform(2,6.8,1.934,1.934);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DFC867").s().p("AgNACQgCgCABgEQADgHALgBQAOAAABAKQAAAHgHAEQgFAEgDAAQgHAAgGgLg");
	this.shape_42.setTransform(2,6.8,1.934,1.934);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E0C967").s().p("AgNADQgCgDABgDQADgIALgBQAPAAAAAKQABAIgHAEQgGADgDAAQgIAAgFgKg");
	this.shape_43.setTransform(2.1,6.8,1.934,1.934);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E0C965").s().p("AgOADQgBgDABgDQACgJAMAAQAPgBABALQAAAIgHAEQgGADgDAAQgIAAgGgKg");
	this.shape_44.setTransform(2.1,6.7,1.934,1.934);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E0C965").s().p("AgOADQgCgDABgDQADgJAMgBQAQAAAAALQABAIgIAFQgFADgEAAQgIAAgGgLg");
	this.shape_45.setTransform(2.1,6.7,1.934,1.934);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E0C964").s().p("AgPADQgBgDABgEQACgIANgBQAQAAABALQAAAIgHAFQgGADgEAAQgIAAgHgLg");
	this.shape_46.setTransform(2.1,6.8,1.934,1.934);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E0CA63").s().p("AgPADQgCgDABgEQADgJANgBQARAAAAALQAAAJgHAFQgGAEgEAAQgJAAgGgMg");
	this.shape_47.setTransform(2,6.8,1.934,1.934);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E0C962").s().p("AgQADQgBgDABgEQADgJANgBQARAAAAAMQABAJgIAEQgGAEgEAAQgJAAgHgMg");
	this.shape_48.setTransform(2,6.8,1.934,1.934);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E0C961").s().p("AgQADQgCgDACgEQACgKAOAAQARgBABANQAAAJgIAFQgGADgEAAQgJAAgHgMg");
	this.shape_49.setTransform(2,6.8,1.934,1.934);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E2CC61").s().p("AgQAEQgCgEABgEQADgKAOAAQASgBAAANQABAJgIAFQgHADgEAAQgJAAgHgLg");
	this.shape_50.setTransform(2,6.8,1.934,1.934);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E2CC60").s().p("AgRAEQgCgEACgEQACgKAPgBQASAAABANQAAAJgIAFQgHAEgEAAQgJAAgIgMg");
	this.shape_51.setTransform(2,6.8,1.934,1.934);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E2CC5E").s().p("AgRAEQgCgEABgEQADgLAPAAQATgBAAANQABAKgJAGQgGADgFAAQgKAAgHgMg");
	this.shape_52.setTransform(2,6.8,1.934,1.934);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E2CD5D").s().p("AgSAEQgCgEACgFQADgKAPgBQATAAABANQAAALgJAFQgHAEgEAAQgKAAgIgNg");
	this.shape_53.setTransform(2,6.8,1.934,1.934);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E2CD5C").s().p("AgSADQgCgDABgFQADgLAQAAQAUgBAAAOQABAKgJAGQgHAEgFAAQgKAAgIgOg");
	this.shape_54.setTransform(2,6.8,1.934,1.934);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E2CD5C").s().p("AgTAEQgCgEACgFQADgLAQAAQAUgBABAOQAAALgJAFQgHAEgFAAQgLAAgIgNg");
	this.shape_55.setTransform(2,6.8,1.934,1.934);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E2CD5C").s().p("AgTAEQgCgEACgFQADgLAQgBQAUAAABAOQABALgKAGQgHAEgFAAQgLAAgIgOg");
	this.shape_56.setTransform(2.1,6.8,1.934,1.934);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2CE5B").s().p("AgTAEQgCgEABgFQADgMARAAQAVgBAAAPQABALgKAGQgHAEgFAAQgLAAgIgOg");
	this.shape_57.setTransform(2,6.8,1.934,1.934);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E2CE5A").s().p("AgUAEQgCgEACgGQADgLARgBQAVAAABAOQABAMgKAGQgIAFgFAAQgMAAgIgPg");
	this.shape_58.setTransform(2.1,6.8,1.934,1.934);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#231F20").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDgAgDAAQAAADADAAQAEAAAAgDQAAgDgEAAQgDAAAAADg");
	this.shape_59.setTransform(6,-0.5,1.934,1.934);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGAAQgBgHAHABQAHgBABAHQgBAHgHABQgHgBABgHg");
	this.shape_60.setTransform(6,-0.5,1.934,1.934);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgIACQgDgIAEgLIAAAAIARAVIgIAOQgHgGgDgKg");
	this.shape_61.setTransform(-19.1,-12.1,1.934,1.934);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#142615").s().p("AAAAPQgKAIgOAAQgHAAgFgCQgTgHgNgaQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAQgHAQAAQAHAAAIACQAOAGAFAOQAHgPANgFQAIgCAHAAQAQAAAQAHQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQgMAagTAHQgGACgGAAQgNAAgMgIgAAWgPQgPAGgFARIgBACQANAIALAAQAFAAAFgBQARgHALgWQgTgFgJAAQgFAAgIACgAg+gMQALAWARAHIAKABQANAAALgIIAAAAIgBgCQgGgSgOgFQgHgCgGAAQgLAAgRAFg");
	this.shape_62.setTransform(-0.6,-25,1.934,1.934);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#71B444").s().p("AAAAMQgEAEgIADQgMAEgLgEQgTgHgLgZIAPgFQASgEAMAFQARAHADASQAFgTAQgGQATgIAaAMQgMAZgSAHQgGACgGAAQgMAAgMgJg");
	this.shape_63.setTransform(-0.6,-25,1.934,1.934);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#142615").s().p("AgRB1IgCAAQgxgIgVgdQgXggAJg2QAAgIAFgPQgLgKgDgPQgEgOAGgPIAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACAAIAkAPQATgSAdgFQAJgDANgBIAAgTQAAgBAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAHAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABIAAATQAmADAcAXIALAMQALAMAFALQAKAUACAUQACAUgGAVQgHAUgOARQggAjg5ABIgRgCgAhrg1QADANALAJIABACQgFAOgBAKQgKA0AXAfQAVAcAuAHIABAAIARABQA2AAAfgjQAdgggFgqQgDgSgJgTQgEgLgLgNQgJgKgBABQgcgZglgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgTIgDAAIAAATQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgJAAgNADQgdAHgSARQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgJgFIgagKQgEANAEANg");
	this.shape_64.setTransform(-0.8,-1.1,1.934,1.934);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D6DE23").s().p("AgRBzQhlgQAShoQAAgLAFgNQgLgJgEgPQgEgPAGgOIAAAAIAcALIAJAFQAUgRAcgHQANgDAKAAIAAgWIAHAAIAAAWQAlAAAeAaIAKAKQALAMAFAMQAJATACATQAGAsgfAhQgeAig4AAIgRgBg");
	this.shape_65.setTransform(-0.8,-1.1,1.934,1.934);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F37C71").s().p("AgDAAQAAgEADAAQAEAAAAAEQAAAFgEAAQgDAAAAgFg");
	this.shape_66.setTransform(20.8,2.1,1.934,1.934);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#162617").s().p("AgCAaIAAAAQgPgEADgZQAAgEACgFQACgJAHgDIADgBQAGAAAFAHQAEAHABALQABAOgJAIQgEAEgEAAgAgBgUQgEACgCAGQgCAFAAAEIAAABQgCAVAKACQADABADgDQAGgGgBgNQAAgIgDgGQgDgGgEAAg");
	this.shape_67.setTransform(20.7,2.2,1.934,1.934);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D5DD27").s().p("AgBAYQgFgDgCgCQgFgIABgOIACgIQACgJAGgCQAFgDAFAHQAEAHABALQABAJgEAHQgEAIgGAAIgBAAg");
	this.shape_68.setTransform(20.7,2.2,1.934,1.934);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#162617").s().p("AgCAaQgPgEADgZQAAgEACgGQACgIAHgDIADgBQAGAAAFAHQAEAHABALQABAOgIAIQgEAEgFAAgAgBgUQgGADgCAOQgCAWAKACQADABADgDQAGgGgBgNQAAgIgDgGQgDgHgEAAg");
	this.shape_69.setTransform(19.2,2.1,1.934,1.934);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D5DD27").s().p("AgBAYQgNgDACgXIACgIQACgJAGgDQAFgDAFAHQAEAHABALQABAJgEAHQgEAIgGAAIgBAAg");
	this.shape_70.setTransform(19.2,2,1.934,1.934);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#162718").s().p("AgPBLIgFgEQgSgPAPhCQAEgVAHgYIAGgUQABAAAAgBQAAAAABAAQAAgBAAAAQABABAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgGAUQgIAXgEAVQgOBAAQANQAGAGAFgBQAFgBAEgOQAMgWANgDQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAQgMACgKAVQgHAPgFABIgCABQgFAAgDgDg");
	this.shape_71.setTransform(-8.1,14.1,1.934,1.934);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#142615").s().p("AgUBHQgSgPAOhCQAFgVAHgYIAGgUQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQgOAogGAjQgKA2AOAMQAHAFAEAAQAFgBAEgOQALgWAOgDIACAAIABACQAAAAAAABQAAABAAAAQAAAAgBAAQAAABgBAAQgMACgJAVQgIAPgFABIgCABQgGAAgHgHg");
	this.shape_72.setTransform(-8.1,14.1,1.934,1.934);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D6DE23").s().p("AgTBFQgRgNAPhBQAHgiALgfIAgBuQgMACgNAZQgEAMgIAAQgFAAgGgGg");
	this.shape_73.setTransform(-8.1,14.1,1.934,1.934);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#162718").s().p("AgCBLQgGgCgFgRQgDgLgCgEQgEgIgIgDQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQABABAAAAQANAFAHAYQADAOAFACQADACAHgEQASgKgBhBIgCguIgDgVQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAQABABAAABIACAUIADAuQABBFgVALIgFACIgGACIgDgCg");
	this.shape_74.setTransform(4.8,13.5,1.934,1.934);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#142615").s().p("AgCBMQgHgDgEgQQgGgXgLgEQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQANAGAHAYQADAOAFACQACACAIgEQAQgJABg2QABgmgGgpQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIACAUIADAuQABBFgVALQgGADgGABg");
	this.shape_75.setTransform(4.8,13.5,1.934,1.934);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D6DE23").s().p("AgKA8QgIgbgLgFIA1hlIAFBDQACBDgUAKQgFADgEAAQgHAAgFgOg");
	this.shape_76.setTransform(4.8,13.5,1.934,1.934);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-29.5,46.9,58.8);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AizFUIAAqnIFnAAIAAKng");
	mask.setTransform(18,34);

	// 레이어 3
	this.instance = new lib.Path_26();
	this.instance.setTransform(9.2,38.9,1,1,0,0,0,0.6,0.7);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(7,39.2,1,1,0,0,0,0.5,0.7);

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.setTransform(4,40.3,1,1,0,0,0,0.4,0.5);

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.setTransform(9.9,45.6,1,1,0,0,0,0.9,1.1);

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.setTransform(7.8,45.4,1,1,0,0,0,0.8,1.2);

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.setTransform(9.7,44.9);

	this.instance_6 = new lib.Path_6_1();
	this.instance_6.setTransform(7.5,45.5);

	this.instance_7 = new lib.Path_7_0();
	this.instance_7.setTransform(5.4,45.6,1,1,0,0,0,0.7,1);

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.setTransform(12.1,41.6,1,1,0,0,0,0.7,0.8);

	this.instance_9 = new lib.Path_9_0();
	this.instance_9.setTransform(9.8,41.1,1,1,0,0,0,0.6,1.2);

	this.instance_10 = new lib.Path_10();
	this.instance_10.setTransform(7.4,41.3,1,1,0,0,0,0.5,0.6);

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(27.2,43.7);

	this.instance_12 = new lib.Path_12();
	this.instance_12.setTransform(24.4,43.6,1,1,0,0,0,0.5,0.8);

	this.instance_13 = new lib.Path_13();
	this.instance_13.setTransform(30.6,42.5,1,1,0,0,0,0.7,0.8);

	this.instance_14 = new lib.Path_14_0();
	this.instance_14.setTransform(29.9,40.5,1,1,0,0,0,0.8,1);

	this.instance_15 = new lib.Path_15();
	this.instance_15.setTransform(27.7,39.6,1,1,0,0,0,0.5,0.8);

	this.instance_16 = new lib.Path_16();
	this.instance_16.setTransform(20,34.8,1,1,0,0,0,0.6,0.8);

	this.instance_17 = new lib.Path_17();
	this.instance_17.setTransform(17.5,34.8,1,1,0,0,0,0.4,0.8);

	this.instance_18 = new lib.Path_18();
	this.instance_18.setTransform(13.4,34.2,1,1,0,0,0,0.7,1);

	this.instance_19 = new lib.Path_19_0();
	this.instance_19.setTransform(14.5,31.8,1,1,0,0,0,1,1.2);

	this.instance_20 = new lib.Path_20();
	this.instance_20.setTransform(22.6,30.3,1,1,0,0,0,0.6,1.1);

	this.instance_21 = new lib.Path_21();
	this.instance_21.setTransform(20.2,30.7,1,1,0,0,0,0.5,0.8);

	this.instance_22 = new lib.Path_22();
	this.instance_22.setTransform(17.7,29.9,1,1,0,0,0,0.5,0.8);

	this.instance_23 = new lib.Path_23();
	this.instance_23.setTransform(21.5,27,1,1,0,0,0,0.5,0.7);

	this.instance_24 = new lib.Path_24();
	this.instance_24.setTransform(19.3,26.9,1,1,0,0,0,0.4,0.7);

	this.instance_25 = new lib.Path_25();
	this.instance_25.setTransform(16.3,27,1,1,0,0,0,0.5,0.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1D987").s().p("AgCA5QgZgBgPgSQgQgTACgWQACgYARgPQASgQAXACQAXABAQATQAQASgBAWQgDAYgSAPQgQAOgUAAIgDAAg");
	this.shape.setTransform(27.1,41.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDCA57").s().p("AgDA5QgXgCgQgSQgQgSABgWQACgYATgPQASgQAVACQAZABAQASQAPATgCAVQgCAYgSAQQgQAOgUAAIgEAAg");
	this.shape_1.setTransform(8.5,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDCA57").s().p("AgFBRQghgDgWgZQgWgaACgfQACgiAagWQAZgWAgACQAiACAWAaQAWAagCAfQgDAigZAWQgXAUgeAAIgFAAg");
	this.shape_2.setTransform(19.1,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7A7957").s().p("AAfA8QgIgBgIgGIgOgMQgOgMgNgNQgOgQgGgNQgGgQAAgUQAAgEAFgEQAFgDACAEQAPAeAZAZQAPAOAJAFIAOAGQAIACAEAGQAGAIgIAKQgIAKgIAAIgBAAg");
	this.shape_3.setTransform(13.4,47.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A7957").s().p("AgoAlQgDgMAIgHQAGgGANgJIASgLQAYgUAOgPQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgLAdgOASQgMAQgGAIQgNAMgMAEIgGABQgGAAgCgIg");
	this.shape_4.setTransform(20.4,44.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7A7957").s().p("AgWDRQgHgTgBgaIABguQABg+ADgyQAEhAAHgsQAKg6ASgvQACgGAIgDQAHgDAAAJIgJBnQgEA7AAAsQABAdAGBFQAEA+gLAkQgDAMgPAJQgFAFgFAAQgIAAgEgJg");
	this.shape_5.setTransform(17.9,50.4);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,23,30.3,45.1);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EglKAaoMAAAg1PMBKVAAAMAAAA1Pg");
	mask_1.setTransform(255.2,178.7);

	// 레이어 3
	this.instance = new lib.Path_29();
	this.instance.setTransform(0,281);

	this.instance_1 = new lib.Path_1_4();
	this.instance_1.setTransform(0,213);

	this.instance_2 = new lib.Path_2_5();
	this.instance_2.setTransform(0,145);

	this.instance_3 = new lib.Path_28();
	this.instance_3.setTransform(426,145);

	this.instance_4 = new lib.Path_1_3();
	this.instance_4.setTransform(358,145);

	this.instance_5 = new lib.Path_2_4();
	this.instance_5.setTransform(290,145);

	this.instance_6 = new lib.Path_3_3();
	this.instance_6.setTransform(222,145);

	this.instance_7 = new lib.Path_4_4();
	this.instance_7.setTransform(154,145);

	this.instance_8 = new lib.Path_5_3();
	this.instance_8.setTransform(86,145);

	this.instance_9 = new lib.Path_27();
	this.instance_9.setTransform(426,213);

	this.instance_10 = new lib.Path_1_2();
	this.instance_10.setTransform(358,213);

	this.instance_11 = new lib.Path_2_3();
	this.instance_11.setTransform(290,213);

	this.instance_12 = new lib.Path_3_2();
	this.instance_12.setTransform(222,213);

	this.instance_13 = new lib.Path_4_3();
	this.instance_13.setTransform(154,213);

	this.instance_14 = new lib.Path_5_2();
	this.instance_14.setTransform(86,213);

	this.instance_15 = new lib.Path_3_1();
	this.instance_15.setTransform(426,0);

	this.instance_16 = new lib.Path_4_2();
	this.instance_16.setTransform(358,0);

	this.instance_17 = new lib.Path_5_1();
	this.instance_17.setTransform(290,0);

	this.instance_18 = new lib.Path_6_2();
	this.instance_18.setTransform(222,0);

	this.instance_19 = new lib.Path_7_1();
	this.instance_19.setTransform(154,0);

	this.instance_20 = new lib.Path_8_1();
	this.instance_20.setTransform(86,0);

	this.instance_21 = new lib.Path_9_1();
	this.instance_21.setTransform(0,77);

	this.instance_22 = new lib.Group_16();
	this.instance_22.setTransform(414.2,259.5,1,1,0,0,0,0.8,1.1);

	this.instance_23 = new lib.Group_1_13();
	this.instance_23.setTransform(412.1,259.3,1,1,0,0,0,0.8,1.2);

	this.instance_24 = new lib.Group_2_13();
	this.instance_24.setTransform(411.8,259.4);

	this.instance_25 = new lib.Group_3_13();
	this.instance_25.setTransform(409.7,259.5,1,1,0,0,0,0.7,1);

	this.instance_26 = new lib.Group_15();
	this.instance_26.setTransform(415.2,239.7,1,1,0,0,0,0.9,1.1);

	this.instance_27 = new lib.Group_1_12();
	this.instance_27.setTransform(413,239.4,1,1,0,0,0,0.8,1.2);

	this.instance_28 = new lib.Group_2_12();
	this.instance_28.setTransform(412.7,239.5);

	this.instance_29 = new lib.Group_3_12();
	this.instance_29.setTransform(410.6,239.6,1,1,0,0,0,0.7,0.9);

	this.instance_30 = new lib.ClipGroup_0();
	this.instance_30.setTransform(194.4,113.2,1,1,0,0,0,18,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009256").s().p("AjuB+QgWABgPgSQgPgQAAgZQAAgZAPgRQAQgRAVAAIAOAAQAIglAfgZQAfgaApAAQAuAAAiAhQARgjAfgXQAigVApgBQA5AAAoAoQAoAoABA3IALAAQAWAAAPARQAPARAAAZQAAAZgPAQQgPASgWgBg");
	this.shape_1.setTransform(327.8,132.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAqIAAhTIAPAAIAABTg");
	this.shape_2.setTransform(265.5,129.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAqIAAhTIAPAAIAABTg");
	this.shape_3.setTransform(256.5,129.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#74B9D2").s().p("AiDAeIAAg8IEHAAIAAA8g");
	this.shape_4.setTransform(261.1,129.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiXA1IAAhpIEvAAIAABpg");
	this.shape_5.setTransform(261.1,129.1);

	this.instance_31 = new lib.Path_9();
	this.instance_31.setTransform(261.2,118.9,1,1,0,0,0,21.4,0.1);
	this.instance_31.alpha = 0.5;

	this.instance_32 = new lib.Path_8();
	this.instance_32.setTransform(275.1,114.1,1,1,0,0,0,2.1,5);
	this.instance_32.alpha = 0.5;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape_6.setTransform(275.1,114);

	this.instance_33 = new lib.Path_2_1();
	this.instance_33.setTransform(265.8,114.1,1,1,0,0,0,2.1,5);
	this.instance_33.alpha = 0.5;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape_7.setTransform(265.8,114);

	this.instance_34 = new lib.Path_4_0();
	this.instance_34.setTransform(256.4,114.1,1,1,0,0,0,2.1,5);
	this.instance_34.alpha = 0.5;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape_8.setTransform(256.4,114);

	this.instance_35 = new lib.Path_6_0();
	this.instance_35.setTransform(247,114.1,1,1,0,0,0,2.1,5);
	this.instance_35.alpha = 0.5;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8EA681").s().p("AgUAxIAAhhIApAAIAABhg");
	this.shape_9.setTransform(247.1,114);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8EA681").s().p("AgYAxIAAhhIAxAAIAABhg");
	this.shape_10.setTransform(242.4,114);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8EA681").s().p("AgYAxIAAhhIAxAAIAABhg");
	this.shape_11.setTransform(251.7,114);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8EA681").s().p("AgYAxIAAhhIAxAAIAABhg");
	this.shape_12.setTransform(279.8,114);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8EA681").s().p("AgYAxIAAhhIAxAAIAABhg");
	this.shape_13.setTransform(261.1,114);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8EA681").s().p("AgYAxIAAhhIAxAAIAABhg");
	this.shape_14.setTransform(270.5,114);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#689B40").s().p("AgRAOQgHgGgBgIQABgHAHgGQAHgGAKAAQALAAAHAGQAHAGABAHQgBAIgHAGQgHAGgLAAQgKAAgHgGg");
	this.shape_15.setTransform(279.9,118.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3FA781").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_16.setTransform(275.3,118.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#689B40").s().p("AgRAOQgIgGAAgIQAAgHAIgGQAHgGAKAAQAKAAAIAGQAIAGAAAHQAAAIgIAGQgIAGgKAAQgKAAgHgGg");
	this.shape_17.setTransform(270.5,118.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3FA781").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_18.setTransform(265.9,118.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#689B40").s().p("AgRAOQgIgGAAgIQAAgHAIgGQAHgGAKAAQAKAAAIAGQAIAGAAAHQAAAIgIAGQgIAGgKAAQgKAAgHgGg");
	this.shape_19.setTransform(261.1,118.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3FA781").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_20.setTransform(256.5,118.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#689B40").s().p("AgRAOQgIgGAAgIQAAgHAIgGQAIgGAJAAQAKAAAIAGQAIAGAAAHQAAAIgIAGQgIAGgKAAQgJAAgIgGg");
	this.shape_21.setTransform(251.7,118.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3FA781").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_22.setTransform(247.1,118.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#689B40").s().p("AgRAOQgIgGAAgIQAAgHAIgGQAIgGAJAAQAKAAAIAGQAIAGAAAHQAAAIgIAGQgIAGgKAAQgJAAgIgGg");
	this.shape_23.setTransform(242.3,118.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C09558").s().p("Ai9CxQgKAAAAgMIAAlJQAAgFADgEQADgDAEAAIF7AAQAEAAADADQADAEAAAFIAAFJQAAAFgDAEQgDADgEAAg");
	this.shape_24.setTransform(261.1,127.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#98C74C").s().p("Ah2A/QgLAAgIgJQgHgIAAgNQAAgMAHgIQAIgJALAAIAHAAQAEgRAPgNQAQgMAUAAQAYAAAQAQQAJgSAOgLQARgLAVAAQAcAAAUAUQAUAUABAaIAFAAQALAAAIAJQAHAIAAAMQAAANgHAIQgIAJgLAAg");
	this.shape_25.setTransform(44.2,262.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009256").s().p("AhWAuQgIAAgFgGQgGgHAAgIQAAgJAGgHQAFgGAIAAIAFAAQADgMAMgJQALgKAOAAQARAAANAMQAGgNALgIQAMgIAPAAQAUAAAPAPQAOAOAAATIAFAAQAIAAAFAGQAGAHAAAJQAAAIgGAHQgFAGgIAAg");
	this.shape_26.setTransform(337.6,244.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#98C74C").s().p("AiABEQgMAAgIgJQgIgKAAgMQAAgNAIgKQAIgKAMAAIAIAAQAEgSAQgOQASgOAVAAQAZAAATASQAIgTARgMQASgMAWAAQAeAAAWAWQAWAVABAcIAGAAQAMAAAIAKQAIAKAAANQAAAMgIAKQgIAJgMAAg");
	this.shape_27.setTransform(455.2,326.1);

	this.instance_36 = new lib.Group_14();
	this.instance_36.setTransform(448.3,298.8,1,1,0,0,0,0.9,1.1);

	this.instance_37 = new lib.Group_1_11();
	this.instance_37.setTransform(446.1,298.6,1,1,0,0,0,0.8,1.2);

	this.instance_38 = new lib.Group_2_11();
	this.instance_38.setTransform(445.8,298.7);

	this.instance_39 = new lib.Group_3_11();
	this.instance_39.setTransform(443.7,298.8,1,1,0,0,0,0.7,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#99CF8C").s().p("AgjBMQgGgWAPgrQANgiAaglQAOgSALgLIhACzQgGgCgDgMg");
	this.shape_28.setTransform(468,320.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#62B64C").s().p("AAghZIABAmQgDAugNAjQgQAqgRAOIgQAEg");
	this.shape_29.setTransform(468.6,320.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#62B64C").s().p("AglhZIAZAdQAaAlANAiQAPArgGAWQgDAMgGACg");
	this.shape_30.setTransform(460.6,320.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#99CF8C").s().p("AARBWQgRgOgQgqQgNgjgDguIABgmIBACzIgDAAQgGAAgHgEg");
	this.shape_31.setTransform(460.1,320.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EF519D").s().p("AgUhHIAUAbQAUAhAAAcQAAAhgUAOIgUAIg");
	this.shape_32.setTransform(466.5,304.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA94BF").s().p("AAABAQgUgOAAghQAAgcAUghQAKgQALgLIAACPQgLAAgKgIg");
	this.shape_33.setTransform(462.2,304.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E570AB").s().p("AgiBBQgDgfAIggQAOg+AzgEIgZBfQgDAJgHAJQgLAQgVAAIgDAAg");
	this.shape_34.setTransform(467.9,305.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E570AB").s().p("AAAAxIgKgSIgZhfQAzAEAPA+QAHAggDAfIgCAAQgWAAgLgQg");
	this.shape_35.setTransform(460.8,305.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#62B64C").s().p("AgBBpIAAjRIADAAIAADRg");
	this.shape_36.setTransform(464.7,318.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#99CF8C").s().p("AgCBpIAAjRIAEAAIAADRg");
	this.shape_37.setTransform(464.1,318.7);

	this.instance_40 = new lib.Path_1_0();
	this.instance_40.setTransform(471.1,329.2,1,1,0,0,0,9.8,3.1);
	this.instance_40.alpha = 0.398;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#98C74C").s().p("Ah/BEQgMAAgIgJQgJgJAAgOQAAgNAJgJQAIgJAMAAIAHAAQAEgUARgNQARgOAVAAQAaAAASASQAIgUARgLQASgMAXAAQAeAAAVAVQAXAWAAAdIAGAAQAMAAAIAJQAIAJAAANQAAAOgIAJQgIAJgMAAg");
	this.shape_38.setTransform(321.9,257.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C2D7C1").s().p("AgBB4IAAjvIADAAIAADvg");
	this.shape_39.setTransform(449.5,126.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C2D7C1").s().p("AhAADIAAgFICBAAIAAAFg");
	this.shape_40.setTransform(449.3,130.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C2D7C1").s().p("AhAADIAAgFICBAAIAAAFg");
	this.shape_41.setTransform(449,125.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C2D7C1").s().p("AhAADIAAgFICBAAIAAAFg");
	this.shape_42.setTransform(448.7,120.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeBiIAAjDIA9AAIAADDg");
	this.shape_43.setTransform(449.3,126.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C2D7C1").s().p("AhHCeIAAk7ICPAAIAAE7g");
	this.shape_44.setTransform(448.9,129.3);

	this.instance_41 = new lib.Group_13();
	this.instance_41.setTransform(139.1,332.2,1,1,0,0,0,0.8,1.1);

	this.instance_42 = new lib.Group_1_10();
	this.instance_42.setTransform(137.1,331.9,1,1,0,0,0,0.8,1.2);

	this.instance_43 = new lib.Group_2_10();
	this.instance_43.setTransform(136.8,332.1);

	this.instance_44 = new lib.Group_3_10();
	this.instance_44.setTransform(134.7,332.2,1,1,0,0,0,0.7,1);

	this.instance_45 = new lib.Group_12();
	this.instance_45.setTransform(140.1,312.3,1,1,0,0,0,0.9,1.1);

	this.instance_46 = new lib.Group_1_9();
	this.instance_46.setTransform(138,312.1,1,1,0,0,0,0.8,1.2);

	this.instance_47 = new lib.Group_2_9();
	this.instance_47.setTransform(137.7,312.2);

	this.instance_48 = new lib.Group_3_9();
	this.instance_48.setTransform(135.6,312.3,1,1,0,0,0,0.7,1);

	this.instance_49 = new lib.Group_11();
	this.instance_49.setTransform(113.6,295.7,1,1,0,0,0,0.9,1.1);

	this.instance_50 = new lib.Group_1_8();
	this.instance_50.setTransform(111.4,295.4,1,1,0,0,0,0.8,1.2);

	this.instance_51 = new lib.Group_2_8();
	this.instance_51.setTransform(111.2,295.5);

	this.instance_52 = new lib.Group_3_8();
	this.instance_52.setTransform(109.1,295.6,1,1,0,0,0,0.7,0.9);

	this.instance_53 = new lib.Group_10();
	this.instance_53.setTransform(281.5,329.4,1,1,0,0,0,0.9,1.1);

	this.instance_54 = new lib.Group_1_7();
	this.instance_54.setTransform(279.4,329.1,1,1,0,0,0,0.8,1.2);

	this.instance_55 = new lib.Group_2_7();
	this.instance_55.setTransform(279.1,329.2);

	this.instance_56 = new lib.Group_3_7();
	this.instance_56.setTransform(277,329.4,1,1,0,0,0,0.7,1);

	this.instance_57 = new lib.Group_9();
	this.instance_57.setTransform(282.5,309.5,1,1,0,0,0,0.9,1.1);

	this.instance_58 = new lib.Group_1_6();
	this.instance_58.setTransform(280.3,309.2,1,1,0,0,0,0.8,1.2);

	this.instance_59 = new lib.Group_2_6();
	this.instance_59.setTransform(280,309.4);

	this.instance_60 = new lib.Group_3_6();
	this.instance_60.setTransform(277.9,309.4,1,1,0,0,0,0.7,0.9);

	this.instance_61 = new lib.Group_8();
	this.instance_61.setTransform(210.2,259.5,1,1,0,0,0,0.8,1.1);

	this.instance_62 = new lib.Group_1_5();
	this.instance_62.setTransform(208.1,259.3,1,1,0,0,0,0.8,1.2);

	this.instance_63 = new lib.Group_2_5();
	this.instance_63.setTransform(207.8,259.4);

	this.instance_64 = new lib.Group_3_5();
	this.instance_64.setTransform(205.7,259.5,1,1,0,0,0,0.7,1);

	this.instance_65 = new lib.Group_7();
	this.instance_65.setTransform(211.2,239.7,1,1,0,0,0,0.9,1.1);

	this.instance_66 = new lib.Group_1_4();
	this.instance_66.setTransform(209,239.4,1,1,0,0,0,0.8,1.2);

	this.instance_67 = new lib.Group_2_4();
	this.instance_67.setTransform(208.7,239.5);

	this.instance_68 = new lib.Group_3_4();
	this.instance_68.setTransform(206.6,239.6,1,1,0,0,0,0.7,0.9);

	this.instance_69 = new lib.Group_6();
	this.instance_69.setTransform(200,327.8,1,1,0,0,0,0.9,1.1);

	this.instance_70 = new lib.Group_1_3();
	this.instance_70.setTransform(197.8,327.6,1,1,0,0,0,0.8,1.2);

	this.instance_71 = new lib.Group_2_3();
	this.instance_71.setTransform(197.6,327.7);

	this.instance_72 = new lib.Group_3_3();
	this.instance_72.setTransform(195.5,327.8,1,1,0,0,0,0.7,1);

	this.instance_73 = new lib.Group_5();
	this.instance_73.setTransform(177,304.9,1,1,0,0,0,0.9,1.1);

	this.instance_74 = new lib.Group_1_2();
	this.instance_74.setTransform(174.9,304.6,1,1,0,0,0,0.8,1.2);

	this.instance_75 = new lib.Group_2_2();
	this.instance_75.setTransform(174.6,304.7);

	this.instance_76 = new lib.Group_3_2();
	this.instance_76.setTransform(172.5,304.8,1,1,0,0,0,0.7,0.9);

	this.instance_77 = new lib.Path_7();
	this.instance_77.setTransform(188.1,315.2,1,1,0,0,0,30.4,29.7);
	this.instance_77.alpha = 0.602;

	this.instance_78 = new lib.Group_4();
	this.instance_78.setTransform(404,327.8,1,1,0,0,0,0.9,1.1);

	this.instance_79 = new lib.Group_1_1();
	this.instance_79.setTransform(401.8,327.6,1,1,0,0,0,0.8,1.2);

	this.instance_80 = new lib.Group_2_1();
	this.instance_80.setTransform(401.6,327.7);

	this.instance_81 = new lib.Group_3_1();
	this.instance_81.setTransform(399.5,327.8,1,1,0,0,0,0.7,1);

	this.instance_82 = new lib.Group_0();
	this.instance_82.setTransform(381,304.9,1,1,0,0,0,0.9,1.1);

	this.instance_83 = new lib.Group_1_0();
	this.instance_83.setTransform(378.9,304.6,1,1,0,0,0,0.8,1.2);

	this.instance_84 = new lib.Group_2_0();
	this.instance_84.setTransform(378.6,304.7);

	this.instance_85 = new lib.Group_3_0();
	this.instance_85.setTransform(376.5,304.8,1,1,0,0,0,0.7,0.9);

	this.instance_86 = new lib.Path_6();
	this.instance_86.setTransform(392.1,315.2,1,1,0,0,0,30.4,29.7);
	this.instance_86.alpha = 0.602;

	this.instance_87 = new lib.Group();
	this.instance_87.setTransform(453.6,238.6,1,1,0,0,0,0.9,1.1);

	this.instance_88 = new lib.Group_1();
	this.instance_88.setTransform(451.4,238.4,1,1,0,0,0,0.8,1.2);

	this.instance_89 = new lib.Group_2();
	this.instance_89.setTransform(451.2,238.5);

	this.instance_90 = new lib.Group_3();
	this.instance_90.setTransform(449.1,238.5,1,1,0,0,0,0.7,0.9);

	this.instance_91 = new lib.Path_14();
	this.instance_91.setTransform(460.1,247.2,1,1,0,0,0,30.4,29.7);
	this.instance_91.alpha = 0.602;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2F9646").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgYQAXgXAhAAIG/AAQAhAAAXAXQAYAYAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape_45.setTransform(52.1,315.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2F9646").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAhAAIG/AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape_46.setTransform(256.1,247.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2F9646").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgYQAXgXAhAAIG/AAQAhAAAXAXQAYAYAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape_47.setTransform(324.1,315.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#98C74C").s().p("AiOBLQgMAAgJgKQgKgKABgPQgBgOAKgLQAJgKAMAAIAJAAQAFgVATgPQASgQAYAAQAbAAAVAUQAKgVASgNQAUgNAYAAQAjAAAYAXQAXAYABAgIAGAAQANAAAKAKQAIALABAOQgBAPgIAKQgKAKgNAAg");
	this.shape_48.setTransform(115.4,264.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#99CF8C").s().p("AgaA5QgEgRALggQAKgZATgbIASgWIgvCFQgEgCgDgIg");
	this.shape_49.setTransform(140.4,242);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#62B64C").s().p("AgXBDIAviFIAAAdQgCAigKAZQgLAggMAKQgGADgEAAIgCAAg");
	this.shape_50.setTransform(140.9,242);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#62B64C").s().p("AgbhCIASAWQATAbAKAZQALAggEARQgCAIgFACg");
	this.shape_51.setTransform(134.9,242);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#99CF8C").s().p("AAMBAQgMgKgLggQgKgZgCgiIAAgdIAvCFIgCAAQgEAAgGgDg");
	this.shape_52.setTransform(134.5,242);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EE3046").s().p("AgOg1IAOAVQAPAYAAAUQABAagQAKQgGAFgIABg");
	this.shape_53.setTransform(139.2,230.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F16576").s().p("AAAAwQgOgKgBgaQAAgUAPgYIAPgVIAABrQgIgBgHgFg");
	this.shape_54.setTransform(136.1,230.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E82039").s().p("AgZAwQgCgXAFgYQALguAlgDIgSBHIgHANQgIANgQAAIgCgBg");
	this.shape_55.setTransform(140.3,230.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E82039").s().p("AAAAkIgHgNIgThHQAmADALAuQAGAYgDAXIgBABQgQAAgJgNg");
	this.shape_56.setTransform(135,230.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#62B64C").s().p("AAABOIgBibIADAAIAACbg");
	this.shape_57.setTransform(137.9,240.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#99CF8C").s().p("AgBBOIAAibIACAAIABCbg");
	this.shape_58.setTransform(137.5,240.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#99CF8C").s().p("AgoBXQgHgaARgwQAQgnAdgqIAcgiIhJDNQgGgDgEgNg");
	this.shape_59.setTransform(121.9,256.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#62B64C").s().p("AgkBnIBIjNIABAsQgDA1gPAnQgRAwgUAPQgIAGgHAAIgDAAg");
	this.shape_60.setTransform(122.5,256.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#62B64C").s().p("AgqhmIAcAiQAdApAQAoQARAwgHAZQgDAOgHADg");
	this.shape_61.setTransform(113.5,256.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#99CF8C").s().p("AATBhQgTgPgSgwQgQgngCg1IAAgsIBJDMIgEABQgGAAgIgGg");
	this.shape_62.setTransform(112.9,256.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EF519D").s().p("AgXhQIAXAeQAYAlAAAgQAAAmgYAQQgLAIgMABg");
	this.shape_63.setTransform(120.1,239.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EA94BF").s().p("AAABJQgWgQAAgmQAAgfAWgmIAXgeIAACiQgMgBgLgIg");
	this.shape_64.setTransform(115.3,239.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E570AB").s().p("AgnBKQgDgjAIglQARhHA6gEIgdBtIgKATQgOATgZAAIgCAAg");
	this.shape_65.setTransform(121.7,240);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E570AB").s().p("AgBA4IgLgUIgchtQA6AEARBHQAIAlgDAjIgDAAQgYAAgOgSg");
	this.shape_66.setTransform(113.6,240);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#62B64C").s().p("AgCB3IAAjtIAEAAIABDtg");
	this.shape_67.setTransform(118.1,255.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#99CF8C").s().p("AgCB3IAAjtIAFAAIAADtg");
	this.shape_68.setTransform(117.4,255.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F6B130").s().p("AiDAdIgxg5IFpAAIAAA5g");
	this.shape_69.setTransform(57.6,249.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAD38A").s().p("Ai0AdIAAAAIAxg6IE4AAIAAA6g");
	this.shape_70.setTransform(57.6,243.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FAD38A").s().p("AgSBGIAAiLIAlAAIAACLg");
	this.shape_71.setTransform(49.4,255.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FAD38A").s().p("AgSBGIAAiLIAlAAIAACLg");
	this.shape_72.setTransform(70.2,255.2);

	this.instance_92 = new lib.Path_2_0();
	this.instance_92.setTransform(58.9,261.5,1,1,0,0,0,19.9,3.9);
	this.instance_92.alpha = 0.398;

	this.instance_93 = new lib.Path_19();
	this.instance_93.setTransform(137.7,248.8,1,1,0,0,0,5.6,1.8);
	this.instance_93.alpha = 0.398;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4EAB47").s().p("EglQAKnIAA1OMBKgAAAIAAVOg");
	this.shape_73.setTransform(256.6,281.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AjVBxQgTAAgOgPQgNgQAAgVQAAgWANgQQAOgPATAAIANAAQAHghAcgXQAcgWAkAAQApgBAfAeQAPggAbgTQAfgUAkAAQAzAAAkAjQAkAkAAAxIALAAQATAAAOAPQANAQAAAWQAAAVgNAQQgOAPgTAAg");
	this.shape_74.setTransform(44.2,58);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2F9646").s().p("AkeCYQgaAAgSgVQgTgUAAgdQAAgdATgWQASgUAaAAIAQAAQAKgtAlgeQAmgfAxAAQA3AAApAnQAUgqAmgaQApgbAxAAQBEAAAwAwQAxAwAABCIAOAAQAaAAASAUQATAWAAAdQAAAdgTAUQgSAVgaAAg");
	this.shape_75.setTransform(81.9,129.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B3D676").s().p("AioBaQgQAAgLgMQgLgNAAgRQAAgRALgMQALgNAQAAIAJAAQAGgZAWgSQAWgSAdAAQAhAAAYAXQAMgZAWgQQAYgQAdAAQAoAAAdAdQAcAcABAmIAIAAQAPAAALANQALAMAAARQAAASgLAMQgLAMgPAAg");
	this.shape_76.setTransform(123.4,136.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B3D676").s().p("AmLDSQgjAAgagcQgZgdgBgoQABgpAZgdQAagcAjAAIAWAAQAPg+AygqQA1gqBDAAQBNAAA3A3QAcg8A1gkQA4glBEAAQBeAABDBCQBDBCABBcIASAAQAkAAAaAcQAZAdgBApQABAogZAdQgaAcgkAAg");
	this.shape_77.setTransform(361.2,124.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4EAB47").s().p("Aq9HJIACuSIASAAQHxABGCEFQC5B7CAClQCBCpA6DEg");
	this.shape_78.setTransform(428.4,99.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#82C566").s().p("AqvHHQA6jCCBipQCAikC3h7QGAkDHugCIgCORg");
	this.shape_79.setTransform(290.2,99.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4EAB47").s().p("ArBHJIAAuRIAbAAQHwAAGDEEQC4B8CBCkQCCCqA6DDg");
	this.shape_80.setTransform(224.8,99.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#82C566").s().p("AqvHJQA6jCCBipQB/ikC3h7QGAkEHugDIAAORg");
	this.shape_81.setTransform(86.9,99.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D8EEE6").s().p("EglLAKsIAA1XMBKXAAAIAAVXg");
	this.shape_82.setTransform(256.2,76.6);

	this.instance_94 = new lib.Path_5();
	this.instance_94.setTransform(460.1,179.1,1,1,0,0,0,12.5,3.5);
	this.instance_94.alpha = 0.199;

	this.instance_95 = new lib.Path_4();
	this.instance_95.setTransform(392.1,179.1,1,1,0,0,0,12.5,3.5);
	this.instance_95.alpha = 0.199;

	this.instance_96 = new lib.Path_3();
	this.instance_96.setTransform(324.1,179.1,1,1,0,0,0,12.5,3.5);
	this.instance_96.alpha = 0.199;

	this.instance_97 = new lib.Path_2();
	this.instance_97.setTransform(256.1,179.1,1,1,0,0,0,12.5,3.5);
	this.instance_97.alpha = 0.199;

	this.instance_98 = new lib.Path_1();
	this.instance_98.setTransform(188.1,179.1,1,1,0,0,0,12.5,3.5);
	this.instance_98.alpha = 0.199;

	this.instance_99 = new lib.Path_0();
	this.instance_99.setTransform(120.1,179.1,1,1,0,0,0,12.5,3.5);
	this.instance_99.alpha = 0.199;

	this.instance_100 = new lib.Path();
	this.instance_100.setTransform(52.1,179.1,1,1,0,0,0,12.5,3.5);
	this.instance_100.alpha = 0.199;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFF7D5").s().p("EglsAFUIAAqnMBLYAAAIAAKng");
	this.shape_83.setTransform(259.4,179.1);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.instance_31.mask = this.instance_32.mask = this.shape_6.mask = this.instance_33.mask = this.shape_7.mask = this.instance_34.mask = this.shape_8.mask = this.instance_35.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.instance_40.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = this.instance_63.mask = this.instance_64.mask = this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = this.instance_69.mask = this.instance_70.mask = this.instance_71.mask = this.instance_72.mask = this.instance_73.mask = this.instance_74.mask = this.instance_75.mask = this.instance_76.mask = this.instance_77.mask = this.instance_78.mask = this.instance_79.mask = this.instance_80.mask = this.instance_81.mask = this.instance_82.mask = this.instance_83.mask = this.instance_84.mask = this.instance_85.mask = this.instance_86.mask = this.instance_87.mask = this.instance_88.mask = this.instance_89.mask = this.instance_90.mask = this.instance_91.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.instance_92.mask = this.instance_93.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.instance_94.mask = this.instance_95.mask = this.instance_96.mask = this.instance_97.mask = this.instance_98.mask = this.instance_99.mask = this.instance_100.mask = this.shape_83.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.instance_93},{t:this.instance_92},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_40},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_35},{t:this.shape_8},{t:this.instance_34},{t:this.shape_7},{t:this.instance_33},{t:this.shape_6},{t:this.instance_32},{t:this.instance_31},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.2,8.2,476,341);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(345,320.5,1.474,1.568,0,0,0,252.3,213.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-14.2,744.4,669.6);


// stage content:
(lib.gameg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;