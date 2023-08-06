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
    .attr("x1", w_block*(3/15))
    .attr("y1", h_block*(1/10))
    .attr("x2", w_block*(14/15))
    .attr("y2", h_block*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_block.append("line")
    .attr("x1", w_block*(3/15))
    .attr("y1", h_block*(6/10))
    .attr("x2", w_block*(14/15))
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
    .attr("x2", w_block*(14/15))
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
    .attr("x2", w_block*(14/15))
    .attr("y2", h_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_block.append("line")
    .attr("x1", w_block*(14/15))
    .attr("y1", h_block*(6/10))
    .attr("x2", w_block*(14/15))
    .attr("y2", h_block*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left-facing short edge of block
// top line
svg_block.append("line")
    .attr("x1", w_block*(3/15))
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
    .attr("x2", w_block*(3/15))
    .attr("y2", h_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_block.append("line")
    .attr("x1", w_block*(3/15))
    .attr("y1", h_block*(6/10))
    .attr("x2", w_block*(3/15))
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
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_1_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_1_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_1_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
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
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_cross_4_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(14/15))
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
	    .attr("cx", w_cross_block*(4.25/15))
	    .attr("cy", h_cross_block*(3.5/10))
	    .attr("r", 5);
	
	// top right
	svg_cross_4_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(10.75/15))
	    .attr("cy", h_cross_block*(3.5/10))
	    .attr("r", 5);

	// bottom left
	svg_cross_4_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(4.25/15))
	    .attr("cy", h_cross_block*(6.5/10))
	    .attr("r", 5);

	// bottom right
	svg_cross_4_block.append("circle")
	    .style("fill", "#696a61")
	    .attr("cx", w_cross_block*(10.75/15))
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
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(14/15))
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
    .attr("x1", w_cross_block*(9.66/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(9.66/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical vertical line in bottom right stick of butter
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(11.83/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(11.83/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// top horizontal line in bottom right stick of butter
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(6/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom horizontal line in bottom right stick of butter
svg_cross_3_and_1_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(7/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(7/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// center points
// top left
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(4.25/15))
    .attr("cy", h_cross_block*(3.5/10))
    .attr("r", 5);

// top right
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.75/15))
    .attr("cy", h_cross_block*(3.5/10))
    .attr("r", 5);

// bottom left
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(4.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r1, c1
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.58/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c2
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.74/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c3
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(12.91/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r2, c1
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.58/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c2
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.74/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c3
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(12.91/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r3, c1
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.58/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c2
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.74/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c3
svg_cross_3_and_1_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(12.91/15))
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
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line in top left stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(4.25/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(4.25/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line in top left stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(3.5/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(3.5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(14/15))
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
    .attr("x1", w_cross_block*(9.66/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(9.66/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical vertical line in bottom right stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(11.83/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(11.83/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// top horizontal line in bottom right stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(6/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom horizontal line in bottom right stick of butter
svg_cross_2_and_2_several_block.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(7/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(7/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// center points
// top left, r1, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(2.62/15))
    .attr("cy", h_cross_block*(2.75/10))
    .attr("r", 5)

// top left, r1, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(5.87/15))
    .attr("cy", h_cross_block*(2.75/10))
    .attr("r", 5)

// top left, r2, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(2.62/15))
    .attr("cy", h_cross_block*(4.25/10))
    .attr("r", 5)

// top left, r2, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(5.87/15))
    .attr("cy", h_cross_block*(4.25/10))
    .attr("r", 5)

// top right
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.75/15))
    .attr("cy", h_cross_block*(3.5/10))
    .attr("r", 5);

// bottom left
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(4.25/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r1, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.58/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.74/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r1, c3
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(12.91/15))
    .attr("cy", h_cross_block*(5.5/10))
    .attr("r", 5);

// bottom right, r2, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.58/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.74/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r2, c3
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(12.91/15))
    .attr("cy", h_cross_block*(6.5/10))
    .attr("r", 5);

// bottom right, r3, c1
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(8.58/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c2
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(10.74/15))
    .attr("cy", h_cross_block*(7.5/10))
    .attr("r", 5);

// bottom right, r3, c3
svg_cross_2_and_2_several_block.append("circle")
    .style("fill", "#696a61")
    .attr("cx", w_cross_block*(12.91/15))
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
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_1_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_1_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_1_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
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
	        .attr("x1", w_cross_block*(2/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(8.5/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(8.5/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(8.5/15))
	        .attr("y2", h_cross_block*(7/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(8.5/15))
	        .attr("y1", h_cross_block*(7/10))
	        .attr("x2", w_cross_block*(2/15))
	        .attr("y2", h_cross_block*(7/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(2/15))
	        .attr("y1", h_cross_block*(7/10))
	        .attr("x2", w_cross_block*(2/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the smaller rectangle within --------------------------------------
//
//
d3.select("#smaller_size_rect_1_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.5/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(3.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(3.5/10))
	        .attr("x2", w_cross_block*(1.5/15))
	        .attr("y2", h_cross_block*(3.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.5/15))
	        .attr("y1", h_cross_block*(3.5/10))
	        .attr("x2", w_cross_block*(1.5/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the larger rectangle within ---------------------------------------
//
//
d3.select("#larger_size_rect_1_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(5.5/15))
	        .attr("y1", h_cross_block*(2.25/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(2.25/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(2.25/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(6.75/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(6.75/10))
	        .attr("x2", w_cross_block*(5.5/15))
	        .attr("y2", h_cross_block*(6.75/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_1_plus_3.append("line")
	        .attr("x1", w_cross_block*(5.5/15))
	        .attr("y1", h_cross_block*(6.75/10))
	        .attr("x2", w_cross_block*(5.5/15))
	        .attr("y2", h_cross_block*(2.25/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
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
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_rect_4_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(14/15))
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
	        .attr("x1", w_cross_block*(6/15))
	        .attr("y1", h_cross_block*(3/10))
	        .attr("x2", w_cross_block*(12.5/15))
	        .attr("y2", h_cross_block*(3/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(12.5/15))
	        .attr("y1", h_cross_block*(3/10))
	        .attr("x2", w_cross_block*(12.5/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(12.5/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(6/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(6/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(6/15))
	        .attr("y2", h_cross_block*(3/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the smaller rectangle within --------------------------------------
//
//
d3.select("#smaller_size_rect_4_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.5/15))
	        .attr("y1", h_cross_block*(6.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(6.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(6.5/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(7.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(7.5/10))
	        .attr("x2", w_cross_block*(1.5/15))
	        .attr("y2", h_cross_block*(7.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.5/15))
	        .attr("y1", h_cross_block*(7.5/10))
	        .attr("x2", w_cross_block*(1.5/15))
	        .attr("y2", h_cross_block*(6.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the larger rectangle within ---------------------------------------
//
//
d3.select("#larger_size_rect_4_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(2.5/15))
	        .attr("y1", h_cross_block*(2.25/10))
	        .attr("x2", w_cross_block*(10.5/15))
	        .attr("y2", h_cross_block*(2.25/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(10.5/15))
	        .attr("y1", h_cross_block*(2.25/10))
	        .attr("x2", w_cross_block*(10.5/15))
	        .attr("y2", h_cross_block*(6.75/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(10.5/15))
	        .attr("y1", h_cross_block*(6.75/10))
	        .attr("x2", w_cross_block*(2.5/15))
	        .attr("y2", h_cross_block*(6.75/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_4_plus_3.append("line")
	        .attr("x1", w_cross_block*(2.5/15))
	        .attr("y1", h_cross_block*(6.75/10))
	        .attr("x2", w_cross_block*(2.5/15))
	        .attr("y2", h_cross_block*(2.25/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });




// Drawing a rectangle; breaking it down -------------------------------------
// to 3 subrectangles of one size and several subrectangles of a different ---
// size; ---------------------------------------------------------------------
// then allowing the user to draw another rectangle --------------------------
// within by the click of ----------------------------------------------------
// a button. The user has buttons for all three choices: drawing a rectangle -
// of a medium size; smaller; or bigger --------------------------------------
//
//
var svg_rect_3_and_1_several_plus_3 = d3.select("#block7")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);


// top line
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line in bottom right rect
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(9.66/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(9.66/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical vertical line in bottom right rect
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(11.83/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(11.83/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// top horizontal line in bottom right rect
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(6/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom horizontal line in bottom right rect
svg_rect_3_and_1_several_plus_3.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(7/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(7/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");


// Drawing a medium size rectangle within ------------------------------------
//
//
d3.select("#medium_size_rect_3_and_1_several_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(9/15))
	        .attr("y1", h_cross_block*(3/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(3/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(3/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(9/15))
	        .attr("y2", h_cross_block*(6/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(9/15))
	        .attr("y1", h_cross_block*(6/10))
	        .attr("x2", w_cross_block*(9/15))
	        .attr("y2", h_cross_block*(3/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the smaller rectangle within --------------------------------------
//
//
d3.select("#smaller_size_rect_3_and_1_several_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.5/15))
	        .attr("y1", h_cross_block*(3/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(3/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(3/10))
	        .attr("x2", w_cross_block*(4.5/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(4.5/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(1.5/15))
	        .attr("y2", h_cross_block*(4/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.5/15))
	        .attr("y1", h_cross_block*(4/10))
	        .attr("x2", w_cross_block*(1.5/15))
	        .attr("y2", h_cross_block*(3/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the larger rectangle within ---------------------------------------
//
//
d3.select("#larger_size_rect_3_and_1_several_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.25/15))
	        .attr("y1", h_cross_block*(2.25/10))
	        .attr("x2", w_cross_block*(8.5/15))
	        .attr("y2", h_cross_block*(2.25/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(8.5/15))
	        .attr("y1", h_cross_block*(2.25/10))
	        .attr("x2", w_cross_block*(8.5/15))
	        .attr("y2", h_cross_block*(6.75/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(8.5/15))
	        .attr("y1", h_cross_block*(6.75/10))
	        .attr("x2", w_cross_block*(1.25/15))
	        .attr("y2", h_cross_block*(6.75/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_3_and_1_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(1.25/15))
	        .attr("y1", h_cross_block*(6.75/10))
	        .attr("x2", w_cross_block*(1.25/15))
	        .attr("y2", h_cross_block*(2.25/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });



// Drawing a rectangle; breaking it down -------------------------------------
// to 2 subrectangles of one size, several subrectangles of a second ---------
// size, and several subrectangles of a third size; --------------------------
// then allowing the user to draw another rectangle --------------------------
// within by the click of ----------------------------------------------------
// a button. The user has buttons for all three choices: drawing a rectangle -
// of a medium size; smaller; or bigger --------------------------------------
//
//
var svg_rect_2_and_2_several_plus_3 = d3.select("#block8")
  .append("svg")
    .attr("viewBox", "0 0 " + w_cross_block + " " + h_cross_block);

// top line
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line in top left rect
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(4.25/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(4.25/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line in top left rect
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(3.5/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(3.5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(14/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(8/10))
    .attr("x2", w_cross_block*(1/15))
    .attr("y2", h_cross_block*(2/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle horizontal line
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(1/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(5/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// middle vertical line
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(2/10))
    .attr("x2", w_cross_block*(7.5/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line in bottom right rect
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(9.66/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(9.66/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical vertical line in bottom right rect
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(11.83/15))
    .attr("y1", h_cross_block*(5/10))
    .attr("x2", w_cross_block*(11.83/15))
    .attr("y2", h_cross_block*(8/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// top horizontal line in bottom right rect
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(6/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(6/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom horizontal line in bottom right rect
svg_rect_2_and_2_several_plus_3.append("line")
    .attr("x1", w_cross_block*(7.5/15))
    .attr("y1", h_cross_block*(7/10))
    .attr("x2", w_cross_block*(14/15))
    .attr("y2", h_cross_block*(7/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");


// Drawing a medium size rectangle within ------------------------------------
//
//
d3.select("#medium_size_rect_2_and_2_several_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(7/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(2.5/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(4.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(4.5/10))
	        .attr("x2", w_cross_block*(7/15))
	        .attr("y2", h_cross_block*(4.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(7/15))
	        .attr("y1", h_cross_block*(4.5/10))
	        .attr("x2", w_cross_block*(7/15))
	        .attr("y2", h_cross_block*(2.5/10))
	        .style("stroke", "#d079a2")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the smaller rectangle within --------------------------------------
//
//
d3.select("#smaller_size_rect_2_and_2_several_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(10.5/15))
	        .attr("y1", h_cross_block*(6.5/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(6.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(6.5/10))
	        .attr("x2", w_cross_block*(13.5/15))
	        .attr("y2", h_cross_block*(7.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(13.5/15))
	        .attr("y1", h_cross_block*(7.5/10))
	        .attr("x2", w_cross_block*(10.5/15))
	        .attr("y2", h_cross_block*(7.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(10.5/15))
	        .attr("y1", h_cross_block*(7.5/10))
	        .attr("x2", w_cross_block*(10.5/15))
	        .attr("y2", h_cross_block*(6.5/10))
	        .style("stroke", "#91d5e4")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });

// Drawing the larger rectangle within ---------------------------------------
//
//
d3.select("#larger_size_rect_2_and_2_several_plus_3")
    .on("click", function() {
	    // top
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(3.5/15))
	        .attr("y1", h_cross_block*(3.25/10))
	        .attr("x2", w_cross_block*(11.5/15))
	        .attr("y2", h_cross_block*(3.25/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // right vertical side
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(11.5/15))
	        .attr("y1", h_cross_block*(3.25/10))
	        .attr("x2", w_cross_block*(11.5/15))
	        .attr("y2", h_cross_block*(7.75/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
	    
	    // bottom
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(11.5/15))
	        .attr("y1", h_cross_block*(7.75/10))
	        .attr("x2", w_cross_block*(3.5/15))
	        .attr("y2", h_cross_block*(7.75/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");

	    // left vertical side
	    svg_rect_2_and_2_several_plus_3.append("line")
	        .attr("x1", w_cross_block*(3.5/15))
	        .attr("y1", h_cross_block*(7.75/10))
	        .attr("x2", w_cross_block*(3.5/15))
	        .attr("y2", h_cross_block*(3.25/10))
	        .style("stroke", "#cca2fa")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
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
    .attr("x1", w_rect*(1/15))
    .attr("y1", h_rect*(1/10))
    .attr("x2", w_rect*(14/15))
    .attr("y2", h_rect*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// right vertical line
svg_rect_1_plus_many.append("line")
    .attr("x1", w_rect*(14/15))
    .attr("y1", h_rect*(1/10))
    .attr("x2", w_rect*(14/15))
    .attr("y2", h_rect*(9/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// bottom line
svg_rect_1_plus_many.append("line")
    .attr("x1", w_rect*(14/15))
    .attr("y1", h_rect*(9/10))
    .attr("x2", w_rect*(1/15))
    .attr("y2", h_rect*(9/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

// left vertical line
svg_rect_1_plus_many.append("line")
    .attr("x1", w_rect*(1/15))
    .attr("y1", h_rect*(9/10))
    .attr("x2", w_rect*(1/15))
    .attr("y2", h_rect*(1/10))
    .style("stroke", "#696a61")
    .style("stroke-width", 5)
    .style("stroke-dasharray", "3 3");

d3.select("#rect_1_plus_many")
    .on("click", function() {

	    var i = Math.floor(Math.random()*15)
	    var j = Math.floor(Math.random()*10)
	    var k = Math.floor(Math.random()*15)
	    var n = Math.floor(Math.random()*10)

	    svg_rect_1_plus_many.append("line")
	        .attr("x1", w_rect*(i/15))
	        .attr("y1", h_rect*(j/10))
	        .attr("x2", w_rect*(k/15))
	        .attr("y2", h_rect*(j/10))
	        .style("stroke", "#696a61")
	        .style("stroke-width", 5)
	        .style("stroke-dasharray", "3 3");
    });





// One-dimensional real line filled with intervals of a specified distance ---
//
//
// ---------------------------------------------------------------------------
// 4 intervals ---------------------------------------------------------------
var w_svg_for_line = 960;
var h_svg_for_line = 150;






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
// radius r=30 nodes
var w_0 = 960;
var h_0 = 380;


// Compute the number of nodes by taking the floor of 
// 157080/(pi*[r^2])
// 157080 comes from the following
// For r=25, each node area is pi*[25^2]
// Take the sum of the area of 80 such nodes to get 157080
// If a total area larger than 157080 is desired, 
// a greater number of nodes can be used in the sum

var color_scale = ["rgba(105, 106, 97, 0.6)", 
	"rgba(153, 119, 189, 0.6)"]

// collide_factor_0 = radii_0*(2/3)

var number_nodes_0 = 55;
var nodes_set_0 = d3.range(number_nodes_0).map(function(d, i) {
	return {radii_0: 30, category: i%2, collide_factor_0: 20};
});

var the_simulation_0 = d3.forceSimulation(nodes_set_0)
    .force("charge", d3.forceManyBody().strength(1))
    .force("center", d3.forceCenter(w_0/2, h_0/2))
    .force("collision", d3.forceCollide().radius(function(d) {
	    return d.collide_factor_0;
    }));


var svg_nodes_set_0 = d3.select(".featuredgallery0")
  .append("svg")
    .attr("viewBox", "0 0 " + w_0 + " " + h_0);

var all_the_nodes_0 = svg_nodes_set_0.selectAll("circle")
    .data(nodes_set_0)
    .enter()
  .append("circle")
    .attr("r", function(d) {
        return d.radii_0;	    
    })
    .style("fill", function(d) {
	    return color_scale[d.category];
    });

the_simulation_0.on("tick", function() {
	all_the_nodes_0
	    .attr("cx", function(d) {return d.x;} )
	    .attr("cy", function(d) {return d.y;} );
});


// ---------------------------------------------------------------------------
// radius r=25 nodes
var w_1 = 960;
var h_1 = 380;

// Compute the number of nodes by taking the floor of 
// 157080/(pi*[r^2])
// 157080 comes from the following
// For r=25, each node area is pi*[25^2]
// Take the sum of the area of 80 such nodes to get 157080
// If a total area larger than 157080 is desired, 
// a greater number of nodes can be used in the sum

var color_scale = ["rgba(105, 106, 97, 0.6)", 
	"rgba(153, 119, 189, 0.6)"]

// collide_factor_0 = radii_0*(2/3)

var number_nodes_1 = 80;
var nodes_set_1 = d3.range(number_nodes_1).map(function(d, i) {
	return {radii_1: 25, category: i%2, collide_factor_1: 16.66};
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

var all_the_nodes_1 = svg_nodes_set_1.selectAll("circle")
    .data(nodes_set_1)
    .enter()
  .append("circle")
    .attr("r", function(d) {
        return d.radii_1;	    
    })
    .style("fill", function(d) {
	    return color_scale[d.category];
    });

the_simulation_1.on("tick", function() {
	all_the_nodes_1
	    .attr("cx", function(d) {return d.x;} )
	    .attr("cy", function(d) {return d.y;} );
});


// ---------------------------------------------------------------------------
// radius r=20 nodes
var w_2 = 960;
var h_2 = 380;

// Compute the number of nodes by taking the floor of 
// 157080/(pi*[r^2])
// 157080 comes from the following
// For r=25, each node area is pi*[25^2]
// Take the sum of the area of 80 such nodes to get 157080
// If a total area larger than 157080 is desired, 
// a greater number of nodes can be used in the sum

var color_scale = ["rgba(105, 106, 97, 0.6)", 
	"rgba(153, 119, 189, 0.6)"]

// collide_factor_2 = radii_2(2/3)

var number_nodes_2 = 125;
var nodes_set_2 = d3.range(number_nodes_2).map(function(d, i) {
	return {radii_2: 20, category: i%2, collide_factor_2: 13.33};
});

var the_simulation_2 = d3.forceSimulation(nodes_set_2)
    .force("charge", d3.forceManyBody().strength(1))
    .force("center", d3.forceCenter(w_2/2, h_2/2))
    .force("collision", d3.forceCollide().radius(function(d) {
	    return d.collide_factor_2;
    }));


var svg_nodes_set_2 = d3.select(".featuredgallery2")
  .append("svg")
    .attr("viewBox", "0 0 " + w_2 + " " + h_2);

var all_the_nodes_2 = svg_nodes_set_2.selectAll("circle")
    .data(nodes_set_2)
    .enter()
  .append("circle")
    .attr("r", function(d) {
        return d.radii_2;	    
    })
    .style("fill", function(d) {
	    return color_scale[d.category];
    });

the_simulation_2.on("tick", function() {
	all_the_nodes_2
	    .attr("cx", function(d) {return d.x;} )
	    .attr("cy", function(d) {return d.y;} );
});


// ---------------------------------------------------------------------------
// radius r=15 nodes
var w_3 = 960;
var h_3 = 380;

// Compute the number of nodes by taking the floor of 
// 157080/(pi*[r^2])
// 157080 comes from the following
// For r=25, each node area is pi*[25^2]
// Take the sum of the area of 80 such nodes to get 157080
// If a total area larger than 157080 is desired, 
// a greater number of nodes can be used in the sum

var color_scale = ["rgba(105, 106, 97, 0.6)", 
	"rgba(153, 119, 189, 0.6)"]

// collide_factor_3 = radii_3(2/3)

var number_nodes_3 = 222;
var nodes_set_3 = d3.range(number_nodes_3).map(function(d, i) {
	return {radii_3: 15, category: i%2, collide_factor_3: 10};
});

var the_simulation_3 = d3.forceSimulation(nodes_set_3)
    .force("charge", d3.forceManyBody().strength(1))
    .force("center", d3.forceCenter(w_3/2, h_3/2))
    .force("collision", d3.forceCollide().radius(function(d) {
	    return d.collide_factor_3;
    }));


var svg_nodes_set_3 = d3.select(".featuredgallery3")
  .append("svg")
    .attr("viewBox", "0 0 " + w_3 + " " + h_3);

var all_the_nodes_3 = svg_nodes_set_3.selectAll("circle")
    .data(nodes_set_3)
    .enter()
  .append("circle")
    .attr("r", function(d) {
        return d.radii_3;	    
    })
    .style("fill", function(d) {
	    return color_scale[d.category];
    });

the_simulation_3.on("tick", function() {
	all_the_nodes_3
	    .attr("cx", function(d) {return d.x;} )
	    .attr("cy", function(d) {return d.y;} );
});




