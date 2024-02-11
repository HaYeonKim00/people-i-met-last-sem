let value = [3, 6, 6, 4, 1, 2, 2, 5, 1, 1, 1, 2, 2, 1, 10, 1, 3, 1, 3, 3, 2, 2];
let nameVal = ['SaaS', 'ML', 'QC', 'Grace', 'Brian', 'Ellen', 'Yewon', 'MinJoo', 'Emily', 'Chris', 'Dean', 'date_1','date_2','date_3','AH','Caroline', 'Yein&MJ', 'JooWon', 'Yejin', 'Inyoung', 'Ji Hoon', 'SH&MS'];

// Variable to store the index of the hovered legend item
let legendItems = [
	{ label: 'Zoom', chartIndex: [0], text: '3 meetings out of 60 meetings were held on Zoom'},
	{ label: 'Columbia', chartIndex: [0, 1, 2, 3, 5, 6, 7, 10, 14, 15, 16, 20], text: '43 meetings out of 60 meetings were with Columbia affiliates'},
	{ label: 'Known for more than 5 years', chartIndex: [4, 8, 9, 21] , text: '5 meetings out of 60 meetings were with individuals whom I have known for more than 5 years'},
	{ label: 'Talked about personal stuff', chartIndex: [3, 4, 7, 8, 9, 11, 12, 13, 15, 18, 19] , text: '35 meetings out of 60 meetings involved personal issues as a topic'},	
	{ label: 'drank at least once', chartIndex: [2, 3, 7, 11, 12, 13, 16, 18, 19] , text: '29 meetings out of 60 meetings involved the consumption of beverages'}// Add more legend items as needed
];
  // Variable to store the index of the hovered legend item
  let hoveredLegendIndex = -1;
  
  function setup() {
	createCanvas(windowWidth, windowHeight);
	background('black'); // Set the background color to black
	noScroll();
  
	// Set font for all text
	textFont('Tahoma');
  
	// Add event listeners to legend items
	for (let i = 0; i < legendItems.length; i++) {
	  let legendItem = createP(legendItems[i].label);
	  legendItem.position(40, 20 + i * 30);
	  legendItem.style('color', 'white');
	  legendItem.style('font-size', '20px');
	  legendItem.style('font-family', 'Tahoma');
	  legendItem.style('cursor', 'pointer');
	  legendItem.mouseOver(() => {
		hoveredLegendIndex = i;
		if (i == 0) {
		  legendItem.style('color', 'purple');
		} else if (i == 1) {
		  legendItem.style('color', 'blue');
		} else if (i == 2) {
			legendItem.style('color', 'green');
		} else if (i == 3) {
			legendItem.style('color', 'orange');
		} else {
		  legendItem.style('color', 'yellow');
		}
	  });
	  legendItem.mouseOut(() => {
		hoveredLegendIndex = -1;
		legendItem.style('color', 'white');
	  });
	}
  }
  
  function draw() {
	background('black');
	let barWidth = 30; // Width of each bar
	let barPadding = 20; // Padding between bars
	let maxValue = max(value); // Determine the highest value
  
	// Calculate total width of bars and padding
	let totalWidth = value.length * (barWidth + barPadding);
	let startX = (width - totalWidth) / 2; // Calculate starting x position for bars
  
	// Draw bars and names
	for (let i = 0; i < value.length; i++) {
	  // Draw bar
	  let barHeight = map(value[i], 0, maxValue, 0, height - 400);
	  if (hoveredLegendIndex !== -1 && legendItems[hoveredLegendIndex].chartIndex.includes(i)) {
		if (hoveredLegendIndex == 0) {
		  fill('purple');
		} else if (hoveredLegendIndex == 1) {
		  fill('blue');
		} else if (hoveredLegendIndex == 2) {
			fill('green');
		} else if (hoveredLegendIndex == 3) {
			fill('orange');
		} else {
		  fill('yellow');
		}
	  } else {
		fill('white');
	  }
	  rect(startX + i * (barWidth + barPadding), height - barHeight - 100, barWidth, barHeight);
  
	  // Draw name
	  textAlign(CENTER, TOP);
	  fill('white');
	  text(nameVal[i], startX + i * (barWidth + barPadding) + barWidth / 2, height - 80);
	}
  
	// Draw y-axis labels
	for (let k = 0; k <= maxValue; k += 2) {
	  let y = map(k, 0, maxValue, height - 100, 300);
	  textAlign(RIGHT, CENTER);
	  fill('white');
	  text(k, startX - 10, y);
	}
  
	textAlign(TOP, CENTER);
	if (hoveredLegendIndex !== -1) {
	  fill('white');
	  textFont('Tahoma');
	  textSize(22);
	  text(legendItems[hoveredLegendIndex].text, 1200, height / 4);
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
  