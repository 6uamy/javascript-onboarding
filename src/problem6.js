const SPLIT_CREW_NAME = [];
const DUPLICATE_CREW_NAME = [];

function problem6(forms) {
  const result = new Set();
  
  forms.forEach(crew => {
    const crewNickName = crew[1];
    for (let j=0; j<crewNickName.length-1; j++) {
      const splitNickName = crewNickName.slice(j, j+2); // 크루의 닉네임을 2개씩 slice
      if (splitCrewName.includes(splitNickName)) {
        duplicateName.push(splitNickName); // 중복된 닉네임을 duplicateName 배열에 저장
      } else if (!splitCrewName.includes(splitCrewName)) {
        splitCrewName.push(splitNickName);
      }
    }  
  });

  forms.forEach(crew => {
    for (let i=0; i<crew[1].length-1; i++) {
      // 크루의 닉네임이 중복된 닉네임일 시 result 객체에 이메일 저장
      if (duplicateName.includes(crew[1].slice(i, i+2))) result.add(crew[0]);
    }
  });

  return [...result].sort(); // 전개 연산자를 사용하여 배열로 변환한 후 오름차 순으로 정렬
}

module.exports = problem6;
