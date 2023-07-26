// ---------------------------------------------------------------------------
// radius 15 nodes
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
// radius 10 nodes
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
// radius 5 nodes
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

