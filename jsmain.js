function APbhalu(){
	var p = parseInt(document.getElementById('teams').value);
	var q = parseInt(document.getElementById('rounds').value);
	var r = parseInt(document.getElementById('break').value);
	var teamarr1=[];
	var teamarr2=[];
	for(var i=0; i<p; i++)
	{
		teamarr1.push(0);
		teamarr2.push(0);
	}

	
	for(var j=0; j<q; j++)
	{
		for(var i=0; i<p; i++){
			//Case 1 : Where all pull ups win
			if(i%2 === 0){
				teamarr1[i]+=1;
			}
			//Case 1 : Where all pull ups lose
			else{
				teamarr2[i]+=1;
			}
		}
		teamarr1.sort();
		teamarr2.sort();
	}
	output(teamarr1, r, p, 'pulluplose');
	output(teamarr2, r, p, 'pullupwin');
}

function BPbhalu(){
	var p = parseInt(document.getElementById('teams').value);
	var q = parseInt(document.getElementById('rounds').value);
	var r = parseInt(document.getElementById('break').value);
	var teamarr1=[];
	var teamarr2=[];
	for(var i=0; i<p; i++)
	{
		teamarr1.push(0);
		teamarr2.push(0);
	}

	
	for(var j=0; j<q; j++)
	{
		for(var i=0; i<p; i++){
			//Case 1 : Where all pull ups win
			if(i%4 === 0){
				teamarr1[i]+=3;
				teamarr1[i+1]+=2;
				teamarr1[i+2]+=1;				
			}
			//Case 1 : Where all pull ups lose
		    if(i%4 === 0){
				teamarr2[i+1]+=1;
				teamarr2[i+2]+=2;
				teamarr2[i+3]+=3;

			}
		}
		console.log(teamarr1, teamarr2);
		teamarr1.sort();
		teamarr2.sort();

		console.log(teamarr1, teamarr2);
	}
	output(teamarr1, r, p, 'pulluplose');
	output(teamarr2, r, p, 'pullupwin');
}


function output(teamarr, r, p, id_op){
	var breakTeams = teamarr.slice(-r);
	var breakMin = breakTeams[0];
	var breakMax = breakTeams[r-1];
	var breakCount={};
	var totalCount={};
	for(var i=breakMin;i<=breakMax;i++){
		breakCount[i] = 0;
		totalCount[i]=0;
	}
	for (var i=0; i<breakTeams.length; i++){
		breakCount[breakTeams[i]]++;
	}
	for (var i=0; i<p; i++){
		if (teamarr[i]>=breakMin){
			totalCount[teamarr[i]]++;;
		}
	}

	
	
	var list = document.createElement("ul");
	for (key in breakCount) {
		var elem = document.createElement("li");
		elem.innerHTML= '<b>'+breakCount[key]+'</b>' + ' out of ' + '<b>' + totalCount[key]+'</b>' + ' teams on score ' + '<b>' + key+'</b>'
		list.appendChild(elem);
	}
	document.getElementById(id_op).replaceChild(list,document.getElementById(id_op).childNodes[1]);
}