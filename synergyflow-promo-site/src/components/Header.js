
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import axios from 'axios';

const Header = () => {
  const handleGetStartedClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/log', {
        message: 'Get Started button clicked!'
      });
      console.log('Backend response:', response.data);
      alert('로그가 백엔드로 전송되었습니다! 백엔드 서버 터미널을 확인해주세요.');
    } catch (error) {
      console.error('Error sending log to backend:', error);
      alert('로그 전송 실패! 백엔드 서버가 실행 중인지 확인해주세요.');
    }
  };

  return (
    <header className="bg-dark text-white text-center py-5">
      <Container>
        <h1 className="display-4">SynergyFlow</h1>
        <p className="lead">AI-Powered Collaboration for Modern Teams</p>
        <Button variant="primary" size="lg" onClick={handleGetStartedClick}>Get Started for Free</Button>
      </Container>
    </header>
  );
}

export default Header;
