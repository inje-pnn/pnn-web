import React, { useState, useEffect } from 'react';
import { memberApi } from '../shared/api/memberApi';
import { filterMemberAuthority } from '../shared/util/memberUtil';
import { filterMemberGrade } from '../shared/util/memberUtil';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Test2 = () => {
  const [data, setData] = useState(null);
  const api = memberApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getAllMembers();
        console.log('받아온 데이터:', response);
        setData(response);
      } catch (error) {
        console.error('에러:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Container>
  );
};

export default Test2;