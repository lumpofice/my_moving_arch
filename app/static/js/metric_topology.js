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















//// ---------------------------------------------------------------------------
//// radius r=18 nodes
//var w_3 = 960;
//var h_3 = 300;
//
//// Compute the number of nodes by taking the floor of 
//// 53407/(pi*[r^2])
//// 53407 comes from the following
//// For r=10, each node area is pi*[10^2]
//// Take the sum of the area of 170 such nodes to get 53407
//// If a total area larger than 53407 is desired, 
//// a greater number of nodes can be used in the sum
//var number_nodes_3 = 52;
//var nodes_set_3 = d3.range(number_nodes_3).map(function(d, i) {
//	return {radii_3: 18};
//});
//
//var the_simulation_3 = d3.forceSimulation(nodes_set_3)
//    .force("charge", d3.forceManyBody().strength(1))
//    .force("center", d3.forceCenter(w_3/2, h_3/2))
//    .force("collision", d3.forceCollide().radius(function(d) {
//	    return d.radii_3;
//    }));
//
//
//var svg_nodes_set_3 = d3.select(".featuredgallery0")
//  .append("svg")
//    .attr("viewBox", "0 0 " + w_3 + " " + h_3);
//
//var all_the_nodes_3 = svg_nodes_set_3.selectAll("circle")
//    .data(nodes_set_3)
//    .enter()
//  .append("circle")
//    .attr("r", function(d) {
//        return d.radii_3;	    
//    })
//    .style("fill", "#9977bd");
//
//the_simulation_3.on("tick", function() {
//	all_the_nodes_3
//	    .attr("cx", function(d) {return d.x;} )
//	    .attr("cy", function(d) {return d.y;} );
//});
//
//
//
//
//// ---------------------------------------------------------------------------
//// radius r=15 nodes
//var w_0 = 960;
//var h_0 = 300;
//
//// Compute the number of nodes by taking the floor of 
//// 53407/(pi*[r^2])
//// 53407 comes from the following
//// For r=10, each node area is pi*[10^2]
//// Take the sum of the area of 170 such nodes to get 53407
//// If a total area larger than 53407 is desired, 
//// a greater number of nodes can be used in the sum
//var number_nodes_0 = 75;
//var nodes_set_0 = d3.range(number_nodes_0).map(function(d, i) {
//	return {radii_0: 15};
//});
//
//var the_simulation_0 = d3.forceSimulation(nodes_set_0)
//    .force("charge", d3.forceManyBody().strength(1))
//    .force("center", d3.forceCenter(w_0/2, h_0/2))
//    .force("collision", d3.forceCollide().radius(function(d) {
//	    return d.radii_0;
//    }));
//
//
//var svg_nodes_set_0 = d3.select(".featuredgallery1")
//  .append("svg")
//    .attr("viewBox", "0 0 " + w_0 + " " + h_0);
//
//var all_the_nodes_0 = svg_nodes_set_0.selectAll("circle")
//    .data(nodes_set_0)
//    .enter()
//  .append("circle")
//    .attr("r", function(d) {
//        return d.radii_0;	    
//    })
//    .style("fill", "#9977bd");
//
//the_simulation_0.on("tick", function() {
//	all_the_nodes_0
//	    .attr("cx", function(d) {return d.x;} )
//	    .attr("cy", function(d) {return d.y;} );
//});
//
//
//// ---------------------------------------------------------------------------
//// radius r=10 nodes
//var w_1 = 960;
//var h_1 = 300;
//
//// Compute the number of nodes by taking the floor of 
//// 53407/(pi*[r^2])
//// 53407 comes from the following
//// For r=10, each node area is pi*[10^2]
//// Take the sum of the area of 170 such nodes to get 53407
//// If a total area larger than 53407 is desired, 
//// a greater number of nodes can be used in the sum
//var number_nodes_1 = 170;
//var nodes_set_1 = d3.range(number_nodes_1).map(function(d, i) {
//	return {radii_1: 10};
//});
//
//var the_simulation_1 = d3.forceSimulation(nodes_set_1)
//    .force("charge", d3.forceManyBody().strength(1))
//    .force("center", d3.forceCenter(w_1/2, h_1/2))
//    .force("collision", d3.forceCollide().radius(function(d) {
//	    return d.radii_1;
//    }));
//
//
//var svg_nodes_set_1 = d3.select(".featuredgallery2")
//  .append("svg")
//    .attr("viewBox", "0 0 " + w_1 + " " + h_1);
//
//var all_the_nodes_1 = svg_nodes_set_1.selectAll("circle")
//    .data(nodes_set_1)
//    .enter()
//  .append("circle")
//    .attr("r", function(d) {
//        return d.radii_1;	    
//    })
//    .style("fill", "#9977bd");
//
//the_simulation_1.on("tick", function() {
//	all_the_nodes_1
//	    .attr("cx", function(d) {return d.x;} )
//	    .attr("cy", function(d) {return d.y;} );
//});
//
//
//// ---------------------------------------------------------------------------
//// radius r=5 nodes
//var w_2 = 960;
//var h_2 = 300;
//
//// Compute the number of nodes by taking the floor of 
//// 53407/(pi*[r^2])
//// 53407 comes from the following
//// For r=10, each node area is pi*[10^2]
//// Take the sum of the area of 170 such nodes to get 53407
//// If a total area larger than 53407 is desired, 
//// a greater number of nodes can be used in the sum
//var number_nodes_2 = 679;
//var nodes_set_2 = d3.range(number_nodes_2).map(function(d, i) {
//	return {radii_2: 5};
//});
//
//var the_simulation_2 = d3.forceSimulation(nodes_set_2)
//    .force("charge", d3.forceManyBody().strength(1))
//    .force("center", d3.forceCenter(w_2/2, h_2/2))
//    .force("collision", d3.forceCollide().radius(function(d) {
//	    return d.radii_2;
//    }));
//
//
//var svg_nodes_set_2 = d3.select(".featuredgallery3")
//  .append("svg")
//    .attr("viewBox", "0 0 " + w_2 + " " + h_2);
//
//var all_the_nodes_2 = svg_nodes_set_2.selectAll("circle")
//    .data(nodes_set_2)
//    .enter()
//  .append("circle")
//    .attr("r", function(d) {
//        return d.radii_2;	    
//    })
//    .style("fill", "#9977bd");
//
//the_simulation_2.on("tick", function() {
//	all_the_nodes_2
//	    .attr("cx", function(d) {return d.x;} )
//	    .attr("cy", function(d) {return d.y;} );
//});
//
