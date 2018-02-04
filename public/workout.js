function graph(data) {
    let graph = document.getElementById("chartContainer");
    if (graph.hasChildNodes()) {
        while (graph.firstChild) {
            graph.removeChild(graph.firstChild)
        }
    }
    let svg = dimple.newSvg("#chartContainer", window.innerWidth, 300);
    let myChart = new dimple.chart(svg, data);
    myChart.setBounds(55, 5, window.innerWidth - 100, 200);
    //let x = myChart.addCategoryAxis("x", ["category", "time"]);
    let x = myChart.addCategoryAxis("x", "time");
    let y = myChart.addCategoryAxis("y", "amount");
    let linePlot = myChart.addSeries(null, dimple.plot.line)
    linePlot.barGap = 0
    myChart.draw();
    y.titleShape.text("Calories Burned");
    x.titleShape.text("Time");
}


let data = [];
let totalBurned = 0;