const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // 모든 도메인에서의 요청을 허용합니다.
app.use(express.json()); // JSON 형식의 요청 본문을 파싱합니다.

// 버튼 클릭 로그를 받을 엔드포인트
app.post('/api/log', (req, res) => {
  const { message } = req.body;
  console.log(`[${new Date().toISOString()}] Frontend Log: ${message || 'Button clicked'}`);
  res.status(200).send('Log received!');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
