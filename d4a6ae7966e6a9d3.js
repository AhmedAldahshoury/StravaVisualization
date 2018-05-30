// URL: https://beta.observablehq.com/d/d4a6ae7966e6a9d3
// Title: Duration of Rides and Runs
// Author: Ahmed Aldahshoury (@ahmedaldahshoury)
// Version: 61
// Runtime version: 1

const m0 = {
  id: "d4a6ae7966e6a9d3@61",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Duration of Rides and Runs`
)})
    },
    {
      name: "mydata",
      value: (function(){return(
[{"name":"5/28/2018","value":"15.7167","Type":"ride"},{"name":"5/27/2018","value":"43.5667","Type":"ride"},{"name":"5/24/2018","value":"48.5167","Type":"ride"},{"name":"5/23/2018","value":"34.8667","Type":"ride"},{"name":"5/19/2018","value":"28.9333","Type":"ride"},{"name":"5/18/2018","value":"56.7667","Type":"ride"},{"name":"5/13/2018","value":"70.65","Type":"ride"},{"name":"5/12/2018","value":"175.2","Type":"ride"},{"name":"5/11/2018","value":"84.0167","Type":"ride"},{"name":"5/7/2018","value":"37.05","Type":"ride"},{"name":"5/5/2018","value":"19.5","Type":"ride"},{"name":"5/5/2018","value":"23","Type":"ride"},{"name":"5/2/2018","value":"22.7167","Type":"ride"},{"name":"4/30/2018","value":" 53.7","Type":"ride"},{"name":"4/28/2018","value":"35.0167","Type":"ride"},{"name":"4/26/2018","value":"30","Type":"ride"},{"name":"4/24/2018","value":"19.5167","Type":"ride"},{"name":"4/21/2018","value":"170.6","Type":"ride"},{"name":"4/19/2018","value":"21.55","Type":"ride"},{"name":"4/18/2018","value":"16.1667","Type":"ride"},{"name":"4/18/2018","value":"36.5667","Type":"ride"},{"name":"4/15/2018","value":"109.8667","Type":"ride"},{"name":"4/14/2018","value":"136.9833","Type":"ride"},{"name":"4/13/2018","value":"41.7667","Type":"ride"},{"name":"2/8/2018","value":"446.5833","Type":"ride"},{"name":"1/29/2018","value":"54.2333","Type":"ride"},{"name":"1/15/2018","value":"48.00","Type":"ride"},{"name":" 1/15/2018","value":"293","Type":"ride"},{"name":"1/13/2018","value":"87.3833","Type":"ride"},{"name":" 1/7/2018","value":"170.2833","Type":"ride"},{"name":"1/6/2018","value":"166.1333","Type":"ride"},{"name":"12/25/2017","value":"240","Type":"ride"},{"name":"12/21/2017","value":"77.4833","Type":"ride"},{"name":"12/8/2017","value":"78.25","Type":"ride"},{"name":"12/2/2017","value":"68.7","Type":"ride"},{"name":"12/1/2017","value":"180","Type":"ride"},{"name":"11/26/2017","value":"39","Type":"ride"},{"name":"9/30/2017","value":"529.7667","Type":"ride"},{"name":"9/23/2017","value":"32.4833","Type":"ride"},{"name":"9/17/2017","value":"140.4833","Type":"ride"},{"name":"9/14/2017","value":"129.5667","Type":"ride"},{"name":"9/8/2017","value":"6.1167","Type":"ride"},{"name":"9/8/2017","value":"5","Type":"ride"},{"name":"9/4/2017","value":"110.9667","Type":"ride"},{"name":"8/25/2017","value":"59.05","Type":"ride"},{"name":"8/4/2017","value":"180","Type":"ride"},{"name":" 8/4/2017","value":"19.9833","Type":"ride"},{"name":"8/2/2017","value":"28.85","Type":"ride"},{"name":"7/30/2017","value":"118.8667","Type":"ride"},{"name":"7/28/2017","value":"77.25","Type":"ride"},{"name":"7/27/2017","value":"128.9","Type":"ride"},{"name":"5/20/2018","value":" 67.15","Type":"run"},{"name":"4/12/2018","value":"34.15","Type":"run"},{"name":"4/8/2018","value":"44.1","Type":"run"},{"name":"4/5/2018","value":"48.45","Type":"run"},{"name":"4/4/2018","value":"49.4833","Type":"run"},{"name":"3/26/2018","value":" 4.9333 ","Type":"run"},{"name":"3/26/2018","value":"39.3833","Type":"run"},{"name":"3/22/2018","value":"40.5167","Type":"run"},{"name":"3/11/2018","value":"54.5","Type":"run"},{"name":" 3/7/2018","value":"70.0667","Type":"run"},{"name":"3/4/2018","value":"129.4833","Type":"run"},{"name":"3/3/2018","value":"45.2","Type":"run"},{"name":"3/2/2018","value":"24.3333","Type":"run"},{"name":"2/19/2018","value":"57.3667","Type":"run"},{"name":"2/11/2018","value":"43.45","Type":"run"},{"name":"2/5/2018","value":"35","Type":"run"},{"name":"2/2/2018","value":"39.5167","Type":"run"},{"name":"2/1/2018","value":"82.6333","Type":"run"},{"name":"1/21/2018","value":"51.2167","Type":"run"},{"name":"1/21/2018","value":"61.9167","Type":"run"},{"name":"1/16/2018","value":"69.7167","Type":"run"},{"name":"1/2/2018","value":"46.8167","Type":"run"},{"name":"12/16/2017","value":"23","Type":"run"},{"name":" 12/15/2017","value":"24.8","Type":"run"},{"name":"11/24/2017","value":"152.8833","Type":"run"},{"name":"11/20/2017","value":"61.05","Type":"run"},{"name":"11/11/2017","value":"53.0167","Type":"run"},{"name":"10/20/2017","value":"16.7167","Type":"run"},{"name":"9/26/2017","value":"14.4667","Type":"run"},{"name":"8/28/2017","value":"48.65 ","Type":"run"},{"name":"8/2/2017","value":"22","Type":"run"},{"name":"7/7/2017","value":"49.7833","Type":"run"},{"name":"6/14/2017","value":"45.15","Type":"run"},{"name":"6/7/2017","value":"51.55","Type":"run"},{"name":"6/7/2017","value":"29.4833","Type":"run"},{"name":"5/21/2017","value":"122.5833","Type":"run"},{"name":"3/9/2017","value":"55.4167","Type":"run"},{"name":"10/24/2016","value":"94.25","Type":"run"},{"name":"2/21/2016","value":"19.7833","Type":"run"},{"name":"2/20/2016","value":"83.0833","Type":"run"},{"name":"2/6/2016","value":"21.2167","Type":"run"},{"name":"7/2/2015","value":"57.65","Type":"run"},{"name":"6/20/2015","value":"56.1167","Type":"run"},{"name":"6/16/2015","value":"184.85","Type":"run"},{"name":"7/11/2017","value":"91.8","Type":"ride"},{"name":" 11/16/2016","value":"32","Type":"ride"},{"name":" 11/15/2016","value":"26","Type":"ride"},{"name":"11/6/2016","value":"134.6","Type":"ride"},{"name":"10/1/2016","value":"5.6167","Type":"ride"},{"name":"10/1/2016","value":"40.6","Type":"ride"},{"name":"9/30/2016","value":"65.9","Type":"ride"}]
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    },
    {
      from: "d4a6ae7966e6a9d3@61/3",
      name: "bubblechart",
      remote: "chart"
    },
    {
      inputs: ["bubblechart"],
      value: (function(bubblechart){return(
bubblechart
)})
    },
    {
      name: "format",
      inputs: ["d3"],
      value: (function(d3){return(
d3.format(",d")
)})
    },
    {
      name: "width",
      value: (function(){return(
932
)})
    },
    {
      name: "height",
      inputs: ["width"],
      value: (function(width){return(
width
)})
    },
    {
      name: "pack",
      inputs: ["d3","width","height"],
      value: (function(d3,width,height){return(
data => d3.pack()
    .size([width - 2, height - 2])
    .padding(3)
  (d3.hierarchy({children: data})
    .sum(d => d.value))
)})
    },
    {
      name: "chart",
      inputs: ["pack","mydata","d3","DOM","width","height","format"],
      value: (function(pack,mydata,d3,DOM,width,height,format)
{
  const root = pack(mydata);

  const svg = d3.select(DOM.svg(width, height))
      .style("font", "10px sans-serif")
      .style("width", "100%")
      .style("height", "auto")
      .attr("text-anchor", "middle");

  const leaf = svg.selectAll("g")
    .data(root.leaves())
    .enter().append("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

  leaf.append("circle")
      .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
      .attr("r", d => d.r)
      .attr("fill", function(d) { return d.data.Type == "ride" ? "#0fbff2" : "#0C0"});

  leaf.append("clipPath")
      .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
    .append("use")
      .attr("xlink:href", d => d.leafUid.href);

  leaf.append("text")
      .attr("clip-path", d => d.clipUid)
    .selectAll("tspan")
    .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => 12 + (i - nodes.length / 2 - 0.5) * 9)
      .text(d => d);

  leaf.append("title")
      .text(d => `${d.data.name}\n${format(d.value)}`);

  return svg.node();
}
)
    }
  ]
};

const m1 = {
  id: "d4a6ae7966e6a9d3@61/3",
  variables: [
    {
      name: "chart",
      inputs: ["pack","data","d3","DOM","width","height","format"],
      value: (function(pack,data,d3,DOM,width,height,format)
{
  const root = pack(data);

  const svg = d3.select(DOM.svg(width, height))
      .style("font", "10px sans-serif")
      .style("width", "100%")
      .style("height", "auto")
      .attr("text-anchor", "middle");

  const leaf = svg.selectAll("g")
    .data(root.leaves())
    .enter().append("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

  leaf.append("circle")
      .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
      .attr("r", d => d.r)
      .attr("fill", "#ddd");

  leaf.append("clipPath")
      .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
    .append("use")
      .attr("xlink:href", d => d.leafUid.href);

  leaf.append("text")
      .attr("clip-path", d => d.clipUid)
    .selectAll("tspan")
    .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .enter().append("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => 12 + (i - nodes.length / 2 - 0.5) * 9)
      .text(d => d);

  leaf.append("title")
      .text(d => `${d.data.name}\n${format(d.value)}`);

  return svg.node();
}
)
    },
    {
      name: "pack",
      inputs: ["d3","width","height"],
      value: (function(d3,width,height){return(
data => d3.pack()
    .size([width - 2, height - 2])
    .padding(3)
  (d3.hierarchy({children: data})
    .sum(d => d.value))
)})
    },
    {
      from: "d4a6ae7966e6a9d3@61",
      name: "data",
      remote: "mydata"
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    },
    {
      name: "width",
      value: (function(){return(
932
)})
    },
    {
      name: "height",
      inputs: ["width"],
      value: (function(width){return(
width
)})
    },
    {
      name: "format",
      inputs: ["d3"],
      value: (function(d3){return(
d3.format(",d")
)})
    }
  ]
};

const notebook = {
  id: "d4a6ae7966e6a9d3@61",
  modules: [m0,m1]
};

export default notebook;
