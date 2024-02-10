et value = [3, 6, 6, 4, 1, 2, 2, 5, 1, 1, 1, 2, 2, 1, 10, 1, 3, 1, 3, 3, 2, 2];
let nameVal = ['SaaS', 'ML', 'QC', 'Grace', 'Brian', 'Ellen', 'Yewon', 'MinJoo', 'Emily', 'Chris', 'Dean', 'date_1','date_2','date_3','AH','Caroline', 'Yein&MJ', 'JooWon', 'Yejin', 'Inyoung', 'Ji Hoon', 'SH&MS'];

// Variable to store the index of the hovered legend item
let legendItems = [
	{ label: 'Zoom', chartIndex: [0, 7], text: 'You met 1 person out of 40 total meetings.'},
	{ label: 'Columbia', chartIndex: [1, 2, 3, 4]},
	{ label: 'Known for more than 5 years', chartIndex: [3, 4, 5] },
	// Add more legend items as needed
  ];
  
  // Variable to store the index of the hovered legend item
  let hoveredLegendIndex = -1;
  
  function setup() {
	createCanvas(windowWidth, windowHeight);
	noScroll(); // Prevent scrolling

	// Add event listeners to legend items
	for (let i = 0; i < legendItems.length; i++) {
	  let legendItem = createP(legendItems[i].label);
	  legendItem.position(20, 20 + i * 20);
	  legendItem.style('cursor', 'pointer');
	  legendItem.mouseOver(() => {
		hoveredLegendIndex = i;	
	  });
	  legendItem.mouseOut(() => {
		hoveredLegendIndex = -1;
	  });
	}
  }
  
  function draw() {
	background(200);
	let barWidth = 30; // Width of each bar
	let barPadding = 20; // Padding between bars
	let maxValue = max(value); // Determine the highest value
  
	// Draw bars and names
	for (let i = 0; i < value.length; i++) {
	  // Draw bar
	  let barHeight = map(value[i], 0, maxValue, 0, height - 400);
	  if (hoveredLegendIndex !== -1 && legendItems[hoveredLegendIndex].chartIndex.includes(i)) {
		fill(255, 0, 0);
	  } else {
		fill(0);
	  }
	  rect(i * (barWidth + barPadding) + 60, height - barHeight - 100, barWidth, barHeight);

	  // Draw name
	  textAlign(CENTER, TOP);
	  text(nameVal[i], i * (barWidth + barPadding) + 60 + barWidth / 2, height - 80);
	}
  
	// Draw y-axis labels
	for (let k = 0; k <= maxValue; k += 2) {
	  let y = map(k, 0, maxValue, height - 100, 300);
	  textAlign(RIGHT, CENTER);
	  text(k, 50, y);
	}

	textAlign(TOP, CENTER);
	if (hoveredLegendIndex !== -1) {
		fill('yellow');
		textSize(22);
		text(legendItems[hoveredLegendIndex].text, width/2, height/4);
		textSize(12);
	} else {
		textSize(12); // Reset text size to default
		fill(0); // Reset text color to default
	}
  }
  
  
  // Prevent scrolling
  function noScroll() {
	document.body.style.overflow = 'hidden';
  }