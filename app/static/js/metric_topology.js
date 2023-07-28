// One-dimensional real line filled with interval of a specified distance ----
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

var parenthesis_open_0 = d3.path();
var parenthesis_close_0 = d3.path();

// Distance of right-most pixel of focus of parenthesis to i is 18px 
// when convexity is 40
var convexity = 40;

var drawn_convexity = 18;
var vertical_distance = 90;

// The left-most pixel of the focus of the parenthesis to i is 23px 
// when parenthesis_width is 5
var parenthesis_width = 5;

// Given n is "number of intervals", increment is 
// (960 - [ n*( (2*parenthesis_width) + (2*drawn_convexity) ) ] )/n
var increment_0 = 194;

var distance_0 = increment_0 + (2*drawn_convexity) + (2*parenthesis_width);  

for (let i = 23; i < 937; i = i + distance_0) {
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

var parenthesis_open_1 = d3.path();
var parenthesis_close_1 = d3.path();

// Distance of right-most pixel of focus of parenthesis to i is 18px 
// when convexity is 40

// The left-most pixel of the focus of the parenthesis to i is 23px 
// when parenthesis_width is 5

// Given n is "number of intervals", increment is 
// (960 - [ n*( (2*parenthesis_width) + (2*drawn_convexity) ) ] )/n
var increment_1 = 74;

var distance_1 = increment_1 + (2*drawn_convexity) + (2*parenthesis_width);  

for (let i = 23; i < 937; i = i + distance_1) {
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


// ---------------------------------------------------------------------------
// 16 intervals ---------------------------------------------------------------
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

var parenthesis_open_2 = d3.path();
var parenthesis_close_2 = d3.path();

// Distance of right-most pixel of focus of parenthesis to i is 4px 
// when convexity is 10
var convexity = 10;

var drawn_convexity = 4;
var vertical_distance = 50;

// The left-most pixel of the focus of the parenthesis to i is 7px 
// when parenthesis_width is 3
var parenthesis_width = 3;

// Given n is "number of intervals", increment is 
// (960 - [ n*( (2*parenthesis_width) + (2*drawn_convexity) ) ] )/n
var increment_2 = 46;

var distance_2 = increment_2 + (2*drawn_convexity) + (2*parenthesis_width);  

for (let i = 7; i < 953; i = i + distance_2) {
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





// Two-dimensional Euclidean space filled with balls of radius r -------------
// ---------------------------------------------------------------------------
// radius r=15 nodes
var w_0 = 960;
var h_0 = 300;

var number_nodes_0 = 75;
var nodes_set_0 = d3.range(number_nodes_0).map(function(d, i) {
	return {radii_0: 15};
});

var the_simulation_0 = d3.forceSimulation(nodes_set_0)
    .force("charge", d3.forceManyBody().strength(1))
    .force("center", d3.forceCenter(w_0/2, h_0/2))
    .force("collision", d3.forceCollide().radius(function(d) {
	    return d.radii_0;
    }));


var svg_nodes_set_0 = d3.select(".featuredgallery1")
  .append("svg")
    .attr("viewBox", "0 0 " + w_0 + " " + h_0);

var all_the_nodes_0 = svg_nodes_set_0.selectAll("circle")
    .data(nodes_set_0)
    .enter()
  .append("circle")
    .attr("r", function(d) {
        return d.radii_0;	    
    })
    .style("fill", "#9977bd");

the_simulation_0.on("tick", function() {
	all_the_nodes_0
	    .attr("cx", function(d) {return d.x;} )
	    .attr("cy", function(d) {return d.y;} );
});


// ---------------------------------------------------------------------------
// radius r=10 nodes
var w_1 = 960;
var h_1 = 300;

var number_nodes_1 = 170;
var nodes_set_1 = d3.range(number_nodes_1).map(function(d, i) {
	return {radii_1: 10};
});

var the_simulation_1 = d3.forceSimulation(nodes_set_1)
    .force("charge", d3.forceManyBody().strength(1))
    .force("center", d3.forceCenter(w_1/2, h_1/2))
    .force("collision", d3.forceCollide().radius(function(d) {
	    return d.radii_1;
    }));


var svg_nodes_set_1 = d3.select(".featuredgallery2")
  .append("svg")
    .attr("viewBox", "0 0 " + w_1 + " " + h_1);

var all_the_nodes_1 = svg_nodes_set_1.selectAll("circle")
    .data(nodes_set_1)
    .enter()
  .append("circle")
    .attr("r", function(d) {
        return d.radii_1;	    
    })
    .style("fill", "#9977bd");

the_simulation_1.on("tick", function() {
	all_the_nodes_1
	    .attr("cx", function(d) {return d.x;} )
	    .attr("cy", function(d) {return d.y;} );
});


// ---------------------------------------------------------------------------
// radius r=5 nodes
var w_2 = 960;
var h_2 = 300;

var number_nodes_2 = 679;
var nodes_set_2 = d3.range(number_nodes_2).map(function(d, i) {
	return {radii_2: 5};
});

var the_simulation_2 = d3.forceSimulation(nodes_set_2)
    .force("charge", d3.forceManyBody().strength(1))
    .force("center", d3.forceCenter(w_2/2, h_2/2))
    .force("collision", d3.forceCollide().radius(function(d) {
	    return d.radii_2;
    }));


var svg_nodes_set_2 = d3.select(".featuredgallery3")
  .append("svg")
    .attr("viewBox", "0 0 " + w_2 + " " + h_2);

var all_the_nodes_2 = svg_nodes_set_2.selectAll("circle")
    .data(nodes_set_2)
    .enter()
  .append("circle")
    .attr("r", function(d) {
        return d.radii_2;	    
    })
    .style("fill", "#9977bd");

the_simulation_2.on("tick", function() {
	all_the_nodes_2
	    .attr("cx", function(d) {return d.x;} )
	    .attr("cy", function(d) {return d.y;} );
});

