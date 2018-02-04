function updateProgressBar(progress) {
    let progress_bar = document.getElementById('progress-bar');
    let bar = document.getElementById('bar');
    progress_bar.setAttribute("data-progress", progress);
    bar.setAttribute("style", "transition-duration: 300ms; width: " + progress + "%;");
}

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
    let x = myChart.addCategoryAxis("x", ["category", "time"]);
    let y = myChart.addCategoryAxis("y", "amount");
    x.addOrderRule(["Breakfast", "Lunch", "Dinner"]);
    let linePlot = myChart.addSeries(null, dimple.plot.line)
    linePlot.barGap = 0
    myChart.draw();
    y.titleShape.text("Calories Consumed");
    x.titleShape.text("Meal Period");
}

let data = [];
let totalConsumed = 0;

// let data = [{
//     "time": "07:52:23",
//     "category": "Breakfast",
//     "amount": "300"
// }];