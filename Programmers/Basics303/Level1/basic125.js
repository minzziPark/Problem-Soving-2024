// https://school.programmers.co.kr/learn/courses/30/lessons/172928
// 공원 산책
const find_brock = (park, direction_col, from, to, fix) => {
	if(direction_col){ // row 유지, col 변경
			for(let i=Math.min(to, from); i<=Math.max(to, from); i++){
					if(park[i][fix] === 'X'){
							return false;
					}
			}
	}else{
			for(let i=Math.min(to, from); i<=Math.max(to, from); i++){
					if(park[fix][i] === 'X'){
							return false;
					}
			}
	}
	return true;
}

const solution = (park, routes) => {
	const park_col = park.length;
	const park_row = park[0].split('').length;
	let [curr_col, curr_row] = [0, 0];
	
	park = park.map(a => a.split(''));
	routes = routes.map(a => a.split(' '));
	
	for(let i=0; i<park_row; i++){
			for(let j=0; j<park_col; j++){
					if(park[i][j] === 'S') {
							curr_col = i;
							curr_row = j;
							break;
					}
			}    
	}
	
	for(let i=0; i<routes.length; i++){
			let move_cnt = Number(routes[i][1]);
			if(routes[i][0] === 'E'){
					if(curr_row + move_cnt < park_row){
							if(find_brock(park, false, curr_row, curr_row+move_cnt, curr_col)){
									curr_row += move_cnt;
							}   
					}
			}else if(routes[i][0] === 'W'){
					if(curr_row - move_cnt >= 0){
							if(find_brock(park, false, curr_row, curr_row-move_cnt, curr_col)){
									curr_row -= move_cnt;
							}
					}
			}else if(routes[i][0] === 'N'){
					if(curr_col - move_cnt >= 0){
							if(find_brock(park, true, curr_col, curr_col-move_cnt, curr_row)){
									curr_col -= move_cnt;   
							}
					}
			}else{
					if(curr_col + move_cnt < park_col){
							if(find_brock(park, true, curr_col, curr_col+move_cnt, curr_row)){
									curr_col += move_cnt;
							}
					}
			}
	}
	return [curr_col, curr_row];    
}