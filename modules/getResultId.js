module.exports = (score) => {
  if(score > 7){
    return 4;
  } else if(score > 4){
    return 3;
  } else if(score > 2){
    return 2;
  } else{
    return 1;
  }
}