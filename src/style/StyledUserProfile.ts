import styled from 'styled-components';

export const Section = styled.section`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 80vh;
  border: 1px solid #fff;
  border-radius: 5px;


 & .imageAndInfoContainer {
  display: flex;
  flex-direction: row;  
  align-items: center;
}

& .imageContainer {
  margin-right: 15px;
}


& .imageContainer img {
    width: 195px;
    height: 198px;
    border-radius: 20px;
    box-shadow: 1px 1px 8px #000;
}

& .userInfo {
  color: #fff;
  display: flex;
  flex-direction: column;  
  font-size: 22px;
  justify-content: space-around;
  height: 200px;
  width: 400px;
}

  @media (max-width: 765px) { 
    border: none;
    width: 300px;

    .imageContainer {
      width: 150px;
      height: 150px;
      border: none;
      box-shadow: 1px 1px 8px #000;
      margin: none;

      & img {
        width: 148px;
        height: 148px;
      }
    }  
    .userInfo {
      width: 100%;
      font-size: 15px;
      justify-content: center;         
    }

    .nameContainer, .emailContainer {
      flex-direction: column;      
      align-items: flex-start;
    }
    .bioContainer {
      text-align: center;
      width: 343px;      
    }
    .imageAndInfoContainer {
      padding: 10px;
      width: 345px;
      border: 1px solid #fff;
    }   
    
  }
`;
