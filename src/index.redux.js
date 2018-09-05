const ADD_GUN="加机关枪";
const REMOVE_GUN="减机关枪";
const initstate={
    time:0
  
  }
export function count(state=initstate,action){
  
    switch(action.type){
  
     case "加机关枪":
     return {...state,time:state.time+1 }
    
     case "减机关枪":
  
     return {...state,time:state.time-1 }
     
     default: return {...state,time:0}
  
    }  
   }

export function add_gun(){

       return {type:ADD_GUN}
 }

export function remove_gun(){
    
    return {type:REMOVE_GUN}
      
 }