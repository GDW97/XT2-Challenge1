new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
      labels: ["Mensen", "Hamsters", "Robots", "Anders"],
      datasets: [
        {
          backgroundColor: ["#F4B9FA", "#C293C7","#74367A","#77CB7A"],
          data: [103,30,16,1]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Wezens op het schip'
      }
    }
});

new Chart(document.getElementById("pieChart"), {
    type: 'line',
    data: {
      labels: ["2030", "2031", "2031", "2033"],
      datasets: [{
        backgroundColor: ["#FBDFF4"],
        data: [14000,13500,12000,1500]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Kilometers per jaar'
      }
    }
});



new Chart(document.getElementById("doChart"), {
    type: 'doughnut',
    data: {
      labels: ["Naar Aarde", "Naar Mars"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#F4B9FA", "#74367A"],
          data: [55450,75400]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Afstand in kilometers'
      }
    }
});