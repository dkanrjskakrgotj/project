function test() {
    var i1 = document.getElementById('id1').value;
    var i2 = document.getElementById('id2').value;
    var p1 = document.getElementById('pw1').value;
    var p2 = document.getElementById('pw2').value;
     
    if( !(i1.length >= 8 && i1.length <= 12) ){
      alert("아이디 8~12글자 이내 입력해주세요");
    }
    else if(i1==i2){
      alert("아이디가 일치합니다");
    }
    else{
      alert("아이디가 일치하지 않습니다");
    }
   
    
    if( !(p1.length >= 6 && p1.length <= 10) ){
      alert("비밀번호 6~10글자 이내 입력해주세요");
    }
    else if(p1==p2){
      alert("비밀번호가 일치합니다");
    }
    else{
      alert("비밀번호가 일치하지 않습니다");
    }
  
  }

function validate(){
 
 var name1 = document.getElementById('nm').value;
 var birth = document.getElementById('birth1').value;
 var num = document.getElementById('num1').value;

 if(!name1){
  alert("이름을 입력해주세요");
 } 
 
 else if(!birth){
  alert("생년월일을 입력해주세요(숫자로 여섯자리)");
 } 
 
 else if(!num){
  alert("휴대전화 번호(010빼고)를 입력해주세요");
 } 

 
 else if(document.getElementById("agree").checked==false){
    alert("약관에 동의해 주세요");
  }
  
  else{
    alert("회원가입을 완료했습니다");
  }


}