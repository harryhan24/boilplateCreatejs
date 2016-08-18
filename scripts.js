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
	manifest: []
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



(lib.mainBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEIAGgJQAEgGADADQAEAEgFAFIgCADQgBADgDADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape.setTransform(1338.3,895.8,3.379,3.564);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90B85B").s().p("AgCAJQgEgHAAgFQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1.setTransform(1330.9,894.9,3.379,3.564);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQACgDAAAEQAAADADADQADABAAADQgBADgDABIgDABQgBAAgCgEg");
	this.shape_2.setTransform(1323,895.6,3.379,3.564);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEIAGgJQADgGAEAEQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAADgCABIgCAEIgEAFIgDACIgDgBg");
	this.shape_3.setTransform(1341.5,825,3.379,3.564);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#90B85B").s().p("AgCAJQgEgFAAgHQAAgFAGgCQADgCAAAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_4.setTransform(1334.1,824.1,3.379,3.564);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQACgCAAAEQAAACADADQADABAAADQAAADgEACIgCAAQgCAAgCgEg");
	this.shape_5.setTransform(1326.1,824.8,3.379,3.564);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1D987").s().p("AgDA5QgYgBgPgSQgQgTACgWQAAgIAEgLQAMgcAegFQAJgCAEABQAYABAQATQAQASgCAWQgCAYgSAPQgQAOgUAAIgEAAg");
	this.shape_6.setTransform(626.5,392.3,3.379,3.564);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BDCA57").s().p("AgDA5QgXgBgQgSQgQgTABgWQACgYATgPQARgQAWACQAYABARATQAPASgCAWQgCAYgSAPQgPAOgVAAIgEAAg");
	this.shape_7.setTransform(563.4,399.2,3.379,3.564);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDCA57").s().p("AgFBRQghgCgWgaQgWgaACgfQACgiAagWQAagWAfACQAiADAWAZQAWAagCAfQgCAUgLASQgeAFgMAcQgNAFgNAAIgFAAg");
	this.shape_8.setTransform(599.4,356.7,3.379,3.564);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009256").s().p("AjuB/QgIAAgIgDQgQgGgKgPQgKgQAAgTQAAgZAPgRQAQgRAVAAIAOAAQAIglAfgZQAfgaApAAQAcAAAYANQAQAHAMANQAQgkAggWQAigWApAAQA5AAAoAoQAoAoABA3IALAAQAWAAAPARQAPARAAAZQAAAYgPARQgPASgWAAg");
	this.shape_9.setTransform(1046.4,442.9,3.379,3.564);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#74B9D2").s().p("AgnAfIAAg9IBPAAIAAA9g");
	this.shape_10.setTransform(852.3,431,3.379,3.564);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#74B9D2").s().p("AglAfIAAg9IBLAAIAAA9g");
	this.shape_11.setTransform(789.3,431,3.379,3.564);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#74B9D2").s().p("AgjAfIAAg9IBHAAIAAA9g");
	this.shape_12.setTransform(820.6,431,3.379,3.564);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiXA1IAAhpIEvAAIAABpgAA0AfIBQAAIAAg9IhQAAgAglAfIBIAAIAAg9IhIAAgAiDAfIBNAAIAAg9IhNAAg");
	this.shape_13.setTransform(821.1,431,3.379,3.564);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8EA681").s().p("AgUABIAAgBIApAAIAAABg");
	this.shape_14.setTransform(868.4,394.7,3.379,3.564);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8EA681").s().p("AgUABIAAgBIApAAIAAABg");
	this.shape_15.setTransform(836.8,394.7,3.379,3.564);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8EA681").s().p("AgUABIAAgBIApAAIAAABg");
	this.shape_16.setTransform(805.1,394.7,3.379,3.564);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8EA681").s().p("AgUABIAAgBIApAAIAAABg");
	this.shape_17.setTransform(773.5,394.7,3.379,3.564);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8EA681").s().p("AgYABIAAgBIAxAAIAAABg");
	this.shape_18.setTransform(757.7,394.7,3.379,3.564);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8EA681").s().p("AgYABIAAgBIAxAAIAAABg");
	this.shape_19.setTransform(789.3,394.7,3.379,3.564);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8EA681").s().p("AgYABIAAgBIAxAAIAAABg");
	this.shape_20.setTransform(884.2,394.7,3.379,3.564);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8EA681").s().p("AgYABIAAgBIAxAAIAAABg");
	this.shape_21.setTransform(821,394.7,3.379,3.564);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8EA681").s().p("AgYABIAAgBIAxAAIAAABg");
	this.shape_22.setTransform(852.6,394.7,3.379,3.564);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#689B40").s().p("AgZABIAAgBIAxAAIAAAAIACAAIAAABg");
	this.shape_23.setTransform(884.5,395,3.379,3.564);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3FA781").s().p("AgTAAIAAAAIAnAAIAAAAg");
	this.shape_24.setTransform(868.9,395.3,3.379,3.564);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#689B40").s().p("AgYAAIAAAAIAxAAIAAAAg");
	this.shape_25.setTransform(852.7,395.3,3.379,3.564);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3FA781").s().p("AgTAAIAAAAIAnAAIAAAAg");
	this.shape_26.setTransform(837.2,395.3,3.379,3.564);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#689B40").s().p("AgYAAIgBAAIAzAAIAAAAg");
	this.shape_27.setTransform(821,395.3,3.379,3.564);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3FA781").s().p("AgTAAIAAAAIAmAAIABAAg");
	this.shape_28.setTransform(805.4,395.3,3.379,3.564);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#689B40").s().p("AgYAAIAAAAIAxAAIAAAAg");
	this.shape_29.setTransform(789.2,395.3,3.379,3.564);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3FA781").s().p("AgTAAIAAAAIAnAAIAAAAg");
	this.shape_30.setTransform(773.7,395.3,3.379,3.564);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#689B40").s().p("AgYABIAAgBIAAAAIAAAAIAxAAIAAABg");
	this.shape_31.setTransform(757.7,395,3.379,3.564);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C09558").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(798.3,395.3,3.379,3.564);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C09558").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_33.setTransform(766.5,395.3,3.379,3.564);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C09558").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_34.setTransform(861.8,395.3,3.379,3.564);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C09558").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_35.setTransform(830,395.3,3.379,3.564);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#82C566").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_36.setTransform(893.5,395,3.379,3.564);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8EA681").s().p("AgUAwIAAhfIApAAIAABfg");
	this.shape_37.setTransform(868.4,377,3.379,3.564);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8EA681").s().p("AgUAwIAAhfIApAAIAABfg");
	this.shape_38.setTransform(836.8,377,3.379,3.564);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8EA681").s().p("AgUAwIAAhfIApAAIAABfg");
	this.shape_39.setTransform(805.1,377,3.379,3.564);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8EA681").s().p("AgUAwIAAhfIApAAIAABfg");
	this.shape_40.setTransform(773.5,377,3.379,3.564);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8EA681").s().p("AgYAwIAAhfIAxAAIAABfg");
	this.shape_41.setTransform(757.7,377,3.379,3.564);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8EA681").s().p("AgYAwIAAhfIAxAAIAABfg");
	this.shape_42.setTransform(789.3,377,3.379,3.564);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8EA681").s().p("AgYAwIAAhfIAxAAIAABfg");
	this.shape_43.setTransform(884.2,377,3.379,3.564);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8EA681").s().p("AgYAwIAAhfIAxAAIAABfg");
	this.shape_44.setTransform(821,377,3.379,3.564);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8EA681").s().p("AgYAwIAAhfIAxAAIAABfg");
	this.shape_45.setTransform(852.6,377,3.379,3.564);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#689B40").s().p("AAAADIAAgFQAAACAAADg");
	this.shape_46.setTransform(893,393.2,3.379,3.564);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#689B40").s().p("AgPAEQgHgEgCgGIgBgCIAzAAQgCAJgNAFQgGACgFAAQgIABgHgFg");
	this.shape_47.setTransform(884.5,398.8,3.379,3.564);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3FA781").s().p("AgMAEQgGgEgBgIIAmAAIABACQgCAGgFAEQgGAFgHgBQgHAAgFgEg");
	this.shape_48.setTransform(869,398.8,3.379,3.564);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#689B40").s().p("AgPAEQgHgEgCgGIAAgCIAxAAQgBAIgHAEQgIAEgJAAQgIABgHgFg");
	this.shape_49.setTransform(852.8,398.8,3.379,3.564);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3FA781").s().p("AgMAEQgGgEgBgIIAnAAIAAACQgBAGgGAEQgGAFgHgBQgGAAgGgEg");
	this.shape_50.setTransform(837.2,398.8,3.379,3.564);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#689B40").s().p("AgPAEQgHgEgCgGIAAgCIAxAAQgBAIgHAEQgIAEgJAAQgIABgHgFg");
	this.shape_51.setTransform(821.1,398.8,3.379,3.564);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3FA781").s().p("AgMAEQgGgEgBgIIAnAAIAAACQgCAGgFAEQgGAFgHgBQgGAAgGgEg");
	this.shape_52.setTransform(805.4,398.8,3.379,3.564);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#689B40").s().p("AgPAEQgHgEgCgGIAAgCIAxAAQgBAIgHAEQgIAEgJAAQgIABgHgFg");
	this.shape_53.setTransform(789.3,398.8,3.379,3.564);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3FA781").s().p("AgMAEQgGgEgBgIIAnAAIAAACQgBAGgGAEQgFAFgIgBQgGAAgGgEg");
	this.shape_54.setTransform(773.7,398.8,3.379,3.564);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#689B40").s().p("AgLAKQgOgGAAgKQABgDABgDIAAAFIgBAAIAAAEIAyAAQgCAFgHAGQgIAFgJAAQgFAAgGgDg");
	this.shape_55.setTransform(757.5,397.3,3.379,3.564);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C09558").s().p("Ai9CBIgFgBIgCgCQgDgEAAgFIAAjnQAGADAHAAQAKAAAHgEQAIgGABgIIABAAQABAIAGAGQAGAEAIAAQAIABAFgFQAGgFABgHQACAHAHAFQAHAFAKgBQAKAAAHgEQAIgGABgIIABAAQABAIAGAGQAGAEAIAAQAIABAFgFQAGgFABgHQACAHAHAFQAHAFAIgBQAKAAAHgEQAIgGABgIIABAAQABAIAGAGQAGAEAIAAQAHABAGgFQAGgFABgHQACAHAHAFQAHAFAKgBQAKAAAHgEQAIgGABgIIABAAQABAIAGAGQAGAEAIAAQAHABAGgFQAGgFABgHQACAHAHAFQAHAFAKgBQAFAAAHgCIAADmQAAAFgEAFIgCABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAgAiWAWIEuAAIAAhpIkuAAg");
	this.shape_56.setTransform(820.9,441.9,3.379,3.564);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#98C74C").s().p("Ah2A/QgLAAgIgIQgHgJAAgMQAAgNAHgIQAIgJALAAIAHAAQAEgRAPgMQAQgOAUAAQARABAOAIQAEADAFAFQADgGAFgGQAOgWAagEQAGgCAHAAQANAAAOAFQAGACAJAHQAaAUABAgIAFAAQAKAAAHAHQAHAGACAKIAAAHQAAAMgHAJQgIAIgLAAg");
	this.shape_57.setTransform(88.1,907,3.379,3.564);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#009256").s().p("AhWAuQgIAAgFgGQgGgHAAgJQAAgIAGgGQAFgHAIAAIAFAAQAEgMAKgJQAMgKAOAAQASAAAMANQAGgOALgIQAMgIAPAAQAUAAAPAOQAOAQAAASIAFAAQAIAAAFAHQAGAGAAAIQAAAJgGAHQgFAGgIAAg");
	this.shape_58.setTransform(1079.4,842.2,3.379,3.564);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#98C74C").s().p("AiABEQgLAAgJgJQgIgJAAgOQAAgNAIgJQAJgJALAAIAIAAQAEgUARgNQARgOAVAAQAZAAATASQAMgbAbgLQAKgEANgBIAEAAQAOAAALAFIAMAGIAGADIAJAIQALALAHASQADANABAIIAGAAIAGABQAKACAGAIQAGAKAAAKQAAAQgMAKQgGAGgKAAg");
	this.shape_59.setTransform(1476.6,1133,3.379,3.564);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B3D456").s().p("AgGAKQgDgDADgEIAGgJQADgFAEACQAEAEgFAFIgCADIgEAGIgDACIgDgBg");
	this.shape_60.setTransform(1453.3,1035.9,3.379,3.564);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B3D456").s().p("AgCAJQgEgGAAgGQAAgFAGgCQADgCAAAGQAAAEADADQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_61.setTransform(1445.9,1035,3.379,3.564);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B3D456").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgDABAEIADAGQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape_62.setTransform(1438,1035.7,3.379,3.564);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#99CF8C").s().p("AgfAkQANgkAagjQANgSALgLIgtCBQgHgRgLgMg");
	this.shape_63.setTransform(1521.9,1103.3,3.379,3.564);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#62B64C").s().p("AgMBMIgHAAQAAgKgDgMIAtiCIAAAnQgCAsgOAlQgEANgGAPIgDAFg");
	this.shape_64.setTransform(1525.1,1107.5,3.379,3.564);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#62B64C").s().p("AADAlIgDAAIgchOIAVAYQAWAcAOAfQgMgFgOAAg");
	this.shape_65.setTransform(1492,1095.1,3.379,3.564);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#99CF8C").s().p("AgNgQIAAgZIAbBOQgNABgIAEQgGgcAAgeg");
	this.shape_66.setTransform(1487,1095.1,3.379,3.564);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EF519D").s().p("AgUhHIAJAKQAKAMAFAOQAQAcAAAXQAAAigUAOIgUAIg");
	this.shape_67.setTransform(1514.8,1056.8,3.379,3.564);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EA94BF").s().p("AAABAQgUgOAAgiQAAgXAQgcQAKgWAPgOIAACPQgLgBgKgHg");
	this.shape_68.setTransform(1500.5,1056.8,3.379,3.564);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E570AB").s().p("AAABBIAVgHQAVgOAAgiQAAgXgQgdQARgUAcgCIgZBfQgCAIgGAIQgMARgUABgAgEBBQgUgBgNgQIgIgRIgZhfQAcACARAUQgQAdAAAXQAAAiAWAOQAKAHAJAAg");
	this.shape_69.setTransform(1507.6,1059.1,3.379,3.564);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#62B64C").s().p("AgBApIAAhWIADAAIAABag");
	this.shape_70.setTransform(1508.8,1098.9,3.379,3.564);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#99CF8C").s().p("AgCAoIAAhSIAFAAIAABVg");
	this.shape_71.setTransform(1506.8,1098,3.379,3.564);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4EAB47").s().p("AgxAfQALgKAAgQQABgJgHgJQgFgIgKgDIADgFIAUgBQAnAAAcAJQAdAKAAALQAAANgdAJQgcAJgnAAg");
	this.shape_72.setTransform(1543,1144.1,3.379,3.564);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#98C74C").s().p("Ah/BEQgMAAgJgJQgIgKAAgNQAAgNAIgJQAJgKAMAAIAGAAQAFgTARgNQAQgOAWAAQAaAAASASQAJgUAQgLQATgMAVAAQAfAAAVAVQAXAWAAAcIAGAAQALAAAJAKQAIAJAAANQAAANgIAKQgJAJgLAAg");
	this.shape_73.setTransform(1026.2,889.1,3.379,3.564);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgOATIAAglIAcAAIAAAlg");
	this.shape_74.setTransform(1451.3,392.2,3.379,3.564);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgMAXIAAgtIAZAAIAAAtg");
	this.shape_75.setTransform(1463,447.1,3.379,3.564);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAcAAIAAArg");
	this.shape_76.setTransform(1451.3,428.2,3.379,3.564);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOAXIAAgtIAcAAIAAAtg");
	this.shape_77.setTransform(1451.3,447.1,3.379,3.564);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_78.setTransform(1463,428.2,3.379,3.564);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOAWIAAgrIAcAAIAAArg");
	this.shape_79.setTransform(1451.3,409.8,3.379,3.564);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_80.setTransform(1463,409.8,3.379,3.564);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgMATIAAglIAZAAIAAAlg");
	this.shape_81.setTransform(1463,392.2,3.379,3.564);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C2D7C1").s().p("AhHCeIAAk7ICPAAIAAE7gAAIBCIAcAAIAAgvIgcAAgAgaBCIAcAAIAAgvIgcAAgAAIAMIAcAAIAAgrIgcAAgAgaAMIAcAAIAAgrIgcAAgAAIgmIAcAAIAAgsIgcAAgAgagmIAcAAIAAgsIgcAAgAAIhaIAcAAIAAgnIgcAAgAgahaIAcAAIAAgnIgcAAg");
	this.shape_82.setTransform(1455.4,431.8,3.379,3.564);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEACQAEAEgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape_83.setTransform(409.1,1154.8,3.379,3.564);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_84.setTransform(401.7,1153.9,3.379,3.564);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgDABAEQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape_85.setTransform(393.8,1154.5,3.379,3.564);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEADQAEAEgFAFIgCADQgCAEgCACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_86.setTransform(412.3,1084,3.379,3.564);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#90B85B").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_87.setTransform(404.8,1083,3.379,3.564);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#90B85B").s().p("AgDAFQgDgEABgEQAAgCAEgCQACgDAAAEIADAGQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape_88.setTransform(397,1083.8,3.379,3.564);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQAEgFADADQAAAAABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgCADQgCAEgCACIgDACIgDgBg");
	this.shape_89.setTransform(322.5,1024.6,3.379,3.564);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_90.setTransform(315.1,1023.6,3.379,3.564);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDADgCQACgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABgBADQABACgEADIgCAAQgCAAgCgEg");
	this.shape_91.setTransform(307.3,1024.4,3.379,3.564);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEADQAEAEgFAFIgCADQgCAEgCACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_92.setTransform(890,1144.7,3.379,3.564);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#90B85B").s().p("AgCAJQgFgFABgHQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_93.setTransform(882.6,1143.8,3.379,3.564);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#90B85B").s().p("AgDAFQgDgEABgEQAAgCADgCQADgDAAAEQAAADADADQADABgBADQAAACgDACIgDABQgBAAgCgEg");
	this.shape_94.setTransform(874.7,1144.6,3.379,3.564);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEADQABAAAAAAQAAABAAAAQABABgBABQAAAAAAABQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgCADIgEAGIgDACIgDgBg");
	this.shape_95.setTransform(893.1,1073.9,3.379,3.564);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#90B85B").s().p("AgCAJQgEgGAAgGQAAgFAGgCQADgCAAAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_96.setTransform(885.7,1073,3.379,3.564);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEACIgCAAQgCAAgCgEg");
	this.shape_97.setTransform(877.8,1073.7,3.379,3.564);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQAEgGADADQAEAEgFAFIgCADQgBADgDADQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_98.setTransform(649.1,895.8,3.379,3.564);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#90B85B").s().p("AgCAJQgEgHAAgFQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_99.setTransform(641.7,894.9,3.379,3.564);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQABgDABAEQAAADADADQADABgBADQABADgEABIgDABQgBAAgCgEg");
	this.shape_100.setTransform(633.8,895.6,3.379,3.564);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEIAGgJQADgGAEAEQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAADgCABIgCAEIgEAFIgDACIgDgBg");
	this.shape_101.setTransform(652.2,825,3.379,3.564);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#90B85B").s().p("AgCAJQgEgFAAgHQAAgFAGgCQADgCAAAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_102.setTransform(644.8,824.1,3.379,3.564);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgDQABgDAEgCQACgCAAAEQAAACADADQADABAAADQAAADgEACIgCAAQgCAAgCgEg");
	this.shape_103.setTransform(636.9,824.8,3.379,3.564);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEADQAEAEgFAFIgCADQgCAEgCACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_104.setTransform(614.5,1139.2,3.379,3.564);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#90B85B").s().p("AgCAJQgFgFABgHQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_105.setTransform(607.1,1138.3,3.379,3.564);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#90B85B").s().p("AgDAFQgDgEABgEQAAgCADgCQADgDAAAEQAAADADADQADABgBADQABACgEACIgDABQgBAAgCgEg");
	this.shape_106.setTransform(599.2,1139,3.379,3.564);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#90B85B").s().p("AgGAJQgDgCADgEQADgGADgDQADgGAEADQAAABABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCADQgCAEgCACIgDACIgDgCg");
	this.shape_107.setTransform(536.9,1057.4,3.379,3.564);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#90B85B").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_108.setTransform(529.5,1056.5,3.379,3.564);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQACgCAAAEQAAACADADQADABAAADQAAADgEACIgDAAQgBAAgCgEg");
	this.shape_109.setTransform(521.6,1057.2,3.379,3.564);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEIAGgJQADgGAEADQAEAEgFAFIgCADQgCAEgCACQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_110.setTransform(1303.7,1139.2,3.379,3.564);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#90B85B").s().p("AgCAJQgFgFABgHQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_111.setTransform(1296.3,1138.3,3.379,3.564);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#90B85B").s().p("AgDAFQgDgEAAgEQABgCAEgCQABgDAAAEQABADADADQADABgBADQAAACgDACIgDABQgBAAgCgEg");
	this.shape_112.setTransform(1288.4,1139,3.379,3.564);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#90B85B").s().p("AgGAJQgDgCADgEIAGgJQADgGAEADQAAABABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCADQgCAEgCACIgDACIgDgCg");
	this.shape_113.setTransform(1226.1,1057.4,3.379,3.564);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#90B85B").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_114.setTransform(1218.7,1056.5,3.379,3.564);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDAEgCQACgCAAAEQAAACADADQADABAAADQAAADgEACIgDAAQgBAAgCgEg");
	this.shape_115.setTransform(1210.8,1057.2,3.379,3.564);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#90B85B").s().p("AgGAKQgDgDADgEIAGgJQADgGAEAEQAAAAABAAQAAABAAAAQAAABAAABQABAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCAEQgCADgCACIgDACIgDgBg");
	this.shape_116.setTransform(1471.2,821.3,3.379,3.564);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#90B85B").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCAAAGQgBAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_117.setTransform(1463.8,820.4,3.379,3.564);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#90B85B").s().p("AgDAFQgDgEABgDQAAgDADgCQACgCAAAEQABACADADQADABgBADQAAACgDADIgCAAQgCAAgCgEg");
	this.shape_118.setTransform(1456,821.1,3.379,3.564);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2F9646").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAhAAIG/AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape_119.setTransform(115,1094.1,3.379,3.564);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2F9646").s().p("AjfEoQghAAgXgXQgYgYAAghIAAmvQAAghAYgYQAXgXAhAAIG/AAQAhAAAXAXQAYAYAAAhIAAGvQAAAhgYAYQgXAXghAAg");
	this.shape_120.setTransform(804.2,851.8,3.379,3.564);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2F9646").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAhAAIG/AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape_121.setTransform(1033.9,1094.1,3.379,3.564);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#98C74C").s().p("AiOBLQgNAAgJgKQgJgKAAgPQAAgOAJgLQAJgKANAAIAJAAQAFgVASgPQATgPAYAAQAMAAAMAEQAMAFAMAKQAEgIAFgGQAKgOAMgIIAEgCIANgGIAHgBQAHgCAKAAIAPABQAPADANAHQASALAKATQALATABATIAGAAQANAAAKAKQAJALAAAOQAAAPgJAKQgKAKgNAAg");
	this.shape_122.setTransform(328.8,915.1,3.379,3.564);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#99CF8C").s().p("AgUBBIgEgIIAAAKIgFAAIAAgDQAEgDABgFQgCgJACgMIgFgRIAAhPIAFABIAABcQABgGADgKIADgIQAJgZATgbIASgWIguCFg");
	this.shape_123.setTransform(412.9,833.5,3.379,3.564);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#62B64C").s().p("AAYhCIAAAdQgCAigKAZQgHAUgGAKQgIAMgIADIgGAAg");
	this.shape_124.setTransform(414.8,833.5,3.379,3.564);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#62B64C").s().p("AgbhCIATAWQATAbAKAZIAHAbQgCAMACAJQgBAFgDADIgDADg");
	this.shape_125.setTransform(394.5,833.5,3.379,3.564);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#99CF8C").s().p("AASBDQgJgDgIgMQgGgLgGgTQgKgZgCgiIAAgdIAvCFIgCAAIgEAAg");
	this.shape_126.setTransform(393.3,833.6,3.379,3.564);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EE3046").s().p("AgOg1IAGAIQAIAJADAKQAMAVAAARQABAagQAKQgGAGgIgBg");
	this.shape_127.setTransform(409.2,792.1,3.379,3.564);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F16576").s().p("AAAAwQgOgKAAgZQgBgQAMgXQAEgKAHgJIAHgIIAABqQgIABgHgGg");
	this.shape_128.setTransform(398.7,792.1,3.379,3.564);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E82039").s().p("AgCAwQgQgBgJgMIgGgMIgThGQAUABAOAPQgMAWAAAQQAAAZAQALQAIAFAGAAQAIAAAHgFQAQgLAAgZQAAgRgMgVQANgPAVgCIgTBHIgGAMQgJAMgPABIgEABg");
	this.shape_129.setTransform(404,793.9,3.379,3.564);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#62B64C").s().p("AgBAEIAAgHIADAGIAAABg");
	this.shape_130.setTransform(404.9,855.8,3.379,3.564);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#62B64C").s().p("AgBguIADAAIAABNQgCAJAAAHg");
	this.shape_131.setTransform(404.8,828.3,3.379,3.564);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#99CF8C").s().p("AAJgWIAagfIglBrIgPgBQgKAAgHABQAPgnAcglg");
	this.shape_132.setTransform(353.1,869.2,3.379,3.564);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#62B64C").s().p("AgTAxIAmhrIABAlQgCAqgLAmQgKgHgQgDg");
	this.shape_133.setTransform(358.6,870.9,3.379,3.564);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#62B64C").s().p("AgkhFIAcAiQAdAnAQAqIAAACQgNAIgLAOg");
	this.shape_134.setTransform(320.2,874.8,3.379,3.564);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#99CF8C").s().p("AgGA9IAAgCQgQgpgCgyIAAgsIAxCLQgFAGgEAIQgLgKgLgGg");
	this.shape_135.setTransform(316.1,877.4,3.379,3.564);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EF519D").s().p("AgXhRIAKAMQAMAOAGAPQASAfAAAbQABAngYAQQgKAIgNAAg");
	this.shape_136.setTransform(344.4,823.4,3.379,3.564);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EA94BF").s().p("AAABJQgWgPAAgnQgBgaATghQAGgPALgOIAKgMIAACiQgMAAgLgIg");
	this.shape_137.setTransform(328.2,823.4,3.379,3.564);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E570AB").s().p("AgEBKQgXgBgPgTIgKgSIgchtQAgACAUAXQgSAhAAAaQAAAnAYAQQAMAIAKAAQAMgBAMgIQAYgQAAgmQAAgbgTggQAUgWAggDIgcBtIgKASQgOASgWACg");
	this.shape_138.setTransform(336.2,826.2,3.379,3.564);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#62B64C").s().p("AgCgzIAFAAIAABlIgFACg");
	this.shape_139.setTransform(337.7,871.6,3.379,3.564);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#99CF8C").s().p("AgCg0IAEAAIABBnIgFADg");
	this.shape_140.setTransform(335.6,872.1,3.379,3.564);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F6B130").s().p("AiDAdIgxg5IFoAAIAAA5g");
	this.shape_141.setTransform(133.3,860.3,3.379,3.564);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FAD38A").s().p("Ai0AdIAAAAIAxg5IE3AAIAAA5g");
	this.shape_142.setTransform(133.3,839.1,3.379,3.564);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAD38A").s().p("AgFAQQgIAAgFABIAAglIAlAAIAAApQgNgFgLAAg");
	this.shape_143.setTransform(105.7,878.6,3.379,3.564);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FAD38A").s().p("AgSAwIAAhfIAlAAIAABfg");
	this.shape_144.setTransform(175.9,888.2,3.379,3.564);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4EAB47").s().p("AgHAAIAPgFQgFAFgCAGQgEgFgEgBg");
	this.shape_145.setTransform(81.9,896.4,3.379,3.564);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4EAB47").s().p("AhGAnQgBgKgIgGQgHgHgJAAIgFAAQgBgggagUQAcgCAeAAQA1AAAoAFIAAAoIAnAAIAAgjQBBANAAAPQAAAQg5ALQg7AMhRAAg");
	this.shape_146.setTransform(161.2,902.8,3.379,3.564);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#4EAB47").s().p("AgmALQgRgFAAgGQABgKAagFQAIAMAJADQADAAADAAIADgDIAAADIAHAAIAAgCIACACIAHAAQAHgDAJgMQAaAFAAAKQgBAFgQAGQgQAFgXAAQgWAAgQgFg");
	this.shape_147.setTransform(403.9,858.1,3.379,3.564);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4EAB47").s().p("AgJAWQgeABgcABQgKgHgGgCIAAgpICnAAIAAA1QgqgEgzgBg");
	this.shape_148.setTransform(140.9,880.6,3.379,3.564);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4EAB47").s().p("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");
	this.shape_149.setTransform(802.5,972.9,3.379,3.564);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AjUBxQgUAAgNgQQgOgOAAgXQAAgVAOgPQANgQAUAAIAMAAQAHghAcgWQAcgYAkAAQApAAAfAeQAPggAbgTQAfgUAkAAQAzAAAkAkQAkAjAAAxIALAAQATAAAOAQQANAPAAAVQAAAWgNAPQgOAQgTAAg");
	this.shape_150.setTransform(88.1,177.5,3.379,3.564);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2F9646").s().p("AkeCYIgMgBQgWgFgOgTQgPgUAAgaQAAgdATgVQASgUAaAAIAQAAQAKgtAlgeQAmgfAxAAQA4AAAoAoQAUgsAmgaQApgaAxAAQBEAAAwAwQAxAwAABCIAOAAQAHAAAGABQAVAFAOATQAPAUAAAZQAAAegTAUQgSAVgaAAg");
	this.shape_151.setTransform(215.5,433.8,3.379,3.564);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#B3D676").s().p("AilBaQAZgBARgUQATgUAAgeQAAgXgOgUQgOgTgWgFQAPgIASAAQAhABAZAXQALgZAYgQQAYgQAbAAQApAAAcAdQAdAcAAAmIAIAAQAPAAALANQALALAAASQAAAPgIALQgIALgMAEIgJABg");
	this.shape_152.setTransform(369.4,456,3.379,3.564);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#B3D676").s().p("AiGDSQAUgBAPgQQAPgSABgYQgBgYgPgRQgPgSgVAAIgMAAQAAg4gogmQgpgpg5AAQgoAAgjAXQghAUgRAjQgMgNgQgHIAWAAQAOg+A0gqQAzgqBDAAQBOAAA3A2QAKgXARgVQAggqAsgWQAwgYA2AAQBeAABDBCQBCBCABBcIATAAQAjAAAaAcQAZAdAAApQAAAkgVAbQgVAbgeAGQgHABgHAAg");
	this.shape_153.setTransform(1173.7,413.2,3.379,3.564);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4EAB47").s().p("AEwHJIAAk8IiRAAIAAE8ImIAAQAfgGAUgbQAWgbgBgkQAAgpgYgcQgagcgjAAIgTAAQgBhehDhCQhDhDheAAQg2AAgvAYQguAXghApIABpGIATAAQHAABFsDYQFmDUCeFVIAACRg");
	this.shape_154.setTransform(1376.9,324.7,3.379,3.564);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#82C566").s().p("AhZHJQAEgFAAgFIAAjoQAMgFACgKIABAAIAAgEIgBAAQAAgDgCgDIAAhbImpAAIAABcQgBADAAADQAAAMANAGIAADoQAAAFADAEIjIAAQAvieBfiPQBeiLCGhxQDDinD8hdQEGhgEggDIgBJGQgRAWgKAXQg3g3hNAAQhEAAgzArQg0ApgOBBIgWAAQgYgNgcAAQgoAAggAaQgeAZgJAnIgNAAQgWAAgPARQgQARAAAZQAAATALAQQAKAPAQAGg");
	this.shape_155.setTransform(917.9,324.2,3.379,3.564);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#4EAB47").s().p("AoIHJIAAuRIAbAAQEkAAEJBgQECBdDHCpQiHBxhdCLQhgCPguCeIDHAAIADACgAj6ClQgSAQgCAYQgCAYAQASQAQASAYACQAYACASgQQASgQACgYQABgYgPgSQgQgSgYgCIgFAAQgVAAgQAOgAhTC5QgCAYAQATQAQASAYABQAXACAQgQQATgPABgYQACgYgPgSQgQgTgXgBQgGgBgIACQALgSABgUQADghgXgaQgWgZghgDQgigCgaAWQgZAWgDAiQgCAhAWAaQAWAaAhACQARABAQgGQgEALAAAIg");
	this.shape_156.setTransform(635.5,324.6,3.379,3.564);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4EAB47").s().p("AhJAAIACAAICQAAIABAAg");
	this.shape_157.setTransform(911.8,487.5,3.379,3.564);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#82C566").s().p("AIoHJQAMgEAHgLQAJgLAAgOQAAgSgLgMQgLgMgPAAIgIAAQgBgogcgdQgdgcgpgBQgcABgZAQQgXAPgMAZQgYgXghAAQgTAAgPAIQgFgCgHAAIgOAAQAAhEgxgwQgwgwhEAAQgyAAgmAaQgoAagVAsQgogog3AAQgxAAgmAfQglAfgKAuIgQAAQgbAAgRAVQgTAUAAAdQAAAaAPAUQAOATAWAFIlTAAQB1mJF3j9QF6kEHogHIAAORg");
	this.shape_158.setTransform(229.7,324.7,3.379,3.564);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D8EEE6").s().p("An6AAIAIAAIPpAAIAEAAg");
	this.shape_159.setTransform(584.9,488,3.379,3.564);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#D8EEE6").s().p("AitAAIAAAAIFQAAIALAAg");
	this.shape_160.setTransform(59,488,3.379,3.564);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#D8EEE6").s().p("AjJAAIALAAIGIAAIAAAAg");
	this.shape_161.setTransform(1362.3,488,3.379,3.564);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#D8EEE6").s().p("Ah1ABIAEgBICTAAIgBAAIBGAAQAHABAIAAg");
	this.shape_162.setTransform(925.3,487.7,3.379,3.564);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#D8EEE6").s().p("EglGgB7QABAWANAOQAOAQATAAIGsAAQATAAAOgQQAOgPAAgWQAAgVgOgQQgOgPgTAAIgKAAQgBgzgkgkQgkgjgyAAQglAAgeAUQgeATgPAgQgegegpAAQglAAgcAXQgbAXgIAjIgMAAQgTAAgOAPQgNAPgBAVIAAouMBKNAAAIAATGQiflXlljRQlvjYnAgBIgSAAQkgADkHBgQj9BdjEClQjEiokChdQkLhgkkAAIgbAAIAAABQnoAHl8EBQl3EAh1GJg");
	this.shape_163.setTransform(802.5,243.9,3.379,3.564);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFF7D5").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape_164.setTransform(1493.3,609.4,3.379,3.564);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFF7D5").s().p("Ah7AjIAAhFID3AAIAABFg");
	this.shape_165.setTransform(1263.6,609.4,3.379,3.564);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFF7D5").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape_166.setTransform(1033.8,609.4,3.379,3.564);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFF7D5").s().p("Ah7AjIAAhFID3AAIAABFg");
	this.shape_167.setTransform(804.1,609.4,3.379,3.564);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFF7D5").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape_168.setTransform(574.4,609.4,3.379,3.564);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFF7D5").s().p("Ah8AjIAAhFID4AAIAABFg");
	this.shape_169.setTransform(344.6,609.4,3.379,3.564);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFF7D5").s().p("Ah7AjIAAhFID4AAIAABFg");
	this.shape_170.setTransform(114.9,609.4,3.379,3.564);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFF7D5").s().p("EglGAFUIAAqnMBKNAAAIAAKngAd/AjID6AAIAAhFIj6AAgATXAjID6AAIAAhFIj6AAgAIvAjID6AAIAAhFIj6AAgAh3AjID4AAIAAhFIj4AAgAsfAjID6AAIAAhFIj6AAgA3HAjID6AAIAAhFIj6AAgEghvAAjID6AAIAAhFIj6AAg");
	this.shape_171.setTransform(802.5,609.4,3.379,3.564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1605,1215.3);


(lib.obstacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoMINIAAwZIQZAAIAAQZg");
	this.shape.setTransform(52.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,105);


// stage content:
(lib.gamegraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.obstacle("synched",0);
	this.instance.setTransform(331.5,217.6,1,1,0,0,0,52.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(629,415.1,105,105);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;