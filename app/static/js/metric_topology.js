// Drawing a rectangular block to represent the BLOCK OF BUTTER --------------
// 
//
var w_block = 960;
var h_block = 300;

var svg_block = d3.select("#block0")
  .append("svg")
    .attr("viewBox", "0 0 " + w_block + " " + h_block);

// BLOCK OF BUTTER label
svg_block.append("text")
    .text("BLOCK OF BUTTER")
    .attr("x", w_block*(5/15))
    .attr("y", h_block*(3/10))
    .attr("font-family", "sans-serif")
    .attr("font-size", "32px")
    .attr("fill", "#696a61");


// back-facing long edge of block
// top line
svg_block.append("line")
    .attr("x1", w_block*(2.87/15))
    .attr("y1", h_block*(1/10))
    .attr("x2", w_block*(13.87/15))
    .attr("y2", h_block*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_block.append("line")
    .attr("x1", w_block*(2.87/15))
    .attr("y1", h_block*(6/10))
    .attr("x2", w_block*(13.87/15))
    .attr("y2", h_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// front-facing long edge of block
// top line
svg_block.append("line")
    .attr("x1", w_block*(1/15))
    .attr("y1", h_block*(4/10))
    .attr("x2", w_block*(12/15))
    .attr("y2", h_block*(4/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_block.append("line")
    .attr("x1", w_block*(1/15))
    .attr("y1", h_block*(9/10))
    .attr("x2", w_block*(12/15))
    .attr("y2", h_block*(9/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right-facing short edge of block
// top line
svg_block.append("line")
    .attr("x1", w_block*(12/15))
    .attr("y1", h_block*(4/10))
    .attr("x2", w_block*(13.87/15))
    .attr("y2", h_block*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_block.append("line")
    .attr("x1", w_block*(12/15))
    .attr("y1", h_block*(4/10))
    .attr("x2", w_block*(12/15))
    .attr("y2", h_block*(9/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_block.append("line")
    .attr("x1", w_block*(12/15))
    .attr("y1", h_block*(9/10))
    .attr("x2", w_block*(13.87/15))
    .attr("y2", h_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_block.append("line")
    .attr("x1", w_block*(13.87/15))
    .attr("y1", h_block*(6/10))
    .attr("x2", w_block*(13.87/15))
    .attr("y2", h_block*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left-facing short edge of block
// top line
svg_block.append("line")
    .attr("x1", w_block*(2.87/15))
    .attr("y1", h_block*(1/10))
    .attr("x2", w_block*(1/15))
    .attr("y2", h_block*(4/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_block.append("line")
    .attr("x1", w_block*(1/15))
    .attr("y1", h_block*(4/10))
    .attr("x2", w_block*(1/15))
    .attr("y2", h_block*(9/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_block.append("line")
    .attr("x1", w_block*(1/15))
    .attr("y1", h_block*(9/10))
    .attr("x2", w_block*(2.87/15))
    .attr("y2", h_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_block.append("line")
    .attr("x1", w_block*(2.87/15))
    .attr("y1", h_block*(6/10))
    .attr("x2", w_block*(2.87/15))
    .attr("y2", h_block*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// Big R indicating the Right Face of this rectangular block of butter
svg_block.append("text")
    .text("R")
    .attr("x", w_block*(51/60))
    .attr("y", h_block*(11/20))
    .attr("font-family", "sans-serif")
    .attr("font-size", "82px")
    .attr("fill", "#d079a2")
    .attr("stroke", "#696a61")
    .attr("stroke-width", 2);

// Drawing a cross section of the BLOCK OF BUTTER ----------------------------
// 
//
var w_cross_block = 480;
var h_cross_block = 380;
var svg_cross_1_block = d3.select("#block1")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);

// i) label
svg_cross_1_block.append("text")
    .text("i)")
    .attr("x", w_cross_block/2)
    .attr("y", h_cross_block*(1/10))
    .attr("font-family", "sans-serif")
    .attr("font-size", "32px")
    .attr("fill", "#696a61");

// top line
svg_cross_1_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_1_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_1_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_1_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");


// Drawing a cross section of the BLOCK OF BUTTER after breaking it down -----
// to 4 sticks of butter -----------------------------------------------------
// 
//
var svg_cross_4_block = d3.select("#block2")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);

// ii) label
svg_cross_4_block.append("text")
    .text("ii)")
    .attr("x", w_cross_block/2)
    .attr("y", h_cross_block*(1/10))
    .attr("font-family", "sans-serif")
    .attr("font-size", "32px")
    .attr("fill", "#696a61");

// top line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");



// Cross sections of butter bearing center points ----------------------------
//
//
d3.select("#center_point")
    .on("click", function() {
	// Drawing a cross section of the BLOCK OF BUTTER with a center point -
	// 
	//
	
	// center point
	svg_cross_1_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(7.5/15))
	    .attr("cy", h_cross_block*(5/10))
	    .attr("r", 5);

	
	
	// Drawing a cross section of the BLOCK OF BUTTER after breaking it --
	// down to 4 sticks of butter with center points ---------------------
	// 
	//
	// center points
	// top left
	svg_cross_4_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(5.25/15))
	    .attr("cy", h_cross_block*(3.5/10))
	    .attr("r", 5);
	
	// top right
	svg_cross_4_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(9.75/15))
	    .attr("cy", h_cross_block*(3.5/10))
	    .attr("r", 5);

	// bottom left
	svg_cross_4_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(5.25/15))
	    .attr("cy", h_cross_block*(6.5/10))
	    .attr("r", 5);

	// bottom right
	svg_cross_4_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(9.75/15))
	    .attr("cy", h_cross_block*(6.5/10))
	    .attr("r", 5);
});


// Drawing a cross section of the BLOCK OF BUTTER after breaking it-----------
// down to 3 sticks of butter of one size and several sticks of butter -------
// of a different size -------------------------------------------------------
//
//
var svg_cross_3_and_1_several_block = d3.select("#block3")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);


// top line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line in bottom right stick of butter
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(9/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(9/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line in bottom right stick of butter
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(10.5/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(10.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// top horizontal line in bottom right stick of butter
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(6/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom horizontal line in bottom right stick of butter
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(7/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(7/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// center points
// top left
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(5.25/15))
    .attr("cy", h_cross_block*(3.5/10))
    .attr("r", 5);

// top right
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(3.5/10))
    .attr("r", 5);

// bottom left
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(5.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r1, c1
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.25/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c2
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c3
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(11.25/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r2, c1
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c2
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c3
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(11.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r3, c1
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.25/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c2
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c3
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(11.25/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);



// Drawing a cross section of the BLOCK OF BUTTER after breaking it-----------
// down to 2 sticks of butter of one size, several sticks of butter ----------
// of a second size, and several sticks of butter of a third size ------------
//
//
var svg_cross_2_and_2_several_block = d3.select("#block4")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);

// top line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line in top left stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(5.25/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(5.25/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line in top left stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(3.5/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(3.5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line in bottom right stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(9/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(9/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical vertical line in bottom right stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(10.5/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(10.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// top horizontal line in bottom right stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(6/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom horizontal line in bottom right stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(7/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(7/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// center points
// top left, r1, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(4.13/15))
    .attr("cy", h_cross_block*(2.75/10))
    .attr("r", 5)

// top left, r1, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(6.38/15))
    .attr("cy", h_cross_block*(2.75/10))
    .attr("r", 5)

// top left, r2, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(4.13/15))
    .attr("cy", h_cross_block*(4.25/10))
    .attr("r", 5)

// top left, r2, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(6.38/15))
    .attr("cy", h_cross_block*(4.25/10))
    .attr("r", 5)

// top right
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(3.5/10))
    .attr("r", 5);

// bottom left
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(5.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r1, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.25/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c3
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(11.25/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r2, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c3
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(11.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r3, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.25/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(9.75/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c3
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(11.25/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);



// Drawing a rectangle; ------------------------------------------------------
// then allowing the user to draw another rectangle --------------------------
// within by the click of ----------------------------------------------------
// a button. The user has buttons for all three choices: drawing a rectangle -
// of a medium size; smaller; or bigger --------------------------------------
// 
//
var svg_rect_1_plus_3 = d3.select("#block5")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);

// top line
svg_rect_1_plus_3.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_1_plus_3.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_1_plus_3.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_1_plus_3.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// Drawing a medium size rectangle within ------------------------------------
//
//
d3.select("#medium_size_rect_1_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(4/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(7/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // right vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(7/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(7/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
	    
	    // bottom
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(7/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(4/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // left vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(4/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(4/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
    });

// Drawing the smaller rectangle within --------------------------------------
//
//
d3.select("#smaller_size_rect_1_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(3.5/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // right vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(3.16/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
	    
	    // bottom
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(3.16/10))
	        .attr("x2", w_cross_block*(3.5/15))
	        .attr("y2", h_cross_block*(3.16/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // left vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(3.5/15))
	        .attr("y1", h_cross_block*(3.16/10))
	        .attr("x2", w_cross_block*(3.5/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
    });

// Drawing the larger rectangle within ---------------------------------------
//
//
d3.select("#larger_size_rect_1_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(5.5/15))
	        .attr("y1", h_cross_block*(3.25/10))
	        .attr("x2", w_cross_block*(11.5/15))
	        .attr("y2", h_cross_block*(3.25/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // right vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(11.5/15))
	        .attr("y1", h_cross_block*(3.25/10))
	        .attr("x2", w_cross_block*(11.5/15))
	        .attr("y2", h_cross_block*(7.25/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
	    
	    // bottom
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(11.5/15))
	        .attr("y1", h_cross_block*(7.25/10))
	        .attr("x2", w_cross_block*(5.5/15))
	        .attr("y2", h_cross_block*(7.25/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // left vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(5.5/15))
	        .attr("y1", h_cross_block*(7.25/10))
	        .attr("x2", w_cross_block*(5.5/15))
	        .attr("y2", h_cross_block*(3.25/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
    });




// Drawing a rectangle; breaking it down -------------------------------------
// to 4 subrectangles; then allowing the user to draw another rectangle ------
// within by the click of ----------------------------------------------------
// a button. The user has buttons for all three choices: drawing a rectangle -
// of a medium size; smaller; or bigger --------------------------------------
// 
//


var svg_rect_4_plus_3 = d3.select("#block6")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);


// top line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(12/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(3/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(3/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(12/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");



// Drawing a medium size rectangle within ------------------------------------
//
//
d3.select("#medium_size_rect_4_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(4/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(7/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // right vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(7/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(7/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
	    
	    // bottom
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(7/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(4/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // left vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(4/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(4/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
    });

// Drawing the smaller rectangle within --------------------------------------
//
//
d3.select("#smaller_size_rect_4_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(3.5/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // right vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(3.16/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
	    
	    // bottom
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(3.16/10))
	        .attr("x2", w_cross_block*(3.4/15))
	        .attr("y2", h_cross_block*(3.16/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // left vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(3.5/15))
	        .attr("y1", h_cross_block*(3.16/10))
	        .attr("x2", w_cross_block*(3.5/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
    });

// Drawing the larger rectangle within ---------------------------------------
//
//
d3.select("#larger_size_rect_4_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(5.5/15))
	        .attr("y1", h_cross_block*(3.25/10))
	        .attr("x2", w_cross_block*(11.5/15))
	        .attr("y2", h_cross_block*(3.25/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // right vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(11.5/15))
	        .attr("y1", h_cross_block*(3.25/10))
	        .attr("x2", w_cross_block*(11.5/15))
	        .attr("y2", h_cross_block*(7.25/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
	    
	    // bottom
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(11.5/15))
	        .attr("y1", h_cross_block*(7.25/10))
	        .attr("x2", w_cross_block*(5.5/15))
	        .attr("y2", h_cross_block*(7.25/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");

	    // left vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(5.5/15))
	        .attr("y1", h_cross_block*(7.25/10))
	        .attr("x2", w_cross_block*(5.5/15))
	        .attr("y2", h_cross_block*(3.25/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 1");
    });









// Draw a rectangle; allow user as many clicks of a button as they wish, -----
// each drawing a randomly ---------------------------------------------------
// sized rectangle within the larger rectangle -------------------------------

var w_rect = 960;
var h_rect = 480;

var svg_rect_1_plus_many = d3.select("#block9")
  .append("svg")
    .attr("viewBox", "0 0 " + w_rect + " " + h_rect);

// top line
svg_rect_1_plus_many.append("line")
    .attr("x1", w_rect*(3/15))
    .attr("y1", h_rect*(1/10))
    .attr("x2", w_rect*(12/15))
    .attr("y2", h_rect*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_1_plus_many.append("line")
    .attr("x1", w_rect*(12/15))
    .attr("y1", h_rect*(1/10))
    .attr("x2", w_rect*(12/15))
    .attr("y2", h_rect*(9/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_1_plus_many.append("line")
    .attr("x1", w_rect*(12/15))
    .attr("y1", h_rect*(9/10))
    .attr("x2", w_rect*(3/15))
    .attr("y2", h_rect*(9/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_1_plus_many.append("line")
    .attr("x1", w_rect*(3/15))
    .attr("y1", h_rect*(9/10))
    .attr("x2", w_rect*(3/15))
    .attr("y2", h_rect*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

d3.select("#rect_1_plus_many")
    .on("click", function() {

	    var colors = ["#cca2fa", "#91d5e4", "#d079a2"];

	    const random_color = Math.floor(Math.random()*colors.length);
    	
	    var i = Math.floor(Math.random()*12);
	    var k = Math.floor(Math.random()*13);

	    while (i < 3) {
		    i = Math.floor(Math.random()*12);
	    }

	    while (k <= i) {
    	    	    k = Math.floor(Math.random()*13);
	    }

	    var k_minus_i = k-i;


	    if (k_minus_i == 1) {
		    let j = 1;
		    let n = 1.66;
		    let scalar = Math.random()*(2 - (-0.5)) + (-0.5);
	    

            	    // top
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");


            	    // right vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // bottom
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // left vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
	    }
	    else if (k_minus_i == 2) {
		    let j = 1;
		    let n = 2.33;
		    let scalar = Math.random()*(2.17);
	    

            	    // top
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");


            	    // right vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // bottom
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // left vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
	    } 
	    else if (k_minus_i == 3) {
		    let j = 1;
		    let n = 3;
		    let scalar = Math.random()*(1.5);
	    

            	    // top
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");


            	    // right vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // bottom
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // left vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
	    }
	    else if (k_minus_i == 4) {
		    let j = 1;
		    let n = 3.66;
		    let scalar = Math.random()*(0.84);
	    

            	    // top
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");


            	    // right vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(k/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // bottom
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(k/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // left vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(i/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(i/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
	    } 
	    else {
		    let p = Math.floor(Math.random()*9) + 3;
		    let q = p+1;
		    let j = 1;
		    let n = 1.66;
		    let scalar = Math.random()*(2 - (-0.5)) + (-0.5);
	    

            	    // top
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(p/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(q/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");


            	    // right vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(q/15))
	    	        .attr("y1", w_rect*((j+scalar)/10))
	    	        .attr("x2", w_rect*(q/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // bottom
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(q/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(p/15))
	    	        .attr("y2", w_rect*((n+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
            	    
	    	    // left vertical
	    	    svg_rect_1_plus_many.append("line")
	    	        .attr("x1", w_rect*(p/15))
	    	        .attr("y1", w_rect*((n+scalar)/10))
	    	        .attr("x2", w_rect*(p/15))
	    	        .attr("y2", w_rect*((j+scalar)/10))
	    	        .style("stroke", colors[random_color])
	    	        .style("stroke-width", 5)
	    	        .style("stroke-dasharray", "3 3");
	    } 
    });




// Union of elements ---------------------------------------------------------
//
// Two boxes of different-sized circles unioned to one box -------------------

var circle_union_dataset_1 = [15, 20, 25];
var circle_union_dataset_2 = [18, 23, 28];

var w_union = 960;
var h_union = 230;

var svg_union = d3.select("#union")
  .append("svg")
    .attr("viewBox", "0 0 " + w_union + " " + h_union);

// box of circles set 1 label
svg_union.append("text")
    .text("Set A")
    .attr("x", 65)
    .attr("y", ((h_union/2) - 60))
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("fill", "#696a61");

// box of circles set 2 label
svg_union.append("text")
    .text("Set B")
    .attr("x", 300)
    .attr("y", ((h_union/2) - 60))
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("fill", "#696a61");

// box of circles sets 1 and 2 label
svg_union.append("text")
    .text("Set C")
    .attr("x", 640)
    .attr("y", ((h_union/2) - 60))
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("fill", "#696a61");

// box of circles set 1
//
// top line
svg_union.append("line")
    .attr("x1", 5)
    .attr("y1", ((h_union/2) - 50))
    .attr("x2", 190)
    .attr("y2", ((h_union/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// right vertical line
svg_union.append("line")
    .attr("x1", 190)
    .attr("y1", ((h_union/2) - 50))
    .attr("x2", 190)
    .attr("y2", ((h_union/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// bottom line
svg_union.append("line")
    .attr("x1", 190)
    .attr("y1", ((h_union/2) + 50))
    .attr("x2", 5)
    .attr("y2", ((h_union/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// left vertical line
svg_union.append("line")
    .attr("x1", 5)
    .attr("y1", ((h_union/2) + 50))
    .attr("x2", 5)
    .attr("y2", ((h_union/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);
    
// box of circles set 2
//
// top line
svg_union.append("line")
    .attr("x1", 220)
    .attr("y1", ((h_union/2) - 50))
    .attr("x2", 430)
    .attr("y2", ((h_union/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// right vertical line
svg_union.append("line")
    .attr("x1", 430)
    .attr("y1", ((h_union/2) - 50))
    .attr("x2", 430)
    .attr("y2", ((h_union/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// bottom line
svg_union.append("line")
    .attr("x1", 430)
    .attr("y1", ((h_union/2) + 50))
    .attr("x2", 220)
    .attr("y2", ((h_union/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// left vertical line
svg_union.append("line")
    .attr("x1", 220)
    .attr("y1", ((h_union/2) + 50))
    .attr("x2", 220)
    .attr("y2", ((h_union/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// box of circles sets 1 and 2
//
// top line
svg_union.append("line")
    .attr("x1", 450)
    .attr("y1", ((h_union/2) - 50))
    .attr("x2", 880)
    .attr("y2", ((h_union/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// right vertical line
svg_union.append("line")
    .attr("x1", 880)
    .attr("y1", ((h_union/2) - 50))
    .attr("x2", 880)
    .attr("y2", ((h_union/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// bottom line
svg_union.append("line")
    .attr("x1", 880)
    .attr("y1", ((h_union/2) + 50))
    .attr("x2", 450)
    .attr("y2", ((h_union/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// left vertical line
svg_union.append("line")
    .attr("x1", 450)
    .attr("y1", ((h_union/2) + 50))
    .attr("x2", 450)
    .attr("y2", ((h_union/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

var circle_union_set_1 = svg_union.selectAll(".circle_union_set_1")
    .data(circle_union_dataset_1)
    .enter()
  .append("circle");

circle_union_set_1.attr("cx", function(d, i) {
		return (i*60)+30;
	})
	.attr("cy", h_union/2)
	.attr("r", function(d) {
		return d;
	})
	.attr("fill", "#f5ffde")
	.attr("stroke", "#759e16")
	.attr("stroke-width", 3)
	.attr("stroke-dasharray", "1 2")
	.attr("class", "circle_union_set_1");

svg_union.selectAll(".text_union_set_1")
    .data(circle_union_dataset_1)
    .enter()
  .append("text")
    .text(function(d) {
	    return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
		return (i*60)+30;
	})
    .attr("y", (h_union/2)+5)
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "#696a61")
    .attr("class", "text_union_set_1");
    

var circle_union_set_2 = svg_union.selectAll(".circle_union_set_2")
    .data(circle_union_dataset_2)
    .enter()
  .append("circle");

circle_union_set_2.attr("cx", function(d, i) {
		return (i*70) + 250;
	})
	.attr("cy", h_union/2)
	.attr("r", function(d) {
		return d;
	})
	.attr("fill", "#f5ffde")
	.attr("stroke", "#759e16")
	.attr("stroke-width", 3)
	.attr("stroke-dasharray", "1 2")
	.attr("class", "circle_union_set_2");

svg_union.selectAll(".text_union_set_2")
    .data(circle_union_dataset_2)
    .enter()
  .append("text")
    .text(function(d) {
	    return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
		return (i*70)+250;
	})
    .attr("y", (h_union/2)+5)
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "#696a61")
    .attr("class", "text_union_set_2");

d3.select("#union_button")
    .on("click", function() {
	    var union_dataset = [15, 18, 20, 23, 25, 28];
	    var circle_union_set = svg_union.selectAll(".union_circles")
	        .data(union_dataset)
	        .enter()
	      .append("circle")
	        .transition()
	        .duration(2000)
	        .on("start", function() {
			d3.select(this)
			    .attr("fill", "#696a61")
			    .attr("r", 3);
		})
	        .attr("cx", function(d, i) {
	    		return 450+(i*70)+30;
	    	})
	    	.attr("cy", h_union/2)
	        .on("end", function() {
			d3.select(this)
			    .transition()
			    .duration(1000)
			    .ease(d3.easeLinear)
	    		    .attr("fill", "#f5ffde")
	    		    .attr("stroke", "#759e16")
	    		    .attr("stroke-width", 3)
			    .attr("stroke-dasharray", "1 2")
	    		    .attr("r", function(d) {
	    			return d;
	    		    })

		})
	        .attr("class", "union_circles");

	    svg_union.selectAll(".union_text")
	        .data(union_dataset)
	        .enter()
	      .append("text")
	        .transition()
	        .duration(2000)
	        .on("start", function() {
			d3.select(this)
	        	    .attr("font-size", "1px")
		})
	        .text(function(d) {
	    	    return d;
	        })
	        .attr("text-anchor", "middle")
	        .attr("x", function(d, i) {
	    		return 450+(i*70)+30;
	    	})
	        .attr("y", (h_union/2)+5)
	        .attr("font-family", "sans-serif")
	        .attr("fill", "#696a61")
	        .on("end", function() {
			d3.select(this)
			    .transition()
			    .duration(1000)
			    .ease(d3.easeLinear)
			    .attr("font-size","15px")
		})
	        .attr("class", "union_text");

    });











// Intersection of elements --------------------------------------------------
//
// Two boxes of different- and same-size circles intersected to one box ------

var circle_intersection_dataset_1 = [15, 20, 25];
var circle_intersection_dataset_2 = [15, 23, 25];

var w_intersection = 960;
var h_intersection = 230;

var svg_intersection = d3.select("#intersection")
  .append("svg")
    .attr("viewBox", "0 0 " + w_intersection + " " + h_intersection);

// box of circles set 1 label
svg_intersection.append("text")
    .text("Set A")
    .attr("x", 65)
    .attr("y", ((h_intersection/2) - 60))
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("fill", "#696a61");

// box of circles set 2 label
svg_intersection.append("text")
    .text("Set B")
    .attr("x", 300)
    .attr("y", ((h_intersection/2) - 60))
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("fill", "#696a61");

// box of circles set 1 intersected with set 2 label
svg_intersection.append("text")
    .text("Set C")
    .attr("x", 490)
    .attr("y", ((h_intersection/2) - 60))
    .attr("font-family", "sans-serif")
    .attr("font-size", "30px")
    .attr("fill", "#696a61");

// box of circles set 1
//
// top line
svg_intersection.append("line")
    .attr("x1", 5)
    .attr("y1", ((h_intersection/2) - 50))
    .attr("x2", 190)
    .attr("y2", ((h_intersection/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// right vertical line
svg_intersection.append("line")
    .attr("x1", 190)
    .attr("y1", ((h_intersection/2) - 50))
    .attr("x2", 190)
    .attr("y2", ((h_intersection/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// bottom line
svg_intersection.append("line")
    .attr("x1", 190)
    .attr("y1", ((h_intersection/2) + 50))
    .attr("x2", 5)
    .attr("y2", ((h_intersection/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// left vertical line
svg_intersection.append("line")
    .attr("x1", 5)
    .attr("y1", ((h_intersection/2) + 50))
    .attr("x2", 5)
    .attr("y2", ((h_intersection/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);
    
// box of circles set 2
//
// top line
svg_intersection.append("line")
    .attr("x1", 220)
    .attr("y1", ((h_intersection/2) - 50))
    .attr("x2", 430)
    .attr("y2", ((h_intersection/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// right vertical line
svg_intersection.append("line")
    .attr("x1", 430)
    .attr("y1", ((h_intersection/2) - 50))
    .attr("x2", 430)
    .attr("y2", ((h_intersection/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// bottom line
svg_intersection.append("line")
    .attr("x1", 430)
    .attr("y1", ((h_intersection/2) + 50))
    .attr("x2", 220)
    .attr("y2", ((h_intersection/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// left vertical line
svg_intersection.append("line")
    .attr("x1", 220)
    .attr("y1", ((h_intersection/2) + 50))
    .attr("x2", 220)
    .attr("y2", ((h_intersection/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// box of circles set 1 intersected with set 2
//
// top line
svg_intersection.append("line")
    .attr("x1", 450)
    .attr("y1", ((h_intersection/2) - 50))
    .attr("x2", 590)
    .attr("y2", ((h_intersection/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// right vertical line
svg_intersection.append("line")
    .attr("x1", 590)
    .attr("y1", ((h_intersection/2) - 50))
    .attr("x2", 590)
    .attr("y2", ((h_intersection/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// bottom line
svg_intersection.append("line")
    .attr("x1", 590)
    .attr("y1", ((h_intersection/2) + 50))
    .attr("x2", 450)
    .attr("y2", ((h_intersection/2) + 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

// left vertical line
svg_intersection.append("line")
    .attr("x1", 450)
    .attr("y1", ((h_intersection/2) + 50))
    .attr("x2", 450)
    .attr("y2", ((h_intersection/2) - 50))
    .attr("stroke", "#696a61")
    .attr("stroke-width", 3);

var circle_intersection_set_1 = svg_intersection.selectAll(".circle_intersection_set_1")
    .data(circle_intersection_dataset_1)
    .enter()
  .append("circle");

circle_intersection_set_1.attr("cx", function(d, i) {
		return (i*60)+30;
	})
	.attr("cy", h_intersection/2)
	.attr("r", function(d) {
		return d;
	})
	.attr("fill", "#f5ffde")
	.attr("stroke", "#759e16")
	.attr("stroke-width", 3)
	.attr("stroke-dasharray", "1 2")
	.attr("class", "circle_intersection_set_1");

svg_intersection.selectAll(".text_intersection_set_1")
    .data(circle_intersection_dataset_1)
    .enter()
  .append("text")
    .text(function(d) {
	    return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
		return (i*60)+30;
	})
    .attr("y", (h_intersection/2)+5)
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "#696a61")
    .attr("class", "text_intersection_set_1");
    

var circle_intersection_set_2 = svg_intersection.selectAll(".circle_intersection_set_2")
    .data(circle_intersection_dataset_2)
    .enter()
  .append("circle");

circle_intersection_set_2.attr("cx", function(d, i) {
		return (i*70) + 250;
	})
	.attr("cy", h_intersection/2)
	.attr("r", function(d) {
		return d;
	})
	.attr("fill", "#f5ffde")
	.attr("stroke", "#759e16")
	.attr("stroke-width", 3)
	.attr("stroke-dasharray", "1 2")
	.attr("class", "circle_intersection_set_2");

svg_intersection.selectAll(".text_intersection_set_2")
    .data(circle_intersection_dataset_2)
    .enter()
  .append("text")
    .text(function(d) {
	    return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) {
		return (i*70)+250;
	})
    .attr("y", (h_intersection/2)+5)
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "#696a61")
    .attr("class", "text_intersection_set_2");

d3.select("#intersection_button")
    .on("click", function() {
	    var intersection_dataset = [15, 25];
	    var circle_intersection_set = svg_intersection.selectAll(".intersection_circles")
	        .data(intersection_dataset)
	        .enter()
	      .append("circle")
	        .transition()
	        .duration(2000)
	        .on("start", function() {
			d3.select(this)
			    .attr("fill", "#696a61")
			    .attr("r", 3);
		})
	        .attr("cx", function(d, i) {
	    		return 450+(i*70)+30;
	    	})
	    	.attr("cy", h_intersection/2)
	        .on("end", function() {
			d3.select(this)
			    .transition()
			    .duration(1000)
			    .ease(d3.easeLinear)
	    		    .attr("fill", "#f5ffde")
	    		    .attr("stroke", "#759e16")
	    		    .attr("stroke-width", 3)
			    .attr("stroke-dasharray", "1 2")
	    		    .attr("r", function(d) {
	    			return d;
	    		    })

		})
	        .attr("class", "intersection_circles");

	    svg_intersection.selectAll(".intersection_text")
	        .data(intersection_dataset)
	        .enter()
	      .append("text")
	        .transition()
	        .duration(2000)
	        .on("start", function() {
			d3.select(this)
	        	    .attr("font-size", "1px")
		})
	        .text(function(d) {
	    	    return d;
	        })
	        .attr("text-anchor", "middle")
	        .attr("x", function(d, i) {
	    		return 450+(i*70)+30;
	    	})
	        .attr("y", (h_intersection/2)+5)
	        .attr("font-family", "sans-serif")
	        .attr("fill", "#696a61")
	        .on("end", function() {
			d3.select(this)
			    .transition()
			    .duration(1000)
			    .ease(d3.easeLinear)
			    .attr("font-size","15px")
		})
	        .attr("class", "intersection_text");

    });

// Size of union vs size of intersection vs size of unioned/intersected sets
svg_intersection.append("text")
    .text("Notice, compared to the sizes of A and B,")
    .attr("x", 600)
    .attr("y", ((h_intersection/2) - 70))
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "#696a61");

// Size of union vs size of intersection vs size of unioned/intersected sets
svg_intersection.append("text")
    .text("the size of the union is larger, while")
    .attr("x", 600)
    .attr("y", ((h_intersection/2) - 50))
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "#696a61");

// Size of union vs size of intersection vs size of unioned/intersected sets
svg_intersection.append("text")
    .text("the size of the intersection is smaller.")
    .attr("x", 600)
    .attr("y", ((h_intersection/2) - 30))
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "#696a61");

// Size of union vs size of intersection vs size of unioned/intersected sets
svg_intersection.append("text")
    .text("This difference in size of sets,")
    .attr("x", 600)
    .attr("y", ((h_intersection/2) - 10))
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "#696a61");

// Size of union vs size of intersection vs size of unioned/intersected sets
svg_intersection.append("text")
    .text("such that all elements in one set")
    .attr("x", 600)
    .attr("y", ((h_intersection/2) + 10))
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "#696a61");

// Size of union vs size of intersection vs size of unioned/intersected sets
svg_intersection.append("text")
    .text("appear as elements in another,")
    .attr("x", 600)
    .attr("y", ((h_intersection/2) + 30))
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "#696a61");

// Size of union vs size of intersection vs size of unioned/intersected sets
svg_intersection.append("text")
    .text("can be communicated symbolically.")
    .attr("x", 600)
    .attr("y", ((h_intersection/2) + 50))
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "#696a61");






// Venn Diagram --------------------------------------------------------------
//
// Three circles Inclusion-Exclusion Principle--------------------------------
const i_e_w = 960;
const i_e_h = 500;

var i_e_svg = d3.select("#inclusion_exclusion")
  .append("svg")
    .attr("viewBox", "0 0 " + i_e_w + " " + i_e_h);

const i_e_w_by_3 = i_e_w/3;
const i_e_h_by_3 = i_e_h/3;

// Left Circle
i_e_svg.append("circle")
    .attr("cx", i_e_w_by_3)
    .attr("cy", i_e_h_by_3)
    .attr("r", 160)
    .attr("fill", "none")
    .attr("stroke", "#696a61")
    .attr("stroke-width", 5)
    .attr("stroke-dasharray", "3 3");

const i_e_r = 160;

// Distance between centers of left and right circles
const offset = 1.2*i_e_r;

// Right Circle
i_e_svg.append("circle")
    .attr("cx", i_e_w_by_3 + offset)
    .attr("cy", i_e_h_by_3)
    .attr("r", 160)
    .attr("fill", "none")
    .attr("stroke", "#696a61")
    .attr("stroke-width", 5)
    .attr("stroke-dasharray", "3 3");

// Distance between top leg of equilateral triangle and center of 
// bottom circle
const bottom_circle_drop = i_e_h/3 + Math.sqrt(offset**2 - (offset/2)**2);

// Bottom Circle
i_e_svg.append("circle")
    .attr("cx", i_e_w_by_3 + (offset)/2)
    .attr("cy", bottom_circle_drop)
    .attr("r", 160)
    .attr("fill", "none")
    .attr("stroke", "#696a61")
    .attr("stroke-width", 5)
    .attr("stroke-dasharray", "3 3");

// The following are lines and points to help aid in the construction of the 
// the points 0 through 8

// Points
// i_e_point_0 is the center of the left circle
// i_e_point_1 is the center of the bottom circle
// i_e_point_2 is the bottom left intersection of the left and bottom circles
// i_e_point_3 is the center of the right circle
// i_e_point_4 is bottom right intersection of the right and bottom circles
// i_e_point_5 is the bottom of triple intersection
// i_e_point_6 is the top right of triple intersection
// i_e_point_7 is the top left of the triple intersection
// i_e_point_8 is the top intersection of the left and right circles

// Height of the triangle with vertices at the centers of the three circles:
// center of the left circle (i_e_w_by_3, i_e_h_by_3)
// center of the right circle (i_e_w_by_3 + offset, i_e_h_by_3)
// center of the bottom circle 
// (i_e_w_by_3 + offset/2, i_e_h_by_3 + Math.sqrt(offset**2 - (offset/2))**2)

//i_e_point_0 = i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3)
//    .attr("cy", i_e_h_by_3)
//    .attr("r", 5)
//    .attr("fill", "#696a61");

//i_e_point_1 = i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3 + (offset)/2)
//    .attr("cy", bottom_circle_drop)
//    .attr("r", 5)
//    .attr("fill", "#696a61");

//i_e_point_3 = i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3 + (offset))
//    .attr("cy", i_e_h_by_3)
//    .attr("r", 5)
//    .attr("fill", "#696a61");

// top equilateral triangle leg
//----------------------------------------------------------------------------
//i_e_svg.append("line")
//    .attr("x1", i_e_w_by_3)
//    .attr("y1", i_e_h_by_3)
//    .attr("x2", i_e_w_by_3 + offset)
//    .attr("y2", i_e_h_by_3)
//    .attr("stroke", "black");

// right equilateral triangle leg
// ---------------------------------------------------------------------------
//i_e_svg.append("line")
//    .attr("x1", i_e_w_by_3 + offset)
//    .attr("y1", i_e_h_by_3)
//    .attr("x2", i_e_w_by_3 + (offset)/2)
//    .attr("y2", bottom_circle_drop)
//    .attr("stroke", "black");

// midpoint of right equaliteral triangle leg
// Let the center of the bottom circle be the origin point.
// The circle with edge containing the midpoint of the right equilateral
// triangle leg has radius offset/2. The angle in standard position
// is measure 60 degrees---we are using the right leg and its attending angles
// of the equilateral triangle to determine this. Finally, we find the 
// change in the x and y directions between the center of the bottom circle
// and the midpoint of the right equilateral triangle leg, which is contained
// along the edge of our circle. This gives us the coordinate at which the 
// the midpoint of our right equilateral triangle leg sits.
// ---------------------------------------------------------------------------
//i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3 + (offset)/2 + (offset/2)*Math.cos(Math.PI/3))
//    .attr("cy", 
//	    bottom_circle_drop - 
//	    (offset/2)*Math.sin(Math.PI/3))
//    .attr("r", 5)
//    .attr("fill", "#696a61");
// ---------------------------------------------------------------------------
// Given that the triangle is equilateral, the distance from the midpoint
// of the right leg of the equilateral triangle to the top left corner point 
// of the triple intersection is the same distance the top leg of the
// equilateral triangle is from the bottom corner point of the triple
// intersection. We address this in the variable triple_intersection_height
// below. Once we have that distance, we find the change in the x and y
// directions between the midpoint of the right leg of the equilateral 
// triangle and where the top left corner point of the triple intersection
// will be placed.


// left equilateral triangle leg
// ---------------------------------------------------------------------------
//i_e_svg.append("line")
//    .attr("x1", i_e_w_by_3)
//    .attr("y1", i_e_h_by_3)
//    .attr("x2", i_e_w_by_3 + (offset)/2)
//    .attr("y2", bottom_circle_drop)
//    .attr("stroke", "black");

// midpoint of left equilateral triangle leg
// ---------------------------------------------------------------------------
//i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3 + (offset)/2 - (offset/2)*Math.cos(Math.PI/3))
//    .attr("cy", 
//	    bottom_circle_drop - 
//	    (offset/2)*Math.sin(Math.PI/3))
//    .attr("r", 5)
//    .attr("fill", "#696a61");

// bottom right point of quadrilateral containing bottom right intersection
// point
// ---------------------------------------------------------------------------
//i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3 + (offset/2) + offset)
//    .attr("cy", bottom_circle_drop)
//    .attr("r", 5)
//    .attr("fill", "#696a61");


// To find the height of the triple intersection, we use half of the distance
// of the offset along the top leg of the equilateral triangle 
// as one leg of a right triangle and the
// radius of the left circle along the line connecting the center
// of the left circle with the bottom corner point of the triple intersection
// as the hypotenuse of that right triangle to find the other leg of that
// right triangle, which happens to be the height of the tiple intersection.

const triple_intersection_height = Math.sqrt((i_e_r)**2 - ((offset)/2)**2);

//i_e_point_5 = i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3 + (offset)/2)
//    .attr("cy", i_e_h_by_3 + triple_intersection_height)
//    .attr("r", 5)
//    .attr("fill", "#696a61");
//
//
//
//i_e_point_7 = i_e_svg.append("circle")
//    .attr("cx", 
//	    i_e_w_by_3 + 
//	    (offset)/2 + 
//	    (offset/2)*Math.cos(Math.PI/3) - 
//	    triple_intersection_height*Math.sin(Math.PI/3))
//    .attr("cy", 
//	    bottom_circle_drop - 
//	    (offset/2)*Math.sin(Math.PI/3) - 
//    	    triple_intersection_height*Math.cos(Math.PI/3))
//    .attr("r", 5)
//    .attr("fill", "#696a61");
//
//i_e_point_6 = i_e_svg.append("circle")
//    .attr("cx", 
//	    i_e_w_by_3 + 
//	    (offset)/2 - 
//	    (offset/2)*Math.cos(Math.PI/3) + 
//	    triple_intersection_height*Math.sin(Math.PI/3))
//    .attr("cy", 
//	    bottom_circle_drop - 
//	    (offset/2)*Math.sin(Math.PI/3) - 
//    	    triple_intersection_height*Math.cos(Math.PI/3))
//    .attr("r", 5)
//    .attr("fill", "#696a61");

// For point 8, we take a similar approach as the one we took for the
// tiple_intersection_height variable
//i_e_point_8 = i_e_svg.append("circle")
//    .attr("cx", i_e_w_by_3 + offset/2)
//    .attr("cy", i_e_h_by_3 - Math.sqrt((i_e_r)**2 - (offset/2)**2))
//    .attr("r", 5)
//    .attr("fill", "#696a61");

// We use a point at the bottom right corner point of the rhombus with leg
// between the centers of the left circle and right circle (top-most leg)
// between the centers of the left circle and bottom circle (left side leg)
// to help us find i_e_point_4. The distance between this point
// and i_e_point_4 is the same as the distance between i_e_point_1 and
// i_e_point_5. The distance between i_e_point_1 and this new point is offset,
// given that we are using the rhombus to identify this point. Once we
// identify the coordinates of this point, we use the distance between
// i_e_point_1 and i_e_point_5 along with the change in the x and y
// directions between this new point and where i_e_point_4 is expected
// to sit (at the bottom right intersection of the right and bottom circles)
// to find the coordinates of i_e_point_4.

const i_e_point_1_to_i_e_point_5_distance = 
	bottom_circle_drop - i_e_h_by_3 - triple_intersection_height;

//i_e_point_4 = i_e_svg.append("circle")
//    .attr("cx", 
//	    i_e_w_by_3 + 
//	    (offset/2) +
//	    offset - 
//	    i_e_point_1_to_i_e_point_5_distance*Math.cos(Math.PI/6))
//    .attr("cy",
//    	    bottom_circle_drop - 
//	    i_e_point_1_to_i_e_point_5_distance*Math.sin(Math.PI/6))
//    .attr("r", 5)
//    .attr("fill", "#696a61");
//
//i_e_point_2 = i_e_svg.append("circle")
//    .attr("cx", 
//	    i_e_w_by_3 + 
//	    (offset/2) -
//	    offset + 
//	    i_e_point_1_to_i_e_point_5_distance*Math.cos(Math.PI/6))
//    .attr("cy",
//    	    bottom_circle_drop - 
//	    i_e_point_1_to_i_e_point_5_distance*Math.sin(Math.PI/6))
//    .attr("r", 5)
//    .attr("fill", "#696a61");

// Here, we list the components of each point
// point 8 -------------------------------------------------------------------
const i_e_point_8_x = i_e_w_by_3 + offset/2;
const i_e_point_8_y = i_e_h_by_3 - Math.sqrt((i_e_r)**2 - (offset/2)**2);
// point 5 ------------------------------------------------------------------- 
const i_e_point_5_x = i_e_w_by_3 + offset/2;
const i_e_point_5_y = i_e_h_by_3 + triple_intersection_height;
// point 7 -------------------------------------------------------------------
const i_e_point_7_x =
	i_e_w_by_3 +
	(offset/2) +
	(offset/2)*Math.cos(Math.PI/3) - 
	triple_intersection_height*Math.sin(Math.PI/3);
const i_e_point_7_y = 
	bottom_circle_drop -
	(offset/2)*Math.sin(Math.PI/3) - 
	triple_intersection_height*Math.cos(Math.PI/3);
// point 6 -------------------------------------------------------------------
const i_e_point_6_x = 
	i_e_w_by_3 +
	(offset/2) -
	(offset/2)*Math.cos(Math.PI/3) +
	triple_intersection_height*Math.sin(Math.PI/3);
const i_e_point_6_y = 
   	bottom_circle_drop - 
    	(offset/2)*Math.sin(Math.PI/3) - 
	triple_intersection_height*Math.cos(Math.PI/3);
// point 4 -------------------------------------------------------------------
const i_e_point_4_x =
	i_e_w_by_3 +
	(offset/2) +
	offset -
	i_e_point_1_to_i_e_point_5_distance*Math.cos(Math.PI/6);
const i_e_point_4_y = 
	bottom_circle_drop -
	i_e_point_1_to_i_e_point_5_distance*Math.sin(Math.PI/6);
// point 2 -------------------------------------------------------------------
const i_e_point_2_x = 
	i_e_w_by_3 +
	(offset/2) -
	offset +
	i_e_point_1_to_i_e_point_5_distance*Math.cos(Math.PI/6);
const i_e_point_2_y = 
	bottom_circle_drop -
	i_e_point_1_to_i_e_point_5_distance*Math.sin(Math.PI/6);

// Here, we change from the above system of coordinate numbering to: 
// 8 --> 1
// 6 --> 5
// 7 --> 6
// 5 --> 4
// 4 --> 3
// 2 --> 2
// So, the map below takes in 
// i=1 and points to our point 8
// i=2 and points to our point 2
// i=3 and points to our point 4
// i=4 and points to our point 5
// i=5 and points to our point 6
// i=6 and points to our point 7
x_points = [
	i_e_point_8_x,
	i_e_point_2_x,
	i_e_point_4_x,
	i_e_point_5_x,
	i_e_point_6_x,
	i_e_point_7_x
];
y_points = [
	i_e_point_8_y,
	i_e_point_2_y,
	i_e_point_4_y,
	i_e_point_5_y,
	i_e_point_6_y,
	i_e_point_7_y
];

const make_iron = ([x1, x2, x3, y1, y2, y3]) => {
	path = `M ${x1} ${y1}
		A ${i_e_r} ${i_e_r} 0 0 1 ${x2} ${y2}
		A ${i_e_r} ${i_e_r} 0 0 0 ${x3} ${y3}
		A ${i_e_r} ${i_e_r} 0 0 1 ${x1} ${y1}`
	return path;
}


const make_umbrella = ([x1, x2, x3, y1, y2, y3]) => {
	path = `M ${x1} ${y1}
		A ${i_e_r} ${i_e_r} 0 0 0 ${x2} ${y2}
		A ${i_e_r} ${i_e_r} 0 0 0 ${x3} ${y3}
		A ${i_e_r} ${i_e_r} 0 1 1 ${x1} ${y1}`
	return path;
}

const make_shield = ([x1, x2, x3, y1, y2, y3]) => {
	path = `M ${x1} ${y1}
		A ${i_e_r} ${i_e_r} 0 0 1 ${x2} ${y2}
		A ${i_e_r} ${i_e_r} 0 0 1 ${x3} ${y3}
		A ${i_e_r} ${i_e_r} 0 0 1 ${x1} ${y1}`
	return path;
}

iron_points = [
	[1, 5, 6],
	[3, 4, 5],
	[2, 6, 4]
];

umbrella_points = [
	[3, 5, 1],
	[2, 4, 3],
	[1, 6, 2]
];

shield_points = [
	[5, 4, 6]
];

var universe = 100;
var left_umbrella = universe*0.25;
var right_umbrella = universe*0.20;
var bottom_umbrella = universe*0.15;
var top_iron = universe*0.10;
var left_iron = universe*0.12;
var right_iron = universe*0.13;
var shield = universe*0.05;



for (const [n, point] of iron_points.entries()) {
	const point_cycle = point.map(i => x_points[i-1]).concat(
		point.map(i => y_points[i-1])
	);
	const shape = make_iron(point_cycle);

	var universe_array = [top_iron, right_iron, left_iron];

	var point_cycle_x = point.map(i => x_points[i-1]);
	var sum_x = 0;
	for (var j = 0; j < point_cycle_x.length; j++) {
		sum_x += point_cycle_x[j];
	}

	var point_cycle_y = point.map(i => y_points[i-1]);
	var sum_y = 0;
	for (var k = 0; k < point_cycle_y.length; k++) {
		sum_y += point_cycle_y[k];
	}

	if (n == 0) {
		i_e_svg.append("path")
		    .attr("d", shape)
		    .attr("class", "segment_8_6_7")
		    .attr("fill", "#759e16")
		    .attr("opacity", 0.4);
		i_e_svg.append("text")
		    .attr("class", "segment_8_6_7")
		    .text(universe_array[0])
		    .attr("text-anchor", "middle")
		    .attr("x", sum_x/3)
		    .attr("y", sum_y/3)
		    .attr("font-family", "sans-serif")
		    .attr("font-size", 25)
		    .attr("fill", "#696a61")
		    .attr("opacity", 0.0);
	} else if (n == 1) {
		i_e_svg.append("path")
		    .attr("d", shape)
		    .attr("class", "segment_4_5_6")
		    .attr("fill", "#759e16")
		    .attr("opacity", 0.4);
		i_e_svg.append("text")
		    .attr("class", "segment_4_5_6")
		    .text(universe_array[1])
		    .attr("text-anchor", "middle")
		    .attr("x", sum_x/3)
		    .attr("y", sum_y/3)
		    .attr("font-family", "sans-serif")
		    .attr("font-size", 25)
		    .attr("fill", "#696a61")
		    .attr("opacity", 0.0);
	} else {
		i_e_svg.append("path")
		    .attr("d", shape)
		    .attr("class", "segment_2_7_5")
		    .attr("fill", "#759e16")
		    .attr("opacity", 0.4);
		i_e_svg.append("text")
		    .attr("class", "segment_2_7_5")
		    .text(universe_array[2])
		    .attr("text-anchor", "middle")
		    .attr("x", sum_x/3)
		    .attr("y", sum_y/3)
		    .attr("font-family", "sans-serif")
		    .attr("font-size", 25)
		    .attr("fill", "#696a61")
		    .attr("opacity", 0.0);
	}
}

for (const [n, point] of umbrella_points.entries()) {
	const point_cycle = point.map(i => x_points[i-1]).concat(
		point.map(i => y_points[i-1])
	);
	const shape = make_umbrella(point_cycle);
	
	var universe_array = [right_umbrella, bottom_umbrella, left_umbrella];

	var point_cycle_x = point.map(i => x_points[i-1]);
	var sum_x = 0;
	for (var j = 0; j < point_cycle_x.length; j++) {
		sum_x += point_cycle_x[j];
	}

	var point_cycle_y = point.map(i => y_points[i-1]);
	var sum_y = 0;
	for (var k = 0; k < point_cycle_y.length; k++) {
		sum_y += point_cycle_y[k];
	}
	
	if (n == 0) {
		i_e_svg.append("path")
		    .attr("d", shape)
		    .attr("class", "segment_8_6_4")
		    .attr("fill", "#e0620d")
		    .attr("opacity", 0.4);

		const x_position = 1.2*(sum_x/3);
		const y_position = sum_y/3;

		i_e_svg.append("text")
		    .attr("class", "segment_8_6_4")
		    .text(universe_array[0])
		    .attr("text-anchor", "middle")
		    .attr("x", x_position)
		    .attr("y", y_position)
		    .attr("font-family", "sans-serif")
		    .attr("font-size", 25)
		    .attr("fill", "#696a61")
		    .attr("opacity", 0.0);
	} else if (n == 1) {
		i_e_svg.append("path")
		    .attr("d", shape)
		    .attr("class", "segment_4_5_2")
		    .attr("fill", "#e0620d")
		    .attr("opacity", 0.4);

		const x_position = sum_x/3;
		const y_position = 1.2*(sum_y/3);

		i_e_svg.append("text")
		    .attr("class", "segment_4_5_2")
		    .text(universe_array[1])
		    .attr("text-anchor", "middle")
		    .attr("x", x_position)
		    .attr("y", y_position)
		    .attr("font-family", "sans-serif")
		    .attr("font-size", 25)
		    .attr("fill", "#696a61")
		    .attr("opacity", 0.0);
	} else {
		i_e_svg.append("path")
		    .attr("d", shape)
		    .attr("class", "segment_2_7_8")
		    .attr("fill", "#e0620d")
		    .attr("opacity", 0.4);

		const x_position = sum_x/3 - 0.2*(sum_x/3);
		const y_position = sum_y/3;

		i_e_svg.append("text")
		    .attr("class", "segment_2_7_8")
		    .text(universe_array[2])
		    .attr("text-anchor", "middle")
		    .attr("x", x_position)
		    .attr("y", y_position)
		    .attr("font-family", "sans-serif")
		    .attr("font-size", 25)
		    .attr("fill", "#696a61")
		    .attr("opacity", 0.0);
	}
}

for (const [n, point] of shield_points.entries()) {
	const point_cycle = point.map(i => x_points[i-1]).concat(
		point.map(i => y_points[i-1])
	);
	const shape = make_shield(point_cycle);
	
	var universe_array = [shield];

	var point_cycle_x = point.map(i => x_points[i-1]);
	var sum_x = 0;
	for (var j = 0; j < point_cycle_x.length; j++) {
		sum_x += point_cycle_x[j];
	}

	var point_cycle_y = point.map(i => y_points[i-1]);
	var sum_y = 0;
	for (var k = 0; k < point_cycle_y.length; k++) {
		sum_y += point_cycle_y[k];
	}

	i_e_svg.append("path")
	    .attr("d", shape)
	    .attr("class", "segment_6_5_7")
	    .attr("fill", "#ffcd04")
	    .attr("opacity", 0.4);
	i_e_svg.append("text")
	    .attr("class", "segment_6_5_7")
	    .text(universe_array[0])
	    .attr("text-anchor", "middle")
	    .attr("x", sum_x/3)
	    .attr("y", sum_y/3)
	    .attr("font-family", "sans-serif")
	    .attr("font-size", 25)
	    .attr("fill", "#696a61")
	    .attr("opacity", 0.0);
}


d3.select("path.segment_8_6_4")
    .on("mouseover", function() {
	    i_e_svg.selectAll(".segment_8_6_4")
	        .transition()
	        .attr("opacity", 0.8)
	        .duration(500);
    })
    .on("mouseout", function() {
	    i_e_svg.selectAll(".segment_8_6_4")
	        .transition()
	        .attr("opacity", 0.4)
	        .duration(500);
    });
d3.select("path.segment_4_5_2")
    .on("mouseover", function() {
	    i_e_svg.selectAll(".segment_4_5_2")
	        .transition()
	        .attr("opacity", 0.8)
	        .duration(500);
    })
    .on("mouseout", function() {
	    i_e_svg.selectAll(".segment_4_5_2")
	        .transition()
	        .attr("opacity", 0.4)
	        .duration(500);
    });
d3.select("path.segment_2_7_8")
    .on("mouseover", function() {
	    i_e_svg.selectAll(".segment_2_7_8")
	        .transition()
	        .attr("opacity", 0.8)
	        .duration(500);
    })
    .on("mouseout", function() {
	    i_e_svg.selectAll(".segment_2_7_8")
	        .transition()
	        .attr("opacity", 0.4)
	        .duration(500);
    });
d3.select("path.segment_8_6_7")
    .on("mouseover", function() {
	    i_e_svg.selectAll(".segment_8_6_7")
	        .transition()
	        .attr("opacity", 0.8)
	        .duration(500);
    })
    .on("mouseout", function() {
	    i_e_svg.selectAll(".segment_8_6_7")
	        .transition()
	        .attr("opacity", 0.4)
	        .duration(500);
    });
d3.select("path.segment_4_5_6")
    .on("mouseover", function() {
	    i_e_svg.selectAll(".segment_4_5_6")
	        .transition()
	        .attr("opacity", 0.8)
	        .duration(500);
    })
    .on("mouseout", function() {
	    i_e_svg.selectAll(".segment_4_5_6")
	        .transition()
	        .attr("opacity", 0.4)
	        .duration(500);
    });
d3.select("path.segment_2_7_5")
    .on("mouseover", function() {
	    i_e_svg.selectAll(".segment_2_7_5")
	        .transition()
	        .attr("opacity", 0.8)
	        .duration(500);
    })
    .on("mouseout", function() {
	    i_e_svg.selectAll(".segment_2_7_5")
	        .transition()
	        .attr("opacity", 0.4)
	        .duration(500);
    });
d3.select("path.segment_6_5_7")
    .on("mouseover", function() {
	    i_e_svg.selectAll(".segment_6_5_7")
	        .transition()
	        .attr("opacity", 0.8)
	        .duration(500);
    })
    .on("mouseout", function() {
	    i_e_svg.selectAll(".segment_6_5_7")
	        .transition()
	        .attr("opacity", 0.4)
	        .duration(500);
    });


d3.select("#inclusion_exclusion_button")
    .on("click", function() {
	i_e_svg.select("text.segment_8_6_4")
	    .remove();
	i_e_svg.select("text.segment_4_5_2")
	    .remove();
	i_e_svg.select("text.segment_2_7_8")
	    .remove();
	i_e_svg.select("text.segment_8_6_7")
	    .remove();
	i_e_svg.select("text.segment_4_5_6")
	    .remove();
	i_e_svg.select("text.segment_2_7_5")
	    .remove();
	i_e_svg.select("text.segment_6_5_7")
	    .remove();
	const universe_generator = [
		100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300
	];
	universe = universe_generator[Math.floor(Math.random()*13)];
	left_umbrella = universe*0.25;
	right_umbrella = universe*0.20;
	bottom_umbrella = universe*0.15;
	top_iron = universe*0.10;
	left_iron = universe*0.12;
	right_iron = universe*0.13;
	shield = universe*0.05;
	for (const [n, point] of iron_points.entries()) {
		const point_cycle = point.map(i => x_points[i-1]).concat(
			point.map(i => y_points[i-1])
		);
		const shape = make_iron(point_cycle);
	
		var universe_array = [top_iron, right_iron, left_iron];
	
		var point_cycle_x = point.map(i => x_points[i-1]);
		var sum_x = 0;
		for (var j = 0; j < point_cycle_x.length; j++) {
			sum_x += point_cycle_x[j];
		}
	
		var point_cycle_y = point.map(i => y_points[i-1]);
		var sum_y = 0;
		for (var k = 0; k < point_cycle_y.length; k++) {
			sum_y += point_cycle_y[k];
		}
	
		if (n == 0) {
			i_e_svg.append("text")
			    .attr("class", "segment_8_6_7")
			    .text(universe_array[0])
			    .attr("text-anchor", "middle")
			    .attr("x", sum_x/3)
			    .attr("y", sum_y/3)
			    .attr("font-family", "sans-serif")
			    .attr("font-size", 25)
			    .attr("fill", "#696a61")
			    .attr("opacity", 0.0);
		} else if (n == 1) {
			i_e_svg.append("text")
			    .attr("class", "segment_4_5_6")
			    .text(universe_array[1])
			    .attr("text-anchor", "middle")
			    .attr("x", sum_x/3)
			    .attr("y", sum_y/3)
			    .attr("font-family", "sans-serif")
			    .attr("font-size", 25)
			    .attr("fill", "#696a61")
			    .attr("opacity", 0.0);
		} else {
			i_e_svg.append("text")
			    .attr("class", "segment_2_7_5")
			    .text(universe_array[2])
			    .attr("text-anchor", "middle")
			    .attr("x", sum_x/3)
			    .attr("y", sum_y/3)
			    .attr("font-family", "sans-serif")
			    .attr("font-size", 25)
			    .attr("fill", "#696a61")
			    .attr("opacity", 0.0);
		}
	}
	
	for (const [n, point] of umbrella_points.entries()) {
		const point_cycle = point.map(i => x_points[i-1]).concat(
			point.map(i => y_points[i-1])
		);
		const shape = make_umbrella(point_cycle);
		
		var universe_array = [right_umbrella, bottom_umbrella, left_umbrella];
	
		var point_cycle_x = point.map(i => x_points[i-1]);
		var sum_x = 0;
		for (var j = 0; j < point_cycle_x.length; j++) {
			sum_x += point_cycle_x[j];
		}
	
		var point_cycle_y = point.map(i => y_points[i-1]);
		var sum_y = 0;
		for (var k = 0; k < point_cycle_y.length; k++) {
			sum_y += point_cycle_y[k];
		}
		
		if (n == 0) {
	
			const x_position = 1.2*(sum_x/3);
			const y_position = sum_y/3;
	
			i_e_svg.append("text")
			    .attr("class", "segment_8_6_4")
			    .text(universe_array[0])
			    .attr("text-anchor", "middle")
			    .attr("x", x_position)
			    .attr("y", y_position)
			    .attr("font-family", "sans-serif")
			    .attr("font-size", 25)
			    .attr("fill", "#696a61")
			    .attr("opacity", 0.0);
		} else if (n == 1) {
	
			const x_position = sum_x/3;
			const y_position = 1.2*(sum_y/3);
	
			i_e_svg.append("text")
			    .attr("class", "segment_4_5_2")
			    .text(universe_array[1])
			    .attr("text-anchor", "middle")
			    .attr("x", x_position)
			    .attr("y", y_position)
			    .attr("font-family", "sans-serif")
			    .attr("font-size", 25)
			    .attr("fill", "#696a61")
			    .attr("opacity", 0.0);
		} else {
	
			const x_position = sum_x/3 - 0.2*(sum_x/3);
			const y_position = sum_y/3;
	
			i_e_svg.append("text")
			    .attr("class", "segment_2_7_8")
			    .text(universe_array[2])
			    .attr("text-anchor", "middle")
			    .attr("x", x_position)
			    .attr("y", y_position)
			    .attr("font-family", "sans-serif")
			    .attr("font-size", 25)
			    .attr("fill", "#696a61")
			    .attr("opacity", 0.0);
		}
	}
	
	for (const [n, point] of shield_points.entries()) {
		const point_cycle = point.map(i => x_points[i-1]).concat(
			point.map(i => y_points[i-1])
		);
		const shape = make_shield(point_cycle);
		
		var universe_array = [shield];
	
		var point_cycle_x = point.map(i => x_points[i-1]);
		var sum_x = 0;
		for (var j = 0; j < point_cycle_x.length; j++) {
			sum_x += point_cycle_x[j];
		}
	
		var point_cycle_y = point.map(i => y_points[i-1]);
		var sum_y = 0;
		for (var k = 0; k < point_cycle_y.length; k++) {
			sum_y += point_cycle_y[k];
		}
	
		i_e_svg.append("text")
		    .attr("class", "segment_6_5_7")
		    .text(universe_array[0])
		    .attr("text-anchor", "middle")
		    .attr("x", sum_x/3)
		    .attr("y", sum_y/3)
		    .attr("font-family", "sans-serif")
		    .attr("font-size", 25)
		    .attr("fill", "#696a61")
		    .attr("opacity", 0.0);
	}
    });






// One-dimensional real line filled with interval of a specified distance ----
//
//
// ---------------------------------------------------------------------------
// 4 intervals ---------------------------------------------------------------
var w_svg_for_line = 960;
var h_svg_for_line = 150;

var svg_for_line_0 = d3.select("#math0")
  .append("svg")
    .attr("viewBox", "0 0 " + w_svg_for_line + " " + h_svg_for_line);

svg_for_line_0.append("line")
    .style("stroke", "#759e16")
    .style("stroke-width", 5)
    .attr("x1", 0)
    .attr("y1", h_svg_for_line/2)
    .attr("x2", w_svg_for_line)
    .attr("y2", h_svg_for_line/2);


// Outer parentheses spanning the entire line
//
//
var parenthesis_open_0 = d3.path();
var parenthesis_close_0 = d3.path();

// Distance of right-most pixel of vertex of parenthesis to i is 18px 
// when convexity is 40
var convexity = 40;

var drawn_convexity = 18; // x distance from vertex to endpoints of parentheses
var vertical_distance = 90;

// The left-most pixel of the vertex of the parenthesis to i is 23px 
// when parenthesis_width is 5
var parenthesis_width = 5;

// Given n is "number of intervals", increment is 
// (960 - [ n*( (2*parenthesis_width) + (2*drawn_convexity) ) ] )/n
var increment_0 = 194; // x distance from endpoints of open parenthesis
// to endpoints of closed parenthesis

var distance_0 = increment_0 + (2*drawn_convexity) + (2*parenthesis_width);  

for (let i = 23; i < 960; i = i + distance_0) {
	parenthesis_open_0.moveTo(
		i, 
		(h_svg_for_line/2) + (vertical_distance/2)
	);
	parenthesis_open_0.quadraticCurveTo(
		i - convexity, 
		h_svg_for_line/2, 
		i, 
		(h_svg_for_line/2) - (vertical_distance/2)
	);
	
	svg_for_line_0.append("path")
	    .style("stroke", "#9977bd")
	    .style("stroke-width", parenthesis_width)
	    .attr("d", parenthesis_open_0)
	    .attr("fill", "none");
	
	parenthesis_close_0.moveTo(
		i + increment_0, 
		(h_svg_for_line/2) + (vertical_distance/2)
	);
	parenthesis_close_0.quadraticCurveTo(
		i + increment_0 + convexity, 
		h_svg_for_line/2,
		i + increment_0,
		(h_svg_for_line/2) - (vertical_distance/2)
	);

	svg_for_line_0.append("path")
	    .style("stroke", "#9977bd")
	    .style("stroke-width", parenthesis_width)
	    .attr("d", parenthesis_close_0)
	    .attr("fill", "none");
}


// Middle parentheses spanning located between the outer parentheses
// spanning the entire line
//
//
var parenthesis_middles_open_0 = d3.path();
var parenthesis_middles_close_0 = d3.path();


for (var i = 23 + distance_0/2; 
	i < 960 - distance_0; 
	i = i + distance_0) {
	parenthesis_middles_open_0.moveTo(
		i, 
		(h_svg_for_line/2) + (vertical_distance/3)
	);
	parenthesis_middles_open_0.quadraticCurveTo(
		i - convexity, 
		h_svg_for_line/2, 
		i, 
		(h_svg_for_line/2) - (vertical_distance/3)
	);
	
	svg_for_line_0.append("path")
	    .style("stroke", "#696a61")
	    .style("stroke-width", parenthesis_width)
	    .style("stroke-dasharray", "3 3")
	    .attr("d", parenthesis_middles_open_0)
	    .attr("fill", "none");
}

for (var i = 23 + distance_0 + distance_0/2; 
	i < 960; 
	i = i + distance_0) {
	parenthesis_middles_close_0.moveTo(
		i - 2*(drawn_convexity + parenthesis_width), 
		(h_svg_for_line/2) + (vertical_distance/3)
	);
	parenthesis_middles_close_0.quadraticCurveTo(
		i - 2*(drawn_convexity + parenthesis_width) + convexity, 
		h_svg_for_line/2,
		i -2*(drawn_convexity + parenthesis_width),
		(h_svg_for_line/2) - (vertical_distance/3)
	);

	svg_for_line_0.append("path")
	    .style("stroke", "#696a61")
	    .style("stroke-width", parenthesis_width)
	    .style("stroke-dasharray", "3 3")
	    .attr("d", parenthesis_middles_close_0)
	    .attr("fill", "none");
}



// ---------------------------------------------------------------------------
// 8 intervals ---------------------------------------------------------------
var svg_for_line_1 = d3.select("#math1")
  .append("svg")
    .attr("viewBox", "0 0 " + w_svg_for_line + " " + h_svg_for_line);

svg_for_line_1.append("line")
    .style("stroke", "#759e16")
    .style("stroke-width", 5)
    .attr("x1", 0)
    .attr("y1", h_svg_for_line/2)
    .attr("x2", w_svg_for_line)
    .attr("y2", h_svg_for_line/2);


// Outer parentheses spanning the entire line
//
//
var parenthesis_open_1 = d3.path();
var parenthesis_close_1 = d3.path();

// Distance of right-most pixel of vertex of parenthesis to i is 18px 
// when convexity is 40

// The left-most pixel of the vertex of the parenthesis to i is 23px 
// when parenthesis_width is 5

// Given n is "number of intervals", increment is 
// (960 - [ n*( (2*parenthesis_width) + (2*drawn_convexity) ) ] )/n
var increment_1 = 74; // x distance from endpoints of open parenthesis
// to endpoints of closed parenthesis

var distance_1 = increment_1 + (2*drawn_convexity) + (2*parenthesis_width);  

for (let i = 23; i < 960; i = i + distance_1) {
	parenthesis_open_1.moveTo(
		i, 
		(h_svg_for_line/2) + (vertical_distance/2)
	);
	parenthesis_open_1.quadraticCurveTo(
		i - convexity, 
		h_svg_for_line/2, 
		i, 
		(h_svg_for_line/2) - (vertical_distance/2)
	);
	
	svg_for_line_1.append("path")
	    .style("stroke", "#9977bd")
	    .style("stroke-width", parenthesis_width)
	    .attr("d", parenthesis_open_1)
	    .attr("fill", "none");

	parenthesis_close_1.moveTo(
		i + increment_1, 
		(h_svg_for_line/2) + (vertical_distance/2)
	);
	parenthesis_close_1.quadraticCurveTo(
		i + increment_1 + convexity, 
		h_svg_for_line/2,
		i + increment_1,
		(h_svg_for_line/2) - (vertical_distance/2)
	);

	svg_for_line_1.append("path")
	    .style("stroke", "#9977bd")
	    .style("stroke-width", parenthesis_width)
	    .attr("d", parenthesis_close_1)
	    .attr("fill", "none");
	
}


// Middle parentheses spanning located between the outer parentheses
// spanning the entire line
//
//
var parenthesis_middles_open_1 = d3.path();
var parenthesis_middles_close_1 = d3.path();

for (var i = 23 + distance_1/2; 
	i < 960 - distance_1; 
	i = i + distance_1) {
	parenthesis_middles_open_1.moveTo(
		i, 
		(h_svg_for_line/2) + (vertical_distance/3)
	);
	parenthesis_middles_open_1.quadraticCurveTo(
		i - convexity, 
		h_svg_for_line/2, 
		i, 
		(h_svg_for_line/2) - (vertical_distance/3)
	);
	
	svg_for_line_1.append("path")
	    .style("stroke", "#696a61")
	    .style("stroke-width", parenthesis_width)
	    .style("stroke-dasharray", "3 3")
	    .attr("d", parenthesis_middles_open_1)
	    .attr("fill", "none");
}	

for (var i = 23 + distance_1 + distance_1/2; 
	i < 960; 
	i = i + distance_1) {
	parenthesis_middles_close_1.moveTo(
		i - 2*(drawn_convexity + parenthesis_width), 
		(h_svg_for_line/2) + (vertical_distance/3)
	);
	parenthesis_middles_close_1.quadraticCurveTo(
		i - 2*(drawn_convexity + parenthesis_width) + convexity, 
		h_svg_for_line/2,
		i -2*(drawn_convexity + parenthesis_width),
		(h_svg_for_line/2) - (vertical_distance/3)
	);

	svg_for_line_1.append("path")
	    .style("stroke", "#696a61")
	    .style("stroke-width", parenthesis_width)
	    .style("stroke-dasharray", "3 3")
	    .attr("d", parenthesis_middles_close_1)
	    .attr("fill", "none");
}



// ---------------------------------------------------------------------------
// 12 intervals ---------------------------------------------------------------
var svg_for_line_2 = d3.select("#math2")
  .append("svg")
    .attr("viewBox", "0 0 " + w_svg_for_line + " " + h_svg_for_line);

svg_for_line_2.append("line")
    .style("stroke", "#759e16")
    .style("stroke-width", 5)
    .attr("x1", 0)
    .attr("y1", h_svg_for_line/2)
    .attr("x2", w_svg_for_line)
    .attr("y2", h_svg_for_line/2);


// Outer parentheses spanning the entire line
//
//
var parenthesis_open_2 = d3.path();
var parenthesis_close_2 = d3.path();

// Distance of right-most pixel of vertex of parenthesis to i is 18px 
// when convexity is 40

// The left-most pixel of the vertex of the parenthesis to i is 23px 
// when parenthesis_width is 5

// Given n is "number of intervals", increment is 
// (960 - [ n*( (2*parenthesis_width) + (2*drawn_convexity) ) ] )/n
var increment_2 = 34;

var distance_2 = increment_2 + (2*drawn_convexity) + (2*parenthesis_width);  

for (let i = 23; i < 960; i = i + distance_2) {
	parenthesis_open_2.moveTo(
		i, 
		(h_svg_for_line/2) + (vertical_distance/2)
	);
	parenthesis_open_2.quadraticCurveTo(
		i - convexity, 
		h_svg_for_line/2, 
		i, 
		(h_svg_for_line/2) - (vertical_distance/2)
	);
	
	svg_for_line_2.append("path")
	    .style("stroke", "#9977bd")
	    .style("stroke-width", parenthesis_width)
	    .attr("d", parenthesis_open_2)
	    .attr("fill", "none");

	parenthesis_close_2.moveTo(
		i + increment_2, 
		(h_svg_for_line/2) + (vertical_distance/2)
	);
	parenthesis_close_2.quadraticCurveTo(
		i + increment_2 + convexity, 
		h_svg_for_line/2,
		i + increment_2,
		(h_svg_for_line/2) - (vertical_distance/2)
	);

	svg_for_line_2.append("path")
	    .style("stroke", "#9977bd")
	    .style("stroke-width", parenthesis_width)
	    .attr("d", parenthesis_close_2)
	    .attr("fill", "none");
	
}


// Middle parentheses spanning located between the outer parentheses
// spanning the entire line
//
//
var parenthesis_middles_open_2 = d3.path();
var parenthesis_middles_close_2 = d3.path();

for (var i = 23 + distance_2/2; 
	i < 960 - distance_2; 
	i = i + distance_2) {
	parenthesis_middles_open_2.moveTo(
		i, 
		(h_svg_for_line/2) + (vertical_distance/3)
	);
	parenthesis_middles_open_2.quadraticCurveTo(
		i - convexity, 
		h_svg_for_line/2, 
		i, 
		(h_svg_for_line/2) - (vertical_distance/3)
	);
	
	svg_for_line_2.append("path")
	    .style("stroke", "#696a61")
	    .style("stroke-width", parenthesis_width)
	    .style("stroke-dasharray", "3 3")
	    .attr("d", parenthesis_middles_open_2)
	    .attr("fill", "none");
}	

for (var i = 23 + distance_2 + distance_2/2; 
	i < 960; 
	i = i + distance_2) {
	parenthesis_middles_close_2.moveTo(
		i - 2*(drawn_convexity + parenthesis_width), 
		(h_svg_for_line/2) + (vertical_distance/3)
	);
	parenthesis_middles_close_2.quadraticCurveTo(
		i - 2*(drawn_convexity + parenthesis_width) + convexity, 
		h_svg_for_line/2,
		i -2*(drawn_convexity + parenthesis_width),
		(h_svg_for_line/2) - (vertical_distance/3)
	);

	svg_for_line_2.append("path")
	    .style("stroke", "#696a61")
	    .style("stroke-width", parenthesis_width)
	    .style("stroke-dasharray", "3 3")
	    .attr("d", parenthesis_middles_close_2)
	    .attr("fill", "none");
}





// Ball of radius delta inside of ball of radius epsilon ---------------------
//
//
// ---------------------------------------------------------------------------
var width_epsilon_delta_svg = 960;
var height_epsilon_delta_svg = 600;

var epsilon_ball_radius = 290;
var delta_ball_radius = 120;

var epsilon_delta_svg = d3.select("#ball0")
  .append("svg")
    .attr("viewBox", 
	    "0 0 " 
	    + width_epsilon_delta_svg 
	    + " " 
	    + height_epsilon_delta_svg);

// The epsilon ball ----------------------------------------------------------
epsilon_delta_svg.append("circle")
    .style("stroke", "#9977bd")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3")
    .style("fill", "#759e16")
    .attr("cx", width_epsilon_delta_svg/2)
    .attr("cy", height_epsilon_delta_svg/2)
    .attr("r", epsilon_ball_radius);

// The delta ball ------------------------------------------------------------
epsilon_delta_svg.append("circle")
    .style("stroke", "#9977bd")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3")
    .style("fill", "#f5ffde")
    .attr("cx", (width_epsilon_delta_svg/2) - 110)
    .attr("cy", (height_epsilon_delta_svg/2) - 90)
    .attr("r", delta_ball_radius);



// Radius line in esilon ball ------------------------------------------------
// We need a line extending from the middle of the ball
// (width_epsilon_delta_svg/2, height_epsilon_delta_svg/2)
// to a point on the circle enclosing the ball.
// (width_epsilon_delta_svg/2 + x, height_epsilon_delta_svg/2 + x)
// We establish this the easy way: Pythagorean Theorem with legs
// of equal length.
// So, we have that length as x = sqrt( ([epsilon_ball_radius]^2)/2 )
epsilon_delta_svg.append("line")
    .attr("x1", width_epsilon_delta_svg/2)
    .attr("y1", height_epsilon_delta_svg/2)
    .attr("x2", 
	    (width_epsilon_delta_svg/2) 
	    + Math.sqrt((epsilon_ball_radius**2)/2))
    .attr("y2", 
	    (height_epsilon_delta_svg/2)
	    + Math.sqrt((epsilon_ball_radius**2)/2))
    .style("stroke", "#f5ffde")
    .style("stroke-width", 5);

// Radius epsilon symbol ----------------------------------------------------- 
epsilon_delta_svg.append("text")
    .text("\u03B5")
    .attr("x", width_epsilon_delta_svg/2 + 115)
    .attr("y", height_epsilon_delta_svg/2 + 110)
    .attr("font-family", "sans-serif")
    .attr("font-size", "42px")
    .attr("fill", "#f5ffde");
    

// Radius line in delta ball -------------------------------------------------
// We need a line extending from the middle of the ball
// (width_epsilon_delta_svg/2 - 110, height_epsilon_delta_svg/2 - 90)
// to a point on the circle enclosing the ball.
// (width_epsilon_delta_svg/2 - 110 + x, height_epsilon_delta_svg/2 - 90 + x)
// We establish this the easy way: Pythagorean Theorem with legs
// of equal length.
// So, we have that length as x = sqrt( ([delta_ball_radius]^2)/2 )
epsilon_delta_svg.append("line")
    .attr("x1", width_epsilon_delta_svg/2 - 110)
    .attr("y1", height_epsilon_delta_svg/2 - 90)
    .attr("x2", 
	    (width_epsilon_delta_svg/2 - 110) 
	    - Math.sqrt((delta_ball_radius**2)/2))
    .attr("y2", 
	    (height_epsilon_delta_svg/2 - 90)
	    + Math.sqrt((delta_ball_radius**2)/2))
    .style("stroke", "#759e16")
    .style("stroke-width", 5);

// Radius delta symbol -------------------------------------------------------
epsilon_delta_svg.append("text")
    .text("\u03B4")
    .attr("x", width_epsilon_delta_svg/2 - 110 - 85)
    .attr("y", height_epsilon_delta_svg/2 -90 + 55)
    .attr("font-family", "sans-serif")
    .attr("font-size", "42px")
    .attr("fill", "#759e16");

// Point x in epsilon ball --------------------------------------------------- 
epsilon_delta_svg.append("text")
    .text("x")
    .attr("x", width_epsilon_delta_svg/2 + 10)
    .attr("y", height_epsilon_delta_svg/2)
    .attr("font-family", "sans-serif")
    .attr("font-size", "42px")
    .attr("fill", "#f5ffde");

epsilon_delta_svg.append("circle")
    .style("fill", "#f5ffde")
    .attr("cx", width_epsilon_delta_svg/2)
    .attr("cy", height_epsilon_delta_svg/2)
    .attr("r", 5);

// Point y in delta ball -----------------------------------------------------
epsilon_delta_svg.append("text")
    .text("y")
    .attr("x", width_epsilon_delta_svg/2 - 110 + 10)
    .attr("y", height_epsilon_delta_svg/2 - 90)
    .attr("font-family", "sans-serif")
    .attr("font-size", "42px")
    .attr("fill", "#759e16");

epsilon_delta_svg.append("circle")
    .style("fill", "#759e16")
    .attr("cx", width_epsilon_delta_svg/2 - 110)
    .attr("cy", height_epsilon_delta_svg/2 - 90)
    .attr("r", 5);

// Point z in delta ball -----------------------------------------------------
epsilon_delta_svg.append("circle")
    .style("fill", "#759e16")
    .attr("cx", width_epsilon_delta_svg/2 - 90)
    .attr("cy", height_epsilon_delta_svg/2 - 170)
    .attr("r", 5);

epsilon_delta_svg.append("text")
    .text("z")
    .attr("x", width_epsilon_delta_svg/2 - 90 - 30)
    .attr("y", height_epsilon_delta_svg/2 - 170)
    .attr("font-family", "sans-serif")
    .attr("font-size", "42px")
    .attr("fill", "#759e16");





// Two-dimensional Euclidean space filled with balls of radius r -------------
//
//
// ---------------------------------------------------------------------------
// Total area we wish to fill is 107521
// 107521 comes from the following
// For h_0=380, [(h_0/2)^2]*pi=107521
// If a total area larger than 107521 is desired, 
// h_0 may be increased
// radius r=128 for larger circle and radius r=34 for smaller circles

var w_0 = 960;
var h_0 = 380;


var color = "rgba(105, 106, 97, 0.6)";

var number_nodes_0 = 1;
var nodes_set_0 = d3.range(number_nodes_0).map(function(d, i) {
	return {
		satellite_circles: [
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{}
		],
		radii_0: 145};
});

var the_simulation_0 = d3.forceSimulation(nodes_set_0)
    .force("center", d3.forceCenter(w_0/2, h_0/2));

var svg_nodes_set_0 = d3.select(".featuredgallery0")
  .append("svg")
    .attr("viewBox", "0 0 " + w_0 + " " + h_0); 

// larger space in which the circles reside
svg_nodes_set_0.append("circle")
    .style("stroke", "#9977bd")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3")
    .style("fill", "none")
    .attr("cx", w_0/2)
    .attr("cy", h_0/2)
    .attr("r", 185)
    .attr("class", "larger_space");

var all_the_nodes_0 = svg_nodes_set_0.selectAll(".node")
    .data(nodes_set_0)
    .enter()
  .append("g")
    .attr("class", "node");

all_the_nodes_0.append("circle")
    .attr("r", function(d) {
        return d.radii_0;	    
    })
    .style("fill", function(d) {
	    return color;
    })
    .attr("class", "circle");

all_the_nodes_0.append("g")
    .selectAll(".circle_small")
    .data(d => d.satellite_circles)
    .enter()
    .append("circle")
    .attr("r", 38)
    .style("fill", "rgba(117, 158, 22, 0.3)")
    .attr("cx", function(d, i) {
	    const factor = (i/15)*(10/2)*5;
	    return 145*Math.cos(factor-(Math.PI*0.5));
    })
    .attr("cy", function(d, i) {
	    const factor = (i/15)*(10/2)*5;
	    return 145*Math.sin(factor-(Math.PI*0.5));
    })
    .attr("class", "circle_small");


the_simulation_0.on("tick", function() {
	all_the_nodes_0.attr("transform", d => 
		`translate(${d.x}, ${d.y})`);
});

// gap circle highlighting that the larger space is not entirely filled
svg_nodes_set_0.append("circle")
    .attr("r", 20)
    .style("stroke", "#e0620d")
    .style("stroke-width", 5)
    .style("fill", "none")
    .attr("cx", w_0/2 - 185)
    .attr("cy", h_0/2 )
    .attr("class", "gap_circle");




// ---------------------------------------------------------------------------
// radius r=10 for larger circles and radius r=2.66 for smaller circles
var w_1 = 960;
var h_1 = 380;


var color_scale = ["rgba(105, 106, 97, 0.6)", 
	"rgba(153, 119, 189, 0.6)"];

// smaller_circle_radii_1 = radii_1*(266/1000)
const smaller_circle_radii_1 = 2.66;

// collide_factor_1 = radii_1*(2/3)

var number_nodes_1 = 570;
var nodes_set_1 = d3.range(number_nodes_1).map(function(d, i) {
	return {
		satellite_circles: [
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{}
		],
		radii_1: 10, category: i%2, collide_factor_1: 6.66};
});


var the_simulation_1 = d3.forceSimulation(nodes_set_1)
    .force("charge", d3.forceManyBody().strength(1))
    .force("center", d3.forceCenter(w_1/2, h_1/2))
    .force("collision", d3.forceCollide().radius(function(d) {
	    return d.collide_factor_1;
    }));


var svg_nodes_set_1 = d3.select(".featuredgallery1")
  .append("svg")
    .attr("viewBox", "0 0 " + w_1 + " " + h_1); 

// larger space in which the circles reside
svg_nodes_set_1.append("circle")
    .style("stroke", "#9977bd")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3")
    .style("fill", "none")
    .attr("cx", w_1/2)
    .attr("cy", h_1/2)
    .attr("r", 185)
    .attr("class", "larger_space");

var all_the_nodes_1 = svg_nodes_set_1.selectAll(".node")
    .data(nodes_set_1)
    .enter()
  .append("g")
    .attr("class", "node");

all_the_nodes_1.append("circle")
    .attr("r", function(d) {
        return d.radii_1;	    
    })
    .style("fill", function(d) {
	    return color_scale[d.category];
    })
    .attr("class", "circle");

all_the_nodes_1.append("g")
    .selectAll(".circle_small")
    .data(d => d.satellite_circles)
    .enter()
    .append("circle")
    .attr("r", smaller_circle_radii_1)
    .style("fill", "rgba(117, 158, 22, 0.3)")
    .attr("cx", function(d, i) {
	    const factor = (i/15)*(10/2)*5;
	    return 10*Math.cos(factor-(Math.PI*0.5));
    })
    .attr("cy", function(d, i) {
	    const factor = (i/15)*(10/2)*5;
	    return 10*Math.sin(factor-(Math.PI*0.5));
    })
    .attr("class", "circle_small");


the_simulation_1.on("tick", function() {
	all_the_nodes_1.attr("transform", d => 
		`translate(${d.x}, ${d.y})`);
});

// gap circle highlighting that the larger space is not entirely filled
svg_nodes_set_1.append("circle")
    .attr("r", 20)
    .style("stroke", "#e0620d")
    .style("stroke-width", 5)
    .style("fill", "none")
    .attr("cx", w_1/2 - 185)
    .attr("cy", h_1/2 )
    .attr("class", "gap_circle");


